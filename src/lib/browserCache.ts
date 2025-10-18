'use client';

const NAMESPACE = 'traceremove';

type StoredValue<T> = {
  timestamp: number;
  data: T;
};

type BucketPayload<T> = Record<string, StoredValue<T>>;

function bucketKey(bucket: string): string {
  return `${NAMESPACE}:${bucket}`;
}

function loadBucket<T>(bucket: string): BucketPayload<T> {
  if (typeof window === 'undefined' || typeof window.sessionStorage === 'undefined') {
    return {} as BucketPayload<T>;
  }

  try {
    const raw = window.sessionStorage.getItem(bucketKey(bucket));
    if (!raw) {
      return {} as BucketPayload<T>;
    }

    const parsed = JSON.parse(raw) as BucketPayload<T> | null;
    if (!parsed || typeof parsed !== 'object') {
      window.sessionStorage.removeItem(bucketKey(bucket));
      return {} as BucketPayload<T>;
    }

    return parsed;
  } catch {
    window.sessionStorage.removeItem(bucketKey(bucket));
    return {} as BucketPayload<T>;
  }
}

function persistBucket<T>(bucket: string, payload: BucketPayload<T>): void {
  if (typeof window === 'undefined' || typeof window.sessionStorage === 'undefined') {
    return;
  }

  const keys = Object.keys(payload);
  if (keys.length === 0) {
    window.sessionStorage.removeItem(bucketKey(bucket));
    return;
  }

  try {
    window.sessionStorage.setItem(bucketKey(bucket), JSON.stringify(payload));
  } catch {
    // Ignore quota errors—cache will simply be unavailable until cleared by the browser.
  }
}

export function readSessionCache<T>(bucket: string, key: string, maxAgeMs?: number): T | null {
  if (typeof window === 'undefined' || typeof window.sessionStorage === 'undefined') {
    return null;
  }

  const store = loadBucket<T>(bucket);
  const record = store[key];
  if (!record) {
    return null;
  }

  if (typeof maxAgeMs === 'number') {
    const age = Date.now() - record.timestamp;
    if (age > maxAgeMs) {
      delete store[key];
      persistBucket(bucket, store);
      return null;
    }
  }

  return record.data;
}

interface WriteOptions {
  maxEntries?: number;
  maxAgeMs?: number;
}

export function writeSessionCache<T>(bucket: string, key: string, value: T, options: WriteOptions = {}): void {
  if (typeof window === 'undefined' || typeof window.sessionStorage === 'undefined') {
    return;
  }

  const { maxEntries = 20, maxAgeMs } = options;
  const now = Date.now();
  const store = loadBucket<T>(bucket);

  store[key] = {
    data: value,
    timestamp: now,
  };

  const entries = Object.entries(store) as Array<[string, StoredValue<T>]>;
  const filtered = typeof maxAgeMs === 'number'
    ? entries.filter(([, record]) => now - record.timestamp <= maxAgeMs)
    : entries;

  filtered.sort((a, b) => b[1].timestamp - a[1].timestamp);

  const trimmed = filtered.slice(0, Math.max(1, maxEntries));
  const nextStore = trimmed.reduce<BucketPayload<T>>((acc, [entryKey, record]) => {
    acc[entryKey] = record;
    return acc;
  }, {} as BucketPayload<T>);

  persistBucket(bucket, nextStore);
}

export function pruneSessionBucket(bucket: string, maxAgeMs: number, maxEntries = 20): void {
  if (typeof window === 'undefined' || typeof window.sessionStorage === 'undefined') {
    return;
  }

  const now = Date.now();
  const store = loadBucket<unknown>(bucket);
  const entries = Object.entries(store).filter(([, record]) => now - (record as StoredValue<unknown>).timestamp <= maxAgeMs);
  entries.sort((a, b) => (b[1] as StoredValue<unknown>).timestamp - (a[1] as StoredValue<unknown>).timestamp);
  const trimmed = entries.slice(0, Math.max(1, maxEntries));
  const nextStore = trimmed.reduce<BucketPayload<unknown>>((acc, [entryKey, record]) => {
    acc[entryKey] = record as StoredValue<unknown>;
    return acc;
  }, {} as BucketPayload<unknown>);

  persistBucket(bucket, nextStore);
}

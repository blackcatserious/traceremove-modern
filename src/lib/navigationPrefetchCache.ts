'use client';

import { pruneSessionBucket, readSessionCache, writeSessionCache } from '@/lib/browserCache';

const BUCKET = 'navigation-prefetch';
const TTL_MS = 1000 * 60 * 30; // 30 minutes
const MAX_ENTRIES = 160;

export function hasPrefetchedRoute(href: string): boolean {
  if (!href) {
    return false;
  }

  return Boolean(readSessionCache<boolean>(BUCKET, href, TTL_MS));
}

export function markRoutePrefetched(href: string): void {
  if (!href) {
    return;
  }

  writeSessionCache<boolean>(BUCKET, href, true, {
    maxEntries: MAX_ENTRIES,
    maxAgeMs: TTL_MS,
  });
}

export function prunePrefetchedRoutes(): void {
  pruneSessionBucket(BUCKET, TTL_MS, MAX_ENTRIES);
}

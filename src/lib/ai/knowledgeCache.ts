'use client';

import { readSessionCache, writeSessionCache, pruneSessionBucket } from '@/lib/browserCache';
import type { KnowledgeBaseApiResponse, KnowledgeSnapshot } from './knowledgeTypes';

const BUCKET = 'knowledge-base';
const TTL_MS = 1000 * 60 * 30; // 30 minutes
const MAX_ENTRIES = 40;

const normalise = (value: string | null | undefined, fallback: string): string => {
  if (!value) return fallback;
  const trimmed = value.trim().toLowerCase();
  return trimmed.length ? trimmed : fallback;
};

const cacheKeyFor = (query: string, category: string | null): string => {
  const safeQuery = normalise(query, '*');
  const safeCategory = normalise(category, 'all').replace(/\s+/g, '-');
  return `${safeCategory}::${safeQuery}`;
};

export const snapshotFromApiResponse = (response: KnowledgeBaseApiResponse): KnowledgeSnapshot => ({
  entries: response.entries,
  total: response.total,
  returned: response.returned,
  categoryCounts: response.categories,
  resultCounts: response.resultCategories,
  categories: Object.keys(response.categories).sort(),
  dataSource: 'api',
  error: null,
});

export const readKnowledgeSnapshot = (query: string, category: string | null): KnowledgeSnapshot | null => {
  return readSessionCache<KnowledgeSnapshot>(BUCKET, cacheKeyFor(query, category), TTL_MS);
};

export const writeKnowledgeSnapshot = (
  query: string,
  category: string | null,
  snapshot: KnowledgeSnapshot,
): void => {
  writeSessionCache<KnowledgeSnapshot>(BUCKET, cacheKeyFor(query, category), snapshot, {
    maxEntries: MAX_ENTRIES,
    maxAgeMs: TTL_MS,
  });
};

export const pruneKnowledgeSnapshots = (): void => {
  pruneSessionBucket(BUCKET, TTL_MS, MAX_ENTRIES);
};

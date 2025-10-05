import { NextResponse } from 'next/server';

import { KNOWLEDGE_ENTRIES, searchKnowledgeEntries } from '@/lib/ai/knowledgeBase';

export const dynamic = 'force-dynamic';

const CATEGORY_COUNTS: Record<string, number> = KNOWLEDGE_ENTRIES.reduce((acc, entry) => {
  acc[entry.category] = (acc[entry.category] ?? 0) + 1;
  return acc;
}, {} as Record<string, number>);

function normaliseLimit(limitParam: string | null): number | null {
  if (!limitParam) return null;
  const parsed = Number.parseInt(limitParam, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

function normaliseCategory(categoryParam: string | null): string | null {
  if (!categoryParam) return null;
  const trimmed = categoryParam.trim();
  if (!trimmed || trimmed.toLowerCase() === 'all') {
    return null;
  }
  return trimmed;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q')?.trim() ?? '';
  const limit = normaliseLimit(url.searchParams.get('limit'));
  const category = normaliseCategory(url.searchParams.get('category'));

  const matches = query
    ? searchKnowledgeEntries(query, {
        limit: Number.POSITIVE_INFINITY,
        fallbackToAll: false,
      })
    : KNOWLEDGE_ENTRIES.slice();

  const queryCategoryCounts = matches.reduce<Record<string, number>>((acc, entry) => {
    acc[entry.category] = (acc[entry.category] ?? 0) + 1;
    return acc;
  }, {});

  const filtered = category ? matches.filter((entry) => entry.category === category) : matches;
  const entries = typeof limit === 'number' ? filtered.slice(0, limit) : filtered;

  return NextResponse.json(
    {
      query,
      category,
      total: matches.length,
      returned: entries.length,
      categories: CATEGORY_COUNTS,
      resultCategories: queryCategoryCounts,
      entries: entries.map((entry) => ({
        id: entry.id,
        title: entry.title,
        summary: entry.summary,
        category: entry.category,
        keywords: entry.keywords,
        metrics: entry.metrics,
        toolchain: entry.toolchain,
        playbooks: entry.playbooks,
        followUps: entry.followUps,
        quickPrompts: entry.quickPrompts,
        cta: entry.cta,
        accent: entry.accent,
      })),
    },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=600',
      },
    },
  );
}

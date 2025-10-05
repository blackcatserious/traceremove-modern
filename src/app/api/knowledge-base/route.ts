import { NextResponse } from 'next/server';

import { KNOWLEDGE_ENTRIES, searchKnowledgeEntries } from '@/lib/ai/knowledgeBase';

export const dynamic = 'force-dynamic';

function normaliseLimit(limitParam: string | null): number | null {
  if (!limitParam) return null;
  const parsed = Number.parseInt(limitParam, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q')?.trim() ?? '';
  const limit = normaliseLimit(url.searchParams.get('limit'));

  const matches = query
    ? searchKnowledgeEntries(query, {
        limit: Number.POSITIVE_INFINITY,
        fallbackToAll: false,
      })
    : KNOWLEDGE_ENTRIES.slice();

  const entries = typeof limit === 'number' ? matches.slice(0, limit) : matches;

  return NextResponse.json({
    query,
    total: matches.length,
    returned: entries.length,
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
  });
}

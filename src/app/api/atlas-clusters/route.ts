import { NextRequest, NextResponse } from 'next/server';

import { getAtlasClustersSlice } from '@/lib/server/atlasClusters';

export const runtime = 'edge';

const DEFAULT_LIMIT = 3;
const MAX_LIMIT = 6;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const start = Number.parseInt(searchParams.get('start') ?? '0', 10);
  const limitParam = Number.parseInt(searchParams.get('limit') ?? String(DEFAULT_LIMIT), 10);
  const limit = Number.isFinite(limitParam) ? Math.max(1, Math.min(MAX_LIMIT, limitParam)) : DEFAULT_LIMIT;

  const { clusters, totalClusters } = getAtlasClustersSlice(start, limit);

  return new NextResponse(
    JSON.stringify({
      clusters,
      totalClusters,
      start: Number.isFinite(start) ? Math.max(0, start) : 0,
      limit,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, max-age=300, stale-while-revalidate=86400',
      },
    },
  );
}

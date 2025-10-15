'use client';

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { usePerformanceProfile } from '@/components/PerformanceProfileProvider';
import type { AtlasCluster } from '@/lib/atlasClustersShared';

interface ProgressiveAtlasClustersProps {
  initialClusters: AtlasCluster[];
  totalClusters: number;
}

const BATCH_SIZE = 3;

function ProgressiveAtlasClustersComponent({
  initialClusters,
  totalClusters,
}: ProgressiveAtlasClustersProps) {
  const { constrainedConnection, deferHeavyWork } = usePerformanceProfile();
  const batchSize = useMemo(
    () => (deferHeavyWork ? 1 : constrainedConnection ? 2 : BATCH_SIZE),
    [constrainedConnection, deferHeavyWork],
  );

  const [clusters, setClusters] = useState<AtlasCluster[]>(() => initialClusters);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadingRef = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(initialClusters.length);

  const hasMore = clusters.length < totalClusters;
  const rootMargin = useMemo(
    () => (batchSize === 1 ? '320px 0px' : batchSize === 2 ? '400px 0px' : '480px 0px'),
    [batchSize],
  );
  const prefetchLinks = !deferHeavyWork;

  useEffect(() => {
    setClusters(initialClusters);
    offsetRef.current = initialClusters.length;
    setError(null);
  }, [initialClusters, totalClusters]);

  useEffect(() => () => {
    abortControllerRef.current?.abort();
  }, []);

  const loadMore = useCallback(async () => {
    if (!hasMore || loadingRef.current) {
      return;
    }

    const remaining = totalClusters - offsetRef.current;
    if (remaining <= 0) {
      return;
    }

    const limit = Math.min(batchSize, remaining);
    if (limit <= 0) {
      return;
    }

    loadingRef.current = true;
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    abortControllerRef.current?.abort();
    abortControllerRef.current = controller;

    try {
      const params = new URLSearchParams({
        start: String(offsetRef.current),
        limit: String(limit),
      });

      const response = await fetch(`/api/atlas-clusters?${params.toString()}`, {
        signal: controller.signal,
        cache: 'force-cache',
        credentials: 'omit',
      });

      if (!response.ok) {
        throw new Error(`Failed to load clusters: ${response.status}`);
      }

      const payload = (await response.json()) as { clusters?: AtlasCluster[] };
      const nextClusters = payload.clusters ?? [];

      if (nextClusters.length > 0) {
        offsetRef.current += nextClusters.length;
        setClusters((previous) => [...previous, ...nextClusters]);
        setError(null);
      } else {
        offsetRef.current = totalClusters;
      }
    } catch (cause) {
      if (!controller.signal.aborted) {
        console.error('Unable to load additional atlas clusters', cause);
        setError("We’re having trouble loading more atlas clusters. Try again in a moment.");
      }
    } finally {
      if (!controller.signal.aborted) {
        loadingRef.current = false;
        setLoading(false);
      }
    }
  }, [batchSize, hasMore, totalClusters]);

  useEffect(() => {
    if (!sentinelRef.current || !hasMore || deferHeavyWork) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      if (!loadingRef.current) {
        void loadMore();
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          void loadMore();
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0,
      },
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [deferHeavyWork, hasMore, loadMore, rootMargin]);

  useEffect(() => {
    if (typeof IntersectionObserver !== 'undefined' || !hasMore || deferHeavyWork || loadingRef.current) {
      return;
    }

    void loadMore();
  }, [deferHeavyWork, hasMore, loadMore]);

  return (
    <div className="mt-16 space-y-24">
      {clusters.map((cluster) => (
        <section key={cluster.id} className="space-y-8 content-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">{cluster.id}</h2>
              <p className="mt-2 max-w-2xl text-sm text-white/70 leading-relaxed">
                Strategic experiences and programs designed for {cluster.personaLabel} and allied teams.
              </p>
            </div>
            <Link
              href="#atlas-navigation"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
            >
              Cluster Index
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cluster.items.map((item) => (
              <Link
                key={item.slug}
                href={`/atlas/${item.slug}`}
                prefetch={prefetchLinks}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-accent-ai-purple/40 hover:shadow-2xl hover:shadow-accent-ai-purple/20 content-auto-card"
              >
                <div
                  className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 10% 10%, rgba(124, 58, 237, 0.25), transparent 45%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.2), transparent 55%)',
                  }}
                />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{item.heroEyebrow}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-accent-ai-purple">{item.focusArea}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.summary}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/60">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.contextLabel}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.timeHorizon}</span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-ai-purple">
                    View Blueprint
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {error ? (
        <p className="text-center text-sm text-white/60">{error}</p>
      ) : null}

      {hasMore ? (
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => void loadMore()}
            disabled={loading || deferHeavyWork}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-accent-ai-purple/50 hover:bg-accent-ai-purple/20 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5"
          >
            {loading ? 'Loading Clusters…' : 'Load More Clusters'}
          </button>
        </div>
      ) : null}

      <div ref={sentinelRef} aria-hidden className="h-px w-full" />
    </div>
  );
}

const ProgressiveAtlasClusters = memo(ProgressiveAtlasClustersComponent);
ProgressiveAtlasClusters.displayName = 'ProgressiveAtlasClusters';

export default ProgressiveAtlasClusters;

'use client';

import { memo, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { usePerformanceProfile } from '@/components/PerformanceProfileProvider';

export interface AtlasClusterCard {
  slug: string;
  heroEyebrow: string;
  focusArea: string;
  summary: string;
  contextLabel: string;
  timeHorizon: string;
}

interface ClusterPayload {
  id: string;
  personaLabel: string;
  items: AtlasClusterCard[];
}

export type ProgressiveAtlasCluster = ClusterPayload;

const BATCH_SIZE = 3;

function ProgressiveAtlasClustersComponent({ clusters }: { clusters: ClusterPayload[] }) {
  const { constrainedConnection, deferHeavyWork } = usePerformanceProfile();
  const batchSize = deferHeavyWork ? 1 : constrainedConnection ? 2 : BATCH_SIZE;
  const [renderCount, setRenderCount] = useState(() => Math.min(batchSize, clusters.length));
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rootMargin = useMemo(
    () => (batchSize === 1 ? '320px 0px' : batchSize === 2 ? '400px 0px' : '480px 0px'),
    [batchSize],
  );

  useEffect(() => {
    setRenderCount((current) => {
      const minimum = Math.min(batchSize, clusters.length);
      return current < minimum ? minimum : current;
    });
  }, [batchSize, clusters.length]);

  useEffect(() => {
    if (!sentinelRef.current) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setRenderCount(clusters.length);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        setRenderCount((previous) => {
          if (previous >= clusters.length) {
            return previous;
          }

          return Math.min(previous + batchSize, clusters.length);
        });
      }
    }, {
      root: null,
      rootMargin,
      threshold: 0,
    });

    observer.observe(sentinelRef.current);
    observerRef.current = observer;

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [batchSize, clusters.length, rootMargin]);

  useEffect(() => {
    if (renderCount >= clusters.length && observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, [clusters.length, renderCount]);

  const visibleClusters = useMemo(() => clusters.slice(0, renderCount), [clusters, renderCount]);
  const prefetchLinks = !deferHeavyWork;

  return (
    <div className="mt-16 space-y-24">
      {visibleClusters.map((cluster) => (
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
      <div ref={sentinelRef} aria-hidden className="h-px w-full" />
    </div>
  );
}

const ProgressiveAtlasClusters = memo(ProgressiveAtlasClustersComponent);
ProgressiveAtlasClusters.displayName = 'ProgressiveAtlasClusters';

export default ProgressiveAtlasClusters;

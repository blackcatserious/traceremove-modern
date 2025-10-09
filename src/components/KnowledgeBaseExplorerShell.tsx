'use client';

import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react';

import type { KnowledgeBaseExplorerProps } from './KnowledgeBaseExplorer';

import { scheduleIdlePreload } from '@/lib/idlePreload';

let knowledgeExplorerPromise: Promise<typeof import('./KnowledgeBaseExplorer')> | null = null;

function preloadKnowledgeExplorer() {
  if (!knowledgeExplorerPromise) {
    knowledgeExplorerPromise = import('./KnowledgeBaseExplorer');
  }

  return knowledgeExplorerPromise;
}

const KnowledgeBaseExplorerLazy = lazy(() => preloadKnowledgeExplorer());

function KnowledgeBaseExplorerFallback({
  className = '',
  onIntent,
}: {
  className?: string;
  onIntent?: () => void;
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl ${className}`}
      onPointerEnter={onIntent}
      onFocusCapture={onIntent}
      onTouchStart={onIntent}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(217,70,239,0.14),transparent_55%),linear-gradient(145deg,rgba(15,23,42,0.95)_0%,rgba(12,21,38,0.92)_50%,rgba(15,23,42,0.98)_100%)]" />
      <div className="relative z-10 space-y-6 animate-pulse">
        <div className="space-y-3">
          <div className="h-3 w-32 rounded-full bg-white/10" aria-hidden="true" />
          <div className="h-6 w-3/4 rounded-md bg-white/10" aria-hidden="true" />
          <div className="h-4 w-full rounded-md bg-white/5" aria-hidden="true" />
        </div>
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-9 w-32 rounded-full border border-white/10 bg-white/5" aria-hidden="true" />
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5" aria-hidden="true">
              <div className="h-4 w-1/2 rounded-md bg-white/10" />
              <div className="h-3 w-full rounded-md bg-white/5" />
              <div className="h-3 w-3/4 rounded-md bg-white/5" />
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-white/10" />
                <div className="h-3 w-24 rounded-md bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function KnowledgeBaseExplorerShell(props: KnowledgeBaseExplorerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const cancel = scheduleIdlePreload(() => {
      void preloadKnowledgeExplorer();
    }, { timeout: 1000 });

    return cancel;
  }, [isClient]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let triggered = false;

    const detach = () => {
      window.removeEventListener('pointerdown', handlePointer);
      window.removeEventListener('touchstart', handlePointer);
      window.removeEventListener('keydown', handleKeydown, true);
    };

    const trigger = () => {
      if (triggered) {
        return;
      }
      triggered = true;
      void preloadKnowledgeExplorer();
      detach();
    };

    function handlePointer() {
      trigger();
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.defaultPrevented) {
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        trigger();
      }
    }

    window.addEventListener('pointerdown', handlePointer, { passive: true });
    window.addEventListener('touchstart', handlePointer, { passive: true });
    window.addEventListener('keydown', handleKeydown, true);

    return detach;
  }, []);

  const handleIntent = useCallback(() => {
    void preloadKnowledgeExplorer();
  }, []);

  const fallback = useMemo(
    () => <KnowledgeBaseExplorerFallback className={props.className} onIntent={handleIntent} />,
    [handleIntent, props.className],
  );

  if (!isClient) {
    return fallback;
  }

  return (
    <Suspense fallback={fallback}>
      <KnowledgeBaseExplorerLazy {...props} />
    </Suspense>
  );
}

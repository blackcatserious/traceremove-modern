'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import {
  readKnowledgeSnapshot,
  snapshotFromApiResponse,
  pruneKnowledgeSnapshots,
  writeKnowledgeSnapshot,
} from '@/lib/ai/knowledgeCache';
import type { KnowledgeBaseApiResponse } from '@/lib/ai/knowledgeTypes';
import { runWhenDocumentVisible, shouldDeferHeavyWork } from '@/lib/browserEnvironment';
import {
  hasPrefetchedRoute,
  markRoutePrefetched,
  prunePrefetchedRoutes,
} from '@/lib/navigationPrefetchCache';

const WARM_ROUTES = [
  '/research',
  '/projects',
  '/atlas',
  '/tools',
  '/articles',
  '/assistant',
  '/whitepapers',
  '/contact',
];

type WarmRequest = {
  url: string;
  query: string;
  category: string | null;
};

const WARM_REQUESTS: WarmRequest[] = [
  { url: '/api/knowledge-base?limit=18', query: '', category: null },
  {
    url: '/api/knowledge-base?limit=12&category=Metrics%20%26%20Observability',
    query: '',
    category: 'Metrics & Observability',
  },
  {
    url: '/api/knowledge-base?limit=12&category=Tools%20%26%20Automation',
    query: '',
    category: 'Tools & Automation',
  },
  {
    url: '/api/knowledge-base?limit=12&category=Assistant%20Operations',
    query: '',
    category: 'Assistant Operations',
  },
];

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function PerformanceWarmup() {
  const router = useRouter();
  const pathname = usePathname();
  const abortControllersRef = useRef<AbortController[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    pruneKnowledgeSnapshots();
    prunePrefetchedRoutes();

    return runWhenDocumentVisible(() => {
      let cancelled = false;

      if (shouldDeferHeavyWork()) {
        return;
      }

      const withIdle = window as IdleWindow;
      const routeQueue = WARM_ROUTES.filter((href) => href !== pathname && !hasPrefetchedRoute(href));
      const requestQueue = WARM_REQUESTS.filter((request) => {
        const cached = readKnowledgeSnapshot(request.query, request.category);
        return !cached;
      });

      if (!routeQueue.length && !requestQueue.length) {
        return;
      }

      let idleHandle: number | null = null;
      let timeoutHandle: number | null = null;

      const flush = (deadline?: IdleDeadline) => {
        if (cancelled) {
          return;
        }

        const hasBudget = () => {
          if (!deadline) return true;
          return deadline.timeRemaining() > 6 || deadline.didTimeout;
        };

        while (routeQueue.length && hasBudget()) {
          if (cancelled) {
            break;
          }
          const href = routeQueue.shift();
          if (!href) continue;
          if (shouldDeferHeavyWork()) {
            continue;
          }
          try {
            const maybePromise = router.prefetch(href);
            void Promise.resolve(maybePromise)
              .then(() => {
                markRoutePrefetched(href);
              })
              .catch(() => {
                // Ignore failed prefetches; they can retry on demand.
              });
          } catch {
            // Ignore prefetch failures (e.g. unsupported in development).
          }
        }

        if (requestQueue.length && hasBudget()) {
          const request = requestQueue.shift();
          if (request) {
            const controller = new AbortController();
            abortControllersRef.current.push(controller);
            fetch(request.url, { cache: 'force-cache', credentials: 'omit', signal: controller.signal })
              .then(async (response) => {
                if (!response.ok) {
                  return;
                }

                const data = (await response.json()) as KnowledgeBaseApiResponse;
                if (!cancelled && !controller.signal.aborted) {
                  writeKnowledgeSnapshot(request.query, request.category, snapshotFromApiResponse(data));
                }
              })
              .catch(() => {
                // Ignore warmup failures; runtime requests will retry on demand.
              })
              .finally(() => {
                abortControllersRef.current = abortControllersRef.current.filter((instance) => instance !== controller);
              });
          }
        }

        if (routeQueue.length || requestQueue.length) {
          schedule();
        }
      };

      function schedule() {
        if (cancelled) {
          return;
        }
        if (withIdle.requestIdleCallback) {
          idleHandle = withIdle.requestIdleCallback((deadline) => {
            idleHandle = null;
            flush(deadline);
          }, { timeout: 2000 });
        } else {
          timeoutHandle = window.setTimeout(() => {
            timeoutHandle = null;
            flush();
          }, 260);
        }
      }

      schedule();

      return () => {
        cancelled = true;
        if (idleHandle !== null && typeof withIdle.cancelIdleCallback === 'function') {
          withIdle.cancelIdleCallback(idleHandle);
        }
        if (timeoutHandle !== null) {
          window.clearTimeout(timeoutHandle);
        }
        abortControllersRef.current.forEach((controller) => {
          controller.abort();
        });
        abortControllersRef.current = [];
      };
    });
  }, [pathname, router]);

  return null;
}

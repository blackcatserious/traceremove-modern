'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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

const WARM_REQUESTS = [
  '/api/knowledge-base?limit=18',
  '/api/knowledge-base?limit=12&category=metrics',
  '/api/knowledge-base?limit=12&category=tooling',
];

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

export default function PerformanceWarmup() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const connection = (navigator as NavigatorWithConnection | undefined)?.connection;
    if (connection?.saveData || connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g') {
      return;
    }

    const withIdle = window as IdleWindow;
    const routeQueue = WARM_ROUTES.filter((href) => href !== pathname);
    const requestQueue = [...WARM_REQUESTS];

    if (!routeQueue.length && !requestQueue.length) {
      return;
    }

    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    const flush = (deadline?: IdleDeadline) => {
      const hasBudget = () => {
        if (!deadline) return true;
        return deadline.timeRemaining() > 6 || deadline.didTimeout;
      };

      while (routeQueue.length && hasBudget()) {
        const href = routeQueue.shift();
        if (!href) continue;
        try {
          router.prefetch(href);
        } catch {
          // Ignore prefetch failures (e.g. unsupported in development).
        }
      }

      if (requestQueue.length && hasBudget()) {
        const endpoint = requestQueue.shift();
        if (endpoint) {
          fetch(endpoint, { cache: 'force-cache', credentials: 'omit' }).catch(() => {
            // Ignore warmup failures; runtime requests will retry on demand.
          });
        }
      }

      if (routeQueue.length || requestQueue.length) {
        schedule();
      }
    };

    function schedule() {
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
      if (idleHandle !== null && typeof withIdle.cancelIdleCallback === 'function') {
        withIdle.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, [pathname, router]);

  return null;
}

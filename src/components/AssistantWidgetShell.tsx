'use client';

import { Suspense, lazy, useEffect, useState, type ReactNode } from 'react';

const AskTraceremoveAIWidget = lazy(() => import('./AskTraceremoveAI'));

function AssistantPanelFallback({ compact, className }: { compact: boolean; className?: string }) {
  if (compact) {
    return null;
  }

  const combinedClassName = className ? `space-y-4 animate-pulse ${className}` : 'space-y-4 animate-pulse';

  return (
    <div className={combinedClassName}>
      <div className="h-4 w-40 rounded-full bg-white/10" aria-hidden="true" />
      <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="h-3 w-full rounded-md bg-white/10" aria-hidden="true" />
        <div className="h-3 w-5/6 rounded-md bg-white/5" aria-hidden="true" />
        <div className="h-3 w-2/3 rounded-md bg-white/5" aria-hidden="true" />
      </div>
      <div className="flex gap-3">
        <div className="h-12 flex-1 rounded-xl bg-white/5" aria-hidden="true" />
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent-ai-purple/50 to-accent-lab-purple/50" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function AssistantWidgetShell({
  compact = true,
  fallback,
  fallbackClassName,
}: {
  compact?: boolean;
  fallback?: ReactNode;
  fallbackClassName?: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const resolvedFallback = fallback ?? (
    <AssistantPanelFallback compact={compact} className={fallbackClassName} />
  );

  if (!isClient) {
    return resolvedFallback;
  }

  return (
    <Suspense fallback={resolvedFallback}>
      <AskTraceremoveAIWidget compact={compact} />
    </Suspense>
  );
}

export { AssistantPanelFallback };

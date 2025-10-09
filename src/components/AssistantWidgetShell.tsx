'use client';

import { Suspense, lazy, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';

import { scheduleIdlePreload } from '@/lib/idlePreload';

let assistantModulePromise: Promise<typeof import('./AskTraceremoveAI')> | null = null;

function preloadAssistantWidget() {
  if (!assistantModulePromise) {
    assistantModulePromise = import('./AskTraceremoveAI');
  }

  return assistantModulePromise;
}

const AskTraceremoveAIWidget = lazy(() => preloadAssistantWidget());

function AssistantPanelFallback({
  compact,
  className,
  onIntent,
}: {
  compact: boolean;
  className?: string;
  onIntent?: () => void;
}) {
  if (compact) {
    return null;
  }

  const combinedClassName = className ? `space-y-4 animate-pulse ${className}` : 'space-y-4 animate-pulse';

  return (
    <div
      className={combinedClassName}
      onPointerEnter={onIntent}
      onFocusCapture={onIntent}
      onTouchStart={onIntent}
    >
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
    if (!isClient) {
      return;
    }

    const cancel = scheduleIdlePreload(() => {
      void preloadAssistantWidget();
    }, { timeout: 900 });

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
      void preloadAssistantWidget();
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleIntent = useCallback(() => {
    void preloadAssistantWidget();
  }, []);

  const resolvedFallback = useMemo(
    () =>
      fallback ?? (
        <AssistantPanelFallback
          compact={compact}
          className={fallbackClassName}
          onIntent={handleIntent}
        />
      ),
    [compact, fallback, fallbackClassName, handleIntent],
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

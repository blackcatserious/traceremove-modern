import { runWhenDocumentVisible, shouldDeferHeavyWork } from './browserEnvironment';

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

type Cleanup = () => void;

const NOOP: Cleanup = () => {};

export interface IdlePreloadOptions {
  /**
   * Maximum time (in milliseconds) to wait before forcing the preload task to run.
   * Defaults to 1200ms when not provided.
   */
  timeout?: number;
}

export function scheduleIdlePreload(task: () => void | Promise<unknown>, options: IdlePreloadOptions = {}): Cleanup {
  if (typeof window === 'undefined') {
    return NOOP;
  }

  if (shouldDeferHeavyWork()) {
    return NOOP;
  }

  const withIdle = window as IdleWindow;
  const timeout = typeof options.timeout === 'number' ? options.timeout : 1200;
  let idleHandle: number | null = null;
  let timeoutHandle: number | null = null;
  let cancelled = false;

  const clearTimers = () => {
    if (idleHandle !== null && typeof withIdle.cancelIdleCallback === 'function') {
      withIdle.cancelIdleCallback(idleHandle);
      idleHandle = null;
    }

    if (timeoutHandle !== null) {
      window.clearTimeout(timeoutHandle);
      timeoutHandle = null;
    }
  };

  const runTask = () => {
    if (cancelled) {
      return;
    }

    clearTimers();
    try {
      task();
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Idle preload task failed', error);
      }
    }
  };

  const schedule = () => {
    if (cancelled) {
      return;
    }

    if (typeof withIdle.requestIdleCallback === 'function') {
      idleHandle = withIdle.requestIdleCallback(
        () => {
          runTask();
        },
        { timeout },
      );
    } else {
      timeoutHandle = window.setTimeout(runTask, Math.min(timeout, 600));
    }
  };

  const cancelVisibility = runWhenDocumentVisible(() => {
    schedule();
    return clearTimers;
  });

  return () => {
    cancelled = true;
    clearTimers();
    cancelVisibility();
  };
}

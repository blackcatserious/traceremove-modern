'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import {
  isConstrainedConnection,
  isLowPowerDevice,
  isSlowConnection,
  prefersReducedData,
  readConnection,
  shouldDeferHeavyWork,
} from '@/lib/browserEnvironment';

export type PerformanceProfile = {
  reducedMotion: boolean;
  reducedData: boolean;
  slowConnection: boolean;
  constrainedConnection: boolean;
  lowPowerDevice: boolean;
  deferHeavyWork: boolean;
};

const defaultProfile: PerformanceProfile = {
  reducedMotion: false,
  reducedData: false,
  slowConnection: false,
  constrainedConnection: false,
  lowPowerDevice: false,
  deferHeavyWork: true,
};

const PerformanceProfileContext = createContext<PerformanceProfile>(defaultProfile);

function matchesMedia(query: string): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  try {
    return window.matchMedia(query).matches;
  } catch {
    return false;
  }
}

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

function computeProfile(): PerformanceProfile {
  if (typeof window === 'undefined') {
    return defaultProfile;
  }

  const reducedMotion = matchesMedia('(prefers-reduced-motion: reduce)');
  const reducedData = prefersReducedData();
  const slowConnection = isSlowConnection();
  const constrainedConnection = isConstrainedConnection();
  const lowPowerDevice = isLowPowerDevice();
  const deferHeavyWork = shouldDeferHeavyWork();

  return {
    reducedMotion,
    reducedData,
    slowConnection,
    constrainedConnection,
    lowPowerDevice,
    deferHeavyWork,
  };
}

export default function PerformanceProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<PerformanceProfile>(() => {
    const computed = computeProfile();
    return { ...computed, deferHeavyWork: true };
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const withIdle = window as IdleWindow;
    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    const cancelScheduledEvaluation = () => {
      if (idleHandle !== null && typeof withIdle.cancelIdleCallback === 'function') {
        withIdle.cancelIdleCallback(idleHandle);
        idleHandle = null;
      }

      if (timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
        timeoutHandle = null;
      }
    };

    const evaluate = () => {
      cancelScheduledEvaluation();

      const nextProfile = computeProfile();

      setProfile((current) => {
        if (
          current.reducedMotion === nextProfile.reducedMotion &&
          current.reducedData === nextProfile.reducedData &&
          current.slowConnection === nextProfile.slowConnection &&
          current.constrainedConnection === nextProfile.constrainedConnection &&
          current.lowPowerDevice === nextProfile.lowPowerDevice &&
          current.deferHeavyWork === nextProfile.deferHeavyWork
        ) {
          return current;
        }

        return nextProfile;
      });
    };

    const scheduleEvaluation = () => {
      if (idleHandle !== null || timeoutHandle !== null) {
        return;
      }

      const run = () => {
        idleHandle = null;
        timeoutHandle = null;
        evaluate();
      };

      if (typeof withIdle.requestIdleCallback === 'function') {
        idleHandle = withIdle.requestIdleCallback(run, { timeout: 1600 });
      } else {
        timeoutHandle = window.setTimeout(run, 600);
      }
    };

    const handleChange = () => {
      setProfile((current) => (current.deferHeavyWork ? current : { ...current, deferHeavyWork: true }));
      scheduleEvaluation();
    };

    scheduleEvaluation();

    const disconnectMotion = attachMediaQueryListener('(prefers-reduced-motion: reduce)', handleChange);
    const disconnectData = attachMediaQueryListener('(prefers-reduced-data: reduce)', handleChange);
    const disconnectPointer = attachMediaQueryListener('(pointer: coarse)', handleChange);
    const disconnectConnection = attachConnectionListener(handleChange);

    return () => {
      cancelScheduledEvaluation();
      disconnectMotion?.();
      disconnectData?.();
      disconnectPointer?.();
      disconnectConnection?.();
    };
  }, []);

  const value = useMemo(() => profile, [profile]);

  return (
    <PerformanceProfileContext.Provider value={value}>
      {children}
    </PerformanceProfileContext.Provider>
  );
}

function attachMediaQueryListener(query: string, onChange: () => void) {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return undefined;
  }

  const mediaQueryList = window.matchMedia(query);

  const handleChange = () => {
    onChange();
  };

  if (typeof mediaQueryList.addEventListener === 'function') {
    mediaQueryList.addEventListener('change', handleChange);
  } else if (typeof mediaQueryList.addListener === 'function') {
    mediaQueryList.addListener(handleChange);
  }

  return () => {
    if (typeof mediaQueryList.removeEventListener === 'function') {
      mediaQueryList.removeEventListener('change', handleChange);
    } else if (typeof mediaQueryList.removeListener === 'function') {
      mediaQueryList.removeListener(handleChange);
    }
  };
}

function attachConnectionListener(onChange: () => void) {
  const connection = readConnection();
  if (!connection) {
    return undefined;
  }

  const handleChange = () => {
    onChange();
  };

  if (typeof connection.addEventListener === 'function') {
    connection.addEventListener('change', handleChange);
    return () => {
      if (typeof connection.removeEventListener === 'function') {
        connection.removeEventListener('change', handleChange);
      }
    };
  }

  if (typeof connection.addListener === 'function') {
    connection.addListener(handleChange);
    return () => {
      if (typeof connection.removeListener === 'function') {
        connection.removeListener(handleChange);
      }
    };
  }

  if (typeof connection.onchange === 'function' || connection.onchange === undefined) {
    const previous = connection.onchange ?? null;
    connection.onchange = handleChange;
    return () => {
      if (connection.onchange === handleChange) {
        connection.onchange = previous ?? undefined;
      }
    };
  }

  return undefined;
}

export function usePerformanceProfile(): PerformanceProfile {
  return useContext(PerformanceProfileContext);
}

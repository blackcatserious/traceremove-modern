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
  deferHeavyWork: false,
};

const PerformanceProfileContext = createContext<PerformanceProfile>(defaultProfile);

export default function PerformanceProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<PerformanceProfile>(defaultProfile);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const evaluate = () => {
      const reducedMotion = typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
      const reducedData = prefersReducedData();
      const slowConnection = isSlowConnection();
      const constrainedConnection = isConstrainedConnection();
      const lowPowerDevice = isLowPowerDevice();
      const deferHeavyWork = shouldDeferHeavyWork();

      const nextProfile: PerformanceProfile = {
        reducedMotion,
        reducedData,
        slowConnection,
        constrainedConnection,
        lowPowerDevice,
        deferHeavyWork,
      };

      setProfile((current) => {
        const hasChanged =
          current.reducedMotion !== nextProfile.reducedMotion ||
          current.reducedData !== nextProfile.reducedData ||
          current.slowConnection !== nextProfile.slowConnection ||
          current.constrainedConnection !== nextProfile.constrainedConnection ||
          current.lowPowerDevice !== nextProfile.lowPowerDevice ||
          current.deferHeavyWork !== nextProfile.deferHeavyWork;

        return hasChanged ? nextProfile : current;
      });
    };

    evaluate();

    const handleChange = () => evaluate();

    const disconnectMotion = attachMediaQueryListener('(prefers-reduced-motion: reduce)', handleChange);
    const disconnectData = attachMediaQueryListener('(prefers-reduced-data: reduce)', handleChange);
    const disconnectPointer = attachMediaQueryListener('(pointer: coarse)', handleChange);
    const disconnectConnection = attachConnectionListener(handleChange);

    return () => {
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

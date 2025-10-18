const SLOW_CONNECTION_TYPES = new Set(['slow-2g', '2g']);
const CONSERVATIVE_CONNECTION_TYPES = new Set(['3g']);

let cachedReducedDataPreference: boolean | null = null;

export type NavigatorConnection = {
  saveData?: boolean;
  effectiveType?: string;
  downlink?: number;
  onchange?: () => void;
  addEventListener?: (type: string, listener: () => void) => void;
  removeEventListener?: (type: string, listener: () => void) => void;
  addListener?: (listener: () => void) => void;
  removeListener?: (listener: () => void) => void;
};

type NavigatorScheduling = {
  isInputPending?: (options?: { includeContinuous?: boolean }) => boolean;
};

type ExtendedNavigator = Navigator & {
  connection?: NavigatorConnection;
  deviceMemory?: number;
  scheduling?: NavigatorScheduling;
};

type Cleanup = void | (() => void);

function readNavigator(): ExtendedNavigator | undefined {
  if (typeof navigator === 'undefined') {
    return undefined;
  }

  return navigator as ExtendedNavigator;
}

export function readConnection(): NavigatorConnection | undefined {
  return readNavigator()?.connection;
}

export function prefersReducedData(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return cachedReducedDataPreference ?? false;
  }

  try {
    const query = window.matchMedia('(prefers-reduced-data: reduce)');
    cachedReducedDataPreference = query.matches;
  } catch {
    // Ignore matchMedia failures (e.g. unsupported environments) and reuse the cached value.
  }

  return cachedReducedDataPreference ?? false;
}

export function isDataSaverEnabled(): boolean {
  const connection = readConnection();
  return Boolean(connection?.saveData);
}

export function isSlowConnection(): boolean {
  const connection = readConnection();

  if (!connection) {
    return false;
  }

  if (connection.effectiveType && SLOW_CONNECTION_TYPES.has(connection.effectiveType)) {
    return true;
  }

  if (typeof connection.downlink === 'number' && connection.downlink > 0 && connection.downlink < 1.2) {
    return true;
  }

  return false;
}

export function isConstrainedConnection(): boolean {
  const connection = readConnection();

  if (!connection) {
    return false;
  }

  if (connection.effectiveType && CONSERVATIVE_CONNECTION_TYPES.has(connection.effectiveType)) {
    return true;
  }

  return false;
}

export function isLowPowerDevice(): boolean {
  const nav = readNavigator();

  if (!nav) {
    return false;
  }

  if (typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency > 0 && nav.hardwareConcurrency <= 2) {
    return true;
  }

  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory > 0 && nav.deviceMemory <= 2) {
    return true;
  }

  return false;
}

export function shouldDeferHeavyWork(): boolean {
  if (cachedReducedDataPreference === null) {
    // Ensure the reduced data preference is evaluated on the client when available.
    cachedReducedDataPreference = prefersReducedData();
  }

  return (
    isDataSaverEnabled() ||
    isSlowConnection() ||
    isConstrainedConnection() ||
    isLowPowerDevice() ||
    Boolean(cachedReducedDataPreference)
  );
}

export function isUserInputPending(): boolean {
  if (typeof navigator === 'undefined') {
    return false;
  }

  const scheduling = (navigator as ExtendedNavigator).scheduling;
  if (!scheduling || typeof scheduling.isInputPending !== 'function') {
    return false;
  }

  try {
    return scheduling.isInputPending({ includeContinuous: true });
  } catch {
    try {
      return scheduling.isInputPending();
    } catch {
      return false;
    }
  }
}

export function runWhenDocumentVisible(effect: () => Cleanup): () => void {
  if (typeof document === 'undefined') {
    const cleanup = effect();
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }

  if (document.visibilityState === 'visible') {
    const cleanup = effect();
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }

  let cancelled = false;
  let cleanup: Cleanup;

  const handleVisibility = () => {
    if (cancelled) {
      return;
    }

    if (document.visibilityState === 'visible') {
      document.removeEventListener('visibilitychange', handleVisibility);
      cleanup = effect();
    }
  };

  document.addEventListener('visibilitychange', handleVisibility);

  return () => {
    cancelled = true;
    document.removeEventListener('visibilitychange', handleVisibility);
    if (typeof cleanup === 'function') {
      cleanup();
    }
  };
}

const SLOW_CONNECTION_TYPES = new Set(['slow-2g', '2g']);
const CONSERVATIVE_CONNECTION_TYPES = new Set(['3g']);

export type NavigatorConnection = {
  saveData?: boolean;
  effectiveType?: string;
  downlink?: number;
};

type ExtendedNavigator = Navigator & {
  connection?: NavigatorConnection;
  deviceMemory?: number;
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
  return isDataSaverEnabled() || isSlowConnection() || isLowPowerDevice();
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

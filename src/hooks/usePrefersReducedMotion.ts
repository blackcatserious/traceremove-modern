'use client';

import { useEffect, useState } from 'react';

/**
 * Returns whether the visitor has enabled reduced motion preferences in the browser.
 * Defaults to `false` during server rendering and hydrates on the client.
 */
export default function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference);
      return () => {
        mediaQuery.removeEventListener('change', updatePreference);
      };
    }

    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(updatePreference);
      return () => {
        mediaQuery.removeListener(updatePreference);
      };
    }

    return undefined;
  }, []);

  return prefersReducedMotion;
}

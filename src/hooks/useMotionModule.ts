'use client';

import { useEffect, useState } from 'react';

import type { MotionModule } from '@/lib/motionModule';
import { loadMotionModule } from '@/lib/motionModule';

export default function useMotionModule(shouldLoad: boolean): MotionModule | null {
  const [module, setModule] = useState<MotionModule | null>(null);

  useEffect(() => {
    if (!shouldLoad || module) {
      return;
    }

    let cancelled = false;

    loadMotionModule()
      .then((loaded) => {
        if (!cancelled) {
          setModule(loaded);
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.error('Failed to load motion module', error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [module, shouldLoad]);

  return module;
}

export type MotionModule = typeof import('framer-motion');

let motionModulePromise: Promise<MotionModule> | null = null;

export function preloadMotionModule(): Promise<MotionModule> {
  if (!motionModulePromise) {
    motionModulePromise = import('framer-motion');
  }

  return motionModulePromise;
}

export async function loadMotionModule(): Promise<MotionModule> {
  return preloadMotionModule();
}

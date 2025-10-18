import type { ReactNode } from 'react';

import BackgroundLayers from '@/components/BackgroundLayers';

export default function AtlasBlueprintLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="atlasBlueprint" className="opacity-65 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(129,140,248,0.2),transparent_55%),radial-gradient(circle_at_86%_24%,rgba(192,132,252,0.22),transparent_60%),linear-gradient(150deg,rgba(2,6,23,0.95)_0%,rgba(11,26,48,0.92)_48%,rgba(15,23,42,0.94)_100%)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

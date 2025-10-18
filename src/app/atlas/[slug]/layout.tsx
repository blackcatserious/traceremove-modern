import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';

export default function AtlasBlueprintLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="atlasBlueprint"
      backgroundClassName="opacity-65"
      overlayClassName="bg-[radial-gradient(circle_at_16%_20%,rgba(129,140,248,0.2),transparent_55%),radial-gradient(circle_at_86%_24%,rgba(192,132,252,0.22),transparent_60%),linear-gradient(150deg,rgba(2,6,23,0.95)_0%,rgba(11,26,48,0.92)_48%,rgba(15,23,42,0.94)_100%)]"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AtlasHero from '@/app/atlas/AtlasHero';
import { getAtlasClusterTotals } from '@/lib/server/atlasClusters';

const { totalBlueprints, totalClusters } = getAtlasClusterTotals();

export const metadata: Metadata = {
  title: 'Traceremove Atlas — Responsible AI Blueprints',
  description:
    "Navigate Traceremove's motion-driven atlas of responsible AI blueprints, clusters, and accountability fieldwork.",
};

export default function AtlasLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="atlas"
      backgroundClassName="opacity-65"
      overlayClassName="bg-[radial-gradient(circle_at_18%_22%,rgba(96,165,250,0.2),transparent_55%),radial-gradient(circle_at_82%_26%,rgba(244,114,182,0.18),transparent_55%),linear-gradient(140deg,rgba(2,6,23,0.95)_0%,rgba(10,21,38,0.92)_52%,rgba(15,23,42,0.94)_100%)]"
      hero={<AtlasHero blueprintCount={totalBlueprints} clusterCount={totalClusters} />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

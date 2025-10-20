import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AtlasHero from '@/app/atlas/AtlasHero';
import { ATLAS_BACKGROUND_CLASS, ATLAS_OVERLAY_CLASS } from '../ambientConfig';
import { getAtlasClusterTotals } from '@/lib/server/atlasClusters';

const { totalBlueprints, totalClusters } = getAtlasClusterTotals();

export const metadata: Metadata = {
  title: 'Traceremove Atlas — Responsible AI Blueprints',
  description:
    "Navigate Traceremove's motion-driven atlas of responsible AI blueprints, clusters, and accountability fieldwork.",
};

export default function AtlasOverviewLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="atlas"
      backgroundClassName={ATLAS_BACKGROUND_CLASS}
      overlayClassName={ATLAS_OVERLAY_CLASS}
      hero={<AtlasHero blueprintCount={totalBlueprints} clusterCount={totalClusters} />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

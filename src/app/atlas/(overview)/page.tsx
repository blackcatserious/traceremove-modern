import { Metadata } from 'next';

import ProgressiveAtlasClusters from '@/components/ProgressiveAtlasClusters';
import { ATLAS_BLUEPRINT_TOTAL } from '@/lib/atlasCatalog';
import { getAtlasClustersDataset } from '@/lib/server/atlasClusters';

const INITIAL_CLUSTER_BATCH = 3;

const { clusters: atlasClusters, totalClusters } = getAtlasClustersDataset();
const initialClusters = atlasClusters.slice(0, INITIAL_CLUSTER_BATCH);

export const metadata: Metadata = {
  title: 'Experience Atlas | Traceremove Research',
  description: `${ATLAS_BLUEPRINT_TOTAL} blueprint-grade pages detailing responsible AI, civic technology, and ethical innovation scenarios curated by Traceremove.`,
};

export default function AtlasIndexPage() {
  return (
    <>
      <ProgressiveAtlasClusters initialClusters={initialClusters} totalClusters={totalClusters} />
    </>
  );
}

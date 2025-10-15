import { cache } from 'react';

import { atlasBlueprints } from '@/lib/atlasCatalog';
import type { AtlasCluster, AtlasClusterCard } from '@/lib/atlasClustersShared';

interface AtlasClusterDataset {
  clusters: AtlasCluster[];
  totalBlueprints: number;
  totalClusters: number;
}

type ClusterAccumulator = {
  persona: string;
  items: AtlasClusterCard[];
};

const buildAtlasClusters = cache((): AtlasClusterDataset => {
  const grouped = new Map<string, ClusterAccumulator>();

  for (const blueprint of atlasBlueprints) {
    if (!grouped.has(blueprint.cluster)) {
      grouped.set(blueprint.cluster, {
        persona: blueprint.persona,
        items: [],
      });
    }

    const entry = grouped.get(blueprint.cluster);
    if (!entry) continue;

    entry.items.push({
      slug: blueprint.slug,
      heroEyebrow: blueprint.hero.eyebrow,
      focusArea: blueprint.focusArea,
      summary: blueprint.summary,
      contextLabel: blueprint.contextLabel,
      timeHorizon: blueprint.timeHorizon,
    });

    if (!entry.persona) {
      entry.persona = blueprint.persona;
    }
  }

  const clusters: AtlasCluster[] = Array.from(grouped.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([clusterId, entry]) => {
      const sortedItems = entry.items.slice().sort((a, b) => a.focusArea.localeCompare(b.focusArea));
      const personaLabel = (entry.persona || 'Responsible innovation leaders').toLowerCase();

      return {
        id: clusterId,
        personaLabel,
        items: sortedItems,
      } satisfies AtlasCluster;
    });

  return {
    clusters,
    totalBlueprints: atlasBlueprints.length,
    totalClusters: clusters.length,
  };
});

export function getAtlasClustersDataset() {
  return buildAtlasClusters();
}

export function getAtlasClustersSlice(start: number, limit: number) {
  const { clusters } = buildAtlasClusters();
  const safeStart = Number.isFinite(start) ? Math.max(0, Math.min(clusters.length, Math.floor(start))) : 0;
  const maxAvailable = clusters.length - safeStart;
  const safeLimit = Number.isFinite(limit)
    ? Math.max(0, Math.min(Math.floor(limit), maxAvailable))
    : Math.max(0, maxAvailable);

  return {
    clusters: safeLimit > 0 ? clusters.slice(safeStart, safeStart + safeLimit) : [],
    totalClusters: clusters.length,
  };
}

export function getAtlasClusterTotals() {
  const dataset = buildAtlasClusters();

  return {
    totalClusters: dataset.totalClusters,
    totalBlueprints: dataset.totalBlueprints,
  };
}

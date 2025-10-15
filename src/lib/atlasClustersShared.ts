export interface AtlasClusterCard {
  slug: string;
  heroEyebrow: string;
  focusArea: string;
  summary: string;
  contextLabel: string;
  timeHorizon: string;
}

export interface AtlasCluster {
  id: string;
  personaLabel: string;
  items: AtlasClusterCard[];
}

import { Metadata } from 'next';
import { ArrowUpRight, Filter, Search } from 'lucide-react';

import BackgroundLayers from '@/components/BackgroundLayers';
import { atlasBlueprints, ATLAS_BLUEPRINT_TOTAL } from '@/lib/atlasCatalog';
import type { AtlasBlueprint } from '@/lib/atlasCatalog';
import ProgressiveAtlasClusters, {
  type ProgressiveAtlasCluster,
  type AtlasClusterCard,
} from '@/components/ProgressiveAtlasClusters';

export const metadata: Metadata = {
  title: 'Experience Atlas | Traceremove Research',
  description: `${ATLAS_BLUEPRINT_TOTAL} blueprint-grade pages detailing responsible AI, civic technology, and ethical innovation scenarios curated by Traceremove.`,
};

const groupedBlueprints = atlasBlueprints.reduce<Record<string, AtlasBlueprint[]>>((acc, blueprint) => {
  if (!acc[blueprint.cluster]) {
    acc[blueprint.cluster] = [];
  }

  acc[blueprint.cluster].push(blueprint);
  return acc;
}, {});

const clusters = Object.keys(groupedBlueprints).sort((a, b) => a.localeCompare(b));

const progressiveClusters: ProgressiveAtlasCluster[] = clusters.map((cluster) => {
  const sortedBlueprints = groupedBlueprints[cluster].slice().sort((a, b) => a.title.localeCompare(b.title));
  const personaLabel = (sortedBlueprints[0]?.persona ?? 'Responsible innovation leaders').toLowerCase();
  const items: AtlasClusterCard[] = sortedBlueprints.map((blueprint) => ({
    slug: blueprint.slug,
    heroEyebrow: blueprint.hero.eyebrow,
    focusArea: blueprint.focusArea,
    summary: blueprint.summary,
    contextLabel: blueprint.contextLabel,
    timeHorizon: blueprint.timeHorizon,
  }));

  return {
    id: cluster,
    personaLabel,
    items,
  };
});

export default function AtlasIndexPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-32">
      <BackgroundLayers variant="hero" className="pointer-events-none" />
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-28">
          <div id="atlas-navigation" className="sr-only">
            Atlas navigation anchor
          </div>
          <div className="mt-2 rounded-3xl border border-white/10 bg-slate-950/75 shadow-2xl shadow-purple-900/20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
              <div className="absolute inset-0 opacity-50 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(96, 165, 250, 0.35), transparent 55%), radial-gradient(circle at 90% 20%, rgba(244, 114, 182, 0.25), transparent 60%), radial-gradient(circle at 50% 90%, rgba(129, 140, 248, 0.3), transparent 65%)' }} />
              <div className="relative px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Traceremove Atlas</p>
                <h1 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight">Immersive Blueprints for Responsible AI Futures</h1>
                <p className="mt-6 max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed">
                  Explore {ATLAS_BLUEPRINT_TOTAL} carefully crafted pages that choreograph governance, safety, civic, and cultural innovation. Each blueprint combines narrative design, measurable outcomes, and actionable programs for leaders building trustworthy intelligence.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-3 text-sm text-white/80">
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                    <Search className="h-5 w-5 text-white/70" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Scenarios</p>
                    <p className="mt-1 text-xl font-semibold text-white">{ATLAS_BLUEPRINT_TOTAL} Playbooks</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                    <Filter className="h-5 w-5 text-white/70" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Clusters</p>
                    <p className="mt-1 text-xl font-semibold text-white">{clusters.length} Domains</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                    <ArrowUpRight className="h-5 w-5 text-white/70" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Actionability</p>
                    <p className="mt-1 text-xl font-semibold text-white">Programs & Metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProgressiveAtlasClusters clusters={progressiveClusters} />
        </div>
      </div>
    </div>
  );
}

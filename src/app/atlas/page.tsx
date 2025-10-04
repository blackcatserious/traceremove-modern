import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowUpRight, Filter, Search } from 'lucide-react';

import BackgroundLayers from '@/components/BackgroundLayers';
import { atlasBlueprints } from '@/lib/atlasCatalog';
import type { AtlasBlueprint } from '@/lib/atlasCatalog';

export const metadata: Metadata = {
  title: 'Experience Atlas | Traceremove Research',
  description:
    '156 blueprint-grade pages detailing responsible AI, civic technology, and ethical innovation scenarios curated by Traceremove.',
};

const groupedBlueprints = atlasBlueprints.reduce<Record<string, AtlasBlueprint[]>>((acc, blueprint) => {
  if (!acc[blueprint.cluster]) {
    acc[blueprint.cluster] = [];
  }

  acc[blueprint.cluster].push(blueprint);
  return acc;
}, {});

const clusters = Object.keys(groupedBlueprints).sort((a, b) => a.localeCompare(b));

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
                  Explore one hundred fifty-six carefully crafted pages that choreograph governance, safety, civic, and cultural innovation. Each blueprint combines narrative design, measurable outcomes, and actionable programs for leaders building trustworthy intelligence.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-3 text-sm text-white/80">
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                    <Search className="h-5 w-5 text-white/70" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Scenarios</p>
                    <p className="mt-1 text-xl font-semibold text-white">156 Playbooks</p>
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

          <div className="mt-16 space-y-24">
            {clusters.map((cluster) => {
              const items = groupedBlueprints[cluster].sort((a, b) => a.title.localeCompare(b.title));
              const personaLabel = (items[0]?.persona ?? 'Responsible innovation leaders').toLowerCase();

              return (
                <section key={cluster} className="space-y-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-white">{cluster}</h2>
                      <p className="mt-2 max-w-2xl text-sm text-white/70 leading-relaxed">
                        Strategic experiences and programs designed for {personaLabel} and allied teams.
                      </p>
                    </div>
                    <Link
                      href="#atlas-navigation"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
                    >
                      Cluster Index
                    </Link>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/atlas/${item.slug}`}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-accent-ai-purple/40 hover:shadow-2xl hover:shadow-accent-ai-purple/20"
                      >
                        <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(124, 58, 237, 0.25), transparent 45%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.2), transparent 55%)' }} />
                        <div className="relative">
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{item.hero.eyebrow}</p>
                          <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-accent-ai-purple">{item.focusArea}</h3>
                          <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.summary}</p>
                          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/60">
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.contextLabel}</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.timeHorizon}</span>
                          </div>
                          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-ai-purple">
                            View Blueprint
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowUpRight, Filter, Search } from 'lucide-react';

interface AtlasHeroProps {
  blueprintCount: number;
  clusterCount: number;
}

export default function AtlasHero({ blueprintCount, clusterCount }: AtlasHeroProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
      <div className="relative">
        <div id="atlas-navigation" className="sr-only">
          Atlas navigation anchor
        </div>
        <div className="mt-2 rounded-3xl border border-white/10 bg-slate-950/75 shadow-2xl shadow-purple-900/20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
            <div
              className="absolute inset-0 opacity-50 mix-blend-screen"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 10% 10%, rgba(96, 165, 250, 0.35), transparent 55%), radial-gradient(circle at 90% 20%, rgba(244, 114, 182, 0.25), transparent 60%), radial-gradient(circle at 50% 90%, rgba(129, 140, 248, 0.3), transparent 65%)',
              }}
            />
            <div className="relative px-8 py-16 text-white sm:px-14 sm:py-20 lg:px-20 lg:py-24">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Traceremove Atlas</p>
              <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
                Immersive Blueprints for Responsible AI Futures
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Explore {blueprintCount.toLocaleString()} carefully crafted pages that choreograph governance, safety, civic, and cultural innovation. Each blueprint combines narrative design, measurable outcomes, and actionable programs for leaders building trustworthy intelligence.
              </p>
              <div className="mt-10 grid gap-6 text-sm text-white/80 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                  <Search className="h-5 w-5 text-white/70" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Scenarios</p>
                  <p className="mt-1 text-xl font-semibold text-white">{blueprintCount.toLocaleString()} Playbooks</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                  <Filter className="h-5 w-5 text-white/70" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Clusters</p>
                  <p className="mt-1 text-xl font-semibold text-white">{clusterCount.toLocaleString()} Domains</p>
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
      </div>
    </section>
  );
}

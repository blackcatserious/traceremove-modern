import Link from 'next/link';
import { ArrowLeft, Clock, Globe2, Sparkles, Users2 } from 'lucide-react';

import type { AtlasBlueprint } from '@/lib/atlasCatalog';

interface AtlasBlueprintHeroProps {
  blueprint: AtlasBlueprint;
}

export default function AtlasBlueprintHero({ blueprint }: AtlasBlueprintHeroProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-300/80">
        <Link
          href="/atlas"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Atlas
        </Link>
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/70">
          <Sparkles className="h-4 w-4 text-accent-ai-purple" />
          {blueprint.cluster}
        </div>
      </div>

      <section className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-purple-900/20">
        <div
          className={`relative isolate overflow-hidden bg-gradient-to-br ${blueprint.hero.gradientFrom} ${blueprint.hero.gradientTo}`}
        >
          <div
            className="absolute inset-0 opacity-60 mix-blend-screen"
            style={{
              backgroundImage:
                'radial-gradient(circle at 0% 0%, rgba(148, 163, 255, 0.4), transparent 45%), radial-gradient(circle at 80% 20%, rgba(192, 132, 252, 0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.35), transparent 65%)',
            }}
          />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-white/20 via-transparent to-transparent md:block" />
          <div className="relative px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="max-w-3xl">
              <p className={`mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 ${blueprint.hero.accent}`}>
                {blueprint.hero.eyebrow}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-5xl">
                {blueprint.hero.heading}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/80">{blueprint.hero.subheading}</p>
              <div className="mt-8 grid gap-4 text-white/80 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                  <Clock className="h-5 w-5 text-white/70" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Time Horizon</p>
                  <p className="mt-1 text-base font-medium text-white">{blueprint.timeHorizon}</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                  <Users2 className="h-5 w-5 text-white/70" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Primary Persona</p>
                  <p className="mt-1 text-base font-medium text-white">{blueprint.persona}</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                  <Globe2 className="h-5 w-5 text-white/70" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Momentum</p>
                  <p className="mt-1 text-base font-medium text-white">{blueprint.momentum}</p>
                </div>
              </div>
            </div>
            <div className="mt-10 max-w-md rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur">
              <p className="text-sm font-semibold text-white/80">Visual Mood</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{blueprint.hero.visualCue}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Clock, Globe2, Sparkles, Users2 } from 'lucide-react';

import BackgroundLayers from '@/components/BackgroundLayers';
import { atlasBlueprints, getAtlasBlueprint } from '@/lib/atlasCatalog';

interface AtlasPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return atlasBlueprints.map((blueprint) => ({ slug: blueprint.slug }));
}

export function generateMetadata({ params }: AtlasPageProps): Metadata {
  const blueprint = getAtlasBlueprint(params.slug);

  if (!blueprint) {
    return {
      title: 'Atlas Blueprint | Traceremove Research',
    };
  }

  return {
    title: `${blueprint.title} | Traceremove Atlas`,
    description: blueprint.summary,
    openGraph: {
      title: `${blueprint.title} | Traceremove Atlas`,
      description: blueprint.summary,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blueprint.title} | Traceremove Atlas`,
      description: blueprint.summary,
    },
  };
}

export default function AtlasBlueprintPage({ params }: AtlasPageProps) {
  const blueprint = getAtlasBlueprint(params.slug);

  if (!blueprint) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-hidden pb-32">
      <BackgroundLayers variant="research" className="pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-28">
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
              <div className="absolute inset-0 opacity-60 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(148, 163, 255, 0.4), transparent 45%), radial-gradient(circle at 80% 20%, rgba(192, 132, 252, 0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.35), transparent 65%)' }} />
              <div className="absolute inset-y-0 right-0 hidden md:block w-1/2 bg-gradient-to-l from-white/20 via-transparent to-transparent" />
              <div className="relative px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                <div className="max-w-3xl">
                  <p className={`text-sm font-semibold tracking-[0.3em] uppercase text-white/80 mb-6 ${blueprint.hero.accent}`}>
                    {blueprint.hero.eyebrow}
                  </p>
                  <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white drop-shadow-lg">
                    {blueprint.hero.heading}
                  </h1>
                  <p className="mt-6 text-lg text-white/80 leading-relaxed">
                    {blueprint.hero.subheading}
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3 text-white/80">
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
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{blueprint.hero.visualCue}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-10">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-slate-900/40">
                <h2 className="text-2xl font-semibold text-white">Narrative Arc</h2>
                <p className="mt-4 text-base leading-relaxed text-white/80">{blueprint.summary}</p>
                <p className="mt-6 text-sm leading-relaxed text-white/70">{blueprint.story}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-lg shadow-slate-900/40">
                <h3 className="text-xl font-semibold text-white">Commitments in Motion</h3>
                <ul className="mt-4 grid gap-4 text-white/80">
                  {blueprint.commitments.map((commitment) => (
                    <li
                      key={commitment}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-relaxed shadow-inner shadow-black/20"
                    >
                      {commitment}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-lg shadow-purple-900/30">
                <h3 className="text-xl font-semibold text-white">Signature Programs</h3>
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  {blueprint.programs.map((program) => (
                    <div
                      key={program.title}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-accent-ai-purple/40"
                    >
                      <h4 className="text-lg font-semibold text-white group-hover:text-accent-ai-purple">
                        {program.title}
                      </h4>
                      <p className="mt-3 text-sm text-white/70 leading-relaxed">{program.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-lg shadow-blue-900/30">
                <h3 className="text-xl font-semibold text-white">Immersive Experiences</h3>
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  {blueprint.experiences.map((experience) => (
                    <div
                      key={experience.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/80"
                    >
                      <h4 className="text-base font-semibold text-white">{experience.title}</h4>
                      <p className="mt-3 text-white/70">{experience.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-10">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-slate-900/40">
                <h3 className="text-xl font-semibold text-white">Ecosystem Partners</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">{blueprint.ecosystem}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent px-5 py-4 text-sm text-white/70">
                  <p className="font-semibold uppercase tracking-[0.2em] text-white/60">Signals to Watch</p>
                  <ul className="mt-3 space-y-3">
                    {blueprint.signals.map((signal) => (
                      <li key={signal} className="leading-relaxed">
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-8 shadow-xl shadow-purple-900/40">
                <h3 className="text-xl font-semibold text-white">Impact Metrics</h3>
                <div className="mt-6 space-y-4">
                  {blueprint.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{metric.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent-ai-purple/20 via-transparent to-slate-900/60 p-8 shadow-xl shadow-purple-900/40">
                <h3 className="text-xl font-semibold text-white">Move Forward</h3>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">{blueprint.callToAction}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
                >
                  Plan a Session
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
}

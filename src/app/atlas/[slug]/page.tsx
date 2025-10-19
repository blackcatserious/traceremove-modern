import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

import AtlasBlueprintHero from '@/app/atlas/[slug]/AtlasBlueprintHero';
import { getAllAtlasSlugs, getAtlasBlueprint } from '@/lib/atlasCatalog';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllAtlasSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blueprint = getAtlasBlueprint(slug);

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

export default async function AtlasBlueprintPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blueprint = getAtlasBlueprint(slug);

  if (!blueprint) {
    notFound();
  }

  return (
    <div className="pb-32">
      <div className="mx-auto max-w-6xl px-6 pt-28 sm:px-10 lg:px-12">
        <AtlasBlueprintHero blueprint={blueprint} />

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
                    <h4 className="text-lg font-semibold text-white group-hover:text-accent-ai-purple">{program.title}</h4>
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
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
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
  );
}

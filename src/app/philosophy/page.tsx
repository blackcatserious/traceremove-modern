'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Brain,
  Lightbulb,
  Sparkles,
  Eye,
  Heart,
  Feather,
  QuoteIcon,
  Scale,
  Infinity as InfinityIcon,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const philosophicalAreas = [
  {
    title: 'Philosophy of technology',
    description: 'Investigates how sociotechnical systems sculpt agency, power, and everyday rituals across cultures.',
    icon: Brain,
    palette: 'from-violet-500/40 via-fuchsia-500/30 to-sky-500/30',
    topics: ['Technological determinism', 'Participatory infrastructures', 'Digital ethics', 'Posthuman philosophy']
  },
  {
    title: 'AI ethics & responsibility',
    description: 'Designs normative frameworks that align machine decision-making with human dignity and collective flourishing.',
    icon: Heart,
    palette: 'from-rose-500/40 via-purple-500/30 to-orange-500/30',
    topics: ['Algorithmic governance', 'Moral agency', 'Responsible innovation', 'Rights-preserving design']
  },
  {
    title: 'Epistemology & intelligence',
    description: 'Explores how AI acquires, represents, and justifies knowledge within contested epistemic communities.',
    icon: Eye,
    palette: 'from-emerald-500/35 via-teal-500/30 to-cyan-500/30',
    topics: ['Machine hermeneutics', 'Interpretability', 'Epistemic justice', 'Knowledge provenance']
  },
  {
    title: 'Mind, agency, and embodiment',
    description: 'Interrogates consciousness, intentionality, and embodiment to choreograph humane collaborations with AI.',
    icon: Lightbulb,
    palette: 'from-amber-500/40 via-orange-500/30 to-red-500/30',
    topics: ['Artificial agency', 'Embodied cognition', 'Distributed mind', 'Situated intelligence']
  }
];

const philosophicalWorks = [
  {
    title: 'The ethics of agentic AI systems',
    type: 'Research paper',
    year: '2024',
    description: 'A comprehensive examination of moral accountability in autonomous systems and the obligations of designers.',
    href: '/philosophy/ethics-agentic-ai-systems.pdf'
  },
  {
    title: 'Technology, society, and human flourishing',
    type: 'Book chapter',
    year: '2023',
    description: 'Frameworks for aligning computation with human values through participatory governance and civic imagination.',
    href: '/philosophy/technology-society-flourishing.pdf'
  },
  {
    title: 'Epistemic responsibility in AI development',
    type: 'Journal article',
    year: '2023',
    description: 'Investigates duties of care for research teams curating, labelling, and deploying data-intensive systems.',
    href: '/philosophy/epistemic-responsibility-ai.pdf'
  },
  {
    title: 'Digital rights and human dignity',
    type: 'Conference paper',
    year: '2022',
    description: 'Philosophical foundations for rights-preserving infrastructures in a world of pervasive automation.',
    href: '/philosophy/digital-rights-human-dignity.pdf'
  }
];

const philosophicalQuotes = [
  {
    quote: 'Technology is never neutral; it is an argument about how we choose to live together. Our task is to script these arguments for collective thriving.',
    context: 'On technology ethics'
  },
  {
    quote: 'The question is not whether AI can think, but whether we can think responsibly about the agency we grant to machines.',
    context: 'On AI philosophy'
  },
  {
    quote: 'Progress in intelligence requires philosophical courage – to interrogate what it means to remain human amid algorithmic futures.',
    context: 'On human-AI coexistence'
  }
];

const guidingPrinciples = [
  {
    title: 'Human dignity first',
    description: 'Design choices begin with the lived experiences of people most impacted by automation, centring justice and accessibility.',
    icon: Feather
  },
  {
    title: 'Transparency by default',
    description: 'Every system earns trust through legible documentation, participatory oversight, and reproducible evidence.',
    icon: Scale
  },
  {
    title: 'Futures thinking',
    description: 'Philosophical foresight maps long-term social consequences so intelligence evolves responsibly.',
    icon: InfinityIcon
  }
];

export default function Philosophy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative z-10 text-white">
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_78%_18%,rgba(236,72,153,0.16),transparent_50%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,18,36,0.9)_45%,rgba(17,24,39,0.94)_100%)]" />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.6, scale: 1 } : { opacity: 0.85, scale: 1, rotate: [0, 8, -6, 0] }}
            transition={{
              duration: prefersReducedMotion ? 1.2 : 18,
              repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
              ease: 'easeInOut'
            }}
            className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/35 via-violet-500/25 to-sky-400/25 blur-3xl"
          />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.45, scale: 1 } : { opacity: 0.7, scale: 1, rotate: [0, -10, 8, 0] }}
            transition={{
              duration: prefersReducedMotion ? 1.4 : 20,
              repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: 0.6
            }}
            className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-gradient-to-br from-rose-500/30 via-purple-500/25 to-cyan-400/25 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-center">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
              <Sparkles className="h-5 w-5 text-indigo-200" />
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Philosophy of intelligence</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
            </div>

            <div className="space-y-6">
              <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Theory and critique to choreograph accountable intelligence.
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-white/75 sm:text-xl">
                Philosophy is the compass of Traceremove. Artur’s research blends critical theory, ethics, and futures thinking to design machine intelligence that honours human dignity, interrogates power, and invites collective stewardship.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_18px_40px_rgba(56,189,248,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                Read latest essays
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/academic/ethics-syllabi"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition-colors duration-300 hover:text-white"
              >
                Teaching materials
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4 text-left">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Philosophical terrains</h2>
            <p className="max-w-3xl text-lg text-white/70">
              Each discipline grounds Traceremove’s research in rigorous theory, ensuring design choices honour cultural nuance, justice, and long-term planetary wellbeing.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {philosophicalAreas.map((area) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${area.palette}`} />
                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                  <p className="text-sm text-white/75">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span key={topic} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(236,72,153,0.18),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(56,189,248,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Guiding principles</h2>
            <p className="mx-auto max-w-3xl text-lg text-white/70">
              These philosophical commitments anchor every research sprint, partnership, and product decision at Traceremove.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {guidingPrinciples.map((principle) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <principle.icon className="mb-4 h-6 w-6 text-white/70" />
                <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                <p className="mt-2 text-sm text-white/70">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(14,165,233,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Selected works</h2>
              <p className="max-w-2xl text-lg text-white/70">
                Research across journals, conferences, and books translates philosophical inquiry into actionable playbooks for responsible intelligence.
              </p>
            </div>
            <Link
              href="/academic/publications-archive"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              View publications archive
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {philosophicalWorks.map((work) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  <span>{work.type}</span>
                  <span>{work.year}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{work.title}</h3>
                <p className="mt-2 text-sm text-white/70">{work.description}</p>
                <Link
                  href={work.href}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 group-hover:text-white"
                >
                  Access paper
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Philosophical reflections</h2>
            <div className="space-y-6">
              {philosophicalQuotes.map((entry) => (
                <motion.blockquote
                  key={entry.context}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                >
                  <QuoteIcon className="mx-auto mb-4 h-6 w-6 text-white/60" />
                  <p className="text-lg text-white/80">“{entry.quote}”</p>
                  <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">{entry.context}</footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

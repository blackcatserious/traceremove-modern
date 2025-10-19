'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Globe, Layers, LineChart, Microscope, Shield, TrendingUp } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const heroMetrics = [
  {
    label: 'Published Frameworks',
    value: '176',
    caption: 'Peer-reviewed blueprints and case studies',
    icon: Layers,
  },
  {
    label: 'Active Experiments',
    value: '48',
    caption: 'Live longitudinal research programmes',
    icon: Microscope,
  },
  {
    label: 'Ethics Interventions',
    value: '320+',
    caption: 'Documented governance rituals and audits',
    icon: Shield,
  },
  {
    label: 'Interpretability Dashboards',
    value: '22',
    caption: 'Operational toolkits and observability suites',
    icon: LineChart,
  },
];

interface MethodologyPillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

const methodologyPillars: MethodologyPillar[] = [
  {
    title: 'Evidence-led Fieldwork',
    description:
      'Mixed-methods studies embed ethnography, instrumentation, and participatory design in every deployment.',
    icon: Globe,
  },
  {
    title: 'Critical Systems Reviews',
    description:
      'Every blueprint combines computational stress-testing with philosophical audits to map risks clearly.',
    icon: Brain,
  },
  {
    title: 'Operational Impact Loops',
    description:
      'Continuous evaluation loops translate experimental insight into product, policy, and civic outcomes.',
    icon: TrendingUp,
  },
];

export default function ResearchHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.8, scale: 1 }
              : { opacity: 0.9, scale: [1, 1.05, 1] }
          }
          transition={{ duration: 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 via-sky-500/20 to-purple-500/25 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.2, rotate: -10 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.35, rotate: -6 }
              : { opacity: 0.45, rotate: [-12, -6, -10] }
          }
          transition={{ duration: 22, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 right-[10%] h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-500/15 to-indigo-500/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.16),transparent_55%),linear-gradient(180deg,rgba(2,6,23,0.95)_0%,rgba(15,23,42,0.92)_45%,rgba(15,23,42,0.94)_100%)]" />
      </motion.div>

      <section className="relative z-10 overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 backdrop-blur-2xl"
              >
                <BookOpen className="h-5 w-5 text-indigo-200" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Research Programs</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="font-ibm-sans text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Research that stages responsible intelligence for civic, planetary, and product impact.
                </h1>
                <p className="max-w-2xl text-lg text-white/80">
                  Explore 176 blueprints spanning ethics, interpretability, systems governance, and participatory AI design. Each
                  study blends philosophical rigor with operational playbooks so teams can deploy accountable intelligence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {heroMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-2xl"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    <div className="relative flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <metric.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-3xl font-semibold text-white">{metric.value}</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                        <p className="mt-2 text-sm text-white/70">{metric.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.55)] backdrop-blur-3xl"
            >
              <motion.span
                aria-hidden
                initial={{ opacity: 0.25, rotate: 0 }}
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.3 }
                    : { opacity: 0.45, rotate: [0, 8, -6, 0] }
                }
                transition={{ duration: 16, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -top-32 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/30 via-indigo-400/20 to-sky-400/25 blur-3xl"
              />
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  Research Methodology Stack
                </div>
                <div className="space-y-4">
                  {methodologyPillars.map((pillar) => (
                    <div key={pillar.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <pillar.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-white">{pillar.title}</p>
                        <p className="text-sm text-white/70">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/atlas"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
                >
                  View Atlas spotlights
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

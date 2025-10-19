'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Calendar, Eye, Globe, PenSquare } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const publishingMetrics = [
  {
    label: 'Published essays',
    value: '176',
    caption: 'Research-backed narratives in the atlas',
    icon: Calendar,
  },
  {
    label: 'Monthly readers',
    value: '82k',
    caption: 'Practitioners following Traceremove insights',
    icon: Eye,
  },
  {
    label: 'Editorial cadence',
    value: 'Weekly',
    caption: 'New releases every Friday',
    icon: PenSquare,
  },
];

interface EditorialHighlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

const editorialHighlights: EditorialHighlight[] = [
  {
    title: 'Investigative storytelling',
    description:
      'Each article layers qualitative testimony with metrics and motion to anchor responsible intelligence debates.',
    icon: BookOpen,
  },
  {
    title: 'Applied philosophy',
    description: 'Theory meets delivery with practical checklists, policy drafts, and design prompts ready for teams.',
    icon: Brain,
  },
  {
    title: 'Global voices',
    description: 'Insights draw from civic tech partners, public institutions, and communities across 30+ countries.',
    icon: Globe,
  },
];

export default function ArticlesHero() {
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
              ? { opacity: 0.75, scale: 1 }
              : { opacity: 0.85, scale: [1, 1.04, 1] }
          }
          transition={{ duration: 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -top-36 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/25 via-indigo-500/20 to-purple-500/25 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.3, rotate: -10 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.35, rotate: -6 }
              : { opacity: 0.45, rotate: [-12, -6, -10] }
          }
          transition={{ duration: 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-44 left-[12%] h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-500/15 to-blue-500/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(129,140,248,0.18),transparent_55%),linear-gradient(180deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.9)_45%,rgba(15,23,42,0.94)_100%)]" />
      </motion.div>

      <section className="relative z-10 overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 backdrop-blur-2xl"
              >
                <BookOpen className="h-5 w-5 text-sky-200" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Editorial program</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="font-ibm-sans text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Essays that choreograph accountability, systems design, and philosophy.
                </h1>
                <p className="max-w-2xl text-lg text-white/80">
                  The editorial program chronicles how responsible intelligence is practiced. Stories weave motion design, field
                  interviews, and rigorous data to keep researchers, policymakers, and builders aligned.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {publishingMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-2xl"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <metric.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                        <p className="mt-1 text-xs text-white/60">{metric.caption}</p>
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
                    : { opacity: 0.45, rotate: [0, 6, -4, 0] }
                }
                transition={{ duration: 16, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -top-28 -right-16 h-60 w-60 rounded-full bg-gradient-to-br from-purple-500/30 via-indigo-400/20 to-sky-400/25 blur-3xl"
              />
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  Editorial highlights
                </div>
                <div className="space-y-4">
                  {editorialHighlights.map((highlight) => (
                    <div key={highlight.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <highlight.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-white">{highlight.title}</p>
                        <p className="text-sm text-white/70">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/atlas"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
                >
                  Discover atlas storytelling
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

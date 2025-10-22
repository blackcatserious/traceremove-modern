'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Map } from 'lucide-react';

const heroHighlights = [
  {
    value: '176',
    label: 'Atlas blueprints',
    detail: 'Immersive case studies spanning civic tech, healthcare, climate, and policy coalitions.',
  },
  {
    value: '48',
    label: 'Research programmes',
    detail: 'Ongoing investigations covering ethics, infrastructure, interpretability, and agency.',
  },
  {
    value: '22',
    label: 'Operational tools',
    detail: 'Dashboards, scorecards, and orchestration utilities distributed across the platform.',
  },
];

export default function SiteMapHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,26,48,0.9)_45%,rgba(17,24,39,0.95)_100%)]" />
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.55, scale: 1 }
              : { opacity: 0.85, scale: 1, rotate: [0, 8, -6, 0] }
          }
          transition={{ duration: prefersReducedMotion ? 1.2 : 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/35 via-sky-400/25 to-emerald-400/25 blur-3xl"
        />
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.4, scale: 1 }
              : { opacity: 0.65, scale: 1, rotate: [0, -10, 8, 0] }
          }
          transition={{ duration: prefersReducedMotion ? 1.4 : 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute -bottom-28 right-4 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/25 to-cyan-400/25 blur-3xl"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-12">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
            <Map className="h-5 w-5 text-sky-200" />
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Experience navigation</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
          </div>
          <div className="flex max-w-3xl flex-col gap-6">
            <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Navigate every cinematic blueprint, tool, and research corridor with ease.
            </h1>
            <p className="text-lg text-white/75 sm:text-xl">
              This site map stitches together Traceremove’s atlas, research programmes, operational tools, and academic archives. Explore the structure to orient your journey or share tailored pathways with collaborators.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/atlas"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_18px_40px_rgba(56,189,248,0.35)] transition-transform duration-300 hover:-translate-y-1"
            >
              Jump into the atlas
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              Plan a guided tour
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {heroHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-60px' }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
            >
              <p className="text-3xl font-semibold text-white sm:text-4xl">{highlight.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">{highlight.label}</p>
              <p className="mt-3 text-sm text-white/70">{highlight.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

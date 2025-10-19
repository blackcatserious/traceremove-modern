'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PhilosophyHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_78%_18%,rgba(236,72,153,0.16),transparent_50%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,18,36,0.9)_45%,rgba(17,24,39,0.94)_100%)]" />
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.6, scale: 1 }
              : { opacity: 0.85, scale: 1, rotate: [0, 8, -6, 0] }
          }
          transition={{
            duration: prefersReducedMotion ? 1.2 : 18,
            repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/35 via-violet-500/25 to-sky-400/25 blur-3xl"
        />
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.45, scale: 1 }
              : { opacity: 0.7, scale: 1, rotate: [0, -10, 8, 0] }
          }
          transition={{
            duration: prefersReducedMotion ? 1.4 : 20,
            repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 0.6,
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
  );
}

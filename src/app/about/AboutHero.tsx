'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Lightbulb, Link as LinkIcon, Mail, MessageSquare, Sparkles } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const heroMetrics = [
  {
    value: '176',
    label: 'Research blueprints',
    detail: 'Evidence-led case studies covering civic, climate, healthcare, and product intelligence adoption.',
  },
  {
    value: '48',
    label: 'Operational tools',
    detail: 'Dashboards, evaluations, and observability kits turning insights into accountable delivery.',
  },
  {
    value: '22',
    label: 'Global coalitions',
    detail: 'Partners co-designing responsible intelligence with Traceremove across continents.',
  },
  {
    value: '14',
    label: 'Years in practice',
    detail: 'Transdisciplinary work across philosophy, AI systems, policy, and product orchestration.',
  },
];

interface StudioPractice {
  title: string;
  description: string;
  icon: LucideIcon;
}

const studioPractices: StudioPractice[] = [
  {
    title: 'Research operations',
    description: 'Evidence logs, ethics reviews, and reproducibility scorecards accompany every build.',
    icon: Sparkles,
  },
  {
    title: 'Participatory design',
    description: 'Community listening labs ensure lived experience shapes machine policy and UX.',
    icon: MessageSquare,
  },
  {
    title: 'Responsible acceleration',
    description: 'Progressive delivery frameworks pair velocity with governance checkpoints and transparency.',
    icon: Lightbulb,
  },
];

export default function AboutHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.18),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(56,189,248,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(14,26,46,0.88)_45%,rgba(17,24,39,0.92)_100%)]" />
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.6, scale: 1 }
              : { opacity: 0.9, scale: 1, rotate: [0, 6, -4, 0] }
          }
          transition={{ duration: prefersReducedMotion ? 1.2 : 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -top-28 left-16 h-80 w-80 rounded-full bg-gradient-to-br from-violet-500/40 via-sky-500/30 to-emerald-400/30 blur-3xl"
        />
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.4, scale: 1 }
              : { opacity: 0.7, scale: 1, rotate: [0, -8, 6, 0] }
          }
          transition={{
            duration: prefersReducedMotion ? 1.4 : 20,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: 'easeInOut',
            delay: 0.6,
          }}
          className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-indigo-500/25 to-cyan-400/25 blur-3xl"
        />
      </div>

      <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
              <Sparkles className="h-5 w-5 text-indigo-200" />
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">About the studio lead</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
            </div>

            <div className="space-y-6">
              <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Artur Ziganshin crafts accountable intelligence with philosophical depth and operational precision.
              </h1>
              <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
                Founder of Traceremove, Artur orchestrates a transdisciplinary research lab that transforms ethics, policy, and systems engineering into cinematic AI experiences. Each engagement blends theory, tooling, and coalition work so intelligence feels humane, verifiable, and globally responsive.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_20px_40px_rgba(56,189,248,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                <Mail className="h-4 w-4" />
                Start a dialogue
              </Link>
              <Link
                href="/academic/cv"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/80 transition-colors duration-300 hover:text-white"
              >
                <LinkIcon className="h-4 w-4" />
                View academic CV
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <div className="relative space-y-3">
                    <p className="text-3xl font-semibold text-white sm:text-4xl">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">{metric.label}</p>
                    <p className="text-sm text-white/70">{metric.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-80px' }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.5)] backdrop-blur-3xl"
        >
            <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-400/25 to-emerald-400/25 blur-3xl" />
            <div className="relative space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Studio manifesto</p>
                <p className="text-lg text-white/80">
                  Traceremove imagines AI as a civic infrastructure — transparent, interpretable, and co-created with the communities it serves. Every blueprint embeds disclosure rituals, observability, and shared stewardship so people remain at the centre of computational futures.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {studioPractices.map((practice) => (
                  <div key={practice.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <practice.icon className="mb-3 h-5 w-5 text-white/70" />
                    <p className="text-sm font-semibold text-white">{practice.title}</p>
                    <p className="mt-1 text-xs text-white/60">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}


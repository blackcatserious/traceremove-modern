'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const assistantHighlights = [
  {
    title: 'Atlas-native reasoning',
    description: 'Draws from 176 cinematic research blueprints, methodology notes, and tooling manuals curated by the Traceremove lab.',
    icon: Compass
  },
  {
    title: 'Ethical co-pilot',
    description: 'Surfaces governance guardrails, disclosure rituals, and accountability frameworks alongside technical answers.',
    icon: ShieldCheck
  },
  {
    title: 'Operational fluency',
    description: 'Guides you through experiments, stakeholder rituals, and platform integrations to move initiatives from theory to launch.',
    icon: Layers
  }
];

export default function AssistantHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_78%_22%,rgba(129,140,248,0.18),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,21,38,0.9)_45%,rgba(15,23,42,0.94)_100%)]" />
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={prefersReducedMotion ? { opacity: 0.55, scale: 1 } : { opacity: 0.85, scale: 1, rotate: [0, 8, -6, 0] }}
          transition={{ duration: prefersReducedMotion ? 1.2 : 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/35 via-sky-400/25 to-emerald-400/25 blur-3xl"
        />
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={prefersReducedMotion ? { opacity: 0.4, scale: 1 } : { opacity: 0.65, scale: 1, rotate: [0, -10, 8, 0] }}
          transition={{ duration: prefersReducedMotion ? 1.4 : 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/25 to-cyan-400/25 blur-3xl"
        />
      </div>

      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
              <Sparkles className="h-5 w-5 text-sky-200" />
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Traceremove assistant</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
            </div>

            <div className="space-y-6">
              <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Converse with the research lab, orchestrate motion-ready intelligence.
              </h1>
              <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
                The Traceremove assistant distils philosophy, governance, and engineering playbooks into actionable guidance. Ask about ethical guardrails, deployment rituals, or atlas blueprints and receive answers grounded in cinematic research artefacts.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/atlas"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_18px_40px_rgba(56,189,248,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                Explore atlas context
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition-colors duration-300 hover:text-white"
              >
                Browse knowledge base
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {assistantHighlights.map((highlight) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
                >
                  <highlight.icon className="mb-3 h-5 w-5 text-white/70" />
                  <p className="text-base font-semibold text-white">{highlight.title}</p>
                  <p className="mt-2 text-sm text-white/70">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_36px_120px_rgba(15,23,42,0.5)] backdrop-blur-3xl"
        >
            <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-400/25 to-emerald-400/25 blur-3xl" />
            <div className="relative space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Safety choreography</p>
                <p className="text-lg text-white/80">
                  Trust signals are woven into every conversation. Expect contextual sourcing, ethical disclaimers, and invitations to connect with human experts when questions demand deeper collaboration.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  Context windows cite primary sources and link to atlas sections for verification.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  Ethics prompts keep recommendations aligned with responsible innovation principles.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  Human handoff rituals ensure complex enquiries loop in researchers and designers when needed.
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Globe,
  BookOpen,
  Layers,
  ChartBarStacked,
  ArrowRight,
  Users
} from 'lucide-react';
import Link from 'next/link';
import AssistantWidgetShell from '@/components/AssistantWidgetShell';
import KnowledgeBaseExplorerShell from '@/components/KnowledgeBaseExplorerShell';

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

const knowledgeStreams = [
  {
    title: 'Research atlas',
    description: 'Peer-reviewed case studies, comparative analyses, and field experiments documented across the atlas.',
    icon: BookOpen
  },
  {
    title: 'Projects & tools',
    description: 'Living delivery handbooks, evaluation dashboards, and release checklists from active engagements.',
    icon: ChartBarStacked
  },
  {
    title: 'Academic collaborations',
    description: 'Conference talks, syllabi, and scholarly partnerships that keep responses grounded in critical theory.',
    icon: Globe
  }
];

const guardrailMoments = [
  {
    label: 'Context windows',
    description: 'Every answer cites primary sources and links to the relevant blueprint section for verification.'
  },
  {
    label: 'Ethics prompts',
    description: 'Safety scaffolds ensure recommendations reflect Traceremove’s responsible innovation principles.'
  },
  {
    label: 'Human handoffs',
    description: 'The assistant suggests when to bring researchers, designers, or policy leads into complex conversations.'
  }
];

export default function AssistantPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
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

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
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
                <ul className="space-y-3">
                  {guardrailMoments.map((item) => (
                    <li key={item.label} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3">
                      <ShieldCheck className="mt-1 h-4 w-4 text-emerald-300" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="text-xs text-white/60">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/80 py-18">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(20,184,166,0.16),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr]">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Knowledge choreography</h2>
                <p className="text-lg text-white/70">
                  The assistant synthesises Traceremove’s living library with programmatic signals from the atlas, projects, and academic collaborations.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {knowledgeStreams.map((stream) => (
                  <motion.div
                    key={stream.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
                  >
                    <stream.icon className="mb-3 h-5 w-5 text-white/70" />
                    <p className="text-sm font-semibold text-white">{stream.title}</p>
                    <p className="mt-2 text-xs text-white/60">{stream.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-white/70" />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Human partnership</p>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Complex research questions may require a hybrid journey. The assistant flags when to schedule time with Traceremove strategists, designers, or philosophers so collective intelligence stays rigorous.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <div className="mb-6 space-y-2 text-center">
                <h3 className="font-ibm-sans text-2xl font-semibold">Ask Traceremove AI</h3>
                <p className="text-sm text-white/60">Initiate a dialogue below – reference any research blueprint, project, or philosophical theme.</p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <AssistantWidgetShell compact={false} fallbackClassName="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-slate-950/90 py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <KnowledgeBaseExplorerShell
            title="Assistant knowledge briefs"
            description="Inspect the curated metrics, tooling, and algorithm dossiers that the Traceremove assistant references before it answers complex prompts."
          />
        </div>
      </section>
    </div>
  );
}

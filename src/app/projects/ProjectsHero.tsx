'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Building, Cpu, ExternalLink, Shield, Workflow, Zap } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const deliveryMetrics = [
  {
    label: 'Implementation velocity',
    value: '6 weeks',
    caption: 'Average time from research drop to live prototype',
    icon: Zap,
  },
  {
    label: 'Embedded partners',
    value: '22',
    caption: 'Governments, universities, and venture teams in active builds',
    icon: Building,
  },
  {
    label: 'Operational playbooks',
    value: '48',
    caption: 'Reusable delivery frameworks across AI product lifecycles',
    icon: Workflow,
  },
];

interface StudioDiscipline {
  title: string;
  description: string;
  icon: LucideIcon;
}

const studioDisciplines: StudioDiscipline[] = [
  {
    title: 'Systems architecture',
    description: 'Infrastructure audits, compliance automation, and interpretable model orchestration.',
    icon: Cpu,
  },
  {
    title: 'Responsible deployment',
    description: 'Risk modelling, stakeholder briefings, and deployment rehearsals with ethical guardrails.',
    icon: Shield,
  },
  {
    title: 'Motion storytelling',
    description: 'Cinematic visual systems and interactive demos that help teams internalize impact pathways.',
    icon: ExternalLink,
  },
];

export default function ProjectsHero() {
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
          animate={prefersReducedMotion ? { opacity: 0.75, scale: 1 } : { opacity: 0.85, scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/2 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/25 via-indigo-500/20 to-purple-500/25 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.3, rotate: -12 }}
          animate={prefersReducedMotion ? { opacity: 0.35, rotate: -8 } : { opacity: 0.45, rotate: [-14, -6, -10] }}
          transition={{ duration: 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-44 left-[12%] h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-500/15 to-blue-500/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.18),transparent_55%),linear-gradient(180deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.9)_45%,rgba(15,23,42,0.94)_100%)]" />
      </motion.div>

      <section className="relative z-10 grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 backdrop-blur-2xl"
          >
            <Cpu className="h-5 w-5 text-sky-200" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Applied projects studio</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="font-ibm-sans text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Projects that transform research insight into responsible, living AI systems.
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              Discover the lab&rsquo;s delivery programmes spanning transparency tooling, civic deployments, multimodal ethics, and evaluation suites. Each initiative blends governance rituals, motion design, and production-ready infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {deliveryMetrics.map((metric, index) => (
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
            animate={prefersReducedMotion ? { opacity: 0.3 } : { opacity: 0.45, rotate: [0, 6, -4, 0] }}
            transition={{ duration: 16, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -top-28 -right-16 h-60 w-60 rounded-full bg-gradient-to-br from-purple-500/30 via-indigo-400/20 to-sky-400/25 blur-3xl"
          />
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Studio disciplines
            </div>
            <div className="space-y-4">
              {studioDisciplines.map((discipline) => (
                <div key={discipline.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <discipline.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">{discipline.title}</p>
                    <p className="text-sm text-white/70">{discipline.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
            >
              Book a delivery workshop
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}


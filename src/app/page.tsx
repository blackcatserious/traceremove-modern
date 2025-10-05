'use client';
import AssistantWidgetShell from '@/components/AssistantWidgetShell';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Info,
  Sparkles,
  MessageSquare,
  Database,
  Network,
  ShieldCheck,
  Globe,
  ArrowRight
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ResearchCard from '@/components/ResearchCard';
import PremiumButton from '@/components/PremiumButton';

const heroStats = [
  {
    value: '176',
    label: 'Research blueprints',
    description:
      'Immersive case studies documenting civic, climate, healthcare, and product coalitions adopting responsible intelligence.'
  },
  {
    value: '48',
    label: 'Active research threads',
    description:
      'Longitudinal experiments that stress-test governance, evaluation, and interpretability across emerging AI systems.'
  },
  {
    value: '22',
    label: 'Operational tools',
    description:
      'Dashboards, checklists, and orchestration utilities that translate research insight into production workflows.'
  },
  {
    value: '9',
    label: 'Global partnerships',
    description:
      'Universities, public institutions, and product teams co-designing equitable AI with the Traceremove lab.'
  }
];

const heroSignals = [
  {
    title: 'Governance by design',
    description:
      'Each engagement embeds accountability rituals, policy-grade documentation, and ethics reviews from day zero.',
    icon: ShieldCheck
  },
  {
    title: 'Global research fieldwork',
    description:
      'Civic pilots, climate field labs, and healthcare cohorts ensure evidence travels with every product decision.',
    icon: Globe
  },
  {
    title: 'Systems & philosophy in sync',
    description:
      'Critical theory, computational design, and participatory futures inform infrastructure and user experience choices.',
    icon: Network
  }
];

const atlasHighlights = [
  {
    title: 'Transparent AI Governance',
    description:
      'An international alliance codifying compliance workflows, oversight tooling, and disclosure playbooks for public AI.',
    href: '/atlas/transparent-ai-governance-global-initiative',
    badge: 'Policy Alliance'
  },
  {
    title: 'Human-Centered Safety Systems',
    description:
      'Clinical-grade safety layers, sense-making sessions, and patient advisory panels guiding machine decision support.',
    href: '/atlas/human-centered-safety-systems-healthcare-alliance',
    badge: 'Healthcare'
  },
  {
    title: 'Planetary Compute Stewardship',
    description:
      'Climate intelligence field labs coordinating compute access, measurement, and regenerative incentives worldwide.',
    href: '/atlas/planetary-compute-stewardship-climate-tech',
    badge: 'Climate Tech'
  }
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.18),transparent_60%),linear-gradient(135deg,rgba(2,6,23,0.95) 0%,rgba(11,26,48,0.92) 45%,rgba(30,64,175,0.85) 100%)]" />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={prefersReducedMotion ? { opacity: 0.9, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="pointer-events-none absolute -top-24 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-purple-500/20 blur-3xl"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, rotate: -8 }}
          animate={prefersReducedMotion ? { opacity: 0.35, rotate: -6 } : { opacity: 0.55, rotate: [-12, -6, -10] }}
          transition={{ duration: 14, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -bottom-36 right-[8%] h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-500/20 to-indigo-500/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl"
              >
                <Sparkles className="h-5 w-5 text-indigo-200" />
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/80">
                  Cinematic research atlas
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]"></span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <h1 className="font-ibm-sans text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                  Responsible intelligence, staged for motion and accountability.
                </h1>
                <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
                  Traceremove is the research studio translating philosophical rigor and systems engineering into deployable AI experiences. We choreograph 176 evidence-led blueprints so teams can design, govern, and scale intelligence with confidence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="flex flex-wrap gap-4"
              >
                <PremiumButton href="/atlas" icon={Sparkles} iconPosition="left" size="lg">
                  Explore the atlas
                </PremiumButton>
                <PremiumButton
                  href="/projects"
                  variant="secondary"
                  icon={BookOpen}
                  iconPosition="left"
                  size="lg"
                >
                  View active projects
                </PremiumButton>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true, margin: '-64px' }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    <div className="relative space-y-2">
                      <p className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">{stat.label}</p>
                      <p className="text-sm text-white/70">{stat.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              viewport={{ once: true, margin: '-80px' }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-3xl"
            >
              <motion.span
                aria-hidden
                initial={{ opacity: 0.25, rotate: 0 }}
                animate={prefersReducedMotion ? { opacity: 0.3 } : { opacity: 0.45, rotate: [0, 8, -6, 0] }}
                transition={{ duration: 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/25 via-indigo-400/25 to-sky-400/25 blur-3xl"
              />

              <div className="relative space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                      Live blueprint stories
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      A kinetic backdrop for every route
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {heroSignals.map((signal, index) => (
                    <motion.div
                      key={signal.title}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true, margin: '-64px' }}
                      className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                    >
                      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <signal.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{signal.title}</p>
                        <p className="mt-1 text-sm text-white/70">{signal.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Abstract motion system</p>
                    <p className="mt-2 text-sm text-white/70">
                      PageScene orchestrates gradients, halos, and beams per route to keep transitions cinematic yet performant.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">SEO-ready storytelling</p>
                    <p className="mt-2 text-sm text-white/70">
                      Structured data, canonical paths, and descriptive hero copy ensure the atlas ranks and converts.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-3">
                  {[
                    {
                      src: '/images/lab/lab-hero-1.svg',
                      alt: 'AI research lab collaboration'
                    },
                    {
                      src: '/images/lab/lab-setup-analytics.svg',
                      alt: 'Analytics console abstract'
                    },
                    {
                      src: '/images/lab/lab-whiteboard-research.svg',
                      alt: 'Research whiteboard session'
                    }
                  ].map((image, index) => (
                    <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 33vw, 160px"
                        priority={index === 0}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/65 to-indigo-950/60" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Atlas Spotlights</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              176 cinematic pages stitched across civic, academic, and product realities
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base text-white/70 sm:text-lg">
              Dive into richly produced hero narratives, governance checklists, and motion-enhanced visuals that make complex AI deployments legible for teams and stakeholders alike.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {atlasHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true, margin: '-80px' }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  <span>{highlight.badge}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                    Atlas {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm text-white/70">{highlight.description}</p>
                <Link
                  href={highlight.href}
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-indigo-200"
                >
                  Explore blueprint
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid gap-6 lg:grid-cols-3"
          >
            <FeatureCard
              icon={Sparkles}
              title="Our Mission"
              description="Understand the guiding principles and commitments behind the Traceremove research lab."
              gradient="from-blue-900/40 to-purple-900/40"
              borderColor="border-blue-500/20"
              iconGradient="from-blue-500 to-blue-600"
              href="/about"
            />
            <FeatureCard
              icon={Info}
              title="Platform Map"
              description="Navigate 176 atlas entries, research areas, and interactive tools from a single overview."
              gradient="from-purple-900/40 to-violet-900/40"
              borderColor="border-purple-500/20"
              iconGradient="from-purple-500 to-purple-600"
              href="/site-map"
            />
            <FeatureCard
              icon={BookOpen}
              title="Philosophy & Theory"
              description="Explore essays that connect ethics, phenomenology, and systems design to responsible AI."
              gradient="from-violet-900/40 to-indigo-900/40"
              borderColor="border-violet-500/20"
              iconGradient="from-violet-500 to-violet-600"
              href="/articles"
            />
          </motion.div>
        </div>
      </section>

      {/* Research Areas Section with Premium Glass Effect */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-indigo-950/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-research-text mb-6 typography-premium">
              Research Areas
            </h2>
            <p className="text-xl text-research-text-secondary max-w-4xl mx-auto typography-premium leading-relaxed">
              Focusing on academic rigor and ethical integrity to build transparent and interpretable AI systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={MessageSquare}
                title="Language Models & Ethics"
                description="Examining the moral considerations surrounding large-scale language models"
                gradient="from-blue-900/40 to-cyan-900/40"
                borderColor="border-blue-500/20"
                iconGradient="from-blue-500 to-cyan-500"
                href="/research/human-centered-ai"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Database}
                title="Big Data Architectures"
                description="Developing robust AI frameworks for processing and analysis"
                gradient="from-purple-900/40 to-pink-900/40"
                borderColor="border-purple-500/20"
                iconGradient="from-purple-500 to-pink-500"
                href="/research/big-data-interpretability"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Network}
                title="Cognitive Agents"
                description="Creating intelligent AI systems with advanced decision-making capabilities"
                gradient="from-violet-900/40 to-indigo-900/40"
                borderColor="border-violet-500/20"
                iconGradient="from-violet-500 to-indigo-500"
                href="/research/agentic-systems-tool-use"
              />
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* About Artur Ziganshin Section */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-indigo-950/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-card relative rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_30px_80px_rgba(15,23,42,0.45)] transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white shadow-md ring-1 ring-white/20">
                    <img src="/brand/black-cat-solid.svg?v=2" alt="" aria-hidden className="h-6 w-6" />
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    About Artur Ziganshin
                  </h3>
                </div>
                <div className="hidden sm:flex items-center justify-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple shadow-md">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>

              <p className="mt-4 text-base sm:text-lg text-white/80">
                “The struggle itself toward the heights is enough to fill a person&rsquo;s heart. One must imagine Sisyphus happy.” — Albert Camus
              </p>

              <p className="mt-3 text-sm sm:text-base text-white/70">
                Learn about the background and expertise of our principal investigator.
              </p>

              <div className="mt-6">
                <a href="/about" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white transition-colors hover:border-white/40 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                  <span className="font-medium">Learn more</span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <img src="/brand/black-cat-geo.svg?v=2" alt="" aria-hidden="true" className="cat-runner hidden md:block" />

          </motion.div>
        </div>

      </section>
      {process.env.NEXT_PUBLIC_ASSISTANT_WIDGET !== 'off' && <AssistantWidgetShell compact />}
    </div>
  );
}

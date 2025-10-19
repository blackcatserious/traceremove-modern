'use client';
import AssistantWidgetShell from '@/components/AssistantWidgetShell';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpen,
  Info,
  Sparkles,
  MessageSquare,
  Database,
  Network,
  ArrowRight
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ResearchCard from '@/components/ResearchCard';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import HomeHero from '@/app/HomeHero';

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
  return (
    <AmbientLayoutFrame
      variant="hero"
      innerClassName="gap-0"
      contentClassName="flex flex-col"
      hero={<HomeHero />}
    >

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
                    <img
                      src="/brand/black-cat-solid.svg?v=2"
                      alt=""
                      aria-hidden
                      className="h-6 w-6"
                      loading="lazy"
                      decoding="async"
                    />
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
            <img
              src="/brand/black-cat-geo.svg?v=2"
              alt=""
              aria-hidden="true"
              className="cat-runner hidden md:block"
              loading="lazy"
              decoding="async"
            />

          </motion.div>
        </div>

      </section>
      {process.env.NEXT_PUBLIC_ASSISTANT_WIDGET !== 'off' && <AssistantWidgetShell compact />}
    </AmbientLayoutFrame>
  );
}

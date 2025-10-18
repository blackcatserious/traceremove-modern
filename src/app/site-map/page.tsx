'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Map, Compass, Layers, BookOpen, Users, Sparkles, ShieldCheck, Archive, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import MermaidDiagram from '@/components/MermaidDiagram';

const heroHighlights = [
  {
    value: '176',
    label: 'Atlas blueprints',
    detail: 'Immersive case studies spanning civic tech, healthcare, climate, and policy coalitions.'
  },
  {
    value: '48',
    label: 'Research programmes',
    detail: 'Ongoing investigations covering ethics, infrastructure, interpretability, and agency.'
  },
  {
    value: '22',
    label: 'Operational tools',
    detail: 'Dashboards, scorecards, and orchestration utilities distributed across the platform.'
  }
];

const topLevelRoutes = [
  {
    title: 'Home',
    path: '/',
    description: 'Cinematic entry point with atlas spotlights, hero stats, and featured research trajectories.',
    icon: Sparkles
  },
  {
    title: 'Research',
    path: '/research',
    description: 'Eleven disciplinary corridors mapping methodologies, featured articles, and supporting archives.',
    icon: BookOpen
  },
  {
    title: 'Projects',
    path: '/projects',
    description: 'Delivery portfolio showcasing live programmes, engagement models, and case metrics.',
    icon: Layers
  },
  {
    title: 'Tools',
    path: '/tools',
    description: 'Operational platforms, integration rituals, and launch cadences for research orchestration.',
    icon: Compass
  },
  {
    title: 'Atlas',
    path: '/atlas',
    description: '176 blueprint narratives with filters, spotlight journeys, and context-rich storytelling.',
    icon: Map
  },
  {
    title: 'Academic',
    path: '/academic',
    description: 'CV, syllabi, collaborations, and press coverage that connect the studio to global scholarship.',
    icon: Users
  }
];

const researchClusters = [
  {
    name: 'Ethics & governance',
    routes: [
      { label: 'Ethical AI architecture', href: '/research/ethical-ai-architecture' },
      { label: 'Opacity & responsibility', href: '/research/opacity-responsibility-ai' },
      { label: 'Digital rights & AI', href: '/research/digital-rights-ai' }
    ]
  },
  {
    name: 'Systems & agency',
    routes: [
      { label: 'Agentic systems & tool use', href: '/research/agentic-systems-tool-use' },
      { label: 'Multimodal reasoning', href: '/research/multimodal-reasoning' },
      { label: 'Language & code interoperability', href: '/research/language-code-interoperability' }
    ]
  },
  {
    name: 'Infrastructure & trust',
    routes: [
      { label: 'AI infrastructure for academia', href: '/research/ai-infrastructure-academia' },
      { label: 'Big data interpretability', href: '/research/big-data-interpretability' },
      { label: 'Privacy-preserving AI', href: '/research/privacy-preserving-ai' }
    ]
  }
];

const resourceHubs = [
  {
    title: 'Articles & publications',
    description: 'Editorial analyses, field notes, and philosophical treatises exploring responsible intelligence.',
    links: [
      { label: 'Articles overview', href: '/articles' },
      { label: 'Editorial guardrails', href: '/articles/guardrails-ux-safety' },
      { label: 'Epistemic risk briefings', href: '/articles/epistemic-risks-ai' }
    ]
  },
  {
    title: 'Engagement pathways',
    description: 'Contact, FAQ, assistant, and membership touchpoints for collaborating with the lab.',
    links: [
      { label: 'Contact the lab', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Traceremove assistant', href: '/assistant' }
    ]
  },
  {
    title: 'Operational documents',
    description: 'Whitepapers, legal statements, and governance artefacts for procurement and policy review.',
    links: [
      { label: 'Whitepapers', href: '/whitepapers' },
      { label: 'Ethics statement', href: '/legal/ethics-statement' },
      { label: 'Privacy policy', href: '/legal/privacy-policy' }
    ]
  }
];

const mermaidDiagram = `
flowchart LR
  A[Traceremove Site Map] --> B[Atlas]
  A --> C[Research]
  A --> D[Projects]
  A --> E[Tools]
  A --> F[Academic]
  A --> G[Articles]
  A --> H[Operational Docs]
  C --> C1[Ethics & Governance]
  C --> C2[Systems & Agency]
  C --> C3[Infrastructure & Trust]
  D --> D1[Spotlight Projects]
  D --> D2[Engagement Models]
  E --> E1[Platform Metrics]
  E --> E2[Integration Tracks]
  F --> F1[CV & Press]
  F --> F2[Collaborations]
  H --> H1[Whitepapers]
  H --> H2[Legal & Compliance]
`;

export default function SiteMapPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,26,48,0.9)_45%,rgba(17,24,39,0.95)_100%)]" />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.55, scale: 1 } : { opacity: 0.85, scale: 1, rotate: [0, 8, -6, 0] }}
            transition={{ duration: prefersReducedMotion ? 1.2 : 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/35 via-sky-400/25 to-emerald-400/25 blur-3xl"
          />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.4, scale: 1 } : { opacity: 0.65, scale: 1, rotate: [0, -10, 8, 0] }}
            transition={{ duration: prefersReducedMotion ? 1.4 : 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -bottom-28 right-4 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/25 to-cyan-400/25 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-center">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
              <Map className="h-5 w-5 text-sky-200" />
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Experience navigation</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
            </div>
            <div className="space-y-6">
              <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Navigate every cinematic blueprint, tool, and research corridor with ease.
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-white/75 sm:text-xl">
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

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
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

      <section className="relative border-y border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(14,165,233,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Primary corridors</h2>
            <p className="max-w-3xl text-lg text-white/70">
              Six high-level entry points anchor the navigation, each layering context, metrics, and direct pathways to detailed blueprints.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {topLevelRoutes.map((route) => (
              <motion.div
                key={route.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-3">
                  <route.icon className="h-6 w-6 text-white/70" />
                  <p className="text-lg font-semibold text-white">{route.title}</p>
                </div>
                <p className="mt-3 text-sm text-white/70">{route.description}</p>
                <Link
                  href={route.path}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:text-white"
                >
                  Visit section
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_78%_70%,rgba(236,72,153,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-3">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Research clusters</h2>
            <p className="max-w-3xl text-lg text-white/70">
              Each cluster groups related investigations, making it easier to dive deep or cross-link complementary studies.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {researchClusters.map((cluster) => (
              <motion.div
                key={cluster.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <h3 className="text-lg font-semibold text-white">{cluster.name}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {cluster.routes.map((route) => (
                    <li key={route.href}>
                      <Link href={route.href} className="inline-flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white">
                        <ShieldCheck className="h-4 w-4 text-white/50" />
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(15,118,110,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-3">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Resource hubs</h2>
            <p className="max-w-3xl text-lg text-white/70">
              Orient yourself to editorial content, operational documentation, and collaboration touchpoints.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {resourceHubs.map((hub) => (
              <motion.div
                key={hub.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <h3 className="text-lg font-semibold text-white">{hub.title}</h3>
                <p className="mt-2 text-sm text-white/70">{hub.description}</p>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {hub.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white">
                        <Archive className="h-4 w-4 text-white/50" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(circle_at_75%_72%,rgba(56,189,248,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Architecture overview</h2>
            <p className="mt-3 text-lg text-white/70">A high-level map linking major sections and the relationships between research corridors.</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <MermaidDiagram chart={mermaidDiagram} />
          </div>
        </div>
      </section>
    </div>
  );
}

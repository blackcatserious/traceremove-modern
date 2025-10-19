'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Users,
  ShieldCheck,
  Network,
  BookOpen,
  GraduationCap,
  Languages,
  Calendar,
  Award,
  ArrowRight,
  Activity,
  Layers
} from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';

const leadershipPillars = [
  {
    title: 'Systems philosophy in motion',
    description:
      'A practice that fuses phenomenology, critical theory, and infrastructure design to keep machine intelligence accountable to human experience.',
    icon: Brain,
    accent: 'from-violet-500/40 via-fuchsia-500/30 to-sky-500/30'
  },
  {
    title: 'Evidence-led experimentation',
    description:
      'Longitudinal experiment ladders, instrumentation, and governance rituals that verify outcomes before scaling deployments.',
    icon: Activity,
    accent: 'from-emerald-500/40 via-cyan-500/30 to-blue-500/30'
  },
  {
    title: 'Coalitions over silos',
    description:
      'A diplomacy-first approach that convenes governments, NGOs, and product teams to steward intelligence responsibly.',
    icon: Users,
    accent: 'from-amber-500/40 via-orange-500/30 to-rose-500/30'
  }
];

const researchStacks = [
  {
    title: 'AI Ethics & Governance',
    description: 'Frameworks that weave fairness, interpretability, and policy compliance into every release cadence.',
    icon: ShieldCheck
  },
  {
    title: 'Agentic & Multimodal Systems',
    description: 'Reasoning agents and sensory fusion pipelines that stay observable and controllable in production.',
    icon: Network
  },
  {
    title: 'Data Stewardship',
    description: 'Privacy-preserving data fabrics, secure enclaves, and aligned incentives for global research partners.',
    icon: Layers
  },
  {
    title: 'Language Technologies',
    description: 'Multilingual research assistants, discourse analysis, and cross-cultural interaction design.',
    icon: Languages
  },
  {
    title: 'Philosophy of Technology',
    description: 'Critical investigations into agency, dignity, and social contracts guiding machine behaviour.',
    icon: BookOpen
  },
  {
    title: 'Security & Rights',
    description: 'Digital rights coalitions and policy playbooks that keep civil liberties at the centre of automation.',
    icon: ShieldCheck
  }
];

const networkAlliances = [
  {
    name: 'Traceremove',
    role: 'Founder & CEO',
    description: 'Global research studio orchestrating responsible AI products, policies, and experiences.',
    years: '2020 — Present'
  },
  {
    name: 'Rarematrix',
    role: 'Co-Founder',
    description: 'Data infrastructure and analytics lab aligning compute stewardship with human-centred goals.',
    years: '2019 — Present'
  },
  {
    name: 'Equality Initiative',
    role: 'Founder',
    description: 'International coalition advancing digital rights, cyber justice, and inclusive AI governance.',
    years: '2018 — Present'
  }
];

const educationTimeline = [
  {
    degree: 'Master of Arts in Philosophy',
    institution: 'Kazan Federal University',
    focus: 'Philosophy of technology, ethics, cognitive science',
    year: '2018'
  },
  {
    degree: 'Bachelor of Arts in Philosophy',
    institution: 'Kazan Federal University',
    focus: 'Logic, epistemology, philosophy of mind',
    year: '2016'
  }
];

const languageCapabilities = [
  { language: 'Russian', fluency: 'Native · Research & facilitation' },
  { language: 'English', fluency: 'Fluent · Publication & diplomacy' },
  { language: 'Tatar', fluency: 'Native · Cultural stewardship' },
  { language: 'Serbian', fluency: 'Conversational · Community research' },
  { language: 'Spanish', fluency: 'Intermediate · Field interviews' }
];

const speakingCalendar = [
  {
    event: 'International Conference on AI Safety',
    role: 'Keynote speaker',
    topic: 'Building ethical AI systems for global impact',
    year: '2024'
  },
  {
    event: 'European Conference on AI',
    role: 'Session chair',
    topic: 'Privacy and security in AI systems',
    year: '2023'
  },
  {
    event: 'Philosophy & Technology Symposium',
    role: 'Presenter',
    topic: 'Foundations of machine agency',
    year: '2023'
  },
  {
    event: 'International Symposium on Digital Rights',
    role: 'Panel moderator',
    topic: 'Human dignity in automated decision-making',
    year: '2022'
  }
];

const socialChannels = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/arthur-ziganshin',
    description: 'Professional updates and partnership openings.'
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0000-0002-1234-5678',
    description: 'Scholarly record, citations, and grants.'
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=ArthurZiganshin',
    description: 'Peer-reviewed publications and metrics.'
  },
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Arthur-Ziganshin',
    description: 'Open research collaborations and datasets.'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/blackcatserious',
    description: 'Open-source tooling and reproducible artefacts.'
  }
];

export default function About() {
  return (
    <div className="relative">
      <section className="relative border-y border-white/5 bg-slate-950/60 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_80%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(236,72,153,0.16),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl space-y-4">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Leadership pillars</h2>
            <p className="text-lg text-white/70">
              Artur leads the lab through an intentional blend of philosophical critique, technical execution, and coalition stewardship.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {leadershipPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-60px' }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${pillar.accent}`} />
                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <pillar.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm text-white/75">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Research disciplines</h2>
              <p className="text-lg text-white/70">
                Traceremove choreographs research and delivery across diverse disciplines so every engagement is multi-dimensional and resilient.
              </p>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              Explore research library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchStacks.map((stack) => (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <stack.icon className="mb-4 h-6 w-6 text-white/70" />
                <h3 className="text-lg font-semibold text-white">{stack.title}</h3>
                <p className="mt-2 text-sm text-white/70">{stack.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/80 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(129,140,248,0.16),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(16,185,129,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_0.4fr]">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Alliance network</h2>
                <p className="text-lg text-white/70">
                  Artur cultivates high-trust partnerships that blend policy, industry, and community expertise into every release.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {networkAlliances.map((alliance) => (
                  <div key={alliance.name} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">{alliance.years}</p>
                        <p className="text-xl font-semibold text-white">{alliance.name}</p>
                      </div>
                      <p className="text-sm text-white/70">{alliance.description}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">{alliance.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <h3 className="text-lg font-semibold text-white">Academic foundations</h3>
                <div className="mt-6 space-y-4">
                  {educationTimeline.map((entry) => (
                    <div key={entry.degree} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
                        <span>{entry.year}</span>
                        <GraduationCap className="h-4 w-4 text-white/50" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-white">{entry.degree}</p>
                      <p className="text-xs text-white/60">{entry.institution}</p>
                      <p className="mt-2 text-xs text-white/60">{entry.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <h3 className="text-lg font-semibold text-white">Language fieldwork</h3>
                <ul className="mt-4 space-y-3">
                  {languageCapabilities.map((entry) => (
                    <li key={entry.language} className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3">
                      <span className="text-sm font-semibold text-white">{entry.language}</span>
                      <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">{entry.fluency}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(236,72,153,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Speaking & recognition</h2>
            <p className="mx-auto max-w-3xl text-lg text-white/70">
              Conferences, symposia, and media touchpoints where Artur advances global conversations about responsible intelligence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {speakingCalendar.map((engagement) => (
              <motion.div
                key={`${engagement.event}-${engagement.year}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-60px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  <span>{engagement.year}</span>
                  <Calendar className="h-4 w-4 text-white/60" />
                </div>
                <p className="mt-4 text-base font-semibold text-white">{engagement.event}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-white/60">{engagement.role}</p>
                <p className="mt-3 text-sm text-white/70">{engagement.topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/80 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(16,185,129,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_0.4fr]">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Research analytics</h2>
                <p className="text-lg text-white/70">
                  Publication velocity, impact, and collaboration density are tracked across the Traceremove network to guide future experiments.
                </p>
              </div>

              <InteractiveChart dataFile="publication_metrics.json" chartType="line" title="Publication momentum" className="h-64 w-full rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl" />
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Research footprint</p>
                    <p className="text-2xl font-semibold text-white">Impact pulse</p>
                  </div>
                  <Award className="h-8 w-8 text-white/60" />
                </div>
                <dl className="mt-6 space-y-4 text-sm text-white/70">
                  <div className="flex items-center justify-between">
                    <dt className="font-medium text-white/80">Citations</dt>
                    <dd className="font-semibold text-white">150+</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="font-medium text-white/80">H-index</dt>
                    <dd className="font-semibold text-white">8</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="font-medium text-white/80">Collaborative programmes</dt>
                    <dd className="font-semibold text-white">25+</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <h3 className="text-lg font-semibold text-white">Stay connected</h3>
                <ul className="mt-4 space-y-3">
                  {socialChannels.map((channel) => (
                    <li key={channel.name} className="group flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-white">{channel.name}</p>
                        <p className="text-xs text-white/60">{channel.description}</p>
                      </div>
                      <Link
                        href={channel.url}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 group-hover:text-white"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

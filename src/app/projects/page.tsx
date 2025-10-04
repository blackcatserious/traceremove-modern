'use client';

import AskTraceremoveAI from '@/components/AskTraceremoveAI';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Brain,
  Code,
  Database,
  Zap,
  Shield,
  Search,
  BarChart3,
  Cpu,
  Globe,
  ArrowRight,
  ExternalLink,
  Target,
  Layers,
  Microscope,
  CalendarCheck,
  Workflow,
  Building
} from 'lucide-react';

const projects = [
  {
    id: 'transparent-llms',
    title: 'Transparent LLMs',
    description:
      'Building interpretable and explainable large language models with transparent decision-making processes and comprehensive audit trails.',
    category: 'AI Transparency',
    icon: Brain,
    gradient: 'from-blue-500 to-purple-600',
    features: ['Interpretability', 'Audit Trails', 'Decision Transparency', 'Explainable AI'],
    status: 'Active',
    demoUrl: '/projects/transparent-llms',
    githubUrl: '/projects/transparent-llms',
    progress: 85,
    team: 'AI Ethics Lab',
    duration: '18 months'
  },
  {
    id: 'symbolic-ai',
    title: 'Symbolic AI',
    description:
      'Hybrid symbolic-neural AI systems that combine the reasoning capabilities of symbolic AI with the learning power of neural networks.',
    category: 'Hybrid AI',
    icon: Layers,
    gradient: 'from-green-500 to-teal-600',
    features: ['Symbolic Reasoning', 'Neural Integration', 'Knowledge Graphs', 'Logic Programming'],
    status: 'Active',
    demoUrl: '/projects/symbolic-ai',
    githubUrl: '/projects/symbolic-ai',
    progress: 72,
    team: 'Reasoning Systems',
    duration: '24 months'
  },
  {
    id: 'digital-identity-agency',
    title: 'Digital Identity & Agency',
    description:
      'Exploring digital identity frameworks and human agency in AI-mediated environments with focus on privacy and autonomy.',
    category: 'Digital Rights',
    icon: Shield,
    gradient: 'from-purple-500 to-pink-600',
    features: ['Identity Management', 'Privacy Protection', 'User Agency', 'Decentralized Systems'],
    status: 'Research',
    demoUrl: '/projects/digital-identity-agency',
    githubUrl: '/projects/digital-identity-agency',
    progress: 45,
    team: 'Digital Rights Lab',
    duration: '12 months'
  },
  {
    id: 'semantic-data-pipelines',
    title: 'Semantic Data Pipelines',
    description:
      'Advanced data processing pipelines with semantic understanding, automated quality assessment, and intelligent data transformation.',
    category: 'Data Infrastructure',
    icon: Database,
    gradient: 'from-orange-500 to-red-600',
    features: ['Semantic Processing', 'Quality Assessment', 'Auto Transformation', 'Pipeline Optimization'],
    status: 'Active',
    demoUrl: '/projects/semantic-data-pipelines',
    githubUrl: '/projects/semantic-data-pipelines',
    progress: 90,
    team: 'Data Systems',
    duration: '15 months'
  },
  {
    id: 'nlp-evaluation',
    title: 'NLP Evaluation',
    description:
      'Comprehensive evaluation framework for natural language processing systems with focus on robustness, fairness, and real-world performance.',
    category: 'Evaluation',
    icon: BarChart3,
    gradient: 'from-indigo-500 to-blue-600',
    features: ['Robustness Testing', 'Fairness Metrics', 'Performance Analysis', 'Benchmark Suite'],
    status: 'Active',
    demoUrl: '/projects/nlp-evaluation',
    githubUrl: '/projects/nlp-evaluation',
    progress: 78,
    team: 'Evaluation Lab',
    duration: '20 months'
  },
  {
    id: 'ethics-multimodal-ai',
    title: 'Ethics in Multimodal AI',
    description:
      'Ethical frameworks and guidelines for multimodal AI systems, addressing bias, fairness, and responsible deployment across modalities.',
    category: 'AI Ethics',
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Ethical Frameworks', 'Bias Detection', 'Multimodal Analysis', 'Responsible AI'],
    status: 'Research',
    demoUrl: '/projects/ethics-multimodal-ai',
    githubUrl: '/projects/ethics-multimodal-ai',
    progress: 60,
    team: 'AI Ethics Lab',
    duration: '16 months'
  },
  {
    id: 'real-world-ai-deployments',
    title: 'Real-World AI Deployments',
    description:
      'Case studies and frameworks for deploying AI systems in real-world environments with focus on reliability, scalability, and impact.',
    category: 'AI Deployment',
    icon: Target,
    gradient: 'from-rose-500 to-pink-600',
    features: ['Deployment Frameworks', 'Case Studies', 'Impact Assessment', 'Scalability Solutions'],
    status: 'Active',
    demoUrl: '/projects/real-world-ai-deployments',
    githubUrl: '/projects/real-world-ai-deployments',
    progress: 82,
    team: 'Deployment Lab',
    duration: '22 months'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'AI Transparency', label: 'AI Transparency', count: projects.filter((p) => p.category === 'AI Transparency').length },
  { id: 'Hybrid AI', label: 'Hybrid AI', count: projects.filter((p) => p.category === 'Hybrid AI').length },
  { id: 'Digital Rights', label: 'Digital Rights', count: projects.filter((p) => p.category === 'Digital Rights').length },
  { id: 'Data Infrastructure', label: 'Data Infrastructure', count: projects.filter((p) => p.category === 'Data Infrastructure').length },
  { id: 'Evaluation', label: 'Evaluation', count: projects.filter((p) => p.category === 'Evaluation').length },
  { id: 'AI Ethics', label: 'AI Ethics', count: projects.filter((p) => p.category === 'AI Ethics').length },
  { id: 'AI Deployment', label: 'AI Deployment', count: projects.filter((p) => p.category === 'AI Deployment').length }
];

const deliveryMetrics = [
  {
    label: 'Implementation velocity',
    value: '6 weeks',
    caption: 'Average time from research drop to live prototype',
    icon: Zap
  },
  {
    label: 'Embedded partners',
    value: '22',
    caption: 'Governments, universities, and venture teams in active builds',
    icon: Building
  },
  {
    label: 'Operational playbooks',
    value: '48',
    caption: 'Reusable delivery frameworks across AI product lifecycles',
    icon: Workflow
  }
];

const studioDisciplines = [
  {
    title: 'Systems architecture',
    description: 'Infrastructure audits, compliance automation, and interpretable model orchestration.',
    icon: Cpu
  },
  {
    title: 'Responsible deployment',
    description: 'Risk modelling, stakeholder briefings, and deployment rehearsals with ethical guardrails.',
    icon: Shield
  },
  {
    title: 'Motion storytelling',
    description: 'Cinematic visual systems and interactive demos that help teams internalize impact pathways.',
    icon: ExternalLink
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const spotlightProjects = filteredProjects
    .filter((project) => project.status === 'Active')
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3);
  const remainingProjects = filteredProjects.filter((project) => !spotlightProjects.includes(project));

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
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

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <section className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
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
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white">
                Book a delivery workshop
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Browse the project lab</h2>
                <p className="max-w-2xl text-sm text-white/70">
                  Filter by programme focus or search for specific capabilities. Each project ships with an atlas of documentation, success metrics, and cinematic interfaces ready for stakeholders.
                </p>
              </div>
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search projects, features, or teams"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 py-3 pl-12 pr-4 font-ibm-sans text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-white/40 bg-white/15 text-white shadow-[0_20px_45px_rgba(14,165,233,0.35)]'
                      : 'border-white/15 bg-white/5 text-white/65 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-white/40">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {spotlightProjects.length > 0 && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Studio spotlight</p>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">High velocity programmes</h3>
              </div>
              <Link href="/atlas" className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white md:inline-flex">
                Explore project case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {spotlightProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.5)] backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent text-white">
                        <project.icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{project.category}</p>
                        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">{project.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                        <CalendarCheck className="h-3.5 w-3.5" />
                        {project.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-200">
                        <Zap className="h-3.5 w-3.5" /> {project.progress}% complete
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-white/60">
                      {project.features.slice(0, 3).map((feature) => (
                        <span key={`${project.id}-${feature}`} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                          <Code className="h-3.5 w-3.5" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={project.demoUrl}
                        className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white/30 hover:text-white"
                      >
                        View brief
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href={project.githubUrl}
                        className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white/30 hover:text-white"
                      >
                        Open docs
                        <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Project library</p>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">More initiatives from the studio</h3>
          </div>

          {remainingProjects.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {remainingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <project.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{project.category}</p>
                        <h4 className="text-base font-semibold text-white">{project.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/65">{project.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                        <CalendarCheck className="h-3.5 w-3.5" />
                        {project.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                        <Brain className="h-3.5 w-3.5" />
                        {project.team}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={project.demoUrl}
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
                  >
                    View overview
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/60">
              No additional projects match this view yet — clear filters to see the entire delivery catalogue.
            </div>
          )}
        </section>

        <section className="grid gap-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/90 p-10 shadow-[0_50px_120px_rgba(15,23,42,0.6)] backdrop-blur-3xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Engagement models</p>
            <h3 className="text-3xl font-semibold text-white">Ways to collaborate with the project studio</h3>
            <p className="text-sm text-white/70">
              We combine research, delivery, and cinematic storytelling to help teams adopt responsible intelligence. Programmes flex from rapid explorations to long-term embedded collaborations.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Discovery sprints</p>
                <p className="mt-2 text-sm text-white/70">
                  3-week intensives aligning research goals with stakeholders, culminating in motion-rich roadmaps.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Embedded pods</p>
                <p className="mt-2 text-sm text-white/70">
                  Cross-functional teams integrate with your org to deliver accountable AI capabilities end-to-end.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Governance retainers</p>
                <p className="mt-2 text-sm text-white/70">
                  Ongoing audits, documentation, and training to keep production systems transparent and trusted.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Executive briefings</p>
                <p className="mt-2 text-sm text-white/70">
                  Cinematic updates and decision frameworks for boards, regulators, and community partners.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_100px_rgba(15,23,42,0.55)]">
            <motion.span
              aria-hidden
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={prefersReducedMotion ? { opacity: 0.35, scale: 1 } : { opacity: 0.45, scale: [1, 1.03, 1], rotate: [0, 6, -4, 0] }}
              transition={{ duration: 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-400/20 via-purple-500/25 to-blue-500/25 blur-3xl"
            />
            <div className="relative space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Delivery rituals
              </div>
              <p className="text-lg font-semibold text-white">
                Weekly showcases, transparent scorecards, and partner retros ensure every sprint stays accountable and cinematic.
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400" />
                  Dedicated motion libraries bring prototypes and governance actions to life across devices.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-rose-400" />
                  Research instrumentation captures qualitative and quantitative signals for constant iteration.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400" />
                  Stakeholder workshops translate findings into policies, product briefs, and public communications.
                </li>
              </ul>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
              >
                Plan a collaboration
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(15,23,42,0.65)] backdrop-blur-3xl">
          <AskTraceremoveAI />
        </section>
      </div>
    </div>
  );
}

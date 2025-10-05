'use client';

import AssistantWidgetShell from '@/components/AssistantWidgetShell';
import KnowledgeBaseExplorerShell from '@/components/KnowledgeBaseExplorerShell';

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
  Play,
  Download,
  Calculator,
  PieChart,
  BookMarked,
  Target,
  MonitorSmartphone,
  Sparkles,
  Gauge
} from 'lucide-react';

const tools = [
  {
    id: 'ai-research-dashboard',
    title: 'AI Research Dashboard',
    description:
      'Comprehensive dashboard for tracking AI research progress, metrics, and collaborative insights across multiple projects and teams.',
    category: 'Research Analytics',
    icon: BarChart3,
    gradient: 'from-blue-500 to-purple-600',
    features: ['Project Tracking', 'Collaboration Tools', 'Performance Metrics', 'Research Insights'],
    status: 'Available',
    demoUrl: '/tools/ai-research-dashboard',
    githubUrl: '/tools/ai-research-dashboard',
    downloadCount: '2.8k'
  },
  {
    id: 'semantic-search-tool',
    title: 'Semantic Search Tool',
    description:
      'Advanced semantic search engine for research papers, code repositories, and knowledge bases with AI-powered understanding.',
    category: 'Search & Discovery',
    icon: Search,
    gradient: 'from-green-500 to-teal-600',
    features: ['Semantic Understanding', 'Multi-modal Search', 'Knowledge Graphs', 'Context Awareness'],
    status: 'Available',
    demoUrl: '/tools/semantic-search-tool',
    githubUrl: '/tools/semantic-search-tool',
    downloadCount: '3.2k'
  },
  {
    id: 'privacy-score-calculator',
    title: 'Privacy Score Calculator',
    description:
      'Evaluate and score the privacy implications of AI systems and data processing pipelines with actionable recommendations.',
    category: 'Privacy & Security',
    icon: Calculator,
    gradient: 'from-purple-500 to-pink-600',
    features: ['Privacy Assessment', 'Risk Scoring', 'Compliance Checking', 'Recommendations'],
    status: 'Available',
    demoUrl: '/tools/privacy-score-calculator',
    githubUrl: '/tools/privacy-score-calculator',
    downloadCount: '1.9k'
  },
  {
    id: 'data-visualization-playground',
    title: 'Data Visualization Playground',
    description:
      'Interactive playground for creating sophisticated data visualizations and exploring AI model behaviors through visual analytics.',
    category: 'Visualization',
    icon: PieChart,
    gradient: 'from-orange-500 to-red-600',
    features: ['Interactive Charts', 'Model Visualization', 'Custom Dashboards', 'Export Tools'],
    status: 'Available',
    demoUrl: '/tools/data-visualization-playground',
    githubUrl: '/tools/data-visualization-playground',
    downloadCount: '2.1k'
  },
  {
    id: 'paper-summarizer',
    title: 'Paper Summarizer',
    description:
      'AI-powered tool for automatically summarizing research papers, extracting key insights, and generating structured reviews.',
    category: 'Research Tools',
    icon: BookMarked,
    gradient: 'from-indigo-500 to-blue-600',
    features: ['Auto Summarization', 'Key Insights', 'Citation Analysis', 'Structured Reviews'],
    status: 'Available',
    demoUrl: '/tools/paper-summarizer',
    githubUrl: '/tools/paper-summarizer',
    downloadCount: '4.1k'
  },
  {
    id: 'language-model-comparison',
    title: 'Language Model Comparison',
    description:
      'Comprehensive comparison tool for evaluating different language models across various tasks, metrics, and use cases.',
    category: 'Model Evaluation',
    icon: Brain,
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Model Benchmarking', 'Performance Analysis', 'Cost Comparison', 'Task-specific Evaluation'],
    status: 'Available',
    demoUrl: '/tools/language-model-comparison',
    githubUrl: '/tools/language-model-comparison',
    downloadCount: '3.7k'
  },
  {
    id: 'annotation-demo',
    title: 'Annotation Demo',
    description:
      'Interactive demonstration of AI-assisted annotation tools for various data types including text, images, and structured data.',
    category: 'Data Annotation',
    icon: Target,
    gradient: 'from-rose-500 to-pink-600',
    features: ['Multi-modal Annotation', 'AI Assistance', 'Quality Control', 'Export Formats'],
    status: 'Available',
    demoUrl: '/tools/annotation-demo',
    githubUrl: '/tools/annotation-demo',
    downloadCount: '1.6k'
  }
];

const categories = [
  { id: 'all', label: 'All Tools', count: tools.length },
  { id: 'Research Analytics', label: 'Research Analytics', count: tools.filter((tool) => tool.category === 'Research Analytics').length },
  { id: 'Search & Discovery', label: 'Search & Discovery', count: tools.filter((tool) => tool.category === 'Search & Discovery').length },
  { id: 'Privacy & Security', label: 'Privacy & Security', count: tools.filter((tool) => tool.category === 'Privacy & Security').length },
  { id: 'Visualization', label: 'Visualization', count: tools.filter((tool) => tool.category === 'Visualization').length },
  { id: 'Research Tools', label: 'Research Tools', count: tools.filter((tool) => tool.category === 'Research Tools').length },
  { id: 'Model Evaluation', label: 'Model Evaluation', count: tools.filter((tool) => tool.category === 'Model Evaluation').length },
  { id: 'Data Annotation', label: 'Data Annotation', count: tools.filter((tool) => tool.category === 'Data Annotation').length }
];

const platformMetrics = [
  {
    label: 'Active workspaces',
    value: '12.4k',
    caption: 'Teams using the lab’s tooling stack',
    icon: Gauge
  },
  {
    label: 'Daily automations',
    value: '48k',
    caption: 'Compliance checks and governance tasks automated',
    icon: Sparkles
  },
  {
    label: 'Average setup time',
    value: '8 min',
    caption: 'Spin up a new workspace with guided onboarding',
    icon: MonitorSmartphone
  }
];

const integrationTracks = [
  {
    title: 'Governance automation',
    description: 'Policy checks, audit trails, and consent management operate as background rituals.',
    icon: Shield
  },
  {
    title: 'Insight acceleration',
    description: 'Semantic search and summarisation compress weeks of research review into minutes.',
    icon: Search
  },
  {
    title: 'Storytelling systems',
    description: 'Motion dashboards, visual notebooks, and export kits keep stakeholders aligned.',
    icon: PieChart
  }
];

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const prefersReducedMotion = useReducedMotion();

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const spotlightTools = filteredTools.slice(0, 3);
  const remainingTools = filteredTools.slice(3);

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
          animate={prefersReducedMotion ? { opacity: 0.75, scale: 1 } : { opacity: 0.85, scale: [1, 1.04, 1] }}
          transition={{ duration: 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -top-36 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/25 via-indigo-500/20 to-purple-500/25 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.3, rotate: -10 }}
          animate={prefersReducedMotion ? { opacity: 0.35, rotate: -6 } : { opacity: 0.45, rotate: [-12, -6, -10] }}
          transition={{ duration: 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-44 right-[12%] h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-500/15 to-blue-500/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(129,140,248,0.18),transparent_55%),linear-gradient(180deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.9)_45%,rgba(15,23,42,0.94)_100%)]" />
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
              <Gauge className="h-5 w-5 text-sky-200" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Traceremove tooling</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="font-ibm-sans text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Operational tools for governable, cinematic intelligence.
              </h1>
              <p className="max-w-2xl text-lg text-white/80">
                Automate governance, surface insight, and narrate progress with a suite of motion-rich utilities. Every tool connects to the 156 blueprint atlas and can be deployed across research, policy, and product teams within minutes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {platformMetrics.map((metric, index) => (
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
                Integration tracks
              </div>
              <div className="space-y-4">
                {integrationTracks.map((track) => (
                  <div key={track.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <track.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white">{track.title}</p>
                      <p className="text-sm text-white/70">{track.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white">
                Schedule a tooling tour
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
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Browse the tool stack</h2>
                <p className="max-w-2xl text-sm text-white/70">
                  Filter by capability or search for tasks. Every utility includes motion-rich demos, governance defaults, and export kits for research, legal, and product stakeholders.
                </p>
              </div>
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search tools, features, or categories"
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
                      ? 'border-white/40 bg-white/15 text-white shadow-[0_20px_45px_rgba(59,130,246,0.35)]'
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

        {spotlightTools.length > 0 && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Tooling spotlight</p>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">High adoption utilities</h3>
              </div>
              <Link href="/atlas" className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white md:inline-flex">
                View atlas integrations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {spotlightTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
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
                        <tool.icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{tool.category}</p>
                        <h4 className="text-lg font-semibold text-white">{tool.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">{tool.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                        <Download className="h-3.5 w-3.5" />
                        {tool.downloadCount} installs
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-200">
                        <Zap className="h-3.5 w-3.5" /> Automation ready
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-white/60">
                      {tool.features.slice(0, 3).map((feature) => (
                        <span key={`${tool.id}-${feature}`} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                          <Code className="h-3.5 w-3.5" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={tool.demoUrl}
                        className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white/30 hover:text-white"
                      >
                        Launch demo
                        <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      </Link>
                      <Link
                        href={tool.githubUrl}
                        className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white/30 hover:text-white"
                      >
                        View docs
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
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Tool library</p>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Explore more utilities</h3>
          </div>

          {remainingTools.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {remainingTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <tool.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{tool.category}</p>
                        <h4 className="text-base font-semibold text-white">{tool.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/65">{tool.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                        <Download className="h-3.5 w-3.5" />
                        {tool.downloadCount} installs
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                        <Play className="h-3.5 w-3.5" />
                        Demo ready
                      </span>
                    </div>
                  </div>
                  <Link
                    href={tool.demoUrl}
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
                  >
                    Open tool
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/60">
              No other tools match this query — reset filters to reveal the full stack.
            </div>
          )}
        </section>

        <section className="grid gap-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/90 p-10 shadow-[0_50px_120px_rgba(15,23,42,0.6)] backdrop-blur-3xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Launch rituals</p>
            <h3 className="text-3xl font-semibold text-white">How we roll out tooling across teams</h3>
            <p className="text-sm text-white/70">
              Tool deployments arrive with onboarding animations, governance defaults, and reporting dashboards so adoption feels cinematic yet accountable from day one.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Motion onboarding</p>
                <p className="mt-2 text-sm text-white/70">
                  Guided experiences illustrate workflows, risk checks, and data protections using abstract motion design.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Governance starters</p>
                <p className="mt-2 text-sm text-white/70">
                  Pre-built policy templates, consent language, and evidence capture keep compliance effortless.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Insight loops</p>
                <p className="mt-2 text-sm text-white/70">
                  Weekly signals tie usage analytics to research questions and partner commitments.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Stakeholder dashboards</p>
                <p className="mt-2 text-sm text-white/70">
                  Live dashboards ensure leadership, practitioners, and community partners share the same view.
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
                Support cadence
              </div>
              <p className="text-lg font-semibold text-white">
                Dedicated enablement sessions, async walkthroughs, and on-call strategy keep the platform resilient and human.
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400" />
                  Multi-modal knowledge base with GIFs, looping motion clips, and text transcripts for accessibility.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-rose-400" />
                  Co-design sessions ensure every deployment reflects partner values, rights, and cultural nuances.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400" />
                  Shared analytics feed into research loops, enabling constant improvement and accountability.
                </li>
              </ul>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
              >
                Start a rollout
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <KnowledgeBaseExplorerShell
          title="Assistant-aligned insights"
          description="Preview the instrumentation, evaluation, and automation briefs the chatbot draws from when guiding teams through the Traceremove tooling stack."
        />

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(15,23,42,0.65)] backdrop-blur-3xl">
          <AssistantWidgetShell compact={false} />
        </section>
      </div>
    </div>
  );
}

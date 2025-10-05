'use client';

import AssistantWidgetShell from '@/components/AssistantWidgetShell';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BookOpen,
  Brain,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Search,
  ArrowRight,
  Clock,
  Tag,
  Calendar,
  User,
  Eye,
  Layers,
  PenSquare
} from 'lucide-react';

const researchArticles = [
  {
    id: 'guardrails-ux-safety',
    title: 'Guardrails in UX Safety: Designing Protective User Experiences',
    description:
      'Comprehensive analysis of user experience safety mechanisms in AI applications, exploring design patterns that protect users from harmful content and interactions.',
    category: 'UX Safety',
    icon: Shield,
    gradient: 'from-green-500 to-teal-600',
    tags: ['UX Design', 'Safety', 'User Protection', 'Interface Design'],
    readTime: '12 min read',
    publishDate: '2024-01-15',
    featured: true,
    href: '/articles/guardrails-ux-safety',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.8k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'cost-aware-llm-serving',
    title: 'Cost-Aware LLM Serving: Optimizing AI Infrastructure Economics',
    description:
      'Strategic approaches to cost optimization in large language model deployment, covering resource allocation, scaling strategies, and economic efficiency.',
    category: 'Infrastructure',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-purple-600',
    tags: ['Cost Optimization', 'LLM Serving', 'Infrastructure', 'Economics'],
    readTime: '15 min read',
    publishDate: '2024-01-12',
    featured: true,
    href: '/articles/cost-aware-llm-serving',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '3.2k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'agent-evaluation-beyond-win-rates',
    title: 'Agent Evaluation Beyond Win-Rates: Comprehensive Assessment Frameworks',
    description:
      'Moving beyond simple win-rate metrics to develop comprehensive evaluation frameworks for AI agents, including reliability, robustness, and real-world performance.',
    category: 'Evaluation',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-600',
    tags: ['Agent Evaluation', 'Metrics', 'Assessment', 'Performance'],
    readTime: '18 min read',
    publishDate: '2024-01-10',
    featured: true,
    href: '/articles/agent-evaluation-beyond-win-rates',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true,
    views: '4.1k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'philosophy-machine-agency',
    title: 'Philosophy of Machine Agency: Autonomy and Responsibility in AI',
    description:
      'Philosophical exploration of machine agency, examining questions of autonomy, intentionality, and moral responsibility in artificial intelligence systems.',
    category: 'Philosophy',
    icon: BookOpen,
    gradient: 'from-indigo-500 to-blue-600',
    tags: ['Philosophy', 'Machine Agency', 'Ethics', 'Autonomy'],
    readTime: '22 min read',
    publishDate: '2024-01-08',
    featured: false,
    href: '/articles/philosophy-machine-agency',
    hasInteractiveCharts: false,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '1.9k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'epistemic-risks-ai',
    title: 'Epistemic Risks in AI: Knowledge, Truth, and Uncertainty',
    description:
      'Analysis of epistemic risks in AI systems, exploring how artificial intelligence affects human knowledge, truth-seeking, and our relationship with uncertainty.',
    category: 'Philosophy',
    icon: Globe,
    gradient: 'from-orange-500 to-red-600',
    tags: ['Epistemology', 'Risk Analysis', 'Knowledge', 'Uncertainty'],
    readTime: '20 min read',
    publishDate: '2024-01-05',
    featured: false,
    href: '/articles/epistemic-risks-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.3k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'linguistic-symbolism-ml',
    title: 'Linguistic Symbolism in ML: Language, Meaning, and Representation',
    description:
      'Exploration of linguistic symbolism in machine learning, examining how AI systems process language, create meaning, and represent symbolic knowledge.',
    category: 'Language',
    icon: BookOpen,
    gradient: 'from-emerald-500 to-green-600',
    tags: ['Language', 'Symbolism', 'Representation', 'Semantics'],
    readTime: '16 min read',
    publishDate: '2024-01-03',
    featured: false,
    href: '/articles/linguistic-symbolism-ml',
    hasInteractiveCharts: false,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true,
    views: '1.7k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'ai-human-dignity',
    title: 'AI & Human Dignity: Ethical Considerations in AI Deployment',
    description:
      'Examining the ethical implications of AI deployment in relation to human dignity, autonomy, and societal impacts, emphasizing ethical design practices.',
    category: 'Ethics',
    icon: Shield,
    gradient: 'from-rose-500 to-pink-600',
    tags: ['Ethics', 'Human Dignity', 'AI Deployment', 'Societal Impact'],
    readTime: '19 min read',
    publishDate: '2024-01-01',
    featured: false,
    href: '/articles/ai-human-dignity',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.4k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'philosophy-responsibility',
    title: 'Philosophy of Responsibility in AI Systems',
    description:
      'Philosophical inquiry into responsibility in AI systems, examining the ethical implications of delegating decision-making to algorithms.',
    category: 'Ethics',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-600',
    tags: ['Responsibility', 'Ethics', 'AI Systems', 'Decision-making'],
    readTime: '17 min read',
    publishDate: '2023-12-28',
    featured: false,
    href: '/articles/philosophy-responsibility',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.1k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'comparative-llm-analysis',
    title: 'Comparative LLM Analysis: Evaluating Model Capabilities',
    description:
      'Comparative analysis of large language models, evaluating capabilities, strengths, and weaknesses across different tasks and domains.',
    category: 'Evaluation',
    icon: Layers,
    gradient: 'from-indigo-500 to-blue-600',
    tags: ['LLM Analysis', 'Model Evaluation', 'Comparative Study', 'Capabilities'],
    readTime: '21 min read',
    publishDate: '2023-12-25',
    featured: false,
    href: '/articles/comparative-llm-analysis',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.6k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'case-study-ai-social-systems',
    title: 'Case Study: AI in Social Systems',
    description:
      'Case study exploring the deployment of AI systems in social contexts, analyzing impacts on communities, governance, and social structures.',
    category: 'Case Study',
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-600',
    tags: ['Case Study', 'Social Systems', 'Governance', 'Community Impact'],
    readTime: '18 min read',
    publishDate: '2023-12-20',
    featured: false,
    href: '/articles/case-study-ai-social-systems',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true,
    views: '2.0k',
    author: 'Artur Ziganshin'
  }
];

const articleCategories = [
  { id: 'all', label: 'All Articles', count: researchArticles.length },
  { id: 'UX Safety', label: 'UX Safety', count: researchArticles.filter((article) => article.category === 'UX Safety').length },
  { id: 'Infrastructure', label: 'Infrastructure', count: researchArticles.filter((article) => article.category === 'Infrastructure').length },
  { id: 'Evaluation', label: 'Evaluation', count: researchArticles.filter((article) => article.category === 'Evaluation').length },
  { id: 'Philosophy', label: 'Philosophy', count: researchArticles.filter((article) => article.category === 'Philosophy').length },
  { id: 'Language', label: 'Language', count: researchArticles.filter((article) => article.category === 'Language').length },
  { id: 'Ethics', label: 'Ethics', count: researchArticles.filter((article) => article.category === 'Ethics').length },
  { id: 'Case Study', label: 'Case Study', count: researchArticles.filter((article) => article.category === 'Case Study').length }
];

const publishingMetrics = [
  {
    label: 'Published essays',
    value: '156',
    caption: 'Research-backed narratives in the atlas',
    icon: Calendar
  },
  {
    label: 'Monthly readers',
    value: '82k',
    caption: 'Practitioners following Traceremove insights',
    icon: Eye
  },
  {
    label: 'Editorial cadence',
    value: 'Weekly',
    caption: 'New releases every Friday',
    icon: PenSquare
  }
];

const editorialHighlights = [
  {
    title: 'Investigative storytelling',
    description: 'Each article layers qualitative testimony with metrics and motion to anchor responsible intelligence debates.',
    icon: BookOpen
  },
  {
    title: 'Applied philosophy',
    description: 'Theory meets delivery with practical checklists, policy drafts, and design prompts ready for teams.',
    icon: Brain
  },
  {
    title: 'Global voices',
    description: 'Insights draw from civic tech partners, public institutions, and communities across 30+ countries.',
    icon: Globe
  }
];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const prefersReducedMotion = useReducedMotion();

  const filteredArticles = useMemo(() => {
    return researchArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticles = filteredArticles.filter((article) => article.featured);
  const supportingArticles = filteredArticles.filter((article) => !article.featured);

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
          className="absolute -bottom-44 left-[12%] h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-500/15 to-blue-500/20 blur-3xl"
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
              <BookOpen className="h-5 w-5 text-sky-200" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Editorial program</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="font-ibm-sans text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Essays that choreograph accountability, systems design, and philosophy.
              </h1>
              <p className="max-w-2xl text-lg text-white/80">
                The editorial program chronicles how responsible intelligence is practiced. Stories weave motion design, field interviews, and rigorous data to keep researchers, policymakers, and builders aligned.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {publishingMetrics.map((metric, index) => (
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
                Editorial highlights
              </div>
              <div className="space-y-4">
                {editorialHighlights.map((highlight) => (
                  <div key={highlight.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <highlight.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white">{highlight.title}</p>
                      <p className="text-sm text-white/70">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/atlas" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white">
                Discover atlas storytelling
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
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Browse the latest insights</h2>
                <p className="max-w-2xl text-sm text-white/70">
                  Search across ethical frameworks, systems design essays, and philosophical explorations. Every piece links to working documents, policy drafts, and motion prototypes.
                </p>
              </div>
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search articles, topics, or authors"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 py-3 pl-12 pr-4 font-ibm-sans text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {articleCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-white/40 bg-white/15 text-white shadow-[0_20px_45px_rgba(99,102,241,0.35)]'
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

        {featuredArticles.length > 0 && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Feature stories</p>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">Editorial spotlights</h3>
              </div>
              <Link href="/atlas" className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white md:inline-flex">
                View cinematic atlas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
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
                        <article.icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{article.category}</p>
                        <h4 className="text-lg font-semibold text-white">{article.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">{article.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                        <User className="h-3.5 w-3.5" />
                        {article.author}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-200">
                        <Eye className="h-3.5 w-3.5" /> {article.views} views
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-white/60">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={`${article.id}-${tag}`} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                          <Tag className="h-3.5 w-3.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={article.href}
                      className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
                    >
                      Read story
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Archive</p>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">All research essays</h3>
          </div>

          {supportingArticles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {supportingArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <article.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{article.category}</p>
                        <h4 className="text-base font-semibold text-white">{article.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/65">{article.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.publishDate}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={article.href}
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
                  >
                    Open article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/60">
              No additional essays match this view — reset filters or explore the featured spotlights above.
            </div>
          )}
        </section>

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(15,23,42,0.65)] backdrop-blur-3xl">
          <AssistantWidgetShell compact={false} />
        </section>
      </div>
    </div>
  );
}

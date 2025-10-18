'use client';

import AssistantWidgetShell from '@/components/AssistantWidgetShell';
import BackgroundLayers from '@/components/BackgroundLayers';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Search,
  Clock,
  Tag,
  ArrowRight,
  BookOpen,
  Brain,
  Zap,
  Microscope,
  Shield,
  Globe,
  TrendingUp,
  Layers,
  LineChart
} from 'lucide-react';

const researchCategories = [
  { id: 'all', label: 'All Research', count: 11 },
  { id: 'ai-architecture', label: 'AI Architecture', count: 4 },
  { id: 'ethics', label: 'AI Ethics', count: 4 },
  { id: 'security-privacy', label: 'Security & Privacy', count: 2 },
  { id: 'infrastructure', label: 'Infrastructure', count: 2 },
  { id: 'philosophy', label: 'Philosophy', count: 1 }
];

const researchArticles = [
  {
    id: 'agentic-systems-tool-use',
    title: 'Agentic Systems & Tool Use: Building Autonomous Reasoning Capabilities',
    description:
      'Exploring how AI agents can effectively use tools and reason about complex multi-step problems. This research examines the architecture patterns, failure modes, and recovery strategies in agentic systems.',
    category: 'ai-architecture',
    tags: ['Agentic AI', 'Tool Use', 'Reasoning', 'Architecture'],
    readTime: '13 min read',
    publishDate: '2024-01-15',
    featured: true,
    icon: Brain,
    gradient: 'from-primary-500 to-secondary-500',
    href: '/research/agentic-systems-tool-use',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true
  },
  {
    id: 'ethical-ai-architecture',
    title: 'Ethical AI Architecture: Building Responsible AI Systems',
    description:
      'Comprehensive framework for designing AI systems with built-in ethical considerations. Exploring fairness, transparency, accountability, and human-centered design principles in AI architecture.',
    category: 'ethics',
    tags: ['Ethics', 'Architecture', 'Fairness', 'Transparency'],
    readTime: '16 min read',
    publishDate: '2024-01-12',
    featured: true,
    icon: Shield,
    gradient: 'from-accent-ai-purple to-accent-lab-purple',
    href: '/research/ethical-ai-architecture',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true
  },
  {
    id: 'multimodal-reasoning',
    title: 'Multimodal Reasoning: Integrating Vision, Language, and Logic',
    description:
      'Advanced research in multimodal AI systems that can reason across different modalities. Examining cross-modal attention, unified representations, and emergent reasoning capabilities.',
    category: 'ai-architecture',
    tags: ['Multimodal', 'Reasoning', 'Vision-Language', 'Logic'],
    readTime: '14 min read',
    publishDate: '2024-01-10',
    featured: true,
    icon: Brain,
    gradient: 'from-blue-500 to-purple-600',
    href: '/research/multimodal-reasoning',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true
  },
  {
    id: 'privacy-preserving-ai',
    title: 'Privacy-Preserving AI: Secure and Private Machine Learning',
    description:
      'Developing AI systems that protect user privacy while maintaining high performance. Focus on differential privacy, federated learning, homomorphic encryption, and secure multi-party computation.',
    category: 'security-privacy',
    tags: ['Privacy', 'Security', 'Federated Learning', 'Encryption'],
    readTime: '12 min read',
    publishDate: '2024-01-08',
    featured: true,
    icon: Shield,
    gradient: 'from-green-500 to-teal-600',
    href: '/research/privacy-preserving-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'big-data-interpretability',
    title: 'Big Data Interpretability: Making Sense of Complex AI Decisions',
    description:
      'Research into interpretable AI methods for large-scale data processing. Exploring explainable AI techniques, feature attribution, and decision transparency in big data contexts.',
    category: 'ai-architecture',
    tags: ['Interpretability', 'Big Data', 'Explainable AI', 'Transparency'],
    readTime: '11 min read',
    publishDate: '2024-01-05',
    featured: false,
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-500',
    href: '/research/big-data-interpretability',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'language-code-interoperability',
    title: 'Language & Code Interoperability: Bridging Natural and Programming Languages',
    description:
      'Investigating the intersection of natural language processing and code generation. Focus on semantic understanding, cross-language translation, and unified representations.',
    category: 'ai-architecture',
    tags: ['NLP', 'Code Generation', 'Interoperability', 'Semantics'],
    readTime: '10 min read',
    publishDate: '2024-01-03',
    featured: false,
    icon: Globe,
    gradient: 'from-indigo-500 to-blue-600',
    href: '/research/language-code-interoperability',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'benchmarking-open-vs-closed-ai',
    title: 'Benchmarking Open vs Closed AI: Comparative Analysis Framework',
    description:
      'Comprehensive evaluation framework for comparing open-source and proprietary AI systems. Analyzing performance, transparency, accessibility, and innovation metrics.',
    category: 'infrastructure',
    tags: ['Benchmarking', 'Open Source', 'Evaluation', 'Metrics'],
    readTime: '15 min read',
    publishDate: '2023-12-28',
    featured: false,
    icon: Microscope,
    gradient: 'from-purple-500 to-pink-500',
    href: '/research/benchmarking-open-vs-closed-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'opacity-responsibility-ai',
    title: 'Opacity & Responsibility in AI: Philosophical Foundations',
    description:
      'Philosophical investigation into AI opacity and moral responsibility. Examining the ethical implications of black-box AI systems and frameworks for algorithmic accountability.',
    category: 'philosophy',
    tags: ['Philosophy', 'Responsibility', 'Ethics', 'Opacity'],
    readTime: '18 min read',
    publishDate: '2023-12-25',
    featured: false,
    icon: BookOpen,
    gradient: 'from-gray-600 to-slate-700',
    href: '/research/opacity-responsibility-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'ai-infrastructure-academia',
    title: 'AI Infrastructure for Academia: Democratizing Research Access',
    description:
      'Building scalable, cost-effective AI infrastructure solutions tailored for academic research environments. Examining cloud-native architectures, resource optimization, and collaborative platforms.',
    category: 'infrastructure',
    tags: ['Infrastructure', 'Academia', 'Cloud', 'Democratization'],
    readTime: '13 min read',
    publishDate: '2023-12-20',
    featured: false,
    icon: Microscope,
    gradient: 'from-cyan-500 to-blue-600',
    href: '/research/ai-infrastructure-academia',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'human-centered-ai',
    title: 'Human-Centered AI: Designing for Human Flourishing',
    description:
      'Research into AI systems designed with human values, needs, and capabilities at the center. Exploring human-AI collaboration, augmentation, and empowerment paradigms.',
    category: 'ethics',
    tags: ['Human-Centered', 'Collaboration', 'Values', 'Empowerment'],
    readTime: '14 min read',
    publishDate: '2023-12-15',
    featured: false,
    icon: Globe,
    gradient: 'from-emerald-500 to-green-600',
    href: '/research/human-centered-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'digital-rights-ai',
    title: 'Digital Rights & AI: Protecting Human Agency in the Digital Age',
    description:
      'Comprehensive analysis of digital rights in the context of AI systems. Examining privacy, autonomy, dignity, and democratic participation in AI-mediated environments.',
    category: 'ethics',
    tags: ['Digital Rights', 'Privacy', 'Autonomy', 'Democracy'],
    readTime: '17 min read',
    publishDate: '2023-12-10',
    featured: false,
    icon: Shield,
    gradient: 'from-rose-500 to-pink-600',
    href: '/research/digital-rights-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  }
];

const heroMetrics = [
  {
    label: 'Published Frameworks',
    value: '176',
    caption: 'Peer-reviewed blueprints and case studies',
    icon: Layers
  },
  {
    label: 'Active Experiments',
    value: '48',
    caption: 'Live longitudinal research programmes',
    icon: Microscope
  },
  {
    label: 'Ethics Interventions',
    value: '320+',
    caption: 'Documented governance rituals and audits',
    icon: Shield
  },
  {
    label: 'Interpretability Dashboards',
    value: '22',
    caption: 'Operational toolkits and observability suites',
    icon: LineChart
  }
];

const methodologyPillars = [
  {
    title: 'Evidence-led Fieldwork',
    description:
      'Mixed-methods studies embed ethnography, instrumentation, and participatory design in every deployment.',
    icon: Globe
  },
  {
    title: 'Critical Systems Reviews',
    description:
      'Every blueprint combines computational stress-testing with philosophical audits to map risks clearly.',
    icon: Brain
  },
  {
    title: 'Operational Impact Loops',
    description:
      'Continuous evaluation loops translate experimental insight into product, policy, and civic outcomes.',
    icon: TrendingUp
  }
];

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const prefersReducedMotion = useReducedMotion();

  const filteredArticles = useMemo(() => {
    return researchArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticles = filteredArticles.filter((article) => article.featured).slice(0, 3);
  const supportingArticles = filteredArticles.filter((article) => !article.featured);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="research" className="opacity-70 mix-blend-screen" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={prefersReducedMotion ? { opacity: 0.8, scale: 1 } : { opacity: 0.9, scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 via-sky-500/20 to-purple-500/25 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.2, rotate: -10 }}
          animate={prefersReducedMotion ? { opacity: 0.35, rotate: -6 } : { opacity: 0.45, rotate: [-12, -6, -10] }}
          transition={{ duration: 22, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 right-[10%] h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-500/15 to-indigo-500/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.16),transparent_55%),linear-gradient(180deg,rgba(2,6,23,0.95)_0%,rgba(15,23,42,0.92)_45%,rgba(15,23,42,0.94)_100%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 backdrop-blur-2xl"
            >
              <BookOpen className="h-5 w-5 text-indigo-200" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Research Programs</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="font-ibm-sans text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Research that stages responsible intelligence for civic, planetary, and product impact.
              </h1>
              <p className="max-w-2xl text-lg text-white/80">
                Explore 176 blueprints spanning ethics, interpretability, systems governance, and participatory AI design. Each study blends philosophical rigor with operational playbooks so teams can deploy accountable intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-2xl"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <metric.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-3xl font-semibold text-white">{metric.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                      <p className="mt-2 text-sm text-white/70">{metric.caption}</p>
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
              animate={prefersReducedMotion ? { opacity: 0.3 } : { opacity: 0.45, rotate: [0, 8, -6, 0] }}
              transition={{ duration: 16, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -top-32 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/30 via-indigo-400/20 to-sky-400/25 blur-3xl"
            />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Research Methodology Stack
              </div>
              <div className="space-y-4">
                {methodologyPillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <pillar.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white">{pillar.title}</p>
                      <p className="text-sm text-white/70">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/atlas" className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/80 transition-all duration-300 hover:bg-white/10">
                View Atlas spotlights
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
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Search and filter the research library</h2>
                <p className="max-w-2xl text-sm text-white/70">
                  Filter by research stream, methodology, or ethical focus. Each article links into full experimental playbooks, structured evaluations, and motion-rich storytelling.
                </p>
              </div>
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search topics, keywords, or methodologies"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 py-3 pl-12 pr-4 font-ibm-sans text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {researchCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-white/40 bg-white/15 text-white shadow-[0_20px_45px_rgba(79,70,229,0.35)]'
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
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Spotlight releases</p>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">Featured research narratives</h3>
              </div>
              <Link href="/atlas" className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white md:inline-flex">
                Browse immersive atlas
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
                      {article.hasInteractiveCharts && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-200">
                          <TrendingUp className="h-3.5 w-3.5" /> Charts
                        </span>
                      )}
                      {article.hasLottieAnimation && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-sky-400/15 px-3 py-1 text-sky-200">
                          <Zap className="h-3.5 w-3.5" /> Motion
                        </span>
                      )}
                    </div>
                    <Link
                      href={article.href}
                      className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
                    >
                      Read the blueprint
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
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Library</p>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Explore additional research programmes</h3>
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
                      {article.tags.slice(0, 2).map((tag) => (
                        <span key={`${article.id}-${tag}`} className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                          <Tag className="h-3.5 w-3.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={article.href}
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
                  >
                    View study
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/60">
              No additional articles match this view yet — explore the featured narratives above or clear your filters.
            </div>
          )}
        </section>

        <section className="grid gap-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/90 p-10 shadow-[0_50px_120px_rgba(15,23,42,0.6)] backdrop-blur-3xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Operational outcomes</p>
            <h3 className="text-3xl font-semibold text-white">How the research lab partners with teams</h3>
            <p className="text-sm text-white/70">
              We move from insight to implementation alongside partner organizations. Engagements include embedded researchers, executive briefings, motion-rich storytelling, and tooling packages that stay in production.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Civic deployments</p>
                <p className="mt-2 text-sm text-white/70">
                  Steward civic-tech pilots with participatory governance frameworks and transparent reporting.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Product strategy</p>
                <p className="mt-2 text-sm text-white/70">
                  Translate research to roadmap commitments, evaluation dashboards, and informed rollout rituals.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Policy partnerships</p>
                <p className="mt-2 text-sm text-white/70">
                  Collaborate with regulators on evidence-led policy, disclosure frameworks, and audits.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Education & dialogue</p>
                <p className="mt-2 text-sm text-white/70">
                  Host salons, workshops, and cinematic briefings to align teams on responsible AI futures.
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
              className="pointer-events-none absolute -top-28 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-400/20 via-purple-500/25 to-blue-500/25 blur-3xl"
            />
            <div className="relative space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Motion-first storytelling
              </div>
              <p className="text-lg font-semibold text-white">
                Every research drop includes motion studies, visual systems, and executive-ready narratives so insights translate into action quickly.
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400" />
                  Cinematic hero sections and abstract backdrops communicate context with minimal white space.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-rose-400" />
                  Interactive dashboards and governance checklists ship with each blueprint for immediate adoption.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400" />
                  Dedicated motion system ensures transitions, hover states, and interactions feel alive yet performant.
                </li>
              </ul>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
              >
                Partner with the lab
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(15,23,42,0.65)] backdrop-blur-3xl">
          <AssistantWidgetShell compact={false} />
        </section>
      </div>
    </div>
  );
}

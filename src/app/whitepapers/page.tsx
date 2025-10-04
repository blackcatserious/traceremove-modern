'use client';

import { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Search, Filter, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const whitepapers = [
  {
    id: 'agentic-systems-architecture',
    title: 'Architectural Patterns for Agentic AI Systems: A Comprehensive Framework',
    description:
      'A systematic playbook for designing agentic AI systems, covering tool orchestration, safety guardrails, and scaling strategies.',
    category: 'AI Architecture',
    authors: ['Arthur Ziganshin', 'Traceremove Research Team'],
    publishDate: '2024-01-15',
    pages: 42,
    downloads: '3.2k',
    featured: true,
    tags: ['Agentic AI', 'Architecture', 'Tool Integration', 'Scalability'],
    pdfUrl: '/whitepapers/agentic-systems-architecture.pdf',
    abstract:
      'As AI systems move beyond simple prompts, robust architectural patterns become critical. This paper introduces a framework for building agentic systems that can autonomously reason, plan, and execute while remaining observable and recoverable.'
  },
  {
    id: 'privacy-preserving-ai',
    title: 'Privacy-Preserving AI: Cryptographic Approaches for Secure Machine Learning',
    description:
      'Differential privacy, homomorphic encryption, and secure computation techniques for confidential AI deployments.',
    category: 'Privacy & Security',
    authors: ['Arthur Ziganshin', 'Security Research Collective'],
    publishDate: '2024-01-10',
    pages: 38,
    downloads: '2.8k',
    featured: true,
    tags: ['Privacy', 'Cryptography', 'Differential Privacy', 'Homomorphic Encryption'],
    pdfUrl: '/whitepapers/privacy-preserving-ai.pdf',
    abstract:
      'We evaluate cryptographic primitives that maintain privacy in production AI systems. Practical guidance helps teams balance accuracy, latency, and security while meeting regulatory requirements.'
  },
  {
    id: 'ai-ethics-governance',
    title: 'AI Ethics and Governance: Frameworks for Responsible AI Development',
    description:
      'Guidelines for bias mitigation, transparency, and organisational governance across AI lifecycles.',
    category: 'AI Ethics',
    authors: ['Arthur Ziganshin', 'Ethics Advisory Board'],
    publishDate: '2023-12-20',
    pages: 56,
    downloads: '4.1k',
    featured: false,
    tags: ['AI Ethics', 'Governance', 'Bias Mitigation', 'Transparency'],
    pdfUrl: '/whitepapers/ai-ethics-governance.pdf',
    abstract:
      'We present an actionable governance framework that embeds ethics review, documentation, and accountability rituals into product development, with templates for teams of varied maturity.'
  },
  {
    id: 'multimodal-optimization',
    title: 'Optimizing Multimodal AI Under Resource Constraints',
    description:
      'Performance and efficiency techniques for multimodal models operating in edge or cost-sensitive environments.',
    category: 'Performance',
    authors: ['Arthur Ziganshin', 'Performance Engineering Team'],
    publishDate: '2023-12-15',
    pages: 34,
    downloads: '2.3k',
    featured: false,
    tags: ['Multimodal AI', 'Optimization', 'Resource Management', 'Performance'],
    pdfUrl: '/whitepapers/multimodal-optimization.pdf',
    abstract:
      'This paper introduces optimisation tactics—pruning, adaptive routing, quantisation—that reduce compute and memory footprints while sustaining performance across multimodal inference stacks.'
  },
  {
    id: 'academic-ai-infrastructure',
    title: 'Building Cost-Effective AI Infrastructure for Academic Research',
    description:
      'Blueprints for modular, shareable AI infrastructure that supports academic research and collaboration.',
    category: 'Infrastructure',
    authors: ['Arthur Ziganshin', 'Academic Computing Consortium'],
    publishDate: '2023-11-30',
    pages: 28,
    downloads: '1.9k',
    featured: false,
    tags: ['Academic Research', 'Infrastructure', 'Cost Optimization', 'Resource Sharing'],
    pdfUrl: '/whitepapers/academic-ai-infrastructure.pdf',
    abstract:
      'Universities face unique constraints when provisioning AI infrastructure. We outline procurement strategies, shared GPU pools, and governance models that keep research accessible and sustainable.'
  }
];

const categories = [
  { id: 'all', label: 'All papers' },
  { id: 'AI Architecture', label: 'AI architecture' },
  { id: 'Privacy & Security', label: 'Privacy & security' },
  { id: 'AI Ethics', label: 'AI ethics' },
  { id: 'Performance', label: 'Performance' },
  { id: 'Infrastructure', label: 'Infrastructure' }
];

export default function WhitepapersPage() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = useMemo(() => {
    return whitepapers.filter((paper) => {
      const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;
      const inText =
        paper.title.toLowerCase().includes(query) ||
        paper.description.toLowerCase().includes(query) ||
        paper.abstract.toLowerCase().includes(query) ||
        paper.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        paper.authors.some((author) => author.toLowerCase().includes(query));
      return matchesCategory && inText;
    });
  }, [selectedCategory, searchQuery]);

  const featured = filteredPapers.filter((paper) => paper.featured);
  const others = filteredPapers.filter((paper) => !paper.featured);

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,26,48,0.9)_45%,rgba(17,24,39,0.95)_100%)]" />
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
            className="absolute -bottom-28 right-8 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/25 to-cyan-400/25 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
            <Sparkles className="h-5 w-5 text-indigo-200" />
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Traceremove whitepapers</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
          </div>
          <div className="mt-8 space-y-6">
            <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Deep research blueprints for accountable AI.
            </h1>
            <p className="text-lg text-white/75">
              Download in-depth analyses covering architecture, privacy, ethics, performance, and infrastructure. Each paper pairs strategic insights with implementation guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/85 py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(14,165,233,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-[2fr,1fr]">
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-2xl">
              <Search className="h-5 w-5 text-white/60" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by title, theme, or author"
                className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-2xl">
              <Filter className="h-5 w-5 text-white/60" />
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-slate-900 text-white">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="relative py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(56,189,248,0.14),transparent_50%)]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Featured releases</h2>
              <p className="mt-3 text-lg text-white/70">Essential research for product teams and policy leaders launching responsible AI programmes.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((paper) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    <span>{paper.category}</span>
                    <span>{paper.publishDate}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{paper.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{paper.description}</p>
                  <p className="mt-4 text-xs text-white/60">{paper.abstract}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                    {paper.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
                    <span>{paper.pages} pages · {paper.downloads} downloads</span>
                    <Link href={paper.pdfUrl} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:text-white">
                      Download
                      <Download className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative border-t border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(14,165,233,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Research catalogue</h2>
            <p className="mt-3 text-lg text-white/70">Browse additional papers by category, ready for download and citation.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((paper) => (
              <motion.article
                key={paper.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  <span>{paper.category}</span>
                  <span>{paper.publishDate}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{paper.title}</h3>
                <p className="mt-2 text-sm text-white/70">{paper.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
                  <span>{paper.pages} pages · {paper.downloads} downloads</span>
                  <Link href={paper.pdfUrl} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:text-white">
                    Download
                    <Download className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(56,189,248,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Need tailored insights?</h2>
          <p className="mt-3 text-lg text-white/70">We craft bespoke research briefings and governance frameworks for partners. Reach out to discuss your context.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-colors duration-300 hover:text-white">
              Contact the lab
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-colors duration-300 hover:text-white">
              Explore active projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

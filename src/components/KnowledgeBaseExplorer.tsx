'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Sparkles, ArrowUpRight, NotebookPen } from 'lucide-react';
import {
  KNOWLEDGE_ENTRIES,
  searchKnowledgeEntries,
  type KnowledgeEntry,
} from '@/lib/ai/knowledgeBase';

function filterEntries(
  entries: readonly KnowledgeEntry[],
  category: string,
): KnowledgeEntry[] {
  if (category === 'All') {
    return [...entries];
  }
  return entries.filter((entry) => entry.category === category);
}

function highlightText(text: string, query: string): ReactNode {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return text;
  const escaped = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (!escaped) return text;
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);
  if (parts.length === 1) {
    return text;
  }
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span
            key={`${part}-${index}`}
            className="relative rounded-md bg-white/10 px-1 py-0.5 text-white shadow-[0_0_12px_rgba(148,163,184,0.35)]"
          >
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

export default function KnowledgeBaseExplorer({
  className = '',
  title = 'Traceremove knowledge matrix',
  description = 'Browse the in-domain knowledge base that powers metrics, tooling, and algorithmic support inside the assistant.',
}: {
  className?: string;
  title?: string;
  description?: string;
}) {
  const categories = useMemo(() => {
    const names = Array.from(new Set(KNOWLEDGE_ENTRIES.map((entry) => entry.category)));
    names.sort();
    return ['All', ...names];
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [lastPrompt, setLastPrompt] = useState<string | null>(null);

  const matchedEntries = useMemo(() => {
    if (!query) {
      return KNOWLEDGE_ENTRIES;
    }
    return searchKnowledgeEntries(query, {
      limit: Number.POSITIVE_INFINITY,
      fallbackToAll: false,
    });
  }, [query]);

  const visibleEntries = useMemo(
    () => filterEntries(matchedEntries, activeCategory),
    [matchedEntries, activeCategory],
  );

  useEffect(() => {
    if (!lastPrompt) return;
    const timeout = window.setTimeout(() => setLastPrompt(null), 3200);
    return () => window.clearTimeout(timeout);
  }, [lastPrompt]);

  const handlePrompt = (prompt: string) => {
    if (!prompt) return;
    if (typeof window === 'undefined') return;
    window.dispatchEvent(
      new CustomEvent('traceremove-chat-prompt', {
        detail: { prompt },
      }),
    );
    setLastPrompt(prompt);
  };

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    KNOWLEDGE_ENTRIES.forEach((entry) => {
      counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
    });
    return counts;
  }, []);

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(217,70,239,0.14),transparent_55%),linear-gradient(145deg,rgba(15,23,42,0.95)_0%,rgba(12,21,38,0.92)_50%,rgba(15,23,42,0.98)_100%)]" />
      <div className="relative z-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              <Sparkles className="h-4 w-4 text-sky-200" />
              Knowledge graph
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
              <p className="max-w-3xl text-base text-white/70 sm:text-lg">{description}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 text-right">
            {lastPrompt && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200"
              >
                Prompt sent to assistant
              </motion.div>
            )}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search metrics, tools, algorithms..."
                className="w-64 rounded-full border border-white/10 bg-white/10 px-10 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const count = category === 'All' ? KNOWLEDGE_ENTRIES.length : categoryCounts.get(category) ?? 0;
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition ${
                  isActive
                    ? 'border-white/60 bg-white/20 text-white'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white'
                }`}
              >
                <span>{category}</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem] font-semibold">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visibleEntries.map((entry) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${entry.accent} opacity-[0.18]`} />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/70">
                    {entry.category}
                  </span>
                  <Link
                    href={entry.cta.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
                  >
                    {entry.cta.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{highlightText(entry.title, query)}</h3>
                  <p className="text-sm text-white/70">{highlightText(entry.summary, query)}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Key metrics</p>
                    <ul className="space-y-2 text-sm text-white/75">
                      {entry.metrics.slice(0, 3).map((metric) => (
                        <li key={metric} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                          {highlightText(metric, query)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Toolchain & playbooks</p>
                    <ul className="space-y-2 text-sm text-white/75">
                      {[...entry.toolchain.slice(0, 1), ...entry.playbooks.slice(0, 1)].map((item) => (
                        <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                          {highlightText(item, query)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {entry.quickPrompts.map((prompt) => (
                    <button
                      key={prompt.label}
                      type="button"
                      onClick={() => handlePrompt(prompt.prompt)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:border-white/40 hover:text-white"
                    >
                      <MessageSquare className="h-4 w-4 text-white/70" />
                      {prompt.label}
                    </button>
                  ))}
                  <Link
                    href="/assistant"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white/40 hover:text-white"
                  >
                    <NotebookPen className="h-4 w-4" />
                    Assistant briefings
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {visibleEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center text-white/70"
          >
            No entries match that search yet—try a different metric, tool, or algorithm keyword.
          </motion.div>
        )}
      </div>
    </section>
  );
}

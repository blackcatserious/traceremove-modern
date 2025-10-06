'use client';

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Search,
  Sparkles,
  ArrowUpRight,
  NotebookPen,
  Loader2,
  RefreshCcw,
} from 'lucide-react';
import type { KnowledgeEntry } from '@/lib/ai/knowledgeBase';
import {
  readKnowledgeSnapshot,
  snapshotFromApiResponse,
  writeKnowledgeSnapshot,
} from '@/lib/ai/knowledgeCache';
import type { KnowledgeBaseApiResponse, KnowledgeSnapshot } from '@/lib/ai/knowledgeTypes';

const ALL_CATEGORY = 'All';
const REQUEST_LIMIT = 200;

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

export type KnowledgeBaseExplorerProps = {
  className?: string;
  title?: string;
  description?: string;
};

export default function KnowledgeBaseExplorer({
  className = '',
  title = 'Traceremove knowledge matrix',
  description = 'Browse the in-domain knowledge base that powers metrics, tooling, and algorithmic support inside the assistant.',
}: KnowledgeBaseExplorerProps) {
  const [entries, setEntries] = useState<KnowledgeEntry[]>([]);
  const [categories, setCategories] = useState<string[]>([ALL_CATEGORY]);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [resultCounts, setResultCounts] = useState<Record<string, number>>({});
  const [meta, setMeta] = useState<{ total: number; returned: number }>({ total: 0, returned: 0 });
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);
  const [lastPrompt, setLastPrompt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);
  const [dataSource, setDataSource] = useState<'api' | 'fallback'>('api');

  const applySnapshot = useCallback((snapshot: KnowledgeSnapshot) => {
    setEntries(snapshot.entries);
    setMeta({ total: snapshot.total, returned: snapshot.returned });
    setCategoryCounts(snapshot.categoryCounts);
    setResultCounts(snapshot.resultCounts);
    setCategories([ALL_CATEGORY, ...snapshot.categories]);
    setDataSource(snapshot.dataSource);
    setError(snapshot.error ?? null);
  }, []);

  useEffect(() => {
    if (!lastPrompt) return;
    const timeout = window.setTimeout(() => setLastPrompt(null), 3200);
    return () => window.clearTimeout(timeout);
  }, [lastPrompt]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query.trim()), 260);
    return () => clearTimeout(timer);
  }, [query]);

  const fetchEntries = useCallback(
    async (search: string, category: string, signal?: AbortSignal) => {
      const trimmedQuery = search.trim();
      const normalizedCategory = category === ALL_CATEGORY ? null : category;
      const cachedSnapshot = readKnowledgeSnapshot(trimmedQuery, normalizedCategory);

      if (cachedSnapshot) {
        applySnapshot(cachedSnapshot);
        setRefreshing(true);
        setLoading(false);
      } else {
        setLoading(true);
        setRefreshing(false);
        setError(null);
      }

      const params = new URLSearchParams();
      if (trimmedQuery) {
        params.set('q', trimmedQuery);
      }
      if (normalizedCategory) {
        params.set('category', normalizedCategory);
      }
      params.set('limit', String(REQUEST_LIMIT));

      try {
        const response = await fetch(`/api/knowledge-base?${params.toString()}`, {
          headers: { Accept: 'application/json' },
          signal,
        });

        if (!response.ok) {
          throw new Error(`Knowledge base request failed with status ${response.status}`);
        }

        const data: KnowledgeBaseApiResponse = await response.json();
        if (signal?.aborted) {
          return;
        }

        const snapshot = snapshotFromApiResponse(data);
        applySnapshot(snapshot);
        writeKnowledgeSnapshot(trimmedQuery, normalizedCategory, snapshot);
      } catch (apiError) {
        if (signal?.aborted) {
          return;
        }
        console.error('Failed to load knowledge base from API', apiError);

        try {
          const knowledgeModule = await import('@/lib/ai/knowledgeBase');
          const matches = trimmedQuery
            ? knowledgeModule.searchKnowledgeEntries(trimmedQuery, {
                limit: Number.POSITIVE_INFINITY,
                fallbackToAll: false,
              })
            : knowledgeModule.KNOWLEDGE_ENTRIES.slice();

          const queryCategoryCounts = matches.reduce<Record<string, number>>((acc, entry) => {
            acc[entry.category] = (acc[entry.category] ?? 0) + 1;
            return acc;
          }, {});

          const filteredEntries = normalizedCategory
            ? matches.filter((entry) => entry.category === normalizedCategory)
            : matches;

          const fullCategoryCounts = knowledgeModule.KNOWLEDGE_ENTRIES.reduce<Record<string, number>>((acc, entry) => {
            acc[entry.category] = (acc[entry.category] ?? 0) + 1;
            return acc;
          }, {});

          if (signal?.aborted) {
            return;
          }

          const fallbackSnapshot: KnowledgeSnapshot = {
            entries: filteredEntries,
            total: matches.length,
            returned: filteredEntries.length,
            categoryCounts: fullCategoryCounts,
            resultCounts: queryCategoryCounts,
            categories: Object.keys(fullCategoryCounts).sort(),
            dataSource: 'fallback',
            error: 'Live knowledge service temporarily unavailable—showing cached atlas data.',
          };

          applySnapshot(fallbackSnapshot);
          writeKnowledgeSnapshot(trimmedQuery, normalizedCategory, fallbackSnapshot);
        } catch (fallbackError) {
          console.error('Failed to load fallback knowledge base', fallbackError);
          if (signal?.aborted) {
            return;
          }
          setEntries([]);
          setMeta({ total: 0, returned: 0 });
          setCategoryCounts({});
          setResultCounts({});
          setError('Knowledge base is currently unavailable. Please try again shortly.');
          setCategories([ALL_CATEGORY]);
          setDataSource('fallback');
        }
      } finally {
        if (!signal?.aborted) {
          setLoading(false);
          setRefreshing(false);
        }
      }
    },
    [applySnapshot],
  );

  useEffect(() => {
    const controller = new AbortController();
    void fetchEntries(debouncedQuery, activeCategory, controller.signal);
    return () => controller.abort();
  }, [debouncedQuery, activeCategory, fetchEntries, reloadToken]);

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

  const totalEntries = useMemo(
    () => Object.values(categoryCounts).reduce((acc, count) => acc + count, 0),
    [categoryCounts],
  );

  const highlightQuery = debouncedQuery || query.trim();
  const hasQuery = highlightQuery.length > 0;
  const summaryTotal = hasQuery ? meta.total : totalEntries || meta.total;
  const summaryReturned = hasQuery ? meta.returned : entries.length || meta.returned;

  const getCategoryCount = useCallback(
    (category: string) => {
      if (category === ALL_CATEGORY) {
        return summaryTotal;
      }
      if (hasQuery) {
        return resultCounts[category] ?? 0;
      }
      return categoryCounts[category] ?? 0;
    },
    [categoryCounts, hasQuery, resultCounts, summaryTotal],
  );

  const handleRetry = () => {
    setReloadToken((value) => value + 1);
  };

  const busy = loading || refreshing;
  const sourceLabel = refreshing
    ? 'Refreshing cached knowledge…'
    : dataSource === 'api'
    ? 'Live knowledge service'
    : 'On-site atlas cache';

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(217,70,239,0.14),transparent_55%),linear-gradient(145deg,rgba(15,23,42,0.95)_0%,rgba(12,21,38,0.92)_50%,rgba(15,23,42,0.98)_100%)]" />
      <div className="relative z-10 space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
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
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search metrics, tools, algorithms..."
                  className="w-64 rounded-full border border-white/10 bg-white/10 px-10 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                />
                {busy && (
                  <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-white/60" />
                )}
              </div>
              <button
                type="button"
                onClick={handleRetry}
                disabled={busy}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                title="Refresh knowledge base"
              >
                <RefreshCcw className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-1 text-xs font-medium text-white/60">
              <p>
                Showing {summaryReturned} of {summaryTotal} {activeCategory === ALL_CATEGORY ? 'knowledge entries' : `${activeCategory.toLowerCase()} briefs`}
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">{sourceLabel}</p>
            </div>
            {error && (
              <button
                type="button"
                onClick={handleRetry}
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-amber-100 transition hover:border-amber-300/60"
              >
                <RefreshCcw className="h-3.5 w-3.5" />
                {error}
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const count = getCategoryCount(category);
            const isActive = activeCategory === category;
            const isDisabled = !isActive && hasQuery && count === 0;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                disabled={isDisabled}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition ${
                  isActive
                    ? 'border-white/60 bg-white/20 text-white'
                    : isDisabled
                    ? 'border-white/5 bg-white/5 text-white/30'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white'
                }`}
                title={isDisabled ? 'No entries for the current search query' : undefined}
              >
                <span>{category}</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem] font-semibold">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {entries.map((entry) => (
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
                  <h3 className="text-2xl font-semibold text-white">{highlightText(entry.title, highlightQuery)}</h3>
                  <p className="text-sm text-white/70">{highlightText(entry.summary, highlightQuery)}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Key metrics</p>
                    <ul className="space-y-2 text-sm text-white/75">
                      {entry.metrics.slice(0, 3).map((metric) => (
                        <li key={metric} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                          {highlightText(metric, highlightQuery)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Toolchain & playbooks</p>
                    <ul className="space-y-2 text-sm text-white/75">
                      {[...entry.toolchain.slice(0, 1), ...entry.playbooks.slice(0, 1)].map((item) => (
                        <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                          {highlightText(item, highlightQuery)}
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

        {entries.length === 0 && !loading && (
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

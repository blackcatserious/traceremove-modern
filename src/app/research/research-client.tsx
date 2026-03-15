"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { papers } from "@/data/papers";

type SortMode = "newest" | "alphabetical";

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text: string, query: string) {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${escapeRegExp(query.trim())})`, "ig");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === query.trim().toLowerCase() ? <mark key={`${part}-${index}`}>{part}</mark> : part
  );
}

export default function ResearchClient() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const [sortMode, setSortMode] = useState<SortMode>("newest");

  useEffect(() => {
    const timer = setTimeout(() => setQuery(input), 200);
    return () => clearTimeout(timer);
  }, [input]);

  const topics = useMemo(() => ["All", ...Array.from(new Set(papers.map((paper) => paper.topic)))], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const sorted = [...papers].sort((a, b) => {
      if (sortMode === "alphabetical") return a.title.localeCompare(b.title);
      return Number(b.year) - Number(a.year);
    });

    return sorted
      .filter((paper) => (topic === "All" ? true : paper.topic === topic))
      .filter((paper) => {
        if (!q) return true;
        return [paper.title, paper.abstract, paper.tags.join(" ")].join(" ").toLowerCase().includes(q);
      });
  }, [query, sortMode, topic]);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <span className="overline">Research</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Papers &amp; Preprints</h1>
        <p className="mt-4 text-lg text-[#8a8a97] max-w-2xl">
          Papers on epistemic risks, language models, and ethical AI architecture.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <FadeIn>
          <div className="space-y-4 rounded-2xl border border-white/[0.08] p-4 mb-8">
            <div className="relative">
              <Search className="w-4 h-4 text-[#5e5e6c] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Search by title, abstract, or tags"
                className="input pl-10"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {topics.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTopic(item)}
                  className={`badge ${topic === item ? "bg-[#ef5044] text-white" : "bg-white/[0.03] text-[#8a8a97]"}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
              <p className="text-[#8a8a97]">Showing {filtered.length} of {papers.length} papers</p>
              <button
                type="button"
                onClick={() => setSortMode((prev) => (prev === "newest" ? "alphabetical" : "newest"))}
                className="btn-ghost py-2 px-3"
              >
                {sortMode === "newest" ? "Newest first" : "Alphabetical"}
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {filtered.length === 0 ? (
            <p className="text-[#8a8a97]">No papers match your search. Try different keywords.</p>
          ) : (
            filtered.map((paper, index) => (
              <FadeIn key={paper.title} delay={0.05 * index}>
                <article className="card">
                  <div className="flex items-center justify-between gap-3">
                    <span className="badge badge-preprint">{paper.status}</span>
                    <span className="text-xs text-[#6b6b79]">{paper.year}</span>
                  </div>
                  <h2 className="text-2xl mt-4 mb-2">{highlightText(paper.title, query)}</h2>
                  <p className="text-sm leading-relaxed text-[#b0b0bc]">{highlightText(paper.abstract, query)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span key={tag} className="badge badge-tag">{highlightText(tag, query)}</span>
                    ))}
                  </div>
                  <a
                    href={paper.philArchiveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex accent-link"
                  >
                    Read on PhilArchive →
                  </a>
                </article>
              </FadeIn>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

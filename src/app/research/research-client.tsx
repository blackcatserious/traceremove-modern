"use client";

import { useMemo, useState } from "react";
import { papers } from "@/data/papers";

export default function ResearchClient() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");

  const topics = useMemo(() => ["All", ...Array.from(new Set(papers.map((paper) => paper.topic)))], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...papers]
      .sort((a, b) => Number(b.year) - Number(a.year))
      .filter((paper) => (topic === "All" ? true : paper.topic === topic))
      .filter((paper) => {
        if (!q) return true;
        return [paper.title, paper.abstract, paper.topic, paper.tags.join(" ")].join(" ").toLowerCase().includes(q);
      });
  }, [query, topic]);

  return (
    <div className="mx-auto max-w-[1024px] space-y-10 px-4 py-14 sm:px-6">
      <header>
        <h1 className="text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Research</h1>
        <p className="mt-3 text-[#4d4d58] dark:text-[#d9d9de]">Papers on epistemic risks, language models, and ethical AI architecture.</p>
        <p className="mt-1 text-sm text-[#6b6b79]">7 preprints · Working toward peer-reviewed publication</p>
      </header>

      <div className="space-y-4 rounded-2xl border border-black/10 p-4 dark:border-white/10">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, abstract, topic, or tags"
          className="w-full rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm dark:border-white/15 dark:bg-[#1c1c22]"
        />
        <div className="flex flex-wrap items-center gap-2">
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              className={`rounded-full px-3 py-1 text-xs ${topic === item ? "bg-[#ef5044] text-white" : "border border-black/15 dark:border-white/15"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {filtered.map((paper) => (
          <article key={paper.title} className="card p-7">
            <span className="inline-flex rounded-full bg-[#eeeef0] px-3 py-1 text-xs uppercase tracking-wide text-[#5e5e6c] dark:bg-[#2f2f36] dark:text-[#d9d9de]">Preprint</span>
            <h2 className="mt-3 text-2xl font-semibold">{paper.title}</h2>
            <p className="mt-1 text-sm text-[#6b6b79]">Artur Ziganshin · {paper.year}</p>
            <p className="mt-4 whitespace-pre-wrap text-[15px] leading-relaxed text-[#4d4d58] dark:text-[#d9d9de]">{paper.abstract}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {paper.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs dark:border-white/10">{tag}</span>)}
            </div>
            <div className="mt-5 flex gap-3">
              <a href={paper.philArchiveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#ef5044] px-4 py-2 text-sm font-semibold text-white">Read on PhilArchive →</a>
              {paper.pdfUrl ? (
                <a href={paper.pdfUrl} target="_blank" rel="noreferrer" className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold dark:border-white/15">Download PDF</a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

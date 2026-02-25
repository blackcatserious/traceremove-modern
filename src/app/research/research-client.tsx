"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
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
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, abstract, topic, or tags"
              className="input"
            />
            <div className="flex flex-wrap items-center gap-2">
              {topics.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTopic(item)}
                  className={`badge ${topic === item ? "bg-[#ef5044] text-white" : "badge-preprint"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="space-y-5">
          {filtered.map((paper, i) => (
            <FadeIn key={paper.title} delay={i * 0.05}>
              <article className="card">
                <span className="badge badge-preprint">Preprint</span>
                <h2 className="mt-3 text-2xl font-semibold">{paper.title}</h2>
                <p className="mt-1 text-sm text-[#6b6b79]">Artur Ziganshin · {paper.year}</p>
                <p className="mt-4 whitespace-pre-wrap text-[15px] leading-relaxed text-[#b0b0bc]">{paper.abstract}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {paper.tags.map((tag) => <span key={tag} className="badge badge-tag">{tag}</span>)}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href={paper.philArchiveUrl} target="_blank" rel="noreferrer" className="btn-primary">Read on PhilArchive →</a>
                  {paper.pdfUrl ? (
                    <a href={paper.pdfUrl} target="_blank" rel="noreferrer" className="btn-secondary">Download PDF</a>
                  ) : null}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

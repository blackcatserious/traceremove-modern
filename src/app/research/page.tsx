"use client";

import { useMemo, useState } from "react";
import { papers } from "@/data/papers";

export default function ResearchPage() {
  const [query, setQuery] = useState("");

  const filteredPapers = useMemo(() => {
    const term = query.toLowerCase().trim();
    if (!term) return papers;

    return papers.filter((paper) => {
      return [paper.title, paper.abstract, paper.topic].some((field) => field.toLowerCase().includes(term));
    });
  }, [query]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-semibold">Research Papers</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">Current preprints in AI philosophy and epistemic governance.</p>

      <div className="mt-8">
        <label htmlFor="paper-search" className="mb-2 block text-sm font-medium">Search papers</label>
        <input
          id="paper-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, abstract, or topic"
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      <div className="mt-8 space-y-4">
        {filteredPapers.map((paper) => (
          <article key={paper.title} className="card">
            <div className="mb-2"><span className="badge">Preprint</span></div>
            <h2 className="text-xl font-semibold">{paper.title}</h2>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{paper.abstract}</p>
            <a href={paper.philArchiveUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium underline">
              PhilArchive
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { concepts, type Concept } from "@/data/concepts";

const categories = ["all", "epistemology", "ethics", "mind", "language", "political"] as const;
type CategoryFilter = (typeof categories)[number];

const categoryColors: Record<string, string> = {
  epistemology: "#ef5044",
  ethics: "#e0ab4e",
  mind: "#6b8aed",
  language: "#4ecba0",
  political: "#c084fc",
};

function titleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function ConceptExplorer() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");
  const [activeConceptId, setActiveConceptId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const lowered = query.trim().toLowerCase();
    return concepts.filter((concept) => {
      if (filter !== "all" && concept.category !== filter) return false;
      if (!lowered) return true;
      return `${concept.name} ${concept.description} ${concept.detail}`.toLowerCase().includes(lowered);
    });
  }, [filter, query]);

  const activeConcept = useMemo(
    () => concepts.find((concept) => concept.id === activeConceptId) ?? null,
    [activeConceptId]
  );

  const relatedConcepts = useMemo(() => {
    if (!activeConcept) return [];
    return activeConcept.related
      .map((id) => concepts.find((item) => item.id === id))
      .filter((item): item is Concept => Boolean(item));
  }, [activeConcept]);

  return (
    <div className="px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <span className="overline">Interactive</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Concept Explorer</h1>
        <p className="mt-4 text-lg text-[#8a8a97] max-w-3xl">
          A map of philosophical concepts essential for understanding AI. Click any concept to explore.
        </p>

        <div className="mt-8 relative max-w-xl">
          <Search className="w-4 h-4 text-[#5e5e6c] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search concepts by name or description"
            className="input pl-10"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={active ? "btn-primary py-2 px-4" : "btn-ghost py-2 px-4"}
              >
                {item === "all" ? "All" : titleCase(item)}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => setActiveConceptId(concept.id)}
              className="card text-left hover:shadow-[0_0_24px_rgba(239,80,68,0.10)]"
            >
              <span
                className="inline-block w-2 h-2 rounded-full mb-3"
                style={{ backgroundColor: categoryColors[concept.category] }}
              />
              <h3 className="text-sm font-semibold text-white">{concept.name}</h3>
              <p className="text-xs text-[#7a7a88] line-clamp-2 mt-2">{concept.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[70] bg-black/40 transition-opacity duration-300 ${
          activeConcept ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActiveConceptId(null)}
      />

      <aside
        className={`fixed top-0 right-0 z-[80] h-full w-full sm:w-[480px] bg-[#111118] border-l border-white/[0.06] transition-transform duration-300 p-6 overflow-y-auto ${
          activeConcept ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {activeConcept && (
          <>
            <button
              type="button"
              onClick={() => setActiveConceptId(null)}
              className="ml-auto mb-4 flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.08] hover:bg-white/[0.06]"
              aria-label="Close concept details"
            >
              <X className="w-4 h-4 text-[#8a8a97]" />
            </button>

            <h2 className="text-3xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              {activeConcept.name}
            </h2>
            <span className="badge mt-3" style={{ background: "rgba(255,255,255,0.05)", color: categoryColors[activeConcept.category] }}>
              {titleCase(activeConcept.category)}
            </span>

            {activeConcept.detail.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-[#b0b0bc]">
                {paragraph}
              </p>
            ))}

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8a8a97]">Key Thinkers</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {activeConcept.thinkers.map((thinker) => (
                  <li key={thinker} className="badge badge-tag">
                    {thinker}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8a8a97]">Relevance to AI</h3>
              <p className="mt-2 text-sm text-[#b0b0bc] leading-relaxed">{activeConcept.aiRelevance}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8a8a97]">Related Concepts</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {relatedConcepts.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="badge badge-tag hover:text-white"
                    onClick={() => setActiveConceptId(item.id)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

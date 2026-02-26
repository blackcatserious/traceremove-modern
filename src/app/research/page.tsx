"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

let papers: any[] = [];
try { const mod = require("@/data/papers"); papers = mod.papers || mod.default || []; } catch {}

export default function ResearchPage() {
  const [search, setSearch] = useState("");

  const filtered = papers.filter((p: any) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      (p.title || "").toLowerCase().includes(q) ||
      (p.abstract || "").toLowerCase().includes(q) ||
      (p.tags || []).some((t: string) => t.toLowerCase().includes(q))
    );
  });

  return (
    <main>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "120px 24px 24px" }}>
        <span className="overline">Research</span>
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          marginTop: "16px",
        }}>
          Papers & Preprints
        </h1>
        <p style={{ marginTop: "12px", color: "#7a7a88", maxWidth: "550px", lineHeight: 1.6 }}>
          Philosophical research on epistemic risks, ethical architecture, and the
          foundations of artificial intelligence. All papers available as open-access preprints.
        </p>
        <p style={{ marginTop: "8px", color: "#4a4a58", fontSize: "13px" }}>
          {papers.length} preprints · Working toward peer-reviewed publication
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "16px 24px 8px" }}>
        <input
          type="text"
          placeholder="Search papers by title, abstract, or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
          style={{ maxWidth: "400px" }}
        />
        {search && (
          <p style={{ fontSize: "13px", color: "#5a5a68", marginTop: "8px" }}>
            Showing {filtered.length} of {papers.length} papers
          </p>
        )}
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "16px 24px 80px" }}>
        {filtered.map((paper: any, i: number) => (
          <div key={paper.title || i} className="card" style={{ marginBottom: "16px", padding: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span className="badge-preprint">Preprint</span>
              <span style={{ fontSize: "12px", color: "#4a4a58" }}>2025</span>
            </div>

            <h2 style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "1.25rem",
              color: "#f0f0f3",
              marginBottom: "8px",
              lineHeight: 1.25,
            }}>
              {paper.title}
            </h2>

            <p style={{ fontSize: "13px", color: "#5a5a68", marginBottom: "12px" }}>
              Artur Ziganshin
            </p>

            <p style={{ fontSize: "15px", color: "#7a7a88", lineHeight: 1.7, marginBottom: "16px" }}>
              {paper.abstract || paper.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {(paper.tags || []).map((t: string) => (
                  <span key={t} className="badge-tag">{t}</span>
                ))}
              </div>
              {paper.url && (
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link"
                  style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px" }}
                >
                  Read on PhilArchive <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}

        {filtered.length === 0 && search && (
          <p style={{ color: "#5a5a68", padding: "40px 0", textAlign: "center" }}>
            No papers match "{search}". Try different keywords.
          </p>
        )}
      </div>
    </main>
  );
}

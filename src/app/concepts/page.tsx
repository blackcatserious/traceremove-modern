"use client";

import { useState } from "react";
import { X, Search } from "lucide-react";
import { concepts, CATEGORY_COLORS, CATEGORY_LABELS } from "@/data/concepts";
import type { Concept } from "@/data/concepts";

export default function ConceptsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Concept | null>(null);

  const cats = ["all", "epistemology", "ethics", "mind", "language", "political"];

  const filtered = concepts.filter((c) => {
    if (filter !== "all" && c.category !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <main>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "120px 24px 24px" }}>
        <span className="overline">Interactive</span>
        <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: "16px" }}>
          Concept Explorer
        </h1>
        <p style={{ marginTop: "12px", color: "#7a7a88", maxWidth: "500px", lineHeight: 1.6 }}>
          A map of philosophical concepts essential for understanding AI. Click any concept to explore.
        </p>
      </div>

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "24px 24px 80px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
          {cats.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              style={{
                padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 500,
                border: "none", cursor: "pointer", transition: "all 0.2s",
                background: filter === cat ? (cat === "all" ? "#ef5044" : (CATEGORY_COLORS[cat] || "#ef5044")) : "rgba(255,255,255,0.04)",
                color: filter === cat ? "#fff" : "#7a7a88",
              }}>
              {cat === "all" ? "All" : (CATEGORY_LABELS[cat] || cat)}
            </button>
          ))}
          <div style={{ marginLeft: "auto", position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#4a4a58" }} />
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="input" style={{ paddingLeft: "36px", width: "200px", fontSize: "13px" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
          {filtered.map((c) => (
            <button key={c.id} onClick={() => setSelected(c)}
              className="card" style={{
                textAlign: "left", cursor: "pointer", border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)", padding: "20px",
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: CATEGORY_COLORS[c.category] || "#888", flexShrink: 0 }} />
                <span style={{ fontSize: "11px", color: "#5a5a68", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {CATEGORY_LABELS[c.category]}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.1rem", color: "#f0f0f3", marginBottom: "6px" }}>
                {c.name}
              </h3>
              <p style={{ fontSize: "13px", color: "#6a6a78", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {c.description}
              </p>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: "#5a5a68", textAlign: "center", padding: "40px 0" }}>No concepts match your search.</p>
        )}
      </div>

      {selected && (
        <div style={{
          position: "fixed", top: 0, right: 0, bottom: 0, width: "min(480px, 100vw)", zIndex: 60,
          background: "#111118", borderLeft: "1px solid rgba(255,255,255,0.06)",
          overflowY: "auto", padding: "32px",
          animation: "fadeSlideIn 0.3s ease",
        }}>
          <button onClick={() => setSelected(null)} style={{
            position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer",
          }}>
            <X size={20} color="#7a7a88" />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: CATEGORY_COLORS[selected.category] }} />
            <span style={{ fontSize: "12px", color: CATEGORY_COLORS[selected.category], textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
              {CATEGORY_LABELS[selected.category]}
            </span>
          </div>

          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.75rem", color: "#f0f0f3", marginBottom: "16px" }}>
            {selected.name}
          </h2>

          <p style={{ color: "#9a9aaa", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
            {selected.detail}
          </p>

          <div style={{ marginBottom: "24px" }}>
            <h4 style={{ fontSize: "12px", color: "#5a5a68", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Key Thinkers</h4>
            <p style={{ color: "#9a9aaa", fontSize: "14px" }}>{selected.thinkers.join(", ")}</p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h4 style={{ fontSize: "12px", color: "#5a5a68", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Relevance to AI</h4>
            <p style={{ color: "#9a9aaa", fontSize: "14px", lineHeight: 1.7 }}>{selected.aiRelevance}</p>
          </div>

          <div>
            <h4 style={{ fontSize: "12px", color: "#5a5a68", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Related Concepts</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {selected.related.map((rid) => {
                const rc = concepts.find((c) => c.id === rid);
                return rc ? (
                  <button key={rid} onClick={() => setSelected(rc)}
                    style={{
                      padding: "4px 12px", borderRadius: "12px", fontSize: "12px",
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
                      color: "#9a9aaa", cursor: "pointer",
                    }}>
                    {rc.name}
                  </button>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}

      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: "fixed", inset: 0, zIndex: 55, background: "rgba(0,0,0,0.5)",
        }} />
      )}
    </main>
  );
}

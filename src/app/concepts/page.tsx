"use client";

import { useState } from "react";
import { X, Search } from "lucide-react";
import { concepts, COLORS, LABELS } from "@/data/concepts";
import type { Concept } from "@/data/concepts";

export default function ConceptsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sel, setSel] = useState<Concept | null>(null);

  const cats = ["all", "epistemology", "ethics", "mind", "language", "political"];
  const list = concepts.filter((c) => {
    if (filter !== "all" && c.category !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <main>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "100px 24px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <a href="/" style={{ fontSize: 12, color: "#4a4a58", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px", color: "#2a2a35" }}>/</span>
          <span style={{ fontSize: 12, color: "#5a5a68" }}>Concepts</span>
        </div>
        <span className="overline">Interactive</span>
        <h1
          style={{
            fontFamily: "'Instrument Serif',Georgia,serif",
            fontSize: "clamp(2rem,4vw,3rem)",
            marginTop: 16,
          }}
        >
          Concept Explorer
        </h1>
        <p style={{ marginTop: 12, color: "#7a7a88", maxWidth: 500, lineHeight: 1.6 }}>
          A map of philosophical concepts essential for understanding AI. Click any concept to explore.
        </p>
      </div>

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "20px 24px 80px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 24 }}>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "6px 16px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                background: filter === c ? (c === "all" ? "#ef5044" : COLORS[c] || "#ef5044") : "rgba(255,255,255,0.04)",
                color: filter === c ? "#fff" : "#7a7a88",
                transition: "all 0.2s",
              }}
            >
              {c === "all" ? "All" : LABELS[c] || c}
            </button>
          ))}
          <div style={{ marginLeft: "auto", position: "relative" }}>
            <Search
              size={14}
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#4a4a58",
              }}
            />
            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input"
              style={{ paddingLeft: 36, width: 200, fontSize: 13 }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
          {list.map((c) => (
            <button
              key={c.id}
              onClick={() => setSel(c)}
              style={{
                textAlign: "left",
                cursor: "pointer",
                padding: 20,
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: COLORS[c.category] || "#888",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    color: "#5a5a68",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.1em",
                  }}
                >
                  {LABELS[c.category]}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Instrument Serif',Georgia,serif",
                  fontSize: "1.1rem",
                  color: "#f0f0f3",
                  marginBottom: 6,
                }}
              >
                {c.name}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#6a6a78",
                  lineHeight: 1.5,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical" as const,
                }}
              >
                {c.description}
              </p>
            </button>
          ))}
        </div>
        {list.length === 0 && (
          <p style={{ color: "#5a5a68", textAlign: "center", padding: "40px 0" }}>No concepts match your search.</p>
        )}
      </div>

      {sel && (
        <>
          <div
            onClick={() => setSel(null)}
            style={{ position: "fixed", inset: 0, zIndex: 55, background: "rgba(0,0,0,0.5)" }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(480px, 100vw)",
              zIndex: 60,
              background: "#111118",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
              overflowY: "auto",
              padding: 32,
            }}
          >
            <button
              onClick={() => setSel(null)}
              style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer" }}
            >
              <X size={20} color="#7a7a88" />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: COLORS[sel.category] }} />
              <span
                style={{
                  fontSize: 12,
                  color: COLORS[sel.category],
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                {LABELS[sel.category]}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif',Georgia,serif",
                fontSize: "1.75rem",
                color: "#f0f0f3",
                marginBottom: 16,
              }}
            >
              {sel.name}
            </h2>
            <p style={{ color: "#9a9aaa", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{sel.detail}</p>
            <div style={{ marginBottom: 24 }}>
              <h4
                style={{
                  fontSize: 12,
                  color: "#5a5a68",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                Key Thinkers
              </h4>
              <p style={{ color: "#9a9aaa", fontSize: 14 }}>{sel.thinkers.join(", ")}</p>
            </div>
            <div style={{ marginBottom: 24 }}>
              <h4
                style={{
                  fontSize: 12,
                  color: "#5a5a68",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                Relevance to AI
              </h4>
              <p style={{ color: "#9a9aaa", fontSize: 14, lineHeight: 1.7 }}>{sel.aiRelevance}</p>
            </div>
            <div>
              <h4
                style={{
                  fontSize: 12,
                  color: "#5a5a68",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                Related Concepts
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {sel.related.map((rid) => {
                  const rc = concepts.find((c) => c.id === rid);
                  return rc ? (
                    <button
                      key={rid}
                      onClick={() => setSel(rc)}
                      style={{
                        padding: "4px 12px",
                        borderRadius: 12,
                        fontSize: 12,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "#9a9aaa",
                        cursor: "pointer",
                      }}
                    >
                      {rc.name}
                    </button>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

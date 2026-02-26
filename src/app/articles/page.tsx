"use client";

import Link from "next/link";

let articles: any[] = [];
try { const mod = require("@/data/articles"); articles = mod.articles || mod.default || []; } catch {}

export default function ArticlesPage() {
  return (
    <main>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "120px 24px 24px" }}>
        <span className="overline">Writing</span>
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          marginTop: "16px",
        }}>
          Articles & Essays
        </h1>
        <p style={{ marginTop: "12px", color: "#7a7a88", maxWidth: "550px", lineHeight: 1.6 }}>
          Long-form philosophical analysis of AI — epistemic risks, ethical architecture,
          and the questions that technology alone cannot answer.
        </p>
      </div>

      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "24px 24px 80px" }}>
        {articles.map((article: any, i: number) => (
          <Link
            key={article.slug || i}
            href={`/articles/${article.slug}`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <article style={{
              padding: "28px 0",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              transition: "border-color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,0.10)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,0.04)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", color: "#4a4a58", marginBottom: "10px" }}>
                <time>{formatDate(article.date)}</time>
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#3a3a45" }} />
                <span>{article.readingTime}</span>
              </div>

              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "1.4rem",
                color: "#f0f0f3",
                marginBottom: "8px",
                lineHeight: 1.25,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ef5044"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#f0f0f3"; }}
              >
                {article.title}
              </h2>

              <p style={{ fontSize: "0.95rem", color: "#6a6a78", lineHeight: 1.6, marginBottom: "12px" }}>
                {article.excerpt}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {(article.tags || []).map((tag: string) => (
                  <span key={tag} className="badge-tag">{tag}</span>
                ))}
              </div>
            </article>
          </Link>
        ))}

        {articles.length === 0 && (
          <p style={{ color: "#5a5a68", padding: "40px 0" }}>Articles coming soon.</p>
        )}
      </div>
    </main>
  );
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return dateStr;
  }
}

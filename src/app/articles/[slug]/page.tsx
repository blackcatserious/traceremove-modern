import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { articles } from "@/data/articles";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// This tells Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
    other: {
      "citation_title": article.title,
      "citation_author": "Ziganshin, Artur",
      "citation_publication_date": article.date,
      "citation_language": "en",
    },
  };
}

function formatDate(d: string): string {
  try { return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }); }
  catch { return d; }
}

function renderContent(content: string) {
  if (!content) return null;
  return content.split("\n\n").map((block, i) => {
    const t = block.trim();
    if (!t) return null;
    if (t.startsWith("## ")) {
      return (
        <h2 key={i} style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "1.5rem", color: "#f0f0f3",
          marginTop: "48px", marginBottom: "16px", lineHeight: 1.2,
        }}>
          {t.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} style={{
        color: "#a0a0b0", fontSize: "17px",
        lineHeight: 1.85, marginBottom: "24px",
      }}>
        {t}
      </p>
    );
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      {/* Header */}
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "120px 24px 0" }}>
        <Link href="/articles" style={{
          color: "#5a5a68", fontSize: "13px", textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: "6px",
        }}>
          <ArrowLeft size={14} /> Back to articles
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", color: "#4a4a58", marginTop: "32px" }}>
          <time>{formatDate(article.date)}</time>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#3a3a45" }} />
          <span>{article.readingTime}</span>
        </div>

        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          marginTop: "16px", lineHeight: 1.12, letterSpacing: "-0.02em",
        }}>
          {article.title}
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "20px" }}>
          {article.tags.map((tag) => (
            <span key={tag} style={{
              display: "inline-flex", alignItems: "center",
              padding: "2px 10px", borderRadius: "20px",
              fontSize: "11px", fontWeight: 500,
              background: "rgba(255,255,255,0.03)",
              color: "#6a6a78",
              border: "1px solid rgba(255,255,255,0.04)",
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{
          marginTop: "24px", paddingBottom: "24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          fontSize: "14px", color: "#5a5a68",
        }}>
          By <span style={{ color: "#b0b0bc" }}>Artur Ziganshin</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 24px 60px" }}>
        {renderContent(article.content)}
      </div>

      {/* Footer CTA */}
      <div style={{
        maxWidth: "680px", margin: "0 auto", padding: "0 24px 80px",
        borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "40px",
      }}>
        <p style={{ color: "#5a5a68", fontSize: "14px", marginBottom: "8px" }}>Enjoyed this essay?</p>
        <Link href="/newsletter" style={{
          color: "#ef5044", fontSize: "14px", fontWeight: 500,
          textDecoration: "none", display: "inline-flex",
          alignItems: "center", gap: "4px",
        }}>
          Subscribe to The Epistemic Mirror <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}

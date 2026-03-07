import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return { title: "Article Not Found" };
  }

  const canonicalUrl = `https://traceremove.dev/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: "Artur Ziganshin" }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      publishedTime: article.date,
      authors: ["Artur Ziganshin"],
      tags: article.tags,
      images: [{ url: `/og-article/${article.slug}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`/og-article/${article.slug}`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return dateStr;
  }
}

function renderContent(content: string) {
  if (!content) return null;
  return content.split("\n\n").map((block: string, i: number) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "1.5rem",
          color: "#f0f0f3",
          marginTop: "48px",
          marginBottom: "16px",
          lineHeight: 1.2,
        }}>
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} style={{
        color: "#a0a0b0",
        fontSize: "17px",
        lineHeight: 1.85,
        marginBottom: "24px",
      }}>
        {trimmed}
      </p>
    );
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) notFound();

  return (
    <main>
      <ReadingProgress />
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "120px 24px 0" }}>
        <Link href="/articles" style={{
          color: "#5a5a68", fontSize: "13px", textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: "6px",
          transition: "color 0.2s",
        }}>
          ← Back to articles
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", color: "#4a4a58", marginTop: "32px" }}>
          <time>{formatDate(article.date)}</time>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#3a3a45" }} />
          <span>{article.readingTime}</span>
        </div>

        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          marginTop: "16px",
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
        }}>
          {article.title}
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "20px" }}>
          {(article.tags || []).map((tag: string) => (
            <span key={tag} className="badge-tag">{tag}</span>
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

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 24px 60px" }}>
        {renderContent(article.content)}
      </div>

      <div style={{
        maxWidth: "680px", margin: "0 auto", padding: "0 24px 80px",
        borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "40px",
      }}>
        <p style={{ color: "#5a5a68", fontSize: "14px", marginBottom: "8px" }}>Enjoyed this essay?</p>
        <Link href="/newsletter" className="accent-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
          Subscribe to The Epistemic Mirror <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}

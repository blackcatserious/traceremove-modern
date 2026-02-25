import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Writing | Artur Ziganshin",
  description:
    "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.",
};

export default function ArticlesPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <span className="overline">Writing</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Articles &amp; Essays</h1>
        <p className="mt-4 text-lg text-[#8a8a97] max-w-2xl">
          Refined long-form essays on AI philosophy, epistemic risk, and ethical architecture.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {articles.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.06}>
            <Link href={`/articles/${article.slug}`} className="block group">
              <div className="py-6 border-b border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                <div className="flex items-center gap-3 text-xs text-[#5e5e6c] mb-2">
                  <time>{article.date}</time>
                  <span>·</span>
                  <span>{article.readingTime}</span>
                </div>
                <h3 className="text-2xl text-white group-hover:text-[#ef5044] transition-colors mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  {article.title}
                </h3>
                <p className="text-sm text-[#7a7a88] line-clamp-2 mb-3">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="badge badge-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

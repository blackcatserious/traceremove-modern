import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Writing | Artur Ziganshin",
  description:
    "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-[1024px] space-y-8 px-4 py-14 sm:px-6">
      <header>
        <h1 className="text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Writing</h1>
        <p className="mt-3 text-[#4d4d58] dark:text-[#d9d9de]">Essays on AI philosophy, epistemic risk, and ethical architecture.</p>
      </header>

      <div className="space-y-4">
        {articles.map((article) => (
          <article key={article.slug} className="card p-6">
            <p className="text-xs uppercase tracking-wide text-[#6b6b79]">{article.date} · {article.readingTime}</p>
            <Link href={`/articles/${article.slug}`} className="mt-2 block text-2xl font-semibold hover:underline">{article.title}</Link>
            <p className="mt-2 text-sm leading-relaxed text-[#4d4d58] dark:text-[#d9d9de]">{article.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs dark:border-white/10">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

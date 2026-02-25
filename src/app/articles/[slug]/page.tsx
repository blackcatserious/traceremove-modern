import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

const description =
  "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((item) => item.slug === params.slug);
  return {
    title: `${article?.title ?? "Article"} | Artur Ziganshin`,
    description,
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} className="mb-4 leading-relaxed text-[#2f2f36] dark:text-[#d9d9de]">
        {trimmed}
      </p>
    );
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-[820px] px-4 py-14 sm:px-6">
      <p className="text-xs uppercase tracking-wide text-[#6b6b79]">{article.date} · {article.readingTime}</p>
      <h1 className="mt-2 text-5xl leading-tight" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>{article.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs dark:border-white/10">{tag}</span>
        ))}
      </div>

      <section className="mt-10">{renderContent(article.content)}</section>

      <section className="mt-12 rounded-2xl border border-black/10 p-6 dark:border-white/10">
        <h3 className="text-xl font-semibold">About the Author</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4d4d58] dark:text-[#d9d9de]">
          Artur Ziganshin is an independent AI philosophy researcher writing on epistemic risk, ethical architecture,
          and the social implications of machine intelligence.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-black/10 bg-[#f5f3ee] p-6 dark:border-white/10 dark:bg-[#1a1a1f]">
        <h3 className="text-xl font-semibold">Subscribe to The Epistemic Mirror</h3>
        <p className="mt-2 text-sm">Weekly philosophical analysis of AI developments. Free, concise, and practical.</p>
        <Link href="/newsletter" className="mt-3 inline-block rounded-full bg-[#ef5044] px-4 py-2 text-sm font-semibold text-white">
          Subscribe →
        </Link>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold">More articles</h3>
        <ul className="mt-3 space-y-2">
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={`/articles/${item.slug}`} className="text-[#ef5044] hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

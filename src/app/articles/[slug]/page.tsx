import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/articles/ReadingProgress";
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
      return <h2 key={i}>{trimmed.replace("## ", "")}</h2>;
    }
    return <p key={i}>{trimmed}</p>;
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <article className="px-6 py-20">
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-wide text-[#6b6b79]">{article.date} · {article.readingTime}</p>
        <h1 className="mt-2 text-5xl leading-tight">{article.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="badge badge-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="prose-custom max-w-[42rem] mx-auto mt-10">
        {renderContent(article.content)}
      </div>

      <section className="max-w-[42rem] mx-auto mt-12 card">
        <h3 className="text-xl font-semibold">About the Author</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#8a8a97]">
          Artur Ziganshin is an independent AI philosophy researcher writing on epistemic risk, ethical architecture,
          and the social implications of machine intelligence.
        </p>
      </section>

      <section className="max-w-[42rem] mx-auto mt-8 card">
        <h3 className="text-xl font-semibold">Subscribe to The Epistemic Mirror</h3>
        <p className="mt-3 text-sm text-[#8a8a97]">Weekly philosophical analysis of AI developments. Free, concise, and practical.</p>
        <Link href="/newsletter" className="mt-4 btn-primary">Subscribe →</Link>
      </section>

      <section className="max-w-[42rem] mx-auto mt-10">
        <h3 className="text-xl font-semibold">More articles</h3>
        <ul className="mt-3 space-y-2">
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={`/articles/${item.slug}`} className="accent-link">{item.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

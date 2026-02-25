import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { papers } from "@/data/papers";

const description =
  "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.";

export const metadata: Metadata = {
  title: "Artur Ziganshin — AI Philosophy Research",
  description,
};

const researchAreas = [
  {
    title: "Epistemic Risks",
    text: "How do AI systems generate persuasive but weakly grounded claims? Drawing on process reliabilism and virtue epistemology, I develop frameworks for auditing the epistemic reliability of machine-generated outputs before deployment.",
  },
  {
    title: "Ethical Architecture",
    text: "Design principles for embedding normative constraints at the model, interface, and institutional levels — so that ethical considerations are foundational rather than afterthoughts.",
  },
  {
    title: "Human Dignity & Automation",
    text: "A philosophical framework grounded in Kantian ethics and capabilities theory for preserving human agency, respect, and contestability in AI-mediated decisions that affect people's lives.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1280px] space-y-24 px-4 pb-24 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 px-8 py-16 dark:border-white/10 dark:bg-[#1a1a1f]/70 md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(239,80,68,0.16),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(224,171,78,0.14),transparent_42%)]" />
        <div className="relative max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#5e5e6c] dark:text-[#b8b8c1]">AI Philosophy Research</p>
          <h1 className="text-5xl leading-tight md:text-7xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
            What machines mean, what they risk, what we owe.
          </h1>
          <p className="max-w-3xl text-lg text-[#4d4d58] dark:text-[#d9d9de]">{description}</p>
          <p className="text-base text-[#5e5e6c] dark:text-[#b8b8c1]">Artur Ziganshin · Master of Philosophy · PhD of Philosophy</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/research" className="rounded-full bg-[#ef5044] px-5 py-2.5 text-sm font-semibold text-white">Read Research →</Link>
            <Link href="/newsletter" className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold dark:border-white/15">Subscribe →</Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Research Areas</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {researchAreas.map((area) => (
            <article key={area.title} className="card p-6 transition duration-300 hover:-translate-y-1">
              <h3 className="text-2xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4d4d58] dark:text-[#d9d9de]">{area.text}</p>
              <Link href="/research" className="mt-4 inline-block text-sm font-semibold text-[#ef5044]">Explore →</Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Recent Papers</h2>
          <Link href="/research" className="text-sm font-semibold text-[#ef5044]">View all →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {papers.slice(0, 3).map((paper) => (
            <article key={paper.title} className="card p-6">
              <span className="inline-flex rounded-full bg-[#eeeef0] px-3 py-1 text-xs uppercase tracking-wide text-[#5e5e6c] dark:bg-[#2f2f36] dark:text-[#d9d9de]">{paper.status}</span>
              <a href={paper.philArchiveUrl} target="_blank" rel="noreferrer" className="mt-3 block text-lg font-semibold hover:underline">{paper.title}</a>
              <p className="mt-2 line-clamp-2 text-sm text-[#4d4d58] dark:text-[#d9d9de]">{paper.abstract}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {paper.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 px-2 py-0.5 text-xs dark:border-white/10">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Latest Writing</h2>
          <Link href="/articles" className="text-sm font-semibold text-[#ef5044]">View all →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <article key={article.slug} className="card p-6">
              <p className="text-xs uppercase tracking-wide text-[#5e5e6c] dark:text-[#b8b8c1]">{article.date} · {article.readingTime}</p>
              <Link href={`/articles/${article.slug}`} className="mt-2 block text-lg font-semibold hover:underline">{article.title}</Link>
              <p className="mt-2 text-sm text-[#4d4d58] dark:text-[#d9d9de]">{article.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {article.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 px-2 py-0.5 text-xs dark:border-white/10">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-[#f5f3ee] px-8 py-12 dark:border-white/10 dark:bg-[#1a1a1f]">
        <h2 className="text-4xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>The Epistemic Mirror</h2>
        <p className="mt-3 text-[#4d4d58] dark:text-[#d9d9de]">Weekly philosophical analysis of AI developments. No hype. No jargon. Just clarity.</p>
        <form className="mt-6 flex flex-wrap gap-3">
          <input type="email" placeholder="you@example.com" className="min-w-[260px] flex-1 rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm dark:border-white/15 dark:bg-[#131316]" />
          <button type="button" className="rounded-full bg-[#ef5044] px-6 py-2.5 text-sm font-semibold text-white">Subscribe</button>
        </form>
        <p className="mt-3 text-xs text-[#6b6b79]">Free · Unsubscribe anytime</p>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>About</h2>
        <p>
          I investigate the philosophical foundations of artificial intelligence — focusing on what AI systems know, how they fail, and what we owe to the people affected by their decisions.
        </p>
        <p>
          My work sits at the intersection of epistemology, ethics, and philosophy of language. I publish research on PhilArchive and write weekly philosophical analysis for a growing community of readers.
        </p>
        <Link href="/cv" className="inline-block text-sm font-semibold text-[#ef5044]">Read full CV →</Link>
      </section>
    </div>
  );
}

const articles = [
  { slug: "why-ai-needs-philosophy", title: "Why AI Needs Philosophy Now More Than Ever", date: "2026-03-01", readingTime: "8 min", excerpt: "Large language models don't understand meaning. They process patterns. This distinction matters enormously.", tags: ["AI philosophy", "epistemic risks", "LLMs"] },
  { slug: "what-deepseek-reveals-about-ai-knowledge", title: "What DeepSeek Reveals About the Fragility of AI Knowledge", date: "2026-03-08", readingTime: "6 min", excerpt: "When different training approaches produce similar benchmarks, what does that tell us about understanding?", tags: ["DeepSeek", "epistemic risks", "benchmarking"] },
  { slug: "ai-ethics-reading-list-2026", title: "The Essential AI Philosophy Reading List for 2026", date: "2026-03-15", readingTime: "10 min", excerpt: "From Turing's original question to the latest debates on AI consciousness.", tags: ["reading list", "books", "philosophy of AI"] },
  { slug: "epistemic-risk-audit-frameworks", title: "Epistemic Risk Audit Frameworks", date: "2026-03-22", readingTime: "7 min", excerpt: "A practical framework for evaluating AI knowledge claims.", tags: ["epistemic risks", "frameworks"] },
];

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-semibold">Articles</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">Essays on AI philosophy, governance, and machine epistemology.</p>

      <div className="mt-8 space-y-4">
        {articles.map((article) => (
          <article key={article.slug} className="card">
            <div className="text-sm text-neutral-500">{article.date} · {article.readingTime}</div>
            <h2 className="mt-1 text-xl font-semibold">{article.title}</h2>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{article.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

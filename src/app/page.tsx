import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { papers } from "@/data/papers";
import { articles } from "@/data/articles";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] flex items-center px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 75% 25%, rgba(239,80,68,0.05) 0%, transparent 55%)" }}
        />

        <div className="relative max-w-5xl mx-auto w-full">
          <div className="animate-fade-up">
            <span className="overline">AI Philosophy Research</span>
          </div>

          <h1
            className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight animate-fade-up delay-100"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            What machines mean,<br />
            what they risk,<br />
            what we owe.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#8a8a97] max-w-2xl leading-relaxed animate-fade-up delay-300">
            Independent philosophical research on the epistemic foundations, ethical architecture, and social
            implications of artificial intelligence.
          </p>

          <p className="mt-4 text-sm text-[#5e5e6c] animate-fade-up delay-400">
            Artur Ziganshin · Master of Philosophy · PhD of Philosophy
          </p>

          <div className="flex flex-wrap gap-4 mt-8 animate-fade-up delay-500">
            <Link href="/research" className="btn-primary">Read Research <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/newsletter" className="btn-secondary">Subscribe <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-14">Research Areas</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="card">
                <div className="w-2 h-2 rounded-full bg-[#ef5044] mb-5" />
                <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Epistemic Risks
                </h3>
                <p className="text-sm text-[#8a8a97] leading-relaxed mb-4">
                  How do AI systems generate persuasive but weakly grounded claims? Drawing on process reliabilism and
                  virtue epistemology, I develop frameworks for auditing epistemic reliability before deployment.
                </p>
                <Link href="/research" className="accent-link">Explore →</Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="card">
                <div className="w-2 h-2 rounded-full bg-[#e0ab4e] mb-5" />
                <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Ethical Architecture
                </h3>
                <p className="text-sm text-[#8a8a97] leading-relaxed mb-4">
                  Design principles for embedding normative constraints at model, interface, and institutional levels —
                  so ethics is foundational, not an afterthought.
                </p>
                <Link href="/research" className="accent-link">Explore →</Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="card">
                <div className="w-2 h-2 rounded-full bg-[#6b8aed] mb-5" />
                <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Human Dignity
                </h3>
                <p className="text-sm text-[#8a8a97] leading-relaxed mb-4">
                  A framework grounded in Kantian ethics and capabilities theory for preserving agency, respect, and
                  contestability in AI-mediated decisions.
                </p>
                <Link href="/research" className="accent-link">Explore →</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl">Recent Papers</h2>
              <Link href="/research" className="accent-link flex items-center gap-1">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {papers.slice(0, 3).map((paper, index) => (
            <FadeIn key={paper.title} delay={0.08 * (index + 1)}>
              <div className="card mb-4">
                <span className="badge badge-preprint">Preprint</span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">{paper.title}</h3>
                <p className="text-sm text-[#7a7a88] line-clamp-2 mb-3">{paper.abstract}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((t) => <span key={t} className="badge badge-tag">{t}</span>)}
                </div>
                <a href={paper.philArchiveUrl} target="_blank" rel="noopener noreferrer" className="accent-link">
                  Read on PhilArchive →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl">Latest Writing</h2>
              <Link href="/articles" className="accent-link flex items-center gap-1">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {articles.slice(0, 3).map((article, i) => (
            <FadeIn key={article.slug} delay={0.08 * (i + 1)}>
              <Link href={`/articles/${article.slug}`} className="block group">
                <div className="py-6 border-b border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                  <div className="flex items-center gap-3 text-xs text-[#5e5e6c] mb-2">
                    <time>{article.date}</time>
                    <span>·</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h3
                    className="text-xl text-white group-hover:text-[#ef5044] transition-colors mb-2"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#7a7a88] line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <FadeIn>
          <div
            className="max-w-xl mx-auto text-center p-12 rounded-3xl"
            style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)" }}
          >
            <h2 className="text-3xl md:text-4xl italic mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              The Epistemic Mirror
            </h2>
            <p className="text-[#8a8a97] mb-8">
              Weekly philosophical analysis of AI developments. No hype, no jargon — just clarity.
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <input type="email" placeholder="your@email.com" className="input flex-1" />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
            <p className="text-xs text-[#4a4a58] mt-4">Free · Unsubscribe anytime</p>
          </div>
        </FadeIn>
      </section>

      <section className="px-6 py-16 mb-12">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#8a8a97] leading-relaxed mb-4">
              I investigate the philosophical foundations of artificial intelligence — focusing on what AI systems know,
              how they fail, and what we owe to the people affected by their decisions.
            </p>
            <p className="text-[#8a8a97] leading-relaxed mb-6">
              My work sits at the intersection of epistemology, ethics, and philosophy of language. I publish research
              on PhilArchive and write weekly philosophical analysis for a growing community of readers.
            </p>
            <Link href="/cv" className="accent-link">Read full CV →</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

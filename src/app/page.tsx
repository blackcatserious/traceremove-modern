import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

// Try to import data — use empty arrays if files don't exist
let papers: any[] = [];
let articles: any[] = [];
try { papers = require("@/data/papers").papers || require("@/data/papers").default || []; } catch {}
try { articles = require("@/data/articles").articles || require("@/data/articles").default || []; } catch {}

export default function Home() {
  const topPapers = papers.slice(0, 3);
  const topArticles = articles.slice(0, 3);

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative px-6 pt-40 md:pt-48 pb-16 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{
            position: "absolute", top: "-20%", right: "-10%",
            width: 600, height: 600, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,80,68,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "pulseGlow 5s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "-10%", left: "-5%",
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,138,237,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "pulseGlow 5s ease-in-out infinite 2s",
          }} />
          {/* Dot grid */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.3,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <span className="overline">AI Philosophy Research</span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl tracking-tight">
              What machines mean,<br />
              what they risk,<br />
              what we owe.
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "#7a7a88" }}>
              Independent philosophical research on the epistemic foundations, ethical
              architecture, and social implications of artificial intelligence.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-4 text-sm" style={{ color: "#5a5a68" }}>
              Artur Ziganshin · Master of Philosophy · PhD of Philosophy
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex flex-wrap gap-4 mt-7">
              <Link href="/research" className="btn-primary">
                Read Research <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/newsletter" className="btn-secondary">
                Subscribe <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <FadeIn className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8" 
             style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="text-center md:text-left">
            <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>7</p>
            <p className="text-xs mt-1.5" style={{ color: "#5a5a68" }}>Research Papers</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>5</p>
            <p className="text-xs mt-1.5" style={{ color: "#5a5a68" }}>Essays Published</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>3</p>
            <p className="text-xs mt-1.5" style={{ color: "#5a5a68" }}>Research Areas</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl font-bold" style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: "#ef5044" }}>↗</p>
            <p className="text-xs mt-1.5" style={{ color: "#5a5a68" }}>Open Access</p>
          </div>
        </div>
      </FadeIn>

      {/* ═══ RESEARCH AREAS ═══ */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-3">Research Areas</h2>
            <p className="text-sm mb-12" style={{ color: "#5a5a68" }}>Three interconnected lines of inquiry into the philosophical foundations of AI.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            <FadeIn delay={0.1}>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef5044" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#5a5a68" }}>Epistemology</span>
                </div>
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Epistemic Risks</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#7a7a88" }}>
                  How do AI systems generate persuasive but weakly grounded claims?
                  I develop frameworks for auditing epistemic reliability, drawing on
                  process reliabilism and virtue epistemology.
                </p>
                <Link href="/research" className="accent-link inline-flex items-center gap-1">Explore <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#e0ab4e" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#5a5a68" }}>Ethics</span>
                </div>
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Ethical Architecture</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#7a7a88" }}>
                  Design principles for embedding normative constraints at the model,
                  interface, and institutional levels — so ethics is structural,
                  not decorative.
                </p>
                <Link href="/research" className="accent-link inline-flex items-center gap-1">Explore <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#6b8aed" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#5a5a68" }}>Social Philosophy</span>
                </div>
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Human Dignity</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#7a7a88" }}>
                  A framework grounded in Kantian ethics and capabilities theory
                  for preserving agency, respect, and contestability in
                  AI-mediated decisions.
                </p>
                <Link href="/research" className="accent-link inline-flex items-center gap-1">Explore <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ RECENT PAPERS ═══ */}
      {topPapers.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl">Recent Papers</h2>
                <Link href="/research" className="accent-link flex items-center gap-1">View all <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </FadeIn>
            <div className="space-y-4">
              {topPapers.map((paper: any, i: number) => (
                <FadeIn key={paper.title || i} delay={i * 0.1}>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="badge-preprint">Preprint</span>
                      <span className="text-xs" style={{ color: "#4a4a58" }}>2025</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                      {paper.title}
                    </h3>
                    <p className="text-sm line-clamp-2 mb-4" style={{ color: "#6a6a78" }}>{paper.abstract || paper.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {(paper.tags || []).slice(0, 3).map((t: string) => <span key={t} className="badge-tag">{t}</span>)}
                      </div>
                      {paper.url && (
                        <a href={paper.url} target="_blank" rel="noopener noreferrer" className="accent-link text-xs flex items-center gap-1">
                          PhilArchive <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ LATEST WRITING ═══ */}
      {topArticles.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl">Latest Writing</h2>
                <Link href="/articles" className="accent-link flex items-center gap-1">View all <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </FadeIn>
            {topArticles.map((a: any, i: number) => (
              <FadeIn key={a.slug || i} delay={i * 0.1}>
                <Link href={`/articles/${a.slug}`} className="block group">
                  <div className="py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div className="flex items-center gap-3 text-xs mb-2" style={{ color: "#4a4a58" }}>
                      <time>{a.date}</time>
                      <span>·</span>
                      <span>{a.readingTime}</span>
                    </div>
                    <h3 className="text-xl text-white mb-1.5 group-hover:text-[#ef5044] transition-colors" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                      {a.title}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: "#6a6a78" }}>{a.excerpt}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* ═══ NEWSLETTER CTA ═══ */}
      <section className="px-6 py-20">
        <FadeIn>
          <div className="relative max-w-xl mx-auto text-center p-10 md:p-14 rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(239,80,68,0.015))", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{
              position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)",
              width: 300, height: 300, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(239,80,68,0.08), transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
            <h2 className="relative text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }}>
              The Epistemic Mirror
            </h2>
            <p className="relative text-sm mb-8" style={{ color: "#7a7a88" }}>
              Weekly philosophical analysis of AI developments.<br />No hype. No jargon. Just clarity.
            </p>
            <div className="relative flex gap-3 max-w-sm mx-auto">
              <input type="email" placeholder="your@email.com" className="input flex-1" />
              <button className="btn-primary text-sm px-5">Subscribe</button>
            </div>
            <p className="relative text-[11px] mt-4" style={{ color: "#3a3a45" }}>Free · Unsubscribe anytime</p>
          </div>
        </FadeIn>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="px-6 py-16 mb-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <p className="leading-relaxed mb-4" style={{ color: "#8a8a97" }}>
              I investigate the philosophical foundations of artificial intelligence —
              focusing on what AI systems know, how they fail, and what we owe to
              the people affected by their decisions.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "#8a8a97" }}>
              My work sits at the intersection of epistemology, ethics, and philosophy
              of language. I publish on PhilArchive and write weekly analysis for a
              growing community of readers.
            </p>
            <Link href="/cv" className="accent-link inline-flex items-center gap-1">
              Read full CV <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

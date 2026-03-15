"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site-config";

const faq = [
  { q: "Is this free?", a: "Yes, always." },
  { q: "Who is this for?", a: "Engineers, policymakers, researchers, and anyone thinking about AI's impact." },
  { q: "How do I unsubscribe?", a: "One click. No questions." },
];

export default function NewsletterClient() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <span className="overline">Newsletter</span>
        <h1 className="mt-4 text-4xl md:text-5xl">The Epistemic Mirror</h1>
        <p className="mt-4 text-lg text-[#8a8a97] max-w-2xl">
          Weekly philosophical analysis of AI developments — what machines mean, what they risk, and what we owe each
          other in the age of automation.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
        <FadeIn>
          <div className="card flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#b0b0bc]">
              Join readers receiving weekly essays and monthly deep dives.
              <span className="block text-xs text-[#6b6b79] mt-1">You'll be redirected to our Substack page.</span>
            </p>
            <a href={siteConfig.newsletter.substackUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Subscribe →
            </a>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          <FadeIn><article className="card"><h2 className="text-xl font-semibold">Weekly Essay (Tuesdays)</h2><p className="mt-2 text-sm leading-relaxed text-[#b0b0bc]">A philosophical analysis of one AI development. 1,500–2,000 words. Recent: the epistemology of DeepSeek, whether benchmarks measure understanding, dignity in automated hiring.</p></article></FadeIn>
          <FadeIn delay={0.1}><article className="card"><h2 className="text-xl font-semibold">Monthly Deep Dive (First Friday)</h2><p className="mt-2 text-sm leading-relaxed text-[#b0b0bc]">A 3,000–4,000 word philosophical analysis structured like an academic paper but written for general readers.</p></article></FadeIn>
          <FadeIn delay={0.2}><article className="card"><h2 className="text-xl font-semibold">Research Updates (Quarterly)</h2><p className="mt-2 text-sm leading-relaxed text-[#b0b0bc]">Paper submissions, conference talks, new research directions. Plus early access to preprints.</p></article></FadeIn>
        </div>

        <FadeIn>
          <section className="card">
            <h2 className="text-2xl font-semibold">Sample Issues</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[#b0b0bc]">
              <li>#1: Why DeepSeek Should Make You Question Every AI Benchmark</li>
              <li>#2: The Chinese Room Is Not Dead — It Just Got Bigger</li>
              <li>#3: What Kant Would Say About Your AI Recruiter</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="card">
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <div className="mt-4 space-y-4">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold text-white">{item.q}</h3>
                  <p className="text-sm text-[#8a8a97]">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}

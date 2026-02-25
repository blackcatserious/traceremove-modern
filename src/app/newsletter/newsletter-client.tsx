"use client";

import { useState } from "react";

const faq = [
  { q: "Is this free?", a: "Yes, always." },
  { q: "Who is this for?", a: "Engineers, policymakers, researchers, and anyone thinking about AI's impact." },
  { q: "How do I unsubscribe?", a: "One click. No questions." },
];

export default function NewsletterClient() {
  const [email, setEmail] = useState("");

  return (
    <div className="mx-auto max-w-[1024px] space-y-10 px-4 py-14 sm:px-6">
      <header>
        <h1 className="text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>The Epistemic Mirror</h1>
        <p className="mt-3 text-[#4d4d58] dark:text-[#d9d9de]">Weekly philosophical analysis of AI developments — what machines mean, what they risk, and what we owe each other in the age of automation.</p>
        <form
          className="mt-6 flex flex-wrap gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Newsletter signup", email);
            setEmail("");
          }}
        >
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="you@example.com" className="min-w-[280px] flex-1 rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm dark:border-white/15 dark:bg-[#1c1c22]" />
          <button type="submit" className="rounded-full bg-[#ef5044] px-5 py-2.5 text-sm font-semibold text-white">Subscribe</button>
        </form>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="card p-6"><h2 className="text-xl font-semibold">Weekly Essay (Tuesdays)</h2><p className="mt-2 text-sm leading-relaxed">A philosophical analysis of one AI development. 1,500–2,000 words. Recent: the epistemology of DeepSeek, whether benchmarks measure understanding, dignity in automated hiring.</p></article>
        <article className="card p-6"><h2 className="text-xl font-semibold">Monthly Deep Dive (First Friday)</h2><p className="mt-2 text-sm leading-relaxed">A 3,000–4,000 word philosophical analysis structured like an academic paper but written for general readers.</p></article>
        <article className="card p-6"><h2 className="text-xl font-semibold">Research Updates (Quarterly)</h2><p className="mt-2 text-sm leading-relaxed">Paper submissions, conference talks, new research directions. Plus early access to preprints.</p></article>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold">Sample Issues</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>#1: Why DeepSeek Should Make You Question Every AI Benchmark</li>
          <li>#2: The Chinese Room Is Not Dead — It Just Got Bigger</li>
          <li>#3: What Kant Would Say About Your AI Recruiter</li>
        </ul>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
          {faq.map((item) => (
            <div key={item.q}>
              <h3 className="font-semibold">{item.q}</h3>
              <p className="text-sm text-[#4d4d58] dark:text-[#d9d9de]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

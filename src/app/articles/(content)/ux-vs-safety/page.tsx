import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'UX vs Safety in AI Systems | Traceremove',
  description: 'Balancing delightful user experience with robust safety guardrails.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">UX vs Safety in AI Systems</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Balancing delightful user experience with robust safety guardrails.
      </p>
      <section className="space-y-6">
        <p>Safety controls often add friction; great UX must account for responsible constraints.</p>
        <h2>Design strategies</h2>
        <p>Explainable refusals, preview risks, contextual affordances, human-in-the-loop.</p>
      </section>
    </article>
  );
}

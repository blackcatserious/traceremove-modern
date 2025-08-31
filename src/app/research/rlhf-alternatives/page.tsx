import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Alternatives to RLHF | Traceremove',
  description: 'Exploring alternative alignment and preference optimization methods.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Alternatives to RLHF</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Supervised fine-tuning, DPO, constitutional methods, and more.
      </p>
      <section className="space-y-6">
        <h2>Comparison</h2>
        <p>Sample efficiency, stability, and safety tradeoffs.</p>
      </section>
    </article>
  );
}

import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Open vs Closed Models — Part II | Traceremove',
  description: 'Tradeoffs across safety, capability, governance, and ecosystem health.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Open vs Closed Models — Part II</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Tradeoffs across safety, capability, governance, and ecosystem health.
      </p>
      <section className="space-y-6">
        <p>Discuss openness gradients, release norms, and differential risk mitigation.</p>
        <h2>Recommendations</h2>
        <p>Responsible release policies, evals, and red-team processes.</p>
      </section>
    </article>
  );
}

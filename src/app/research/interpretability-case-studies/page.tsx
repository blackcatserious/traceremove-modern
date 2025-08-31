import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Interpretability Case Studies | Traceremove',
  description: 'Practical case studies demonstrating interpretability techniques in AI systems.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Interpretability Case Studies</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Practical interpretability in real-world deployments.
      </p>
      <section className="space-y-6">
        <h2>Methods</h2>
        <p>Attribution maps, concept activation, mechanistic probes, and audits.</p>
      </section>
    </article>
  );
}

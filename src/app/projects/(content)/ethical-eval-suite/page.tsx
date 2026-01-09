import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Ethical Eval Suite | Traceremove',
  description: 'A toolkit for evaluating ethical dimensions in AI systems.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Ethical Eval Suite</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Datasets, prompts, and metrics for normative evaluation.
      </p>
      <section className="space-y-6">
        <h2>Features</h2>
        <p>Bias probes, fairness metrics, red-team prompts, reporting templates.</p>
      </section>
    </article>
  );
}

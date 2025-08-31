import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Agentic Evaluation Methods | Traceremove',
  description: 'Evaluating tool-using, multi-step agents beyond simple win rates.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Agentic Evaluation Methods</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Evaluating tool-using, multi-step agents beyond simple win rates.
      </p>
      <section className="space-y-6">
        <p>Assess planning, recovery, calibration, tool selection, and ethics adherence.</p>
        <h2>Benchmarks</h2>
        <p>Scenario-based tasks with trace analysis, interpretability, and human review.</p>
      </section>
    </article>
  );
}

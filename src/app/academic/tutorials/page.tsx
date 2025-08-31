import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Tutorials | Traceremove',
  description: 'Learning materials and hands-on tutorials from the lab.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Tutorials</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Practical guides for students and practitioners.
      </p>
      <section className="space-y-6">
        <h2>Topics</h2>
        <p>Ethics, interpretability, evaluations, data governance, and tooling.</p>
      </section>
    </article>
  );
}

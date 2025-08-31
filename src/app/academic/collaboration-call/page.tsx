import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Collaboration Call | Traceremove',
  description: 'Open call for collaborators across research and industry.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Collaboration Call</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Join forces on ethical, interpretable, and robust AI.
      </p>
      <section className="space-y-6">
        <h2>How to engage</h2>
        <p>Propose projects, co-author papers, or mentor students.</p>
      </section>
    </article>
  );
}

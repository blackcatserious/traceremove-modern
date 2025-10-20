import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Grants | Traceremove',
  description: 'Funding opportunities and active grants for research collaborations.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Grants</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Opportunities for funding, partnerships, and joint research.
      </p>
      <section className="space-y-6">
        <h2>Programs</h2>
        <p>Calls, eligibility, timelines, and submission guidance.</p>
      </section>
    </article>
  );
}

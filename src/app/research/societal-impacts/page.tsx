import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Societal Impacts of AI | Traceremove',
  description: 'Labor, education, politics, and global equity considerations.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Societal Impacts of AI</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Cross-domain assessment of impacts and mitigations.
      </p>
      <section className="space-y-6">
        <h2>Frameworks</h2>
        <p>Risk-benefit analysis, stakeholder mapping, long-termism vs. present harms.</p>
      </section>
    </article>
  );
}

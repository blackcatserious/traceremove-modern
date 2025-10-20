import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Transparency Dashboard | Traceremove',
  description: 'A dashboard to surface model behavior, training data, and risks.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Transparency Dashboard</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Live metrics and documentation for governance and stakeholders.
      </p>
      <section className="space-y-6">
        <h2>Capabilities</h2>
        <p>Datasheets, model cards, evals, incident logs, and provenance.</p>
      </section>
    </article>
  );
}

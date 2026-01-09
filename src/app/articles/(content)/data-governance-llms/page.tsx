import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Data Governance for LLMs | Traceremove',
  description: 'Policies and practices for dataset sourcing, consent, and accountability.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Data Governance for LLMs</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Policies and practices for dataset sourcing, consent, and accountability.
      </p>
      <section className="space-y-6">
        <p>Governance spans collection, labeling, licensing, privacy, auditability.</p>
        <h2>Operational controls</h2>
        <p>Data lineage, DSR tooling, PII redaction, dataset cards, audit trails.</p>
      </section>
    </article>
  );
}

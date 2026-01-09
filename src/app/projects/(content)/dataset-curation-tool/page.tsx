import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Dataset Curation Tool | Traceremove',
  description: 'Curate, dedupe, and document datasets for responsible AI.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Dataset Curation Tool</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Improve data quality with lineage, consent, and transparency.
      </p>
      <section className="space-y-6">
        <h2>Modules</h2>
        <p>PII detection, licensing, deduplication, metadata cards, exports.</p>
      </section>
    </article>
  );
}

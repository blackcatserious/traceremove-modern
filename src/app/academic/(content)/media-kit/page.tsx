import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Media Kit | Traceremove',
  description: 'Brand assets, bios, and visuals for media use.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Media Kit</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Access logos, photos, and descriptions for press coverage.
      </p>
      <section className="space-y-6">
        <h2>Assets</h2>
        <p>Black cat logo, lab imagery, and standard brand guidelines.</p>
      </section>
    </article>
  );
}

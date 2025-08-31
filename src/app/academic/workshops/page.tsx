import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Workshops | Traceremove',
  description: 'Workshops and training events organized by the lab.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Workshops</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Hands-on sessions to build skills and understanding.
      </p>
      <section className="space-y-6">
        <h2>Formats</h2>
        <p>Lectures, labs, case studies, and collaborative projects.</p>
      </section>
    </article>
  );
}

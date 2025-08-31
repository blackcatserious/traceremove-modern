import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'AI and Democracy | Traceremove',
  description: 'Exploring AI’s impact on democratic processes and institutions.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">AI and Democracy</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Exploring AI’s impact on democratic processes and institutions.
      </p>
      <section className="space-y-6">
        <p>AI systems influence information flows, political persuasion, and civic participation.</p>
        <h2>Key risks</h2>
        <p>Disinformation amplification, microtargeting, unequal access, model bias.</p>
        <h2>Mitigations</h2>
        <p>Transparency standards, provenance, robust moderation, participatory oversight.</p>
      </section>
    </article>
  );
}

import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Agent Sandbox | Traceremove',
  description: 'A sandbox for safe tool-use and controllable autonomy experiments.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Agent Sandbox</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Tool-use, planning, and oversight experiments at small scale.
      </p>
      <section className="space-y-6">
        <h2>Safety Features</h2>
        <p>Capability limits, sandboxes, approval flows, and logging.</p>
      </section>
    </article>
  );
}

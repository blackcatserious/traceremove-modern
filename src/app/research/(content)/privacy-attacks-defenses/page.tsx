import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Privacy Attacks and Defenses | Traceremove',
  description: 'Membership inference, data exfiltration, and privacy-preserving techniques.'
};

export default function Page() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Privacy Attacks and Defenses</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        From attacks to countermeasures in modern AI systems.
      </p>
      <section className="space-y-6">
        <h2>Defenses</h2>
        <p>DP-SGD, K-anonymity, synthetic data, guardrails, audit trails.</p>
      </section>
    </article>
  );
}

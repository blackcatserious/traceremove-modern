import React from 'react';
import type { Metadata } from 'next';

import BackgroundLayers from '@/components/BackgroundLayers';

export const metadata: Metadata = {
  title: 'Contact — Traceremove Research',
  description: 'Contact Traceremove Research for collaboration, mentorship, or research partnerships.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="contact" className="opacity-60 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(129,140,248,0.16),transparent_58%),linear-gradient(180deg,rgba(2,6,23,0.95)_0%,rgba(8,23,43,0.92)_48%,rgba(15,23,42,0.9)_100%)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

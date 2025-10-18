import React from 'react';
import type { Metadata } from 'next';

import BackgroundLayers from '@/components/BackgroundLayers';

export const metadata: Metadata = {
  title: 'Academic Resources — Traceremove Research',
  description:
    'Academic collaborations, teaching resources, and scholarly programs showcasing the Traceremove Research lab community.',
};

export default function AcademicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="academic" className="opacity-70 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.18),transparent_58%),radial-gradient(circle_at_84%_12%,rgba(14,165,233,0.16),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.97)_0%,rgba(15,23,42,0.94)_48%,rgba(15,23,42,0.95)_100%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-400/10 via-cyan-400/5 to-transparent" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

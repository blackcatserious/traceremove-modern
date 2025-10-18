import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import BackgroundLayers from '@/components/BackgroundLayers';

export const metadata: Metadata = {
  title: 'Philosophy — Traceremove Research',
  description:
    'Explore the philosophical frameworks guiding Traceremove, including technology ethics, epistemology, and futures thinking.',
};

export default function PhilosophyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="philosophy" className="opacity-60 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(236,72,153,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(11,18,36,0.92)_52%,rgba(15,23,42,0.9)_100%)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import BackgroundLayers from '@/components/BackgroundLayers';

export const metadata: Metadata = {
  title: 'Legal & Governance — Traceremove Research',
  description:
    'Access the privacy policy, ethics commitments, and stewardship resources that guide the Traceremove research platform.',
};

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="legal" className="opacity-60 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_58%),linear-gradient(180deg,rgba(2,6,23,0.96)_0%,rgba(11,26,48,0.92)_52%,rgba(15,23,42,0.9)_100%)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

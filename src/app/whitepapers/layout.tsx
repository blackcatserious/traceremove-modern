import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import BackgroundLayers from '@/components/BackgroundLayers';

export const metadata: Metadata = {
  title: 'Whitepapers — Traceremove Research',
  description:
    'Download Traceremove whitepapers detailing ethical AI architectures, governance frameworks, and performance methodologies.',
};

export default function WhitepapersLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="whitepapers" className="opacity-60 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_80%_22%,rgba(236,72,153,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(11,26,48,0.92)_52%,rgba(15,23,42,0.9)_100%)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

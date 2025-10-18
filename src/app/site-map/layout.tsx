import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import BackgroundLayers from '@/components/BackgroundLayers';

export const metadata: Metadata = {
  title: 'Site Map — Traceremove Research',
  description:
    'Navigate every blueprint, policy, and resource published by Traceremove with the interactive site map overview.',
};

export default function SiteMapLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="sitemap" className="opacity-60 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_78%_20%,rgba(249,115,22,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.95)_0%,rgba(11,23,39,0.92)_52%,rgba(15,23,42,0.9)_100%)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

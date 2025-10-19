import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import PhilosophyHero from '@/app/philosophy/PhilosophyHero';

export const metadata: Metadata = {
  title: 'Philosophy — Traceremove Research',
  description:
    'Explore the philosophical frameworks guiding Traceremove, including technology ethics, epistemology, and futures thinking.',
};

export default function PhilosophyLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="philosophy"
      backgroundClassName="opacity-60"
      overlayClassName="bg-[radial-gradient(circle_at_20%_18%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(236,72,153,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(11,18,36,0.92)_52%,rgba(15,23,42,0.9)_100%)]"
      hero={<PhilosophyHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

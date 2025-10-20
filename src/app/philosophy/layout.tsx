import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import PhilosophyHero from '@/app/philosophy/PhilosophyHero';
import { PHILOSOPHY_BACKGROUND_CLASS, PHILOSOPHY_OVERLAY_CLASS } from '@/app/philosophy/ambientConfig';

export const metadata: Metadata = {
  title: 'Philosophy — Traceremove Research',
  description:
    'Explore the philosophical frameworks guiding Traceremove, including technology ethics, epistemology, and futures thinking.',
};

export default function PhilosophyLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="philosophy"
      backgroundClassName={PHILOSOPHY_BACKGROUND_CLASS}
      overlayClassName={PHILOSOPHY_OVERLAY_CLASS}
      hero={<PhilosophyHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

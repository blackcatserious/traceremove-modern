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
      innerClassName="mx-auto w-full max-w-6xl gap-24"
      contentClassName="flex flex-col gap-24 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8"
      hero={<PhilosophyHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

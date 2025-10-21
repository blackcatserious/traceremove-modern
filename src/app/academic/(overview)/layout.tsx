import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AcademicHero from '@/app/academic/AcademicHero';
import { ACADEMIC_BACKGROUND_CLASS, ACADEMIC_OVERLAY_CLASS } from '../ambientConfig';

export const metadata: Metadata = {
  title: 'Academic Resources — Traceremove Research',
  description:
    'Academic collaborations, teaching resources, and scholarly programs showcasing the Traceremove Research lab community.',
};

export default function AcademicOverviewLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="academic"
      backgroundClassName={ACADEMIC_BACKGROUND_CLASS}
      overlayClassName={ACADEMIC_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      contentClassName="flex flex-col gap-24 py-24 sm:py-28 lg:gap-32 lg:py-32"
      hero={<AcademicHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

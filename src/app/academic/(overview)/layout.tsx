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
      hero={<AcademicHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

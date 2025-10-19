import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AcademicHero from '@/app/academic/AcademicHero';

export const metadata: Metadata = {
  title: 'Academic Resources — Traceremove Research',
  description:
    'Academic collaborations, teaching resources, and scholarly programs showcasing the Traceremove Research lab community.',
};

export default function AcademicLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="academic"
      backgroundClassName="opacity-70"
      overlayClassName="bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.18),transparent_58%),radial-gradient(circle_at_84%_12%,rgba(14,165,233,0.16),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.97)_0%,rgba(15,23,42,0.94)_48%,rgba(15,23,42,0.95)_100%)]"
      hero={<AcademicHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

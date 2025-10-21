import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import LegalHero from '@/app/legal/LegalHero';
import { LEGAL_BACKGROUND_CLASS, LEGAL_OVERLAY_CLASS } from '../ambientConfig';

export const metadata: Metadata = {
  title: 'Legal & Governance — Traceremove Research',
  description:
    'Access the privacy policy, ethics commitments, and stewardship resources that guide the Traceremove research platform.',
};

export default function LegalOverviewLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="legal"
      backgroundClassName={LEGAL_BACKGROUND_CLASS}
      overlayClassName={LEGAL_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
      contentClassName="flex flex-col gap-16 py-20 sm:py-24 lg:gap-20 lg:py-28"
      hero={<LegalHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

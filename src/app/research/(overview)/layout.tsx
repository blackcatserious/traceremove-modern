import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ResearchHero from '../ResearchHero';
import { RESEARCH_BACKGROUND_CLASS, RESEARCH_OVERLAY_CLASS } from '../ambientConfig';

export const metadata: Metadata = {
  title: 'Research — AI Ethics, Agentic Systems, Privacy',
  description:
    'Research highlights in AI ethics, agentic systems, and privacy-preserving technologies at Traceremove Research.',
};

export default function ResearchOverviewLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="research"
      backgroundClassName={RESEARCH_BACKGROUND_CLASS}
      overlayClassName={RESEARCH_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      contentClassName="flex flex-col gap-24 py-24 sm:py-28 lg:gap-32 lg:py-32"
      hero={<ResearchHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

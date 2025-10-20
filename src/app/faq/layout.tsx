import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import FaqHero from '@/app/faq/FaqHero';
import { FAQ_BACKGROUND_CLASS, FAQ_OVERLAY_CLASS } from '@/app/faq/ambientConfig';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Traceremove Research',
  description:
    'Browse the most common questions about Traceremove, including research methodologies, collaboration models, and platform navigation tips.',
};

export default function FAQLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="faq"
      backgroundClassName={FAQ_BACKGROUND_CLASS}
      overlayClassName={FAQ_OVERLAY_CLASS}
      hero={<FaqHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

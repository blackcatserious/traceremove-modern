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
      innerClassName="mx-auto w-full max-w-6xl gap-24"
      contentClassName="flex flex-col gap-24 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8"
      hero={<FaqHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

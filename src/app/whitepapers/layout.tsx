import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import WhitepapersHero from '@/app/whitepapers/WhitepapersHero';
import {
  WHITEPAPERS_BACKGROUND_CLASS,
  WHITEPAPERS_OVERLAY_CLASS,
} from '@/app/whitepapers/ambientConfig';

export const metadata: Metadata = {
  title: 'Whitepapers — Traceremove Research',
  description:
    'Download Traceremove whitepapers detailing ethical AI architectures, governance frameworks, and performance methodologies.',
};

export default function WhitepapersLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="whitepapers"
      backgroundClassName={WHITEPAPERS_BACKGROUND_CLASS}
      overlayClassName={WHITEPAPERS_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-6xl gap-24"
      contentClassName="flex flex-col gap-24 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8"
      hero={<WhitepapersHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

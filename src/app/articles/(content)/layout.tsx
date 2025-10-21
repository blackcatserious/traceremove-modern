import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { ARTICLES_BACKGROUND_CLASS, ARTICLES_OVERLAY_CLASS } from '../ambientConfig';

export default function ArticlesContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="articles"
      backgroundClassName={ARTICLES_BACKGROUND_CLASS}
      overlayClassName={ARTICLES_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-6xl pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32"
      contentClassName="space-y-16 sm:space-y-20 lg:space-y-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

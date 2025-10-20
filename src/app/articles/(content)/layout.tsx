import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { ARTICLES_BACKGROUND_CLASS, ARTICLES_OVERLAY_CLASS } from '../ambientConfig';

export default function ArticlesContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="articles"
      backgroundClassName={ARTICLES_BACKGROUND_CLASS}
      overlayClassName={ARTICLES_OVERLAY_CLASS}
      innerClassName="gap-16"
      contentClassName="pb-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

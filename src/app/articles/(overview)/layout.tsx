import type { ReactNode } from 'react';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ArticlesHero from '@/app/articles/ArticlesHero';
import { ARTICLES_BACKGROUND_CLASS, ARTICLES_OVERLAY_CLASS } from '../ambientConfig';

export default function ArticlesOverviewLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="articles"
      backgroundClassName={ARTICLES_BACKGROUND_CLASS}
      overlayClassName={ARTICLES_OVERLAY_CLASS}
      hero={<ArticlesHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

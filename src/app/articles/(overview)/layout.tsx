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
      innerClassName="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      contentClassName="flex flex-col gap-24 py-24 sm:py-28 lg:gap-32 lg:py-32"
      hero={<ArticlesHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

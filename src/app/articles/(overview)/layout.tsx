import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ArticlesHero from '@/app/articles/ArticlesHero';
import { ARTICLES_BACKGROUND_CLASS, ARTICLES_OVERLAY_CLASS } from '../ambientConfig';

export const metadata: Metadata = {
  title: 'Insights — Traceremove Research',
  description: 'Editorial insights, field notes, and long-form analysis on responsible AI systems and governance.',
};

export default function ArticlesOverviewLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="articles"
      backgroundClassName={ARTICLES_BACKGROUND_CLASS}
      overlayClassName={ARTICLES_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-7xl"
      contentClassName="flex flex-col gap-24 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:gap-32 lg:py-32"
      heroClassName="px-4 sm:px-6 lg:px-8"
      hero={<ArticlesHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { ARTICLES_BACKGROUND_CLASS, ARTICLES_OVERLAY_CLASS } from '../ambientConfig';

export default function ArticlesContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="articles"
      backgroundClassName={ARTICLES_BACKGROUND_CLASS}
      overlayClassName={ARTICLES_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-32"
      contentClassName="space-y-16 sm:space-y-20 lg:space-y-24"
    >
      {children}

      <section className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
        <h2 className="text-2xl font-semibold text-white">Subscribe to The Epistemic Mirror</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
          Weekly philosophical analysis of AI developments — what machines mean, what they risk, and what we owe each
          other in the age of automation.
        </p>
        <a
          href="https://substack.com"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center rounded-md bg-[#0f3460] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16213e]"
        >
          Subscribe on Substack
        </a>
      </section>
    </AmbientLayoutFrame>
  );
}

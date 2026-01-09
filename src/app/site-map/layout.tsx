import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import SiteMapHero from '@/app/site-map/SiteMapHero';
import { SITE_MAP_BACKGROUND_CLASS, SITE_MAP_OVERLAY_CLASS } from '@/app/site-map/ambientConfig';

export const metadata: Metadata = {
  title: 'Site Map — Traceremove Research',
  description:
    'Navigate every blueprint, policy, and resource published by Traceremove with the interactive site map overview.',
};

export default function SiteMapLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="sitemap"
      backgroundClassName={SITE_MAP_BACKGROUND_CLASS}
      overlayClassName={SITE_MAP_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-6xl gap-24"
      contentClassName="flex flex-col gap-24 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8"
      heroClassName="px-4 sm:px-6 lg:px-8"
      hero={<SiteMapHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

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
      hero={<SiteMapHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AboutHero from '@/app/about/AboutHero';
import { ABOUT_BACKGROUND_CLASS, ABOUT_OVERLAY_CLASS } from '@/app/about/ambientConfig';

export const metadata: Metadata = {
  title: 'About — Artur Ziganshin',
  description: 'Profile of Artur Ziganshin: AI systems architect focused on AI ethics, privacy, and responsible AI.',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="about"
      backgroundClassName={ABOUT_BACKGROUND_CLASS}
      overlayClassName={ABOUT_OVERLAY_CLASS}
      hero={<AboutHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

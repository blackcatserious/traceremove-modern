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
      innerClassName="mx-auto w-full max-w-7xl gap-24"
      contentClassName="flex flex-col gap-24 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8"
      hero={<AboutHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

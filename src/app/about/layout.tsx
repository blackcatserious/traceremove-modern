import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AboutHero from '@/app/about/AboutHero';

export const metadata: Metadata = {
  title: 'About — Artur Ziganshin',
  description: 'Profile of Artur Ziganshin: AI systems architect focused on AI ethics, privacy, and responsible AI.',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="about"
      backgroundClassName="opacity-60"
      overlayClassName="bg-[radial-gradient(circle_at_15%_15%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.16),transparent_58%),linear-gradient(180deg,rgba(15,23,42,0.96)_0%,rgba(17,24,39,0.92)_48%,rgba(15,23,42,0.94)_100%)]"
      hero={<AboutHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';

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
      hero={
        <div className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative mb-8 aspect-[16/6] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(15,23,42,0.4)] backdrop-blur-xl">
            <Image
              src="/images/lab/lab-hero-1.svg"
              alt="About visual"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/25 via-fuchsia-500/18 to-sky-400/20 mix-blend-screen" />
          </div>
        </div>
      }
    >
      {children}
    </AmbientLayoutFrame>
  );
}

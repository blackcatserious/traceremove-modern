import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';

export const metadata: Metadata = {
  title: 'Research — AI Ethics, Agentic Systems, Privacy',
  description: 'Research highlights in AI ethics, agentic systems, and privacy-preserving technologies at Traceremove Research.',
};

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="research"
      backgroundClassName="opacity-70"
      overlayClassName="bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_58%),radial-gradient(circle_at_82%_12%,rgba(139,92,246,0.22),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.93)_48%,rgba(15,23,42,0.95)_100%)]"
      hero={
        <div className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative mb-8 aspect-[16/6] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <Image
              src="/images/lab/lab-hero-1.svg"
              alt="Research visual"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover opacity-95"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-purple-500/20 mix-blend-screen" />
          </div>
        </div>
      }
    >
      {children}
    </AmbientLayoutFrame>
  );
}

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';

export const metadata: Metadata = {
  title: 'Tools — Traceremove Research',
  description: 'Utilities and tools developed at Traceremove Research for AI research and engineering.',
};

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="tools"
      backgroundClassName="opacity-70"
      overlayClassName="bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.18),transparent_58%),radial-gradient(circle_at_82%_16%,rgba(99,102,241,0.22),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.97)_0%,rgba(8,47,73,0.94)_50%,rgba(8,47,73,0.9)_100%)]"
    >
      <div className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative mb-8 aspect-[16/6] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(8,145,178,0.35)] backdrop-blur-xl">
          <Image
            src="/images/lab/lab-setup-analytics.svg"
            alt="Tools visual"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-95"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/25 via-blue-400/20 to-violet-400/25 mix-blend-screen" />
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </AmbientLayoutFrame>
  );
}

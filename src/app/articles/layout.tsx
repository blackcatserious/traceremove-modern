import React from 'react';
import Image from 'next/image';

import BackgroundLayers from '@/components/BackgroundLayers';

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="articles" className="opacity-70 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(251,146,60,0.18),transparent_60%),radial-gradient(circle_at_82%_14%,rgba(244,63,94,0.2),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.97)_0%,rgba(30,41,59,0.92)_52%,rgba(15,23,42,0.94)_100%)]"
      />

      <div className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative mb-8 aspect-[16/6] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(30,64,175,0.35)] backdrop-blur-xl">
            <Image
              src="/images/lab/lab-setup-analytics.svg"
              alt="Articles visual"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover opacity-95"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-400/25 via-rose-400/20 to-sky-400/25 mix-blend-screen" />
          </div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

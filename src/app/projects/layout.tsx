import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import BackgroundLayers from '@/components/BackgroundLayers';

export const metadata: Metadata = {
  title: 'Projects — Traceremove Research',
  description: 'Project portfolio across ethical AI, agentic systems, and privacy-preserving architectures.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="projects" className="opacity-60 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.18),transparent_60%),radial-gradient(circle_at_84%_10%,rgba(236,72,153,0.16),transparent_58%),linear-gradient(180deg,rgba(15,23,42,0.97)_0%,rgba(8,47,73,0.92)_52%,rgba(12,74,110,0.85)_100%)]"
      />

      <div className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative mb-8 aspect-[16/6] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(8,47,73,0.35)] backdrop-blur-xl">
            <Image
              src="/images/lab/lab-whiteboard-research.svg"
              alt="Projects visual"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover opacity-95"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-400/25 via-rose-400/15 to-emerald-400/20 mix-blend-screen" />
          </div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

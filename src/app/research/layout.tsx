import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Research — AI Ethics, Agentic Systems, Privacy',
  description: 'Research highlights in AI ethics, agentic systems, and privacy-preserving technologies at Traceremove Research.',
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative aspect-[16/6] rounded-2xl overflow-hidden mb-8 decorative-blobs decorative-ai">
          <Image
            src="/images/lab/lab-hero-1.svg"
            alt="Research visual"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>
      {children}
    </div>
  );
}

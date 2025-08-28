import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About — Artur Ziganshin',
  description: 'Profile of Artur Ziganshin: AI systems architect focused on AI ethics, privacy, and responsible AI.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative aspect-[16/6] rounded-2xl overflow-hidden mb-8 decorative-blobs decorative-ai">
          <Image
            src="/images/lab/lab-hero-1.svg"
            alt="About visual"
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

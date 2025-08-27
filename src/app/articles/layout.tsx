import React from 'react';
import Image from 'next/image';

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative aspect-[16/6] rounded-2xl overflow-hidden mb-8 decorative-blobs">
          <Image
            src="/images/lab/lab-setup-analytics.svg"
            alt="Articles visual"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
      {children}
    </div>
  );
}

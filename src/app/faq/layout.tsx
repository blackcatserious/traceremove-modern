import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Traceremove Research',
  description:
    'Browse the most common questions about Traceremove, including research methodologies, collaboration models, and platform navigation tips.',
};

export default function FAQLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="faq"
      backgroundClassName="opacity-60"
      overlayClassName="bg-[radial-gradient(circle_at_20%_18%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.95)_0%,rgba(11,26,48,0.92)_52%,rgba(15,23,42,0.9)_100%)]"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

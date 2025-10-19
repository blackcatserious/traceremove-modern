import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ToolsHero from '@/app/tools/ToolsHero';

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
      hero={<ToolsHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

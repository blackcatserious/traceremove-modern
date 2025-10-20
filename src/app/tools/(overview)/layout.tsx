import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ToolsHero from '@/app/tools/ToolsHero';
import { TOOLS_BACKGROUND_CLASS, TOOLS_OVERLAY_CLASS } from '../ambientConfig';

export const metadata: Metadata = {
  title: 'Tools — Traceremove Research',
  description: 'Utilities and tools developed at Traceremove Research for AI research and engineering.',
};

export default function ToolsOverviewLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="tools"
      backgroundClassName={TOOLS_BACKGROUND_CLASS}
      overlayClassName={TOOLS_OVERLAY_CLASS}
      hero={<ToolsHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

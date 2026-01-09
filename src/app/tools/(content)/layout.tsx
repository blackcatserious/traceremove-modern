import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { TOOLS_BACKGROUND_CLASS, TOOLS_OVERLAY_CLASS } from '../ambientConfig';

export default function ToolsContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="tools"
      backgroundClassName={TOOLS_BACKGROUND_CLASS}
      overlayClassName={TOOLS_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-32"
      contentClassName="space-y-16 sm:space-y-20 lg:space-y-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

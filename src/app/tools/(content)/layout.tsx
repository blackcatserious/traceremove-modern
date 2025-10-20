import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { TOOLS_BACKGROUND_CLASS, TOOLS_OVERLAY_CLASS } from '../ambientConfig';

export default function ToolsContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="tools"
      backgroundClassName={TOOLS_BACKGROUND_CLASS}
      overlayClassName={TOOLS_OVERLAY_CLASS}
      innerClassName="gap-16"
      contentClassName="pb-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

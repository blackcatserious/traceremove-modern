import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { RESEARCH_BACKGROUND_CLASS, RESEARCH_OVERLAY_CLASS } from '../ambientConfig';

export default function ResearchContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="research"
      backgroundClassName={RESEARCH_BACKGROUND_CLASS}
      overlayClassName={RESEARCH_OVERLAY_CLASS}
      innerClassName="gap-16"
      contentClassName="pb-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

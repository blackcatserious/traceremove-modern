import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { LEGAL_BACKGROUND_CLASS, LEGAL_OVERLAY_CLASS } from '../ambientConfig';

export default function LegalContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="legal"
      backgroundClassName={LEGAL_BACKGROUND_CLASS}
      overlayClassName={LEGAL_OVERLAY_CLASS}
      innerClassName="gap-16"
      contentClassName="pb-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

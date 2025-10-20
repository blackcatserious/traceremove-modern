import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { ACADEMIC_BACKGROUND_CLASS, ACADEMIC_OVERLAY_CLASS } from '../ambientConfig';

export default function AcademicContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="academic"
      backgroundClassName={ACADEMIC_BACKGROUND_CLASS}
      overlayClassName={ACADEMIC_OVERLAY_CLASS}
      innerClassName="gap-16"
      contentClassName="pb-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

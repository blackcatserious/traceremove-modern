import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import { PROJECTS_BACKGROUND_CLASS, PROJECTS_OVERLAY_CLASS } from '../ambientConfig';

export default function ProjectsContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="projects"
      backgroundClassName={PROJECTS_BACKGROUND_CLASS}
      overlayClassName={PROJECTS_OVERLAY_CLASS}
      innerClassName="gap-16"
      contentClassName="pb-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

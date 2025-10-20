import type { ReactNode } from 'react';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import {
  ATLAS_BLUEPRINT_BACKGROUND_CLASS,
  ATLAS_BLUEPRINT_OVERLAY_CLASS,
} from '../ambientConfig';

export default function AtlasContentLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="atlasBlueprint"
      backgroundClassName={ATLAS_BLUEPRINT_BACKGROUND_CLASS}
      overlayClassName={ATLAS_BLUEPRINT_OVERLAY_CLASS}
      innerClassName="gap-16"
      contentClassName="pb-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

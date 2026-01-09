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
      innerClassName="mx-auto w-full max-w-6xl px-6 pb-32 pt-24 sm:px-10 sm:pb-36 sm:pt-28 lg:px-12 lg:pb-40 lg:pt-32"
      contentClassName="space-y-16 sm:space-y-20 lg:space-y-24"
    >
      {children}
    </AmbientLayoutFrame>
  );
}

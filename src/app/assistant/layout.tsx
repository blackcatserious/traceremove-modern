import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AssistantHero from '@/app/assistant/AssistantHero';
import { ASSISTANT_BACKGROUND_CLASS, ASSISTANT_OVERLAY_CLASS } from '@/app/assistant/ambientConfig';

export const metadata: Metadata = {
  title: 'Traceremove Assistant — Traceremove Research',
  description:
    'Converse with the Traceremove assistant to explore research blueprints, ethical guardrails, and operational guidance.',
};

export default function AssistantLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="assistant"
      backgroundClassName={ASSISTANT_BACKGROUND_CLASS}
      overlayClassName={ASSISTANT_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-6xl gap-24"
      contentClassName="flex flex-col gap-24 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8"
      heroClassName="px-4 sm:px-6 lg:px-8"
      hero={<AssistantHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

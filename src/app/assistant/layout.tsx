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
      hero={<AssistantHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

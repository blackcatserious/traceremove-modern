import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AiLabMembersHero from '@/app/ai-lab-members/AiLabMembersHero';
import { MEMBERS_BACKGROUND_CLASS, MEMBERS_OVERLAY_CLASS } from '@/app/ai-lab-members/ambientConfig';

export const metadata: Metadata = {
  title: 'AI Lab Members — Traceremove Research',
  description:
    'Meet the leadership and collaborators shaping Traceremove’s responsible intelligence programmes and civic coalitions.',
};

export default function AILabMembersLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="members"
      backgroundClassName={MEMBERS_BACKGROUND_CLASS}
      overlayClassName={MEMBERS_OVERLAY_CLASS}
      hero={<AiLabMembersHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

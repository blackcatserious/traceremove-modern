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
      innerClassName="mx-auto w-full max-w-6xl gap-24"
      contentClassName="flex flex-col gap-24 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8"
      heroClassName="px-4 sm:px-6 lg:px-8"
      hero={<AiLabMembersHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

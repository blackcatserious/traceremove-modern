import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import AiLabMembersHero from '@/app/ai-lab-members/AiLabMembersHero';

export const metadata: Metadata = {
  title: 'AI Lab Members — Traceremove Research',
  description:
    'Meet the leadership and collaborators shaping Traceremove’s responsible intelligence programmes and civic coalitions.',
};

export default function AILabMembersLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="members"
      backgroundClassName="opacity-60"
      overlayClassName="bg-[radial-gradient(circle_at_20%_18%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_80%_22%,rgba(236,72,153,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.95)_0%,rgba(11,26,48,0.92)_52%,rgba(15,23,42,0.9)_100%)]"
      hero={<AiLabMembersHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ResearchHero from '@/app/research/ResearchHero';

export const metadata: Metadata = {
  title: 'Research — AI Ethics, Agentic Systems, Privacy',
  description: 'Research highlights in AI ethics, agentic systems, and privacy-preserving technologies at Traceremove Research.',
};

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="research"
      backgroundClassName="opacity-70"
      overlayClassName="bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_58%),radial-gradient(circle_at_82%_12%,rgba(139,92,246,0.22),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.93)_48%,rgba(15,23,42,0.95)_100%)]"
      hero={<ResearchHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

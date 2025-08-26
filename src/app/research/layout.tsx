import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research — AI Ethics, Agentic Systems, Privacy',
  description: 'Research highlights in AI ethics, agentic systems, and privacy-preserving technologies at Traceremove Research.',
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}

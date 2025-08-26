import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Traceremove Research',
  description: 'Project portfolio across ethical AI, agentic systems, and privacy-preserving architectures.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

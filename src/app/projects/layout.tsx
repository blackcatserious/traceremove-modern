import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ProjectsHero from '@/app/projects/ProjectsHero';

export const metadata: Metadata = {
  title: 'Projects — Traceremove Research',
  description: 'Project portfolio across ethical AI, agentic systems, and privacy-preserving architectures.',
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="projects"
      backgroundClassName="opacity-60"
      overlayClassName="bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.18),transparent_60%),radial-gradient(circle_at_84%_10%,rgba(236,72,153,0.16),transparent_58%),linear-gradient(180deg,rgba(15,23,42,0.97)_0%,rgba(8,47,73,0.92)_52%,rgba(12,74,110,0.85)_100%)]"
      hero={<ProjectsHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

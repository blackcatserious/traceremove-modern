import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ProjectsHero from '@/app/projects/ProjectsHero';
import { PROJECTS_BACKGROUND_CLASS, PROJECTS_OVERLAY_CLASS } from '../ambientConfig';

export const metadata: Metadata = {
  title: 'Projects — Traceremove Research',
  description: 'Project portfolio across ethical AI, agentic systems, and privacy-preserving architectures.',
};

export default function ProjectsOverviewLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="projects"
      backgroundClassName={PROJECTS_BACKGROUND_CLASS}
      overlayClassName={PROJECTS_OVERLAY_CLASS}
      hero={<ProjectsHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

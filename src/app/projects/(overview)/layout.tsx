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
      innerClassName="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      contentClassName="flex flex-col gap-24 py-24 sm:py-28 lg:gap-32 lg:py-32"
      hero={<ProjectsHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}

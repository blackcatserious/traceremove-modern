'use client';

import { motion } from 'framer-motion';
import { Globe, BookOpen, ChartBarStacked, Users } from 'lucide-react';
import AssistantWidgetShell from '@/components/AssistantWidgetShell';
import KnowledgeBaseExplorerShell from '@/components/KnowledgeBaseExplorerShell';

const knowledgeStreams = [
  {
    title: 'Research atlas',
    description: 'Peer-reviewed case studies, comparative analyses, and field experiments documented across the atlas.',
    icon: BookOpen
  },
  {
    title: 'Projects & tools',
    description: 'Living delivery handbooks, evaluation dashboards, and release checklists from active engagements.',
    icon: ChartBarStacked
  },
  {
    title: 'Academic collaborations',
    description: 'Conference talks, syllabi, and scholarly partnerships that keep responses grounded in critical theory.',
    icon: Globe
  }
];

export default function AssistantPage() {
  return (
    <>
      <section className="relative border-y border-white/5 bg-slate-950/80 py-18">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(20,184,166,0.16),transparent_50%)]" />
        <div className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr]">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Knowledge choreography</h2>
                <p className="text-lg text-white/70">
                  The assistant synthesises Traceremove’s living library with programmatic signals from the atlas, projects, and academic collaborations.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {knowledgeStreams.map((stream) => (
                  <motion.div
                    key={stream.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
                  >
                    <stream.icon className="mb-3 h-5 w-5 text-white/70" />
                    <p className="text-sm font-semibold text-white">{stream.title}</p>
                    <p className="mt-2 text-xs text-white/60">{stream.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-white/70" />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Human partnership</p>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Complex research questions may require a hybrid journey. The assistant flags when to schedule time with Traceremove strategists, designers, or philosophers so collective intelligence stays rigorous.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <div className="mb-6 space-y-2 text-center">
                <h3 className="font-ibm-sans text-2xl font-semibold">Ask Traceremove AI</h3>
                <p className="text-sm text-white/60">Initiate a dialogue below – reference any research blueprint, project, or philosophical theme.</p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <AssistantWidgetShell compact={false} fallbackClassName="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-slate-950/90 py-20">
        <div className="relative">
          <KnowledgeBaseExplorerShell
            title="Assistant knowledge briefs"
            description="Inspect the curated metrics, tooling, and algorithm dossiers that the Traceremove assistant references before it answers complex prompts."
          />
        </div>
      </section>
    </>
  );
}

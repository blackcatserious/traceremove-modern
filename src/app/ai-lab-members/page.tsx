'use client';

import { motion } from 'framer-motion';
import { Users, ShieldCheck, Globe, Github, Linkedin, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import MermaidDiagram from '@/components/MermaidDiagram';

const labArchitecture = `
flowchart LR
  A[Traceremove AI Lab] --> B[Leadership]
  A --> C[Research Programmes]
  A --> D[Collaborators]
  B --> B1[Artur Ziganshin]
  C --> C1[Ethics]
  C --> C2[Systems]
  C --> C3[Infrastructure]
  D --> D1[Academic Network]
  D --> D2[Industry Partners]
  D --> D3[Civic Coalitions]
  B1 --> E[Strategic Direction]
  C1 --> E
  C2 --> E
  C3 --> E
`;

const leadership = {
  name: 'Artur Ziganshin',
  role: 'Founder & Director',
  description:
    'Artur unites philosophical critique and systems engineering to orchestrate Traceremove’s responsible AI programmes. His work spans ethics, interpretability, data stewardship, and community-centred innovation.',
  languages: ['Russian', 'English', 'Tatar', 'Serbian', 'Spanish'],
  focus: ['AI ethics', 'Systems architecture', 'Philosophy of technology', 'Digital rights'],
  social: {
    linkedin: 'https://linkedin.com/in/arthur-ziganshin',
    github: 'https://github.com/blackcatserious',
    scholar: 'https://scholar.google.com/citations?user=artur-ziganshin'
  }
};

const collaborationPillars = [
  {
    title: 'Research residencies',
    description: 'Joint investigations with universities and institutes exploring ethics, interpretability, and infrastructure.',
    icon: BookOpen
  },
  {
    title: 'Civic coalitions',
    description: 'Partnerships with public institutions and NGOs to deploy atlas blueprints with governance guardrails.',
    icon: ShieldCheck
  },
  {
    title: 'Industry engagements',
    description: 'Applied programmes with organisations committed to transparent, accountable intelligence.',
    icon: Users
  }
];

const languageBadges = leadership.languages;
const expertiseHighlights = leadership.focus;

export default function AILabMembers() {

  return (
    <div className="relative z-10 text-white">
      <section className="relative border-y border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(14,165,233,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_36px_120px_rgba(15,23,42,0.55)] backdrop-blur-2xl">
            <div className="grid gap-8 md:grid-cols-[0.65fr_0.35fr] md:items-start">
              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Leadership</p>
                  <h2 className="text-3xl font-semibold text-white">{leadership.name}</h2>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">{leadership.role}</p>
                </div>
                <p className="text-sm text-white/70">{leadership.description}</p>
                <div className="flex flex-wrap gap-2">
                  {expertiseHighlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Languages</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {languageBadges.map((language) => (
                      <span key={language} className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Connect</p>
                  <div className="flex flex-col gap-2 text-sm text-white/70">
                    <Link href={leadership.social.linkedin} className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Link>
                    <Link href={leadership.social.github} className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white">
                      <Github className="h-4 w-4" /> GitHub
                    </Link>
                    <Link href={leadership.social.scholar} className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white">
                      <BookOpen className="h-4 w-4" /> Google Scholar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(56,189,248,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Collaboration pillars</h2>
            <p className="mt-3 text-lg text-white/70">Traceremove thrives through partnerships across academia, public institutions, and industry.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {collaborationPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <pillar.icon className="h-6 w-6 text-white/70" />
                <h3 className="mt-4 text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(14,165,233,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Lab architecture</h2>
          <p className="mt-3 text-lg text-white/70">Understand how leadership, programmes, and collaborators interlink to deliver responsible AI.</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <MermaidDiagram chart={labArchitecture} />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-colors duration-300 hover:text-white">
              Partner with the lab
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-colors duration-300 hover:text-white">
              Explore active programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

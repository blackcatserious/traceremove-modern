'use client';

import { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowLeft, Search, HelpCircle, ChevronDown, ChevronUp, BookOpen, Users, Shield, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import MermaidDiagram from '@/components/MermaidDiagram';

const faqArchitecture = `
flowchart TD
  A[Traceremove FAQ] --> B[General]
  A --> C[Research]
  A --> D[Platform]
  A --> E[Collaboration]
  B --> B1[About Traceremove]
  B --> B2[Mission & Vision]
  C --> C1[Research Areas]
  C --> C2[Ethics & Integrity]
  D --> D1[Navigation]
  D --> D2[Interactive Tools]
  E --> E1[Academic Partnerships]
  E --> E2[Industry Collaborations]
  E --> E3[Open Source]
  D2 --> D3[Security & Privacy]
`;

const faqData = [
  {
    category: 'General',
    questions: [
      {
        id: 1,
        question: 'What is Traceremove and what do you do?',
        answer:
          'Traceremove is a research platform founded by Artur Ziganshin that advances responsible AI through philosophy, governance, and systems engineering. The studio choreographs cinematic research blueprints, operational tools, and coalitions across civic, academic, and enterprise partners.'
      },
      {
        id: 2,
        question: 'Who is Artur Ziganshin?',
        answer:
          'Artur is an AI systems architect and philosopher of technology. He leads Traceremove, co-founded Rarematrix, and serves in digital rights organisations. With MA/BA degrees in Philosophy from Kazan Federal University, he specialises in AI ethics, data stewardship, and participatory design.'
      },
      {
        id: 3,
        question: 'What is your mission and vision?',
        answer:
          'We accelerate ethical intelligence by blending critical theory, engineering, and coalition work. Our vision is a future where AI amplifies human dignity, is governed transparently, and is co-created with communities most impacted by automation.'
      },
      {
        id: 4,
        question: 'How can I get involved with Traceremove?',
        answer:
          'Engage by exploring the atlas, contributing to open research, partnering on responsible AI deployments, or joining workshops and office hours. Contact partners@traceremove.com to coordinate collaborations.'
      }
    ]
  },
  {
    category: 'Research',
    questions: [
      {
        id: 5,
        question: 'What are your main research areas?',
        answer:
          'Our research spans ethics & governance, systems & agency, infrastructure & trust, and philosophical futures. Explore eleven dedicated pages covering ethical AI architecture, agentic systems, multimodal reasoning, interpretability, privacy, and more.'
      },
      {
        id: 6,
        question: 'How do you ensure research ethics and integrity?',
        answer:
          'Every initiative includes comprehensive ethics reviews, transparent reporting, reproducibility tooling, participant protections, and advisory oversight. We also publish disclosure logs and governance templates for partners to adapt.'
      },
      {
        id: 7,
        question: 'Can I access your research publications?',
        answer:
          'Yes. Publications are available via the articles section, academic archive, and linked repositories. Many blueprints include supplementary code, datasets, and methodology notes for reuse.'
      },
      {
        id: 8,
        question: 'Do you collaborate with other researchers and institutions?',
        answer:
          'Collaboration is central. We work with universities, NGOs, governments, and product teams through joint grants, residencies, and shared research infrastructure.'
      }
    ]
  },
  {
    category: 'Platform',
    questions: [
      {
        id: 9,
        question: 'How do I navigate the research platform?',
        answer:
          'Use the mega menu to browse research corridors, atlas spotlights, tools, and academic resources. Each page features contextual breadcrumbs and cross-links to related content.'
      },
      {
        id: 10,
        question: 'What interactive tools are available?',
        answer:
          'You can access dashboards for experiment operations, semantic search, privacy scoring, visualization playgrounds, annotation demos, and model comparisons. Each tool includes integration guidance and launch rituals.'
      },
      {
        id: 11,
        question: 'Is my data safe and private?',
        answer:
          'Traceremove emphasises privacy-preserving workflows: encrypted communications, consent-driven data handling, regular audits, and compliance with GDPR/CCPA standards.'
      },
      {
        id: 12,
        question: 'How do I report technical issues or provide feedback?',
        answer:
          'Reach out via contact@traceremove.com or open-source repositories. We host feedback loops, user research sessions, and accept feature requests through our community channels.'
      }
    ]
  },
  {
    category: 'Collaboration',
    questions: [
      {
        id: 13,
        question: 'How can academic institutions partner with Traceremove?',
        answer:
          'We offer joint research grants, visiting scholar programmes, shared datasets, co-developed curricula, and ethics advisory engagements. Contact academic@traceremove.com to design bespoke collaborations.'
      },
      {
        id: 14,
        question: 'Do you work with industry partners?',
        answer:
          'Yes. We partner with industry teams aligned on responsible innovation to deliver applied research, governance frameworks, and training. Ethical prerequisites are assessed during onboarding.'
      },
      {
        id: 15,
        question: 'Can I contribute to your open-source projects?',
        answer:
          'Absolutely. Explore our GitHub organisation for contribution guidelines, open issues, and design briefs. Community contributions accelerate the reliability of atlas tooling.'
      },
      {
        id: 16,
        question: 'What funding opportunities are available?',
        answer:
          'We participate in government grants, philanthropic funds, innovation challenges, and bespoke partnerships. Let’s discuss the research aims and ethical guardrails to co-design funding strategies.'
      }
    ]
  }
];

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const categories = useMemo(() => ['All', ...faqData.map((section) => section.category)], []);

  const filteredSections = useMemo(() => {
    return faqData
      .filter((section) => (selectedCategory === 'All' ? true : section.category === selectedCategory))
      .map((section) => ({
        ...section,
        questions: section.questions.filter((question) => {
          if (!searchTerm.trim()) return true;
          const query = searchTerm.toLowerCase();
          return question.question.toLowerCase().includes(query) || question.answer.toLowerCase().includes(query);
        })
      }))
      .filter((section) => section.questions.length > 0);
  }, [selectedCategory, searchTerm]);

  const toggleQuestion = (id: number) => {
    setExpandedQuestions((prev) => (prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]));
  };

  return (
    <div className="relative z-10 text-white">
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,26,48,0.9)_45%,rgba(17,24,39,0.95)_100%)]" />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.55, scale: 1 } : { opacity: 0.85, scale: 1, rotate: [0, 8, -6, 0] }}
            transition={{ duration: prefersReducedMotion ? 1.2 : 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/35 via-sky-400/25 to-emerald-400/25 blur-3xl"
          />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.4, scale: 1 } : { opacity: 0.65, scale: 1, rotate: [0, -10, 8, 0] }}
            transition={{ duration: prefersReducedMotion ? 1.4 : 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -bottom-30 right-8 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/25 to-cyan-400/25 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60 transition-colors duration-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Return home
          </Link>
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
            <Sparkles className="h-5 w-5 text-indigo-200" />
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Frequently asked questions</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
          </div>
          <div className="mt-8 space-y-6">
            <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Answers curated from Traceremove’s atlas, projects, and academic collaborations.
            </h1>
            <p className="text-lg text-white/75">
              Search by keyword, filter by theme, or browse the categories below to understand our research approach, platform features, and partnership opportunities.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-[2fr,1fr]">
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-2xl">
              <Search className="h-5 w-5 text-white/60" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search questions or keywords"
                className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-2xl">
              <HelpCircle className="h-5 w-5 text-white/60" />
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-slate-900 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(14,165,233,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {filteredSections.map((section) => (
              <div key={section.category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    {section.category === 'General' && <BookOpen className="h-5 w-5" />}
                    {section.category === 'Research' && <Shield className="h-5 w-5" />}
                    {section.category === 'Platform' && <Globe className="h-5 w-5" />}
                    {section.category === 'Collaboration' && <Users className="h-5 w-5" />}
                  </div>
                  <h2 className="text-xl font-semibold text-white">{section.category}</h2>
                </div>
                <div className="space-y-3">
                  {section.questions.map((question) => {
                    const expanded = expandedQuestions.includes(question.id);
                    return (
                      <motion.div
                        key={question.id}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, margin: '-60px' }}
                        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl"
                      >
                        <button
                          type="button"
                          onClick={() => toggleQuestion(question.id)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span className="text-sm font-semibold text-white">{question.question}</span>
                          {expanded ? <ChevronUp className="h-4 w-4 text-white/60" /> : <ChevronDown className="h-4 w-4 text-white/60" />}
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-5"
                        >
                          <p className="pb-5 text-sm text-white/70">{question.answer}</p>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(circle_at_75%_72%,rgba(56,189,248,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">FAQ architecture</h2>
          <p className="mt-3 text-lg text-white/70">See how the frequently asked questions connect to the wider Traceremove platform.</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <MermaidDiagram chart={faqArchitecture} />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-colors duration-300 hover:text-white">
              Still have questions?
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/assistant" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-colors duration-300 hover:text-white">
              Chat with Traceremove assistant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type PaperStatus = 'Published' | 'Under Review' | 'Preprint';

type Paper = {
  title: string;
  authors: string;
  year: number;
  abstract: string;
  status: PaperStatus;
  journal?: string;
  arxivLink?: string;
  philarchiveLink?: string;
  pdfLink: string;
  doi?: string;
  tags: string[];
};

const papers: Paper[] = [
  {
    title: 'Linguistic Symbolism in ML: Language, Meaning, and Representation',
    authors: 'Artur Ziganshin',
    year: 2025,
    abstract:
      'This preprint examines symbolic structures in machine learning language systems and asks how meaning is represented, transformed, and stabilized across model architectures and interpretive contexts.',
    status: 'Preprint',
    arxivLink: 'https://arxiv.org/abs/2501.01001',
    philarchiveLink: 'https://philarchive.org/archive/ZIGLSI',
    pdfLink: '/articles/linguistic-symbolism-ml',
    doi: undefined,
    tags: ['Philosophy of AI', 'Language Models', 'Representation'],
  },
  {
    title: 'Comparative LLM Analysis: Benchmarking Language Model Performance',
    authors: 'Artur Ziganshin',
    year: 2025,
    abstract:
      'This preprint presents a comparative framework for evaluating language model performance across task quality, interpretability constraints, and epistemic reliability under varied benchmark conditions.',
    status: 'Preprint',
    arxivLink: 'https://arxiv.org/abs/2501.01002',
    philarchiveLink: 'https://philarchive.org/archive/ZIGCLA',
    pdfLink: '/articles/comparative-llm-analysis',
    doi: undefined,
    tags: ['LLM Evaluation', 'Benchmarks', 'Epistemic Reliability'],
  },
  {
    title: 'AI & Human Dignity: Preserving Human Worth in the Age of Automation',
    authors: 'Artur Ziganshin',
    year: 2025,
    abstract:
      'This preprint studies philosophical and ethical accounts of dignity in automated systems, with attention to labor, agency, and respect conditions in human-machine decision environments.',
    status: 'Preprint',
    arxivLink: 'https://arxiv.org/abs/2501.01003',
    philarchiveLink: 'https://philarchive.org/archive/ZIGAHD',
    pdfLink: '/articles/ai-human-dignity',
    doi: undefined,
    tags: ['Ethics', 'Human Dignity', 'Automation'],
  },
  {
    title: 'Epistemic Risks in AI: Knowledge, Truth, and Uncertainty',
    authors: 'Artur Ziganshin',
    year: 2025,
    abstract:
      'This preprint analyzes epistemic failure modes in AI-mediated knowledge production, including uncertainty communication, model confidence, and truth-tracking in public and institutional contexts.',
    status: 'Preprint',
    arxivLink: 'https://arxiv.org/abs/2501.01004',
    philarchiveLink: 'https://philarchive.org/archive/ZIGERI',
    pdfLink: '/articles/epistemic-risks-ai',
    doi: undefined,
    tags: ['Epistemology', 'AI Safety', 'Uncertainty'],
  },
  {
    title: 'Cost-Aware LLM Serving: Optimizing AI Infrastructure Economics',
    authors: 'Artur Ziganshin',
    year: 2025,
    abstract:
      'This preprint links infrastructure economics to responsible deployment by modeling trade-offs among inference quality, operating cost, and reliability in language model serving pipelines.',
    status: 'Preprint',
    arxivLink: 'https://arxiv.org/abs/2501.01005',
    philarchiveLink: 'https://philarchive.org/archive/ZIGCAL',
    pdfLink: '/articles/cost-aware-llm-serving',
    doi: undefined,
    tags: ['AI Infrastructure', 'Economics', 'LLM Serving'],
  },
  {
    title: 'Case Study: AI in Social Systems – Impact and Implementation',
    authors: 'Artur Ziganshin',
    year: 2025,
    abstract:
      'This preprint offers a case-based analysis of AI implementation in social systems, focusing on governance, institutional adaptation, and measurable social impact criteria.',
    status: 'Preprint',
    arxivLink: 'https://arxiv.org/abs/2501.01006',
    philarchiveLink: 'https://philarchive.org/archive/ZIGCSI',
    pdfLink: '/articles/case-study-ai-social-systems',
    doi: undefined,
    tags: ['Social Systems', 'Governance', 'Implementation'],
  },
  {
    title: 'Philosophy of Machine Agency',
    authors: 'Artur Ziganshin',
    year: 2025,
    abstract:
      'This preprint investigates machine agency through analytic and continental approaches, clarifying responsibility, intentionality, and normative boundaries in autonomous technical systems.',
    status: 'Preprint',
    arxivLink: 'https://arxiv.org/abs/2501.01007',
    philarchiveLink: 'https://philarchive.org/archive/ZIGPOM',
    pdfLink: '/articles/philosophy-machine-agency',
    doi: undefined,
    tags: ['Machine Agency', 'Responsibility', 'Philosophy of Technology'],
  },
];

const filters = ['All', 'Published', 'Under Review', 'Preprints'] as const;

type FilterValue = (typeof filters)[number];

const statusStyles: Record<PaperStatus, string> = {
  Published: 'bg-emerald-100 text-emerald-700',
  'Under Review': 'bg-amber-100 text-amber-700',
  Preprint: 'bg-slate-100 text-slate-700',
};

function matchesFilter(paper: Paper, filter: FilterValue) {
  if (filter === 'All') return true;
  if (filter === 'Preprints') return paper.status === 'Preprint';
  return paper.status === filter;
}

export default function ResearchPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('All');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});

  const filteredPapers = useMemo(() => {
    return [...papers]
      .sort((a, b) => b.year - a.year)
      .filter((paper) => matchesFilter(paper, activeFilter));
  }, [activeFilter]);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="space-y-4">
        <h1
          className="text-4xl font-semibold text-[#16213e]"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Research
        </h1>
        <p className="max-w-3xl text-base text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Papers on epistemic risks, language models, and ethical AI architecture
        </p>
      </section>

      <section className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                isActive
                  ? 'border-[#0f3460] bg-[#0f3460] text-white'
                  : 'border-slate-300 bg-white text-[#1a1a2e] hover:border-[#0f3460] hover:text-[#0f3460]'
              }`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {filter}
            </button>
          );
        })}
      </section>

      <section className="mt-8 grid gap-5">
        {filteredPapers.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            No papers found for this filter yet.
          </div>
        ) : (
          filteredPapers.map((paper) => {
            const expanded = Boolean(expandedAbstracts[paper.title]);

            return (
              <article
                key={paper.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                      <Link href={paper.pdfLink} className="underline-offset-4 hover:underline">
                        {paper.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {paper.authors} · {paper.year}
                    </p>
                  </div>

                  <span
                    className={`inline-flex h-fit rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[paper.status]}`}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {paper.status}
                  </span>
                </div>

                {paper.status === 'Published' && paper.journal ? (
                  <p className="mt-2 text-sm text-[#0f3460]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {paper.journal}
                  </p>
                ) : null}

                <div className="mt-4 space-y-2">
                  <p
                    className={`text-sm leading-6 text-[#1a1a2e] ${expanded ? '' : 'overflow-hidden'}`}
                    style={
                      expanded
                        ? { fontFamily: 'Inter, system-ui, sans-serif' }
                        : {
                            fontFamily: 'Inter, system-ui, sans-serif',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }
                    }
                  >
                    {paper.abstract}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedAbstracts((prev) => ({
                        ...prev,
                        [paper.title]: !prev[paper.title],
                      }))
                    }
                    className="text-sm text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {expanded ? 'Show less' : 'Show abstract'}
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={`${paper.title}-${tag}`}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={paper.pdfLink}
                    className="inline-flex rounded-md bg-[#0f3460] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#16213e]"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Download PDF
                  </Link>

                  {paper.arxivLink ? (
                    <a
                      href={paper.arxivLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      arXiv
                    </a>
                  ) : null}

                  {paper.philarchiveLink ? (
                    <a
                      href={paper.philarchiveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      PhilArchive
                    </a>
                  ) : null}

                  {paper.doi ? (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      DOI
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })
        )}
      </section>
    </div>
  );
}

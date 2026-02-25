'use client';

import Link from 'next/link';

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'research-interests', label: 'Research Interests' },
  { id: 'publications', label: 'Publications' },
  { id: 'presentations', label: 'Presentations & Talks' },
  { id: 'academic-service', label: 'Academic Service' },
  { id: 'skills-languages', label: 'Skills & Languages' },
  { id: 'contact', label: 'Contact' },
];

const publications = [
  {
    title: 'Linguistic Symbolism in ML: Language, Meaning, and Representation',
    link: 'https://philarchive.org/archive/ZIGLSI',
  },
  {
    title: 'Comparative LLM Analysis: Benchmarking Language Model Performance',
    link: 'https://philarchive.org/archive/ZIGCLA',
  },
  {
    title: 'AI & Human Dignity: Preserving Human Worth in the Age of Automation',
    link: 'https://philarchive.org/archive/ZIGAHD',
  },
  {
    title: 'Epistemic Risks in AI: Knowledge, Truth, and Uncertainty',
    link: 'https://philarchive.org/archive/ZIGERI',
  },
  {
    title: 'Cost-Aware LLM Serving: Optimizing AI Infrastructure Economics',
    link: 'https://philarchive.org/archive/ZIGCAL',
  },
  {
    title: 'Case Study: AI in Social Systems – Impact and Implementation',
    link: 'https://philarchive.org/archive/ZIGCSI',
  },
  {
    title: 'Philosophy of Machine Agency',
    link: 'https://philarchive.org/archive/ZIGPOM',
  },
];

export default function CvPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <style jsx global>{`
        @media print {
          header,
          footer,
          nav,
          .no-print {
            display: none !important;
          }

          main {
            padding: 0 !important;
          }

          body {
            background: white !important;
            color: black !important;
          }

          .print-surface {
            box-shadow: none !important;
            border: 0 !important;
            padding: 0 !important;
          }

          a {
            color: black !important;
            text-decoration: none !important;
          }
        }
      `}</style>

      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            Academic CV
          </h1>
          <p className="mt-1 text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Artur Ziganshin
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-md bg-[#0f3460] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#16213e]"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Download PDF
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="no-print lg:sticky lg:top-28 lg:h-fit">
          <nav aria-label="CV sections" className="rounded-xl border border-slate-200 bg-white p-4">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-[#0f3460] underline-offset-4 hover:text-[#e94560] hover:underline"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="print-surface space-y-10 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <section id="education" className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Education
            </h2>
            <div className="space-y-3 text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <p>
                <span className="font-semibold">MA Philosophy</span>, Kazan Federal University, 2023
                <br />
                Thesis: “AI and Human Consciousness: Philosophical Perspectives”
              </p>
              <p>
                <span className="font-semibold">BA Philosophy</span>, Kazan Federal University, 2021
              </p>
            </div>
          </section>

          <section id="research-interests" className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Research Interests
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <li>Epistemic risks in artificial intelligence</li>
              <li>Philosophy of language models and meaning</li>
              <li>Ethical architecture for AI systems</li>
              <li>Human dignity and automation</li>
              <li>Philosophy of machine agency</li>
            </ul>
          </section>

          <section id="publications" className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Publications
            </h2>
            <ol className="space-y-3 text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {publications.map((publication, index) => (
                <li key={publication.title}>
                  <span className="mr-2 text-slate-500">{index + 1}.</span>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]"
                  >
                    {publication.title}
                  </a>
                  <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">Preprint</span>
                </li>
              ))}
            </ol>
          </section>

          <section id="presentations" className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Presentations & Talks
            </h2>
            <p className="text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Upcoming — check back for conference submissions.
            </p>
          </section>

          <section id="academic-service" className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Academic Service
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <li>Founder, Kazan Philosophical Society</li>
            </ul>
          </section>

          <section id="skills-languages" className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Skills & Languages
            </h2>
            <div className="space-y-2 text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <p>
                <span className="font-semibold">Languages:</span> Russian (native), English (professional), [others]
              </p>
              <p>
                <span className="font-semibold">Technical:</span> Python, data analysis, LLM evaluation
              </p>
              <p>
                <span className="font-semibold">Research tools:</span> LaTeX, Zotero, PhilPapers
              </p>
            </div>
          </section>

          <section id="contact" className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Contact
            </h2>
            <ul className="space-y-2 text-sm text-[#1a1a2e]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <li>
                Email:{' '}
                <a href="mailto:artur@traceremove.com" className="text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]">
                  artur@traceremove.com
                </a>
              </li>
              <li>
                ORCID:{' '}
                <a href="https://orcid.org/" target="_blank" rel="noreferrer" className="text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]">
                  orcid.org
                </a>
              </li>
              <li>
                PhilArchive profile:{' '}
                <a href="https://philarchive.org/" target="_blank" rel="noreferrer" className="text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]">
                  philarchive.org
                </a>
              </li>
              <li>
                Academia.edu:{' '}
                <a href="https://www.academia.edu/" target="_blank" rel="noreferrer" className="text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]">
                  academia.edu
                </a>
              </li>
            </ul>
            <div className="no-print pt-2 text-sm">
              <Link href="/research" className="text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]">
                View research papers
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

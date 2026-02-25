import type { Metadata } from "next";
import { papers } from "@/data/papers";

export const metadata: Metadata = {
  title: "CV | Artur Ziganshin",
  description:
    "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.",
};

export default function CVPage() {
  return (
    <div className="mx-auto max-w-[1024px] space-y-8 px-4 py-14 sm:px-6">
      <header>
        <h1 className="text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Curriculum Vitae</h1>
        <p className="mt-2 text-xl font-semibold">Artur Ziganshin</p>
        <p className="text-sm text-[#6b6b79]">Master of Philosophy · PhD of Philosophy</p>
      </header>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold">Research Interests</h2>
        <p className="mt-3 leading-relaxed">
          My research investigates the epistemic and ethical foundations of artificial intelligence, focusing on three
          interconnected questions: What conditions must AI systems satisfy to produce genuine knowledge? How should
          ethical constraints be integrated into the foundational architecture of AI systems? And how do we preserve
          meaningful human agency in the face of increasing automation?
        </p>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>PhD of Philosophy</li>
          <li>Master of Philosophy (MPhil)</li>
        </ul>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold">Publications</h2>
        <ul className="mt-3 space-y-3">
          {papers.map((paper) => (
            <li key={paper.title}>
              Ziganshin, A. (2025). "{paper.title}." PhilArchive preprint. {" "}
              <a className="text-[#ef5044] underline" target="_blank" rel="noreferrer" href={paper.philArchiveUrl}>
                PhilArchive link
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold">Research Areas</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Epistemology of AI (process reliabilism, epistemic risk, machine testimony)</li>
          <li>Philosophy of Language &amp; AI (meaning, reference, semantic grounding)</li>
          <li>AI Ethics (human dignity, fairness, consent, autonomy)</li>
          <li>Philosophy of Mind &amp; AI (consciousness, agency, understanding)</li>
          <li>Political Philosophy of AI (governance, regulation, democratic oversight)</li>
        </ul>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold">Skills &amp; Competencies</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Languages: Russian (native), English (professional proficiency)</li>
          <li>Technical: Python, data analysis, LLM evaluation, LaTeX</li>
          <li>Research: Zotero, PhilPapers, PhilArchive, arXiv</li>
        </ul>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold">Professional Activities</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Independent AI philosophy researcher</li>
          <li>Founder, Philosophical Society</li>
          <li>Weekly newsletter author: The Epistemic Mirror</li>
        </ul>
      </section>
    </div>
  );
}

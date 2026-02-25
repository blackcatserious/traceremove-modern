import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { papers } from "@/data/papers";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Academic CV of Artur Ziganshin — AI philosophy researcher. Publications, research areas, education, and professional activities.",
  openGraph: {
    title: "CV | Artur Ziganshin",
    url: "https://traceremove.dev/cv",
  },
};

export default function CVPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <span className="overline">Curriculum Vitae</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Artur Ziganshin</h1>
        <p className="mt-4 text-lg text-[#8a8a97] max-w-2xl">Master of Philosophy · PhD of Philosophy</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20 space-y-6">
        <FadeIn><section className="card"><h2 className="text-2xl font-semibold">Research Interests</h2><p className="mt-3 leading-relaxed text-[#b0b0bc]">My research investigates the epistemic and ethical foundations of artificial intelligence, focusing on three interconnected questions: What conditions must AI systems satisfy to produce genuine knowledge? How should ethical constraints be integrated into the foundational architecture of AI systems? And how do we preserve meaningful human agency in the face of increasing automation?</p></section></FadeIn>
        <FadeIn delay={0.05}><section className="card"><h2 className="text-2xl font-semibold">Education</h2><ul className="mt-3 list-disc space-y-2 pl-6 text-[#b0b0bc]"><li>PhD of Philosophy</li><li>Master of Philosophy (MPhil)</li></ul></section></FadeIn>
        <FadeIn delay={0.1}><section className="card"><h2 className="text-2xl font-semibold">Publications</h2><ul className="mt-3 space-y-3 text-[#b0b0bc]">{papers.map((paper)=><li key={paper.title}>Ziganshin, A. (2025). "{paper.title}." PhilArchive preprint. <a className="accent-link" target="_blank" rel="noreferrer" href={paper.philArchiveUrl}>PhilArchive link</a></li>)}</ul></section></FadeIn>
        <FadeIn delay={0.15}><section className="card"><h2 className="text-2xl font-semibold">Research Areas</h2><ul className="mt-3 list-disc space-y-2 pl-6 text-[#b0b0bc]"><li>Epistemology of AI (process reliabilism, epistemic risk, machine testimony)</li><li>Philosophy of Language &amp; AI (meaning, reference, semantic grounding)</li><li>AI Ethics (human dignity, fairness, consent, autonomy)</li><li>Philosophy of Mind &amp; AI (consciousness, agency, understanding)</li><li>Political Philosophy of AI (governance, regulation, democratic oversight)</li></ul></section></FadeIn>
        <FadeIn delay={0.2}><section className="card"><h2 className="text-2xl font-semibold">Skills &amp; Competencies</h2><ul className="mt-3 list-disc space-y-2 pl-6 text-[#b0b0bc]"><li>Languages: Russian (native), English (professional proficiency)</li><li>Technical: Python, data analysis, LLM evaluation, LaTeX</li><li>Research: Zotero, PhilPapers, PhilArchive, arXiv</li></ul></section></FadeIn>
        <FadeIn delay={0.25}><section className="card"><h2 className="text-2xl font-semibold">Professional Activities</h2><ul className="mt-3 list-disc space-y-2 pl-6 text-[#b0b0bc]"><li>Independent AI philosophy researcher</li><li>Founder, Philosophical Society</li><li>Weekly newsletter author: The Epistemic Mirror</li></ul></section></FadeIn>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { papers } from "@/data/papers";
import ResearchClient from "./research-client";

export const metadata: Metadata = {
  title: "Research — Papers & Preprints",
  description:
    "Philosophical research papers on epistemic risks in AI, ethical architecture, and human dignity in automated systems. All preprints available on PhilArchive.",
  openGraph: {
    title: "Research | Artur Ziganshin",
    description: "Philosophical research papers on AI epistemology and ethics.",
    url: "https://traceremove.dev/research",
  },
};

export default function ResearchPage() {
  const researchSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Research Papers — Artur Ziganshin",
    description: "Philosophical research papers on AI epistemology and ethics",
    author: {
      "@type": "Person",
      name: "Artur Ziganshin",
      url: "https://traceremove.dev",
    },
    hasPart: papers.map((paper) => ({
      "@type": "ScholarlyArticle",
      name: paper.title,
      author: { "@type": "Person", name: "Artur Ziganshin" },
      datePublished: paper.year,
      description: paper.abstract,
      url: paper.philArchiveUrl,
      publisher: { "@type": "Organization", name: "PhilArchive" },
      keywords: paper.tags,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(researchSchema) }} />
      <ResearchClient />
    </>
  );
}

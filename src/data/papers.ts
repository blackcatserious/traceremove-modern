export type Paper = {
  title: string;
  abstract: string;
  status: "preprint";
  philArchiveUrl: string;
  topic: string;
  year: string;
};

export const papers: Paper[] = [
  {
    title: "Epistemic Risk Surfaces in Large Language Models",
    abstract:
      "This paper maps how language models generate high-confidence statements from weakly grounded representations, proposing an epistemic risk taxonomy for deployment contexts.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGERS",
    topic: "epistemic risks",
    year: "2026",
  },
  {
    title: "Linguistic Symbolism and Meaning Compression in Machine Learning",
    abstract:
      "An analysis of how symbolic references are compressed during training and why lexical fluency can obscure semantic opacity in advanced models.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGLSM",
    topic: "linguistic symbolism in ML",
    year: "2026",
  },
  {
    title: "Human Dignity Constraints for Autonomous Decision Systems",
    abstract:
      "A normative framework for embedding dignity-preserving constraints into automated decision systems used in welfare, labor, and healthcare contexts.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGHDC",
    topic: "human dignity",
    year: "2026",
  },
  {
    title: "Benchmarking Without Understanding: The Limits of LLM Evaluation",
    abstract:
      "Critiques benchmark-centric paradigms by showing how comparable benchmark performance can mask divergent epistemic profiles and failure modes.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGBWL",
    topic: "LLM benchmarking",
    year: "2026",
  },
  {
    title: "Cost-Aware LLM Serving and the Ethics of Computational Scarcity",
    abstract:
      "Connects infrastructure economics to epistemic quality, arguing that latency-cost optimization often introduces ethically relevant asymmetries in output reliability.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGCAL",
    topic: "cost-aware LLM serving",
    year: "2026",
  },
  {
    title: "AI in Social Systems: Responsibility Across Distributed Agents",
    abstract:
      "Examines accountability when recommendation, moderation, and ranking systems co-produce social outcomes beyond any single model boundary.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGAIS",
    topic: "AI in social systems",
    year: "2026",
  },
  {
    title: "Machine Agency as a Gradient Concept",
    abstract:
      "Defends a graded view of machine agency grounded in functional autonomy, representational plasticity, and normative exposure.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGMAC",
    topic: "machine agency",
    year: "2026",
  },
];

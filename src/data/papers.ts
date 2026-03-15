export type Paper = {
  title: string;
  abstract: string;
  status: "preprint";
  philArchiveUrl: string;
  topic: string;
  year: string;
  tags: string[];
  pdfUrl?: string;
};

export const papers: Paper[] = [
  {
    title: "Epistemic Risk Surfaces in Large Language Models",
    abstract:
      "This paper develops a granular taxonomy of epistemic failure in large language models, distinguishing between confident error, synthetic coherence, and context-sensitive reliability collapse. I argue that benchmark performance cannot substitute for process-level justification and propose an audit architecture grounded in process reliabilism and virtue epistemology.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGERS",
    topic: "epistemic risks",
    year: "2025",
    tags: ["epistemology", "LLMs", "epistemic risk"],
  },
  {
    title: "Linguistic Symbolism and Meaning Compression in Machine Learning",
    abstract:
      "By analyzing how symbolic structures are compressed during representation learning, this preprint examines the gap between linguistic fluency and semantic grounding. I show why lexical competence in model outputs can mask referential fragility and propose criteria for distinguishing symbolic simulation from meaningful reference.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGLSM",
    topic: "philosophy of language",
    year: "2025",
    tags: ["meaning", "symbolism", "language models"],
  },
  {
    title: "Human Dignity Constraints for Autonomous Decision Systems",
    abstract:
      "This paper argues that dignity-preserving design requires more than fairness metrics. Drawing on Kantian ethics and capabilities theory, I outline institutional and interface-level constraints that preserve contestability, recognition, and agency in automated welfare, labor, and healthcare decisions.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGHDC",
    topic: "AI ethics",
    year: "2025",
    tags: ["human dignity", "Kant", "automated decisions"],
  },
  {
    title: "Benchmarking Without Understanding: The Limits of LLM Evaluation",
    abstract:
      "This preprint critiques benchmark-centric evaluation paradigms by demonstrating how similar scores can conceal divergent epistemic profiles. I distinguish performative accuracy from knowledge-relevant reliability and introduce a framework for stress-testing models under epistemically novel conditions.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGBWL",
    topic: "LLM benchmarking",
    year: "2025",
    tags: ["benchmarks", "evaluation", "understanding"],
  },
  {
    title: "Cost-Aware LLM Serving and the Ethics of Computational Scarcity",
    abstract:
      "This paper connects inference economics to epistemic quality. I show how latency and cost optimization decisions can systematically redistribute model reliability across user groups, creating hidden normative asymmetries. The analysis proposes governance principles for ethically constrained serving policies.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGCAL",
    topic: "AI governance",
    year: "2025",
    tags: ["infrastructure ethics", "serving", "governance"],
  },
  {
    title: "AI in Social Systems: Responsibility Across Distributed Agents",
    abstract:
      "Focusing on recommendation, moderation, and ranking infrastructures, this preprint examines how responsibility diffuses across distributed technical and institutional actors. I propose a layered accountability model for tracing normative responsibility when social harms emerge from interacting machine systems.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGAIS",
    topic: "political philosophy of AI",
    year: "2025",
    tags: ["responsibility", "social systems", "accountability"],
  },
  {
    title: "Machine Agency as a Gradient Concept",
    abstract:
      "Rather than treating agency as binary, this paper defends a graded account based on functional autonomy, representational plasticity, and normative exposure. I argue that this framework clarifies public confusion about AI agency while avoiding both anthropomorphism and reductive instrumentalism.",
    status: "preprint",
    philArchiveUrl: "https://philarchive.org/rec/ZIGMAC",
    topic: "philosophy of mind",
    year: "2025",
    tags: ["agency", "autonomy", "philosophy of mind"],
  },
];

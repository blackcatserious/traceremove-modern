export interface Concept {
  id: string;
  name: string;
  category: string;
  description: string;
  detail: string;
  thinkers: string[];
  aiRelevance: string;
  related: string[];
}

export const COLORS: Record<string, string> = {
  epistemology: "#ef5044",
  ethics: "#e0ab4e",
  mind: "#6b8aed",
  language: "#4ecba0",
  political: "#c084fc",
};

export const LABELS: Record<string, string> = {
  epistemology: "Epistemology",
  ethics: "Ethics",
  mind: "Philosophy of Mind",
  language: "Philosophy of Language",
  political: "Political Philosophy",
};

export const concepts: Concept[] = [
  {
    id: "epistemic-risk",
    name: "Epistemic Risk",
    category: "epistemology",
    description: "The gap between confident AI outputs and actual reliability.",
    detail:
      "Epistemic risk describes situations where AI systems generate high-confidence statements from weakly grounded processes. This concept maps where and how AI systems fail epistemically — creating a taxonomy of failure modes for deployment contexts.",
    thinkers: ["Artur Ziganshin", "Alvin Goldman"],
    aiRelevance:
      "Every LLM output carries epistemic risk. The model cannot distinguish between well-grounded and poorly-grounded responses.",
    related: ["process-reliabilism", "epistemic-luck"],
  },
  {
    id: "process-reliabilism",
    name: "Process Reliabilism",
    category: "epistemology",
    description: "Knowledge requires a reliable cognitive process.",
    detail:
      "A belief counts as knowledge only if produced by a process that reliably generates true beliefs. For AI: is statistical pattern completion reliable? It is for common patterns but systematically unreliable for novel contexts and edge cases.",
    thinkers: ["Alvin Goldman", "Ernest Sosa"],
    aiRelevance:
      "LLMs use pattern matching — reliable for frequent patterns, unreliable for rare or novel ones.",
    related: ["epistemic-risk", "epistemic-luck"],
  },
  {
    id: "epistemic-luck",
    name: "Epistemic Luck",
    category: "epistemology",
    description: "Arriving at truth through unreliable means.",
    detail:
      "When someone holds a true belief arrived at through a process that could easily have been wrong, this is epistemic luck — not knowledge. AI systems are frequently epistemically lucky — producing correct outputs through unreliable processes.",
    thinkers: ["Duncan Pritchard"],
    aiRelevance: "AI benchmark scores may reflect epistemic luck rather than genuine competence.",
    related: ["process-reliabilism", "epistemic-risk"],
  },
  {
    id: "testimony",
    name: "Testimony & Trust",
    category: "epistemology",
    description: "When should we accept claims from AI?",
    detail:
      "The epistemology of testimony examines when we are justified in accepting what others tell us. If LLMs lack genuine knowledge, their outputs may not qualify as testimony in the philosophical sense at all.",
    thinkers: ["Jennifer Lackey", "Elizabeth Fricker"],
    aiRelevance:
      "If AI lacks understanding, can its outputs count as testimony? Implications for legal, medical, and educational AI.",
    related: ["process-reliabilism", "grounding-problem"],
  },
  {
    id: "kantian-dignity",
    name: "Kantian Dignity",
    category: "ethics",
    description: "Humans have unconditional worth as rational agents.",
    detail:
      "Kant argued humans possess dignity because they are rational agents. The categorical imperative demands we never treat people merely as means. Automated systems that process people as data points fail to recognize rational agency.",
    thinkers: ["Immanuel Kant", "Christine Korsgaard"],
    aiRelevance:
      "Automated hiring, credit scoring, and criminal justice AI risk treating people as mere data points.",
    related: ["capabilities-approach", "consent", "fairness"],
  },
  {
    id: "capabilities-approach",
    name: "Capabilities Approach",
    category: "ethics",
    description: "Justice requires protecting capabilities to function.",
    detail:
      "Sen and Nussbaum define justice in terms of real capabilities people have to live valued lives. AI can expand capabilities (information access) or restrict them (surveillance, algorithmic gatekeeping).",
    thinkers: ["Amartya Sen", "Martha Nussbaum"],
    aiRelevance:
      "Does AI expand or restrict human capabilities? This framework evaluates real impact on human flourishing.",
    related: ["kantian-dignity", "distributive-justice"],
  },
  {
    id: "virtue-ethics",
    name: "Virtue Ethics & Tech",
    category: "ethics",
    description: "New virtues for the technological age.",
    detail:
      "Shannon Vallor argues AI requires cultivating specific virtues: honesty about uncertainty, humility about capabilities, care for affected people, and practical wisdom in deployment.",
    thinkers: ["Aristotle", "Shannon Vallor"],
    aiRelevance: "Engineers need character virtues — not just rules — to make good AI decisions.",
    related: ["kantian-dignity", "consent"],
  },
  {
    id: "consent",
    name: "Informed Consent",
    category: "ethics",
    description: "People must understand how AI affects them.",
    detail:
      "Meaningful consent requires understanding and genuine alternatives. Most AI-mediated decisions occur without affected people's knowledge or meaningful consent.",
    thinkers: ["Onora O'Neill"],
    aiRelevance:
      "Most AI interactions lack meaningful consent. People don't know when or how AI affects them.",
    related: ["kantian-dignity", "fairness"],
  },
  {
    id: "fairness",
    name: "Algorithmic Fairness",
    category: "ethics",
    description: "Multiple incompatible definitions of fairness.",
    detail:
      "Multiple mathematical fairness definitions (demographic parity, equalized odds, calibration) are provably incompatible. The choice between them is ethical, not technical.",
    thinkers: ["John Rawls", "Arvind Narayanan"],
    aiRelevance:
      "Every fairness metric embodies ethical trade-offs. Philosophy helps identify which are justified.",
    related: ["kantian-dignity", "distributive-justice"],
  },
  {
    id: "chinese-room",
    name: "Chinese Room",
    category: "mind",
    description: "Symbol manipulation is not understanding.",
    detail:
      "Searle's 1980 thought experiment: following rules to respond in Chinese without understanding Chinese. Modern LLMs are enormous Chinese Rooms — manipulating tokens via statistical patterns without comprehension.",
    thinkers: ["John Searle"],
    aiRelevance:
      "LLMs manipulate tokens without semantic grounding. Scale alone doesn't create understanding.",
    related: ["grounding-problem", "intentionality", "functionalism"],
  },
  {
    id: "hard-problem",
    name: "Hard Problem of Consciousness",
    category: "mind",
    description: "Why is there subjective experience?",
    detail:
      "Chalmers distinguishes 'easy problems' (explaining functions) from the 'hard problem' (explaining subjective experience). Even perfect functional replication may not create consciousness.",
    thinkers: ["David Chalmers", "Thomas Nagel"],
    aiRelevance:
      "Can AI be conscious? The hard problem suggests functional replication may not create experience.",
    related: ["chinese-room", "functionalism"],
  },
  {
    id: "intentionality",
    name: "Intentionality",
    category: "mind",
    description: "Mental states are 'about' things.",
    detail:
      "Intentionality is the property of mental states being directed at something. Do neural network representations genuinely refer to things, or do they merely process patterns humans interpret as referential?",
    thinkers: ["Franz Brentano", "John Searle"],
    aiRelevance:
      "If AI representations lack intentionality, they don't truly refer to anything — just process interpreted patterns.",
    related: ["chinese-room", "grounding-problem"],
  },
  {
    id: "functionalism",
    name: "Functionalism",
    category: "mind",
    description: "Mental states defined by functional role.",
    detail:
      "Mental states are defined by what they do, not what they're made of. If true, AI that functionally replicates cognition would have genuine mental states. The strongest argument for possible machine consciousness.",
    thinkers: ["Hilary Putnam", "Jerry Fodor"],
    aiRelevance:
      "If functionalism is correct, sufficiently complex AI could have genuine mental states.",
    related: ["chinese-room", "hard-problem"],
  },
  {
    id: "grounding-problem",
    name: "Grounding Problem",
    category: "language",
    description: "How symbols connect to what they represent.",
    detail:
      "How do formal symbols acquire meaning? LLMs manipulate tokens with statistical relationships but no grounding in physical reality, sensory experience, or causal interaction with the world.",
    thinkers: ["Stevan Harnad", "Hubert Dreyfus"],
    aiRelevance:
      "LLM tokens have statistical but not semantic relationships. Without grounding, AI 'knowledge' floats free of reality.",
    related: ["chinese-room", "meaning-use", "intentionality"],
  },
  {
    id: "meaning-use",
    name: "Meaning as Use",
    category: "language",
    description: "Meaning comes from use in language games.",
    detail:
      "Wittgenstein: meaning is use in language games — social practices with rules. If meaning requires genuine social participation, LLMs may not truly engage with meaning at all.",
    thinkers: ["Ludwig Wittgenstein"],
    aiRelevance:
      "Do LLMs participate in genuine language games? If not, their processing may not involve real meaning.",
    related: ["grounding-problem", "chinese-room"],
  },
  {
    id: "democratic-oversight",
    name: "Democratic AI Oversight",
    category: "political",
    description: "AI governance needs democratic participation.",
    detail:
      "As AI affects millions, democratic oversight means those affected have meaningful input into development, deployment, and regulation — not just expert bodies or corporate governance.",
    thinkers: ["Philip Pettit"],
    aiRelevance: "Current AI governance is technocratic. Democratic theory suggests broader participation.",
    related: ["distributive-justice", "consent"],
  },
  {
    id: "distributive-justice",
    name: "Distributive Justice",
    category: "political",
    description: "Who benefits and bears AI costs?",
    detail:
      "Rawls: design institutions from behind a 'veil of ignorance.' If you didn't know whether you'd benefit from or be harmed by AI, what rules would you choose?",
    thinkers: ["John Rawls"],
    aiRelevance:
      "AI benefits concentrate among developers while risks distribute to users. Rawlsian analysis exposes this.",
    related: ["democratic-oversight", "fairness", "capabilities-approach"],
  },
];

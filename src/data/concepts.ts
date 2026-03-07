export interface Concept {
  id: string;
  name: string;
  category: "epistemology" | "ethics" | "mind" | "language" | "political";
  description: string;
  detail: string;
  thinkers: string[];
  aiRelevance: string;
  related: string[];
}

export const CATEGORY_COLORS: Record<string, string> = {
  epistemology: "#ef5044",
  ethics: "#e0ab4e",
  mind: "#6b8aed",
  language: "#4ecba0",
  political: "#c084fc",
};

export const CATEGORY_LABELS: Record<string, string> = {
  epistemology: "Epistemology",
  ethics: "Ethics",
  mind: "Philosophy of Mind",
  language: "Philosophy of Language",
  political: "Political Philosophy",
};

export const concepts: Concept[] = [
  {
    id: "epistemic-risk", name: "Epistemic Risk", category: "epistemology",
    description: "The gap between confident AI outputs and actual reliability.",
    detail: "Epistemic risk describes situations where AI systems generate high-confidence statements from weakly grounded processes. A system may sound authoritative while its knowledge-production process is unreliable. This concept, central to Ziganshin's research, maps where and how AI systems fail epistemically — creating a taxonomy of failure modes for deployment contexts.",
    thinkers: ["Artur Ziganshin", "Alvin Goldman", "Ernest Sosa"],
    aiRelevance: "Every LLM output carries epistemic risk. The model cannot distinguish between well-grounded and poorly-grounded responses.",
    related: ["process-reliabilism", "epistemic-luck", "testimony"],
  },
  {
    id: "process-reliabilism", name: "Process Reliabilism", category: "epistemology",
    description: "Knowledge requires a reliable cognitive process.",
    detail: "Process reliabilism holds that a belief counts as knowledge only if it was produced by a process that reliably generates true beliefs. For AI, the critical question becomes: is statistical pattern completion over training data a reliable epistemic process? It is reliable for common patterns but systematically unreliable for novel contexts, edge cases, and situations requiring causal rather than correlational reasoning.",
    thinkers: ["Alvin Goldman", "Ernest Sosa"],
    aiRelevance: "LLMs use pattern matching — reliable for frequent patterns, unreliable for rare or novel ones. This defines their epistemic limits.",
    related: ["epistemic-risk", "epistemic-luck", "testimony"],
  },
  {
    id: "epistemic-luck", name: "Epistemic Luck", category: "epistemology",
    description: "Arriving at truth through unreliable means.",
    detail: "When someone holds a true belief but arrived at it through a process that could easily have produced a false belief, philosophers call this epistemic luck. The belief is true, but not in a way that counts as knowledge. AI systems are frequently epistemically lucky — they produce correct outputs through processes that, in slightly different contexts, would produce incorrect ones.",
    thinkers: ["Duncan Pritchard", "Peter Unger"],
    aiRelevance: "AI benchmark scores may reflect epistemic luck rather than genuine competence — systems that happen to get test questions right.",
    related: ["process-reliabilism", "epistemic-risk"],
  },
  {
    id: "testimony", name: "Testimony & Trust", category: "epistemology",
    description: "When should we accept claims from AI systems?",
    detail: "The epistemology of testimony examines when we are justified in accepting what others tell us. This extends to AI: when should we accept machine-generated outputs as trustworthy? Traditional testimony requires the speaker to have knowledge — but if LLMs lack genuine knowledge, their outputs may not qualify as testimony in the philosophical sense at all.",
    thinkers: ["C.A.J. Coady", "Jennifer Lackey", "Elizabeth Fricker"],
    aiRelevance: "If AI lacks understanding, can its outputs count as testimony? This has implications for legal, medical, and educational AI use.",
    related: ["process-reliabilism", "epistemic-risk", "grounding-problem"],
  },
  {
    id: "kantian-dignity", name: "Kantian Dignity", category: "ethics",
    description: "Humans have unconditional worth as rational agents.",
    detail: "Kant argued that humans possess dignity — an unconditional, incomparable worth — because they are rational agents capable of setting their own ends. The categorical imperative demands we never treat people merely as means. When automated systems process people as data points, they fail to recognize human rational agency, violating this foundational ethical principle.",
    thinkers: ["Immanuel Kant", "Christine Korsgaard"],
    aiRelevance: "Automated hiring, credit scoring, and criminal justice AI all risk treating people as mere data points rather than rational agents.",
    related: ["capabilities-approach", "consent", "fairness"],
  },
  {
    id: "capabilities-approach", name: "Capabilities Approach", category: "ethics",
    description: "Justice requires protecting people's capabilities to function.",
    detail: "Developed by Sen and Nussbaum, this framework defines justice in terms of the real capabilities people have to live lives they value. AI can expand capabilities (access to information, efficiency) or restrict them (surveillance, algorithmic gatekeeping). The ethical question is whether AI deployment genuinely expands or constrains human functioning.",
    thinkers: ["Amartya Sen", "Martha Nussbaum"],
    aiRelevance: "Does AI expand or restrict human capabilities? This framework evaluates AI impact on real human flourishing.",
    related: ["kantian-dignity", "distributive-justice"],
  },
  {
    id: "virtue-ethics", name: "Virtue Ethics & Technology", category: "ethics",
    description: "We need new virtues for the technological age.",
    detail: "Virtue ethics focuses on character rather than rules or consequences. Shannon Vallor argues that technologies like AI require us to cultivate specific virtues: honesty about uncertainty, humility about machine capabilities, care for those affected by automated decisions, and practical wisdom in deploying powerful systems.",
    thinkers: ["Aristotle", "Shannon Vallor"],
    aiRelevance: "Engineers and deployers of AI need specific character virtues — not just ethical rules — to make good decisions.",
    related: ["kantian-dignity", "consent"],
  },
  {
    id: "consent", name: "Informed Consent", category: "ethics",
    description: "People must understand and agree to how AI affects them.",
    detail: "Meaningful consent requires that people understand what they are consenting to and have genuine alternatives. Most AI-mediated decisions occur without the affected person's knowledge or meaningful consent — from algorithmic content curation to automated insurance pricing.",
    thinkers: ["Onora O'Neill", "Neil Manson"],
    aiRelevance: "Most AI interactions lack meaningful consent. People don't know when AI is involved or how it affects them.",
    related: ["kantian-dignity", "fairness"],
  },
  {
    id: "fairness", name: "Algorithmic Fairness", category: "ethics",
    description: "Multiple incompatible mathematical definitions of fairness.",
    detail: "Computer scientists have identified multiple mathematical definitions of fairness (demographic parity, equalized odds, calibration) that are provably incompatible with each other. Philosophy helps navigate these tensions — the choice between fairness definitions is an ethical choice, not a technical one.",
    thinkers: ["John Rawls", "Arvind Narayanan"],
    aiRelevance: "Every fairness metric embodies ethical trade-offs. Philosophy helps identify which trade-offs are justified.",
    related: ["kantian-dignity", "distributive-justice"],
  },
  {
    id: "chinese-room", name: "Chinese Room", category: "mind",
    description: "Symbol manipulation is not understanding.",
    detail: "Searle's 1980 thought experiment: a person follows rules to respond in Chinese without understanding Chinese. The argument targets the claim that syntactic manipulation of symbols can constitute semantic understanding. Modern LLMs are enormous Chinese Rooms — manipulating tokens via statistical patterns without genuine comprehension.",
    thinkers: ["John Searle"],
    aiRelevance: "LLMs manipulate tokens statistically without semantic grounding. The Chinese Room argument explains why scale alone doesn't create understanding.",
    related: ["grounding-problem", "intentionality", "functionalism"],
  },
  {
    id: "hard-problem", name: "Hard Problem of Consciousness", category: "mind",
    description: "Why is there subjective experience?",
    detail: "Chalmers distinguishes between 'easy problems' (explaining cognitive functions) and the 'hard problem' (explaining why there is subjective experience at all). Even if we build AI that perfectly replicates human cognitive functions, the hard problem asks: is there something it's like to be that AI?",
    thinkers: ["David Chalmers", "Thomas Nagel"],
    aiRelevance: "Can AI be conscious? The hard problem suggests that functional replication may not create subjective experience.",
    related: ["chinese-room", "functionalism"],
  },
  {
    id: "intentionality", name: "Intentionality", category: "mind",
    description: "Mental states are 'about' things.",
    detail: "Intentionality is the property of mental states being directed at or about something. Your belief that 'Paris is in France' is about Paris. The question for AI: do neural network representations genuinely refer to things in the world, or do they merely process patterns that humans interpret as referential?",
    thinkers: ["Franz Brentano", "John Searle", "Daniel Dennett"],
    aiRelevance: "If AI representations lack genuine intentionality, they don't truly refer to anything — they just process patterns we interpret.",
    related: ["chinese-room", "grounding-problem"],
  },
  {
    id: "functionalism", name: "Functionalism", category: "mind",
    description: "Mental states defined by their functional role.",
    detail: "Functionalism holds that mental states are defined by what they do (their causal/functional role) rather than what they're made of. If true, an AI system that functionally replicates human cognition would genuinely have mental states. This is the strongest philosophical argument for the possibility of machine consciousness.",
    thinkers: ["Hilary Putnam", "Jerry Fodor", "David Lewis"],
    aiRelevance: "If functionalism is correct, sufficiently complex AI could have genuine mental states. But critics argue function isn't sufficient.",
    related: ["chinese-room", "hard-problem"],
  },
  {
    id: "grounding-problem", name: "Grounding Problem", category: "language",
    description: "How symbols connect to what they represent.",
    detail: "The symbol grounding problem asks how formal symbols (like words) acquire meaning — how they connect to the things they represent. LLMs manipulate tokens that have statistical relationships to each other but no grounding in physical reality, sensory experience, or causal interaction with the world.",
    thinkers: ["Stevan Harnad", "Hubert Dreyfus"],
    aiRelevance: "LLM tokens have statistical but not semantic relationships. Without grounding, AI 'knowledge' floats free of reality.",
    related: ["chinese-room", "meaning-use", "intentionality"],
  },
  {
    id: "meaning-use", name: "Meaning as Use", category: "language",
    description: "Meaning comes from use in language games.",
    detail: "Wittgenstein argued that the meaning of a word is its use in a language game — a social practice with rules. If meaning requires participation in genuine social practices, LLMs (which process text without participating in human practices) may not truly engage with meaning at all.",
    thinkers: ["Ludwig Wittgenstein"],
    aiRelevance: "Do LLMs participate in genuine language games? If not, their processing may not involve real meaning.",
    related: ["grounding-problem", "chinese-room"],
  },
  {
    id: "democratic-oversight", name: "Democratic AI Oversight", category: "political",
    description: "AI governance requires democratic participation.",
    detail: "As AI systems make decisions that affect millions, questions of governance become urgent. Democratic oversight means that those affected by AI have meaningful input into how it's developed, deployed, and regulated — not just expert bodies or corporate governance.",
    thinkers: ["Philip Pettit", "Hélène Landemore"],
    aiRelevance: "Current AI governance is technocratic. Democratic theory suggests broader participation is needed.",
    related: ["distributive-justice", "consent"],
  },
  {
    id: "distributive-justice", name: "Distributive Justice", category: "political",
    description: "Who benefits and who bears the costs of AI?",
    detail: "Rawls' theory of justice asks us to design institutions from behind a 'veil of ignorance' — not knowing our position in society. Applied to AI: if you didn't know whether you'd benefit from or be harmed by AI deployment, what rules would you choose?",
    thinkers: ["John Rawls", "Robert Nozick"],
    aiRelevance: "AI benefits concentrate among developers while risks are distributed to users. Rawlsian analysis exposes this asymmetry.",
    related: ["democratic-oversight", "fairness", "capabilities-approach"],
  },
];

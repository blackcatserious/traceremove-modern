export interface Concept {
  id: string;
  name: string;
  category: "epistemology" | "ethics" | "mind" | "language" | "political";
  shortDescription: string;
  fullDescription: string;
  relatedTo: string[];
  keyThinkers: string[];
  relevanceToAI: string;
}

export const concepts: Concept[] = [
  {
    id: "process-reliabilism",
    name: "Process Reliabilism",
    category: "epistemology",
    shortDescription:
      "A belief counts as knowledge when it comes from a reliably truth-tracking process. In AI, this asks whether model generation mechanisms are stable across changing contexts. It reframes evaluation from output quality to process quality.",
    fullDescription:
      "Process reliabilism in epistemology argues that justification depends less on conscious access and more on whether a process tends to produce true beliefs. A process can be fast and opaque but still epistemically respectable if it remains reliable under variation. The framework is useful when we cannot fully inspect internal cognition but can study performance patterns over time.\n\nFor AI systems, this shifts analysis from one-off benchmark wins to reliability across domains, edge cases, and adversarial prompts. A model that performs well in common contexts but collapses in unusual ones may produce persuasive outputs without meeting epistemic standards for knowledge.",
    relatedTo: ["epistemic-risk", "epistemic-luck", "testimony"],
    keyThinkers: ["Alvin Goldman", "Ernest Sosa"],
    relevanceToAI:
      "It helps evaluate whether LLM outputs should be trusted as knowledge claims rather than only plausible text generation.",
  },
  {
    id: "epistemic-luck",
    name: "Epistemic Luck",
    category: "epistemology",
    shortDescription:
      "Epistemic luck appears when an answer is true by accident rather than robust understanding. AI systems can look accurate while succeeding for unstable reasons. This distinction matters for high-stakes deployment.",
    fullDescription:
      "Epistemic luck describes cases where a true belief is produced by a process that could easily have yielded falsehood. In Gettier-style problems, truth and justification come apart, revealing fragility in apparent knowledge. Philosophers use luck-based analysis to separate genuine knowledge from fortunate coincidence.\n\nIn AI, luck appears when models answer correctly due to pattern overlap rather than grounded reasoning. The same pipeline may fail with slight context shifts, indicating that correctness was contingent rather than dependable.",
    relatedTo: ["process-reliabilism", "epistemic-risk", "grounding-problem"],
    keyThinkers: ["Edmund Gettier", "Duncan Pritchard"],
    relevanceToAI:
      "It explains why benchmark accuracy alone can hide brittle reliability and overconfident errors.",
  },
  {
    id: "testimony",
    name: "Testimony & Trust",
    category: "epistemology",
    shortDescription:
      "Much human knowledge comes from trusted testimony rather than direct verification. AI outputs now function like a new testimonial source. The core question is when machine testimony deserves credibility.",
    fullDescription:
      "Testimony is central to social epistemology: we routinely depend on others for facts we cannot independently confirm. Trust is rational when speakers are competent, sincere, and institutionally accountable. Epistemic communities build norms for checking claims and correcting mistakes.\n\nAI assistants are increasingly treated as testimonial agents, but they lack intention, accountability, and stable expertise boundaries. Users need explicit calibration practices, provenance signals, and institutional safeguards before adopting model outputs as credible testimony.",
    relatedTo: ["process-reliabilism", "epistemic-injustice", "epistemic-risk"],
    keyThinkers: ["C.A.J. Coady", "Miranda Fricker"],
    relevanceToAI:
      "Frames AI trust as a social and institutional problem, not just a model capability problem.",
  },
  {
    id: "epistemic-injustice",
    name: "Epistemic Injustice",
    category: "epistemology",
    shortDescription:
      "Epistemic injustice occurs when people are wronged as knowers. Biased datasets and ranking systems can systematically devalue certain voices. AI can scale this injustice in automated decision loops.",
    fullDescription:
      "Miranda Fricker defines epistemic injustice as harm done to someone in their capacity as a participant in knowledge practices. Testimonial injustice discounts credibility because of prejudice, while hermeneutical injustice denies interpretive resources needed to make sense of experience. These injustices are social, structural, and often invisible to dominant groups.\n\nAI systems trained on historical corpora can reproduce and amplify these patterns in moderation, hiring, and healthcare triage. Addressing this requires representational reform, contestability, and institutional accountability beyond technical debiasing alone.",
    relatedTo: ["testimony", "fairness", "distributive-justice"],
    keyThinkers: ["Miranda Fricker", "José Medina"],
    relevanceToAI:
      "Provides a framework for evaluating whose knowledge is discounted or excluded by AI pipelines.",
  },
  {
    id: "epistemic-risk",
    name: "Epistemic Risk",
    category: "epistemology",
    shortDescription:
      "Epistemic risk names the gap between fluent output and justified reliability. A system can sound certain while lacking stable truth-tracking processes. This is central to Ziganshin's research agenda.",
    fullDescription:
      "Epistemic risk evaluates where an information-producing system is likely to mislead users despite apparent coherence. It integrates uncertainty, domain fragility, and confidence calibration into a single normative lens. The concept is especially useful when systems are deployed in environments with asymmetric harm from false claims.\n\nIn AI, epistemic risk surfaces appear in edge cases, distribution shift, and authority transfer from human experts to interfaces. Mapping these surfaces supports governance decisions about acceptable use, oversight thresholds, and human-in-the-loop requirements.",
    relatedTo: ["process-reliabilism", "epistemic-luck", "testimony"],
    keyThinkers: ["Artur Ziganshin", "Ernest Sosa"],
    relevanceToAI:
      "Guides practical policy for where models can assist safely and where they should be constrained.",
  },
  {
    id: "kantian-dignity",
    name: "Kantian Dignity",
    category: "ethics",
    shortDescription:
      "Kantian dignity treats persons as ends in themselves, never merely as means. Automated systems risk reducing people to optimization variables. This principle grounds non-negotiable ethical constraints.",
    fullDescription:
      "Kantian ethics argues that rational agents possess intrinsic worth that cannot be traded away for aggregate utility. The Formula of Humanity requires that institutions respect autonomy, agency, and moral status. Dignity therefore imposes side-constraints rather than merely adding another weighted objective.\n\nAI decision systems can violate dignity when they erase explanation, appeal, or recognition of personhood in high-impact contexts. A dignity-centered design requires transparency, contestability, and meaningful human review in consequential decisions.",
    relatedTo: ["consent", "capabilities-approach", "fairness"],
    keyThinkers: ["Immanuel Kant", "Christine Korsgaard"],
    relevanceToAI:
      "Supplies a principled argument for hard limits on fully automated governance and labor decisions.",
  },
  {
    id: "capabilities-approach",
    name: "Capabilities Approach",
    category: "ethics",
    shortDescription:
      "The capabilities approach evaluates justice by what people are genuinely able to do and be. AI can either expand or constrict those real freedoms. It links technical design to lived human flourishing.",
    fullDescription:
      "Developed by Amartya Sen and Martha Nussbaum, the capabilities approach rejects narrow welfare metrics in favor of substantive freedoms. It asks whether people can pursue education, health, political participation, and social recognition. Justice depends on enabling conditions, not only formal rights.\n\nFor AI policy, this means assessing downstream effects on opportunity structures, not only model-level accuracy or fairness scores. Systems should be evaluated by whether they preserve agency and support vulnerable groups in exercising key capabilities.",
    relatedTo: ["kantian-dignity", "distributive-justice", "democratic-oversight"],
    keyThinkers: ["Amartya Sen", "Martha Nussbaum"],
    relevanceToAI:
      "Helps evaluate societal impact by measuring capability expansion or deprivation caused by AI deployment.",
  },
  {
    id: "virtue-ethics",
    name: "Virtue Ethics",
    category: "ethics",
    shortDescription:
      "Virtue ethics focuses on character and practical wisdom rather than rule compliance alone. AI development requires cultivated judgment under uncertainty. It foregrounds habits of responsible technological practice.",
    fullDescription:
      "Virtue ethics asks what kind of people and institutions we should become, not only what isolated acts are permitted. It emphasizes phronesis (practical wisdom), context-sensitive judgment, and moral formation over time. Moral success depends on cultivated dispositions such as honesty, humility, and courage.\n\nIn AI ecosystems, virtue ethics highlights developer incentives, organizational culture, and user education. Shannon Vallor's work suggests we need techno-moral virtues that resist automation complacency and preserve human responsibility.",
    relatedTo: ["kantian-dignity", "consent", "democratic-oversight"],
    keyThinkers: ["Aristotle", "Shannon Vallor"],
    relevanceToAI:
      "Supports governance models that train judgment and accountability, not just checklist compliance.",
  },
  {
    id: "consent",
    name: "Informed Consent",
    category: "ethics",
    shortDescription:
      "Informed consent requires clear understanding and voluntary agreement. AI systems often operate through opaque defaults that undercut genuine consent. Philosophical analysis distinguishes formal click-through from meaningful choice.",
    fullDescription:
      "Consent is ethically valid only when users understand relevant risks, alternatives, and consequences. In medicine and law, consent norms evolved to protect autonomy against informational asymmetry and coercion. Mere procedural agreement does not satisfy these standards.\n\nAI products frequently rely on buried terms, unclear data reuse practices, and interface nudges that exploit inattention. Ethical deployment therefore demands intelligible disclosure, revocability, and non-punitive opt-out mechanisms.",
    relatedTo: ["kantian-dignity", "surveillance", "fairness"],
    keyThinkers: ["Onora O'Neill", "Alan Wertheimer"],
    relevanceToAI:
      "Provides criteria for user autonomy in data governance and AI-mediated decision processes.",
  },
  {
    id: "fairness",
    name: "Algorithmic Fairness",
    category: "ethics",
    shortDescription:
      "Fairness in AI has many competing mathematical definitions. Choosing one is a normative decision, not a purely technical fact. Philosophy clarifies which fairness ideal fits a given social context.",
    fullDescription:
      "Algorithmic fairness research offers metrics like demographic parity, equalized odds, and calibration, which often conflict with one another. These tradeoffs reveal that fairness cannot be reduced to optimization alone. Fairness judgments presuppose values about equality, desert, and acceptable error distribution.\n\nPhilosophical ethics helps identify when tradeoffs are legitimate and when they mask structural injustice. Deployment decisions should include procedural justice, transparency, and affected-group participation.",
    relatedTo: ["epistemic-injustice", "distributive-justice", "consent"],
    keyThinkers: ["John Rawls", "Deborah Hellman"],
    relevanceToAI:
      "Frames fairness as governance plus value choice, not just model tuning.",
  },
  {
    id: "chinese-room",
    name: "Chinese Room",
    category: "mind",
    shortDescription:
      "Searle's Chinese Room argues that symbol manipulation is not understanding. Modern LLMs intensify this argument at scale. It remains a core test for claims about machine cognition.",
    fullDescription:
      "John Searle's thought experiment imagines a person manipulating Chinese symbols by rule without understanding Chinese. The resulting outputs may appear intelligent, yet semantic comprehension is absent. The argument targets strong AI claims that syntax alone yields understanding.\n\nLarge language models revive this debate because they produce coherent language while operating on token statistics. Even advanced performance does not settle whether semantic understanding, intentionality, or consciousness is present.",
    relatedTo: ["grounding-problem", "intentionality", "functionalism"],
    keyThinkers: ["John Searle", "Daniel Dennett"],
    relevanceToAI:
      "Offers a conceptual warning against equating linguistic fluency with genuine understanding.",
  },
  {
    id: "hard-problem",
    name: "Hard Problem of Consciousness",
    category: "mind",
    shortDescription:
      "The hard problem asks why physical processes are accompanied by subjective experience. AI capability growth does not automatically resolve this puzzle. Consciousness claims need philosophical and empirical caution.",
    fullDescription:
      "David Chalmers distinguishes easy problems of cognition from the hard problem: explaining why there is 'something it is like' to be a subject. Functional and behavioral explanations may leave phenomenal experience untouched. This creates persistent uncertainty about machine consciousness criteria.\n\nIn AI discourse, consciousness is often invoked rhetorically to inflate or dismiss risk. A better approach is epistemic humility: separate functional competence from phenomenology and avoid premature anthropomorphic conclusions.",
    relatedTo: ["functionalism", "intentionality", "embodied-cognition"],
    keyThinkers: ["David Chalmers", "Thomas Nagel"],
    relevanceToAI:
      "Clarifies that advanced behavior does not by itself justify claims about machine sentience.",
  },
  {
    id: "intentionality",
    name: "Intentionality",
    category: "mind",
    shortDescription:
      "Intentionality is the aboutness of mental states—their directedness toward objects or propositions. AI representations raise the question of whether they are genuinely about anything. This issue sits between mind and language.",
    fullDescription:
      "In philosophy of mind, intentionality explains how thoughts can represent the world, be true or false, and refer to absent objects. Classical debates contrast intrinsic intentionality in minds with derived intentionality in symbols. The distinction matters for whether computational states can bear meaning independently.\n\nLLMs manipulate tokens with high statistical skill, but whether those states possess genuine aboutness remains contested. The intentionality question shapes how far we should trust machine outputs as knowledge claims about reality.",
    relatedTo: ["reference", "grounding-problem", "chinese-room"],
    keyThinkers: ["Franz Brentano", "John Searle"],
    relevanceToAI:
      "Determines whether model representations are merely formal correlates or semantically world-directed states.",
  },
  {
    id: "embodied-cognition",
    name: "Embodied Cognition",
    category: "mind",
    shortDescription:
      "Embodied cognition argues intelligence is rooted in bodily engagement with the world. Pure symbol processing may miss practical and perceptual dimensions of understanding. This challenges text-only intelligence claims.",
    fullDescription:
      "Embodied cognition traditions, influenced by phenomenology and cognitive science, hold that reasoning emerges from sensorimotor coupling, situated action, and environmental feedback. Knowledge is not only abstract representation but skilled coping in concrete contexts. Intelligence is therefore distributed across brain, body, and world.\n\nFor AI, this perspective questions whether disembodied language models can fully capture human understanding. It motivates multimodal, interactive, and world-grounded systems while preserving skepticism about purely textual competence.",
    relatedTo: ["grounding-problem", "hard-problem", "meaning-use"],
    keyThinkers: ["Hubert Dreyfus", "Maurice Merleau-Ponty"],
    relevanceToAI:
      "Highlights why embodied interaction may be necessary for robust commonsense and semantic grounding.",
  },
  {
    id: "functionalism",
    name: "Functionalism",
    category: "mind",
    shortDescription:
      "Functionalism defines mental states by causal-functional role rather than physical substrate. It is often used to argue that machines could have minds. But functional equivalence remains difficult to establish in practice.",
    fullDescription:
      "Functionalism treats beliefs, desires, and pains as states identified by their relations to inputs, outputs, and other internal states. This allows multiple realizability: minds could, in principle, be implemented in silicon as well as biology. The view has strongly influenced cognitive science and AI optimism.\n\nCritics argue that role similarity may not capture phenomenology, intentionality, or normative understanding. In AI governance, functionalism encourages possibility while still requiring evidence beyond surface behavior.",
    relatedTo: ["chinese-room", "hard-problem", "intentionality"],
    keyThinkers: ["Hilary Putnam", "Jerry Fodor"],
    relevanceToAI:
      "Provides the main philosophical route for claims that advanced AI might instantiate minded states.",
  },
  {
    id: "grounding-problem",
    name: "The Grounding Problem",
    category: "language",
    shortDescription:
      "The grounding problem asks how symbols connect to what they represent. LLMs are strong at pattern completion but weak at world anchoring. This gap is central to language-model limitations.",
    fullDescription:
      "Symbol systems can manipulate forms without fixing meaning unless symbols are anchored in perception, action, or social practice. Stevan Harnad's symbol grounding problem captures this concern: definitions that only refer to more symbols may never reach the world. Grounding is therefore a precondition for robust semantics.\n\nIn AI, token co-occurrence yields fluency but not guaranteed referential stability. Models may generate plausible statements that fail under real-world verification, especially in novel or context-rich domains.",
    relatedTo: ["reference", "meaning-use", "chinese-room"],
    keyThinkers: ["Stevan Harnad", "Ludwig Wittgenstein"],
    relevanceToAI:
      "Explains why models can appear competent while remaining fragile in fact-sensitive tasks.",
  },
  {
    id: "meaning-use",
    name: "Meaning as Use",
    category: "language",
    shortDescription:
      "Wittgenstein's view ties meaning to social use in language games. Meaning emerges from practices, norms, and forms of life. This raises whether LLMs participate in genuine norm-governed discourse.",
    fullDescription:
      "Later Wittgenstein rejects purely referential theories of meaning by emphasizing language as rule-governed activity. Words gain significance through public use within communities and institutions. Understanding therefore includes practical mastery of norms, not just symbol association.\n\nLLMs emulate language-game patterns but do not inhabit social forms of life as accountable agents. Their outputs can still be useful, but philosophical caution is needed before attributing human-like understanding.",
    relatedTo: ["grounding-problem", "reference", "embodied-cognition"],
    keyThinkers: ["Ludwig Wittgenstein", "Robert Brandom"],
    relevanceToAI:
      "Helps distinguish stylistic competence from participation in normatively structured communication.",
  },
  {
    id: "reference",
    name: "Reference & Denotation",
    category: "language",
    shortDescription:
      "Reference concerns how terms latch onto objects, kinds, and individuals in the world. Competing theories reveal that meaning is not just dictionary definition. AI must handle reference to avoid fluent misdescription.",
    fullDescription:
      "Frege, Kripke, and Putnam offer major accounts of how language hooks onto reality through sense, rigid designation, and externalist factors. Reference is crucial for truth conditions: claims can only be true or false if terms successfully denote. Misreference undermines knowledge even when syntax is perfect.\n\nAI systems frequently produce referential drift in long contexts, entity confusion, and fabricated citations. Better retrieval, grounding, and verification pipelines are needed to stabilize referential competence.",
    relatedTo: ["grounding-problem", "intentionality", "meaning-use"],
    keyThinkers: ["Gottlob Frege", "Saul Kripke", "Hilary Putnam"],
    relevanceToAI:
      "Supports rigorous evaluation of factuality, citation integrity, and entity tracking in language models.",
  },
  {
    id: "democratic-oversight",
    name: "Democratic AI Oversight",
    category: "political",
    shortDescription:
      "Democratic oversight insists AI governance cannot be left only to firms or technical experts. Affected publics need participatory voice in rule-setting. Legitimacy depends on accountable institutions.",
    fullDescription:
      "Political legitimacy in technology governance requires procedures that include those affected by decisions. Democratic oversight introduces transparency, contestation, and representation into AI policy processes. It resists technocratic closure where optimization metrics substitute for public reasoning.\n\nIn practice, this means participatory audits, explainability standards, and avenues for civic challenge. Governance quality depends on institutional design as much as on model architecture.",
    relatedTo: ["distributive-justice", "surveillance", "fairness"],
    keyThinkers: ["Jürgen Habermas", "Hélène Landemore"],
    relevanceToAI:
      "Anchors AI governance in legitimacy, accountability, and shared rulemaking.",
  },
  {
    id: "surveillance",
    name: "Surveillance & Power",
    category: "political",
    shortDescription:
      "AI enables dense monitoring, prediction, and behavioral steering. Surveillance is not only data collection but a structure of power. Philosophical critique reveals how visibility and control become asymmetric.",
    fullDescription:
      "From Foucault's disciplinary analysis to Zuboff's surveillance capitalism, power is exercised through information asymmetry and behavioral modulation. AI expands this by automating inference, ranking, and intervention at scale. The result can be subtle governance without explicit coercion.\n\nEthical assessment must therefore include institutional intent, consent conditions, and avenues of resistance. Privacy alone is insufficient if systems reshape opportunity and speech through opaque optimization.",
    relatedTo: ["consent", "democratic-oversight", "distributive-justice"],
    keyThinkers: ["Michel Foucault", "Shoshana Zuboff"],
    relevanceToAI:
      "Provides tools to analyze recommender systems, facial recognition, and predictive policing as power technologies.",
  },
  {
    id: "distributive-justice",
    name: "Distributive Justice",
    category: "political",
    shortDescription:
      "Distributive justice asks who gains and who bears the costs of AI systems. Benefits and harms are often unevenly allocated. Fair deployment requires explicit principles for distribution and repair.",
    fullDescription:
      "Distributive justice concerns the just allocation of goods, risks, and burdens across society. Rawlsian approaches emphasize fairness under conditions of uncertainty, while luck egalitarian and capability frameworks add further nuance. AI infrastructures frequently externalize labor, environmental, and epistemic costs onto less powerful communities.\n\nPolicy should assess upstream data extraction, downstream error burdens, and who captures productivity gains. Justice requires not only technical mitigation but institutional redistribution and accountability mechanisms.",
    relatedTo: ["fairness", "capabilities-approach", "democratic-oversight"],
    keyThinkers: ["John Rawls", "Amartya Sen"],
    relevanceToAI:
      "Clarifies how to evaluate AI ecosystems at social scale rather than only model performance scale.",
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  content: string;
};

export const articles: Article[] = [
  {
    slug: "why-ai-needs-philosophy",
    title: "Why AI Needs Philosophy Now More Than Ever",
    date: "2026-03-01",
    readingTime: "8 min read",
    excerpt:
      "Large language models don't understand meaning. They process patterns. This distinction matters enormously — and philosophy is the only discipline equipped to explain why.",
    tags: ["AI philosophy", "epistemic risks", "LLMs"],
    content: `
We are living through the most significant expansion of artificial language production in human history. Every day, large language models generate billions of words. These outputs look like understanding. They feel like understanding. But the philosophical question that should keep us awake at night is simple: are they understanding?

This is not an idle academic puzzle. The answer determines whether we can trust AI systems with consequential decisions — diagnosing illness, adjudicating legal disputes, allocating resources, educating children.

## The Epistemic Gap

Epistemology — the branch of philosophy concerned with knowledge, truth, and justified belief — offers the clearest framework for understanding what is happening inside language models. When GPT-4 produces a correct medical diagnosis, has it learned medicine? Or has it found statistical regularities in millions of medical documents?

A doctor who diagnoses pneumonia understands that pneumonia involves inflammation of the lung tissue, that it can be caused by bacteria or viruses, that certain patients are more vulnerable. The doctor's knowledge is grounded — it connects to embodied experience, causal reasoning, and a model of the world.

An LLM that produces the same diagnosis has done something fundamentally different. It has identified that, in the training data, the pattern of these symptoms correlates with pneumonia at high frequency. This is not knowledge in any philosophical sense recognized since Plato.

## Why This Matters for Society

The practical consequences are enormous. If an AI system produces a correct diagnosis 95% of the time through pattern matching, it will fail in precisely those cases where patterns break — rare diseases, atypical presentations, novel conditions.

In legal AI, systems encoding historical patterns also encode every bias present in that history. Pattern completion does not distinguish between what has been done and what should be done.

## What Philosophy Brings

Philosophy offers centuries of conceptual tools. The philosophy of language provides frameworks for analyzing what understanding language actually requires. Epistemology offers rigorous definitions of knowledge and justified belief. Ethics provides frameworks for determining what we owe to people affected by AI decisions.

The AI research community has largely built systems using engineering metrics — accuracy, perplexity, benchmark performance. Philosophy asks the how and why questions that engineering alone cannot answer.

These are not abstract questions. They are the most urgent applied philosophy problems of our generation.
`,
  },
  {
    slug: "what-deepseek-reveals",
    title: "What DeepSeek Reveals About the Fragility of AI Knowledge",
    date: "2026-03-08",
    readingTime: "6 min read",
    excerpt:
      "The rise of DeepSeek challenges Western assumptions about AI development — but the deeper lesson is philosophical.",
    tags: ["DeepSeek", "epistemic risks", "benchmarking"],
    content: `
When DeepSeek demonstrated performance competitive with Western frontier models at a fraction of the training cost, the AI industry panicked about economics. But the more interesting question is epistemological.

What does it mean that two completely different training approaches, using different data and different computational budgets, produce systems that score similarly on benchmarks?

## The Benchmark Illusion

If two radically different systems achieve similar benchmark scores, one of two things must be true. Either both have converged on genuine understanding — meaning there is one correct way to know these things. Or the benchmarks measure something other than understanding.

The philosophical implications of the second possibility are profound. If AI benchmarks primarily measure pattern-completion ability rather than genuine comprehension, then the entire framework we use to evaluate AI progress is epistemically fragile.

## Epistemic Luck

Philosophy has a name for this: epistemic luck. When someone arrives at a true belief through a process that could easily have produced a false belief, their true belief does not count as knowledge. AI systems that produce correct outputs through pattern completion without understanding are epistemically lucky.

## The Path Forward

The DeepSeek moment should prompt a fundamental rethinking of how we evaluate AI systems. Instead of asking how well does this system perform on benchmarks, we should ask: what kind of epistemic process is this system using, and is that process reliable across contexts we have not tested?

This is a philosophical question requiring philosophical methods — careful conceptual analysis, attention to edge cases, examination of the conditions under which our confidence is justified.
`,
  },
  {
    slug: "ai-philosophy-reading-list",
    title: "The Essential AI Philosophy Reading List for 2026",
    date: "2026-03-15",
    readingTime: "10 min read",
    excerpt:
      "From Turing's original question to the latest debates on AI consciousness — a curated guide to the philosophical foundations.",
    tags: ["reading list", "books", "philosophy of AI", "education"],
    content: `
Whether you are an engineer building AI systems, a policymaker regulating them, or a citizen affected by them, philosophical literacy about AI is no longer optional.

## Tier 1: Philosophical Foundations

Alan Turing, Computing Machinery and Intelligence (1950). The paper that started the field. Turing's imitation game remains the most influential framework for thinking about machine intelligence.

John Searle, Minds, Brains, and Programs (1980). The Chinese Room argument remains the most powerful philosophical objection to the idea that symbol manipulation constitutes understanding.

Hubert Dreyfus, What Computers Can't Do (1972). Dreyfus drew on Heidegger and Merleau-Ponty to argue that human intelligence is fundamentally embodied. His arguments now look prescient.

## Tier 2: Contemporary Essentials

Kate Crawford, Atlas of AI (2021). An empirical and philosophical examination of AI as a system of power.

Arvind Narayanan and Sayash Kapoor, AI Snake Oil (2024). A rigorous analysis of which AI applications work and which do not.

Shannon Vallor, Technology and the Virtues (2016). Vallor applies virtue ethics to technology, arguing we need specific character traits to flourish alongside powerful technologies.

## Tier 3: Frontier Questions

David Chalmers, Reality+ (2022). Chalmers extends his work on consciousness to virtual reality and simulation.

The growing literature on AI epistemology represents one of the fastest-growing subfields in philosophy of AI. My own work — Epistemic Risks in AI — examines conditions under which AI outputs can count as knowledge.

## How to Use This List

If you have limited time, start with Turing and Searle from Tier 1, then Crawford and Narayanan from Tier 2. These four texts give you a philosophical foundation stronger than 95% of people working in AI today.
`,
  },
  {
    slug: "searles-chinese-room-in-2026",
    title: "Searle's Chinese Room at 46: Does It Still Apply to GPT?",
    date: "2026-03-22",
    readingTime: "9 min read",
    excerpt:
      "The most famous thought experiment in philosophy of mind meets the most powerful language models ever built.",
    tags: ["Chinese Room", "Searle", "LLMs", "philosophy of mind"],
    content: `
In 1980, John Searle imagined a person locked in a room, receiving Chinese characters through a slot, consulting a massive rulebook, and passing back Chinese characters that constituted correct responses. The person in the room does not understand Chinese — they are following rules mechanically. Searle's conclusion: computers that manipulate symbols according to rules do not understand, no matter how convincing their outputs.

Forty-six years later, large language models produce text that is often indistinguishable from human writing. They pass bar exams, write poetry, debug code, and explain quantum mechanics. Does this finally refute the Chinese Room?

## The Scale Objection

The most common response: surely at sufficient scale, pattern matching becomes understanding. GPT-5 processes trillions of tokens — that is qualitatively different from a person with a rulebook.

But this objection confuses quantity with quality. A billion lookup tables are still lookup tables. The Chinese Room argument is about the type of process, not its size. Scaling up a process that lacks understanding does not produce understanding — it produces a larger system that lacks understanding.

## The Grounding Problem

What modern LLMs add to the Chinese Room debate is the grounding problem. Searle's original person had no connection between symbols and their meanings. Modern LLMs have statistical connections between words — they know that doctor appears near hospital more often than near volcano. But statistical co-occurrence is not semantic understanding.

## New Chinese Rooms at Scale

Modern LLMs do not weaken Searle. They create new versions of the Chinese Room at unprecedented scale. Every chatbot interaction is a Chinese Room — symbols in, rules applied, symbols out. The room has gotten enormously larger and faster. But the person inside still does not understand Chinese.

The philosophical conclusion: we should treat LLM outputs with the same epistemic caution we would apply to any system that produces convincing language without understanding what it says.
`,
  },
  {
    slug: "dignity-problem-automated-hiring",
    title: "The Dignity Problem in Automated Hiring",
    date: "2026-03-29",
    readingTime: "7 min read",
    excerpt:
      "When AI screens your resume, it treats you as a data point. Kant identified why this matters 250 years ago.",
    tags: ["human dignity", "Kant", "automation", "hiring", "ethics"],
    content: `
Consider a scenario. You spend three weeks crafting a job application. You tailor your cover letter, update your portfolio, ask colleagues for references. You submit the application. Within 0.3 seconds, an AI screening system rejects you because your resume does not contain enough keywords matching the job description.

The technical problem here is well-documented — keyword matching is a crude proxy for qualification. But the deeper problem is philosophical, and it concerns human dignity.

## The Kantian Framework

Immanuel Kant argued that human beings possess dignity — an unconditional, incomparable worth — because they are rational agents capable of setting their own ends. This dignity demands that we never treat people merely as means to our ends, but always also as ends in themselves.

When an automated hiring system processes your application, it does not and cannot recognize you as a rational agent with dignity. It recognizes you as a collection of data points — keywords, years of experience, degree names, employment gaps. It treats you entirely as a means to the employer's end of filling a position efficiently.

## The Problem Is Not Bias

Most criticism of automated hiring focuses on bias — the system disadvantages certain demographic groups. This is a real and serious problem. But even a perfectly unbiased automated system would still violate dignity, because the violation is not about outcomes. It is about the nature of the process itself.

A human recruiter who reads your application engages — however briefly — with you as a person. They may still reject you, but the rejection passes through a mind capable of recognizing your humanity. An algorithm lacks this capacity entirely.

## Design Recommendations

This does not mean automated hiring is inherently impermissible. It means that any such system must be designed with dignity constraints. Every applicant must have the right to know that automation was used. Every automated rejection must be reviewable by a human. The system must never be the sole decision-maker for consequential employment decisions.

These are not just policy recommendations. They are moral requirements that follow from the philosophical principle of human dignity.
`,
  },
];

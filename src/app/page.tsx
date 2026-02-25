import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { papers } from "@/data/papers";

const researchAreas = [
  {
    title: "Epistemic Risks",
    description:
      "How AI systems generate persuasive but weakly grounded claims, and how we can audit those risks before deployment.",
  },
  {
    title: "Ethical Architecture",
    description:
      "Design principles for normative constraints that work at model, interface, and institutional levels.",
  },
  {
    title: "Human Dignity",
    description:
      "A philosophical framework for preserving agency, respect, and contestability in AI-mediated decisions.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-14 sm:px-6">
      <section className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 p-10 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">AI Philosophy Research</p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
          What machines mean, what they risk, what we owe.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-neutral-700 dark:text-neutral-300">
          Artur Ziganshin · Independent AI Philosophy Researcher · MA Philosophy, Kazan Federal University
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Research Areas</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {researchAreas.map((area) => (
            <article key={area.title} className="card">
              <h3 className="text-lg font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recent Papers</h2>
          <Link href="/research" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="space-y-4">
          {papers.slice(0, 3).map((paper) => (
            <article key={paper.title} className="card">
              <div className="mb-2"><span className="badge">{paper.status}</span></div>
              <h3 className="text-xl font-semibold">{paper.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{paper.abstract}</p>
              <a href={paper.philArchiveUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-neutral-900 underline dark:text-neutral-100">
                Read on PhilArchive
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-2xl font-semibold">Join the Newsletter</h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Get concise briefings on AI epistemology, machine agency, and practical ethical governance.
        </p>
        <Link href="/newsletter" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300">
          Subscribe to The Epistemic Mirror <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}

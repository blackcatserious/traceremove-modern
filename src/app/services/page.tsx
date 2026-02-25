import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulting & Speaking | Artur Ziganshin",
  description:
    "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.",
};

const services = [
  {
    title: "Epistemic Risk Assessment",
    price: "from $5,000",
    description:
      "A philosophical evaluation of your AI system's knowledge-production process. Where is it genuinely reliable? Where does it produce plausible-sounding outputs without epistemic grounding? Deliverable: detailed report with risk taxonomy, failure mode analysis, and mitigation recommendations.",
  },
  {
    title: "AI Ethics & Governance Review",
    price: "from $3,000",
    description:
      "Evaluation of your AI deployment against established ethical frameworks including consequentialist, deontological, and virtue ethics perspectives. Analysis of impacts on human dignity, autonomy, fairness, and consent. Alignment check with EU AI Act and emerging regulatory frameworks.",
  },
  {
    title: "Philosophical Foundations Workshop",
    price: "from $2,500",
    description:
      "Half-day or full-day workshop for technical teams. What knowledge is and why it matters for AI. The difference between accuracy and understanding. Ethical reasoning frameworks for AI design decisions. Building philosophical thinking into engineering culture.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1024px] space-y-10 px-4 py-14 sm:px-6">
      <header>
        <h1 className="text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Philosophical Clarity for AI Decisions</h1>
        <p className="mt-3 text-[#4d4d58] dark:text-[#d9d9de]">Consulting, speaking, and training for organizations navigating the ethical and epistemic challenges of artificial intelligence.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="card p-6">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-1 text-sm font-semibold text-[#ef5044]">{service.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#4d4d58] dark:text-[#d9d9de]">{service.description}</p>
          </article>
        ))}
      </div>

      <section className="card p-6">
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Available for keynotes, panels, and conference presentations</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>The Epistemic Crisis of AI: When Machines Sound Right but Don't Know</li>
          <li>Human Dignity in the Age of Automation</li>
          <li>What Language Models Don't Understand</li>
          <li>Building Ethical AI from Philosophical Foundations</li>
        </ul>
        <p className="mt-4 text-sm font-semibold">Fee: $2,000–$5,000 depending on event</p>
      </section>

      <section className="rounded-2xl border border-black/10 bg-[#f5f3ee] p-6 dark:border-white/10 dark:bg-[#1a1a1f]">
        <h3 className="text-2xl font-semibold">Ready to bring philosophical rigor to your AI decisions?</h3>
        <Link href="/contact" className="mt-4 inline-block rounded-full bg-[#ef5044] px-5 py-2.5 text-sm font-semibold text-white">Get in Touch →</Link>
      </section>
    </div>
  );
}

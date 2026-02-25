import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Consulting & Speaking",
  description:
    "AI philosophy consulting, epistemic risk assessment, ethics review, and speaking engagements. Bringing philosophical rigor to AI decisions.",
  openGraph: {
    title: "Consulting & Speaking | Artur Ziganshin",
    url: "https://traceremove.dev/services",
  },
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
    <div>
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <span className="overline">Consulting</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Philosophical Clarity for AI Decisions</h1>
        <p className="mt-4 text-lg text-[#8a8a97] max-w-2xl">
          Consulting, speaking, and training for organizations navigating the ethical and epistemic challenges of artificial intelligence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <article className="card">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-1 text-sm font-semibold text-[#ef5044]">{service.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#b0b0bc]">{service.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <section className="card">
            <h2 className="text-3xl">Available for keynotes, panels, and conference presentations</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#b0b0bc]">
              <li>The Epistemic Crisis of AI: When Machines Sound Right but Don't Know</li>
              <li>Human Dignity in the Age of Automation</li>
              <li>What Language Models Don't Understand</li>
              <li>Building Ethical AI from Philosophical Foundations</li>
            </ul>
            <p className="mt-4 text-sm font-semibold">Fee: $2,000–$5,000 depending on event</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="card">
            <h3 className="text-2xl font-semibold">Ready to bring philosophical rigor to your AI decisions?</h3>
            <Link href="/contact" className="mt-4 btn-primary">Get in Touch →</Link>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}

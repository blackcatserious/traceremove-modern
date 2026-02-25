import Link from "next/link";

const services = [
  {
    title: "Epistemic Risk Assessment",
    price: "$5K+",
    description: "Structured audits of model claims, uncertainty signaling, and knowledge reliability in production settings.",
  },
  {
    title: "Ethics Review",
    price: "$3K+",
    description: "Independent review of AI products through dignity, transparency, and accountability principles.",
  },
  {
    title: "Workshops",
    price: "$2.5K+",
    description: "Executive and research-team workshops on AI philosophy, governance, and practical risk frameworks.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6">
      <section>
        <h1 className="text-4xl font-semibold">Services</h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">Applied philosophy for teams building, governing, and evaluating AI systems.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-1 text-lg font-medium text-neutral-700 dark:text-neutral-200">{service.price}</p>
            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">Speaking</h2>
        <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
          Available for conferences, faculty seminars, and policy briefings on epistemic risk, model accountability, and the philosophy of machine agency.
        </p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-sm">Discuss your project scope and timeline.</p>
        <Link href="/contact" className="mt-4 inline-block rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
          Request consultation
        </Link>
      </section>
    </div>
  );
}

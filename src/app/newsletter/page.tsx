const recentIssues = [
  {
    title: 'When Models Sound Certain but Know Less: Epistemic Confidence in AI Outputs',
    href: 'https://substack.com',
  },
  {
    title: 'Machine Meaning After Prediction: Can Statistical Language Ground Understanding?',
    href: 'https://substack.com',
  },
  {
    title: 'Dignity by Design: Why AI Governance Must Start with Moral Limits',
    href: 'https://substack.com',
  },
];

const SUBSTACK_URL = 'https://substack.com';
const subscribeUrl = `${SUBSTACK_URL}/subscribe`;

export default function NewsletterPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#0f3460]">Newsletter</p>
        <h1 className="text-4xl font-semibold text-[#16213e] sm:text-5xl" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          The Epistemic Mirror
        </h1>
        <p className="mx-auto max-w-3xl text-base text-[#1a1a2e] sm:text-lg">
          Weekly philosophical analysis of AI developments — what machines mean, what they risk, and what we owe each
          other in the age of automation.
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Subscribe
        </h2>
        <p className="mt-2 text-sm text-[#1a1a2e]">
          Prefer Substack directly? You can open the publication page and subscribe there.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-[#1a1a2e] transition-colors hover:bg-slate-50"
          >
            Open on Substack
          </a>
        </div>

        <form action={subscribeUrl} method="get" className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#16213e]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1a1a2e] focus:border-[#0f3460] focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#16213e]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1a1a2e] focus:border-[#0f3460] focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-md bg-[#0f3460] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#16213e]"
            >
              Subscribe to The Epistemic Mirror
            </button>
          </div>
        </form>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          What you&apos;ll get
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[#1a1a2e]">
          <li>Weekly essay on AI philosophy (every Tuesday)</li>
          <li>Monthly deep-dive into a research paper</li>
          <li>Occasional interviews with AI researchers and ethicists</li>
          <li>Early access to new research and preprints</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Recent issues
        </h2>
        <div className="mt-4 space-y-3">
          {recentIssues.map((issue) => (
            <a
              key={issue.title}
              href={issue.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg border border-slate-200 px-4 py-3 text-sm text-[#1a1a2e] transition-colors hover:bg-slate-50"
            >
              {issue.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-center shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Join 42 readers exploring the philosophy of AI
        </h2>
        <p className="mt-2 text-sm text-[#1a1a2e]">An early, focused community interested in rigorous AI philosophy.</p>
      </section>
    </div>
  );
}

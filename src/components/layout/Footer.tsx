import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200/70 bg-paper-cream/70 py-20 dark:border-ink-800 dark:bg-ink-950/60">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <h3 className="font-display text-2xl text-ink-900 dark:text-paper-white">About</h3>
            <p className="mt-4 max-w-xs text-body-sm text-ink-700 dark:text-ink-300">
              Artur Ziganshin researches the philosophical limits and responsibilities of AI systems in social life.
            </p>
            <p className="mt-3 text-caption uppercase text-ink-500 dark:text-ink-400">Kazan Federal University</p>
          </section>

          <section>
            <h3 className="font-display text-2xl text-ink-900 dark:text-paper-white">Research</h3>
            <ul className="mt-4 space-y-2 text-body-sm text-ink-700 dark:text-ink-300">
              <li><Link href="/research" className="hover-underline">Research</Link></li>
              <li><Link href="/articles" className="hover-underline">Articles</Link></li>
              <li><Link href="/cv" className="hover-underline">CV</Link></li>
              <li><a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noreferrer" className="hover-underline">PhilArchive</a></li>
              <li><a href="https://arxiv.org" target="_blank" rel="noreferrer" className="hover-underline">arXiv</a></li>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-2xl text-ink-900 dark:text-paper-white">Connect</h3>
            <ul className="mt-4 space-y-2 text-body-sm text-ink-700 dark:text-ink-300">
              <li><a href="mailto:artur@traceremove.dev" className="hover-underline">Email</a></li>
              <li><a href="#" className="hover-underline">LinkedIn</a></li>
              <li><a href="#" className="hover-underline">Twitter/X</a></li>
              <li><a href="https://independent.academia.edu/ArturZiganshin" target="_blank" rel="noreferrer" className="hover-underline">Academia.edu</a></li>
              <li><a href="https://orcid.org/0009-0003-8406-9303" target="_blank" rel="noreferrer" className="hover-underline">ORCID</a></li>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-2xl text-ink-900 dark:text-paper-white">Newsletter</h3>
            <p className="mt-4 text-body-sm text-ink-700 dark:text-ink-300">The Epistemic Mirror, for weekly philosophical analysis.</p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-ink-200 bg-white/80 px-4 py-2 text-sm text-ink-800 placeholder:text-ink-400 focus:border-accent-400 focus:outline-none dark:border-ink-700 dark:bg-ink-900/80 dark:text-paper-white"
              />
              <button
                type="submit"
                className="rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
              >
                Join
              </button>
            </form>
          </section>
        </div>

        <div className="editorial-hr" />

        <div className="flex flex-col justify-between gap-3 text-body-sm text-ink-600 dark:text-ink-300 sm:flex-row">
          <p>© 2026 Artur Ziganshin</p>
          <p>Built for philosophical clarity</p>
        </div>

        <p className="mt-6 max-w-content text-body-sm text-ink-500 dark:text-ink-400">
          Independent AI philosophy research. No affiliation claims. All papers verified on PhilArchive.
        </p>
      </div>
    </footer>
  );
}

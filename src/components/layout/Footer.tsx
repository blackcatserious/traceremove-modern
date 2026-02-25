export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f3ee]/80 py-16 dark:border-white/10 dark:bg-[#131316]/75">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5e5e6c] dark:text-[#b8b8c1]">Research</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/research" className="hover:underline">Research</a></li>
            <li><a href="/articles" className="hover:underline">Articles</a></li>
            <li><a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noreferrer" className="hover:underline">Papers on PhilArchive</a></li>
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5e5e6c] dark:text-[#b8b8c1]">Connect</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:artur@traceremove.dev" className="hover:underline">Email</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://orcid.org/0009-0003-8406-9303" target="_blank" rel="noreferrer" className="hover:underline">ORCID</a></li>
            <li><a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noreferrer" className="hover:underline">PhilArchive</a></li>
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5e5e6c] dark:text-[#b8b8c1]">Newsletter</h3>
          <p className="mt-4 text-sm">The Epistemic Mirror</p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full border border-black/15 bg-white/90 px-4 py-2 text-sm dark:border-white/15 dark:bg-[#1c1c22]"
            />
            <button type="button" className="rounded-full bg-[#ef5044] px-4 py-2 text-sm font-semibold text-white">Join</button>
          </form>
        </section>
      </div>

      <div className="mx-auto mt-10 max-w-[1280px] border-t border-black/10 px-4 pt-5 text-sm text-[#5e5e6c] dark:border-white/10 dark:text-[#b8b8c1] sm:px-6 lg:px-8">
        © 2026 Artur Ziganshin · Master of Philosophy · PhD of Philosophy
      </div>
    </footer>
  );
}

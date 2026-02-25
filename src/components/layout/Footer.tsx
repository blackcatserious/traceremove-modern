import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p
              className="text-lg text-white italic"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              traceremove
            </p>
            <p className="text-sm text-[#6a6a78] mt-3 leading-relaxed max-w-[200px]">
              Philosophical research on what AI means, risks, and owes.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5e5e6c] mb-4">Research</h4>
            <Link href="/research" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">All Papers</Link>
            <a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noreferrer" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">PhilArchive Profile</a>
            <a href="https://orcid.org/0009-0003-8406-9303" target="_blank" rel="noreferrer" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">ORCID</a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5e5e6c] mb-4">Writing</h4>
            <Link href="/articles" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">Articles</Link>
            <Link href="/newsletter" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">The Epistemic Mirror</Link>
            <Link href="/articles/ai-philosophy-reading-list" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">Reading List</Link>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5e5e6c] mb-4">Connect</h4>
            <a href="mailto:artur@traceremove.dev" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">LinkedIn</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-sm text-[#8a8a97] hover:text-white link-underline block py-1">Twitter / X</a>
          </div>
        </div>

        <div className="border-t border-white/[0.04] my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-xs text-[#4a4a58]">© 2026 Artur Ziganshin</span>
          <span className="text-xs text-[#4a4a58]">Master of Philosophy · PhD of Philosophy</span>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { AtSign, BookText, GraduationCap, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm text-[#1a1a2e] dark:text-slate-300">
            © 2026 Arthur Ziganshin. Independent AI Philosophy Research.
          </p>
          <div className="mt-3 hidden items-center gap-2 text-xs text-slate-500 sm:flex">
            <Image src="/brand/black-cat-solid.svg?v=2" alt="Traceremove mark" width={18} height={18} />
            <span>Traceremove</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-[#16213e] dark:text-slate-100">Quick links</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/research" className="text-[#0f3460] hover:text-[#e94560] dark:text-sky-300 dark:hover:text-sky-200">Research</Link>
            <Link href="/articles" className="text-[#0f3460] hover:text-[#e94560] dark:text-sky-300 dark:hover:text-sky-200">Articles</Link>
            <Link href="/newsletter" className="text-[#0f3460] hover:text-[#e94560] dark:text-sky-300 dark:hover:text-sky-200">Newsletter</Link>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-[#16213e] dark:text-slate-100">Connect</p>
            <div className="mt-2 flex items-center gap-3">
              <a href="https://scholar.google.com/" target="_blank" rel="noreferrer" aria-label="Google Scholar" className="rounded-full border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"><GraduationCap className="h-4 w-4" /></a>
              <a href="https://philarchive.org/" target="_blank" rel="noreferrer" aria-label="PhilArchive" className="rounded-full border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"><BookText className="h-4 w-4" /></a>
              <a href="https://linkedin.com/in/arthur-ziganshin" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"><Linkedin className="h-4 w-4" /></a>
              <a href="https://twitter.com/traceremove" target="_blank" rel="noreferrer" aria-label="Twitter/X" className="rounded-full border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"><Twitter className="h-4 w-4" /></a>
              <a href="mailto:artur@traceremove.com" aria-label="Email" className="rounded-full border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"><AtSign className="h-4 w-4" /></a>
            </div>
          </div>

          <form action="https://substack.com/subscribe" method="get" className="flex gap-2">
            <input type="email" name="email" required placeholder="Email for newsletter" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1a1a2e] focus:border-[#0f3460] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
            <button type="submit" className="rounded-md bg-[#0f3460] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16213e]">Join</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

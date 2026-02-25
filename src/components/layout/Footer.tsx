import Link from "next/link";
import { Linkedin, Mail, Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">About</h3>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            Artur Ziganshin is an independent researcher in AI philosophy focusing on epistemic reliability, ethical architecture, and dignitary constraints for machine systems.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/research" className="hover:underline">Research</Link></li>
            <li><Link href="/articles" className="hover:underline">Articles</Link></li>
            <li><Link href="/cv" className="hover:underline">CV</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Connect</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex items-center gap-2"><Mail size={14} />hello@traceremove.com</li>
            <li className="flex items-center gap-2"><Linkedin size={14} />linkedin.com/in/artur-ziganshin</li>
            <li className="flex items-center gap-2"><Rss size={14} />The Epistemic Mirror newsletter</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 px-4 py-4 text-center text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        © {new Date().getFullYear()} Artur Ziganshin. All rights reserved.
      </div>
    </footer>
  );
}

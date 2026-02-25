'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const DISMISS_KEY = 'traceremove-newsletter-banner-dismissed';

export default function NewsletterFloatingBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(DISMISS_KEY) === '1';
    if (stored) {
      setDismissed(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 30000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible || dismissed) {
    return null;
  }

  return (
    <aside className="fixed inset-x-4 bottom-4 z-[80] mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:inset-x-6">
      <button
        type="button"
        onClick={() => {
          setDismissed(true);
          window.localStorage.setItem(DISMISS_KEY, '1');
        }}
        className="absolute right-3 top-3 rounded-full p-1 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
        aria-label="Dismiss newsletter banner"
      >
        <X className="h-4 w-4" />
      </button>

      <p className="pr-8 text-sm font-medium text-[#16213e]">The Epistemic Mirror</p>
      <p className="mt-1 text-sm text-[#1a1a2e]">
        Weekly philosophical analysis of AI developments. Join 42 readers exploring what machine outputs mean and what they risk.
      </p>

      <div className="mt-3 flex flex-wrap gap-3">
        <Link
          href="/newsletter"
          className="inline-flex items-center rounded-md bg-[#0f3460] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#16213e]"
        >
          Explore newsletter
        </Link>
        <a
          href="https://substack.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-[#1a1a2e] transition-colors hover:bg-slate-50"
        >
          Subscribe on Substack
        </a>
      </div>
    </aside>
  );
}

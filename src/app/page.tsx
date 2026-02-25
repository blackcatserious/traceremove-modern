'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Mail, Moon, Sun } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
});

type ExternalLink = {
  label: string;
  href: string;
};

const profileLinks: ExternalLink[] = [
  { label: 'Google Scholar', href: 'https://scholar.google.com' },
  { label: 'PhilArchive', href: 'https://philarchive.org' },
  { label: 'Academia.edu', href: 'https://www.academia.edu' },
  { label: 'ORCID', href: 'https://orcid.org' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Email', href: 'mailto:contact@traceremove.dev' },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () => ({
      background: isDarkMode ? 'bg-[#111827]' : 'bg-white',
      surface: isDarkMode ? 'bg-[#1f2937]' : 'bg-[#f9fafb]',
      textPrimary: isDarkMode ? 'text-[#f3f4f6]' : 'text-[#1a1a2e]',
      textSecondary: isDarkMode ? 'text-[#d1d5db]' : 'text-[#1a1a2e]/80',
      heading: isDarkMode ? 'text-[#c7d2fe]' : 'text-[#16213e]',
      accent: isDarkMode ? 'text-[#93c5fd]' : 'text-[#0f3460]',
      border: isDarkMode ? 'border-[#334155]' : 'border-[#dbe2ef]',
      button:
        'bg-[#0f3460] text-white hover:bg-[#0f3460]/90 focus-visible:ring-[#e94560]/50',
    }),
    [isDarkMode]
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme.background}`}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="mb-14 flex items-center justify-between">
          <p className={`text-sm tracking-[0.18em] uppercase ${theme.accent}`}>traceremove.dev</p>
          <button
            type="button"
            onClick={() => setIsDarkMode((prev) => !prev)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 ${theme.border} ${theme.textPrimary}`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
        </header>

        <main className="space-y-16">
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h1 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl ${theme.heading}`}>
                Artur Ziganshin
              </h1>
              <h2 className={`${playfair.className} text-2xl sm:text-3xl ${theme.accent}`}>
                Independent Researcher in AI Philosophy
              </h2>
              <p className={`max-w-3xl text-lg leading-relaxed ${theme.textSecondary}`}>
                Investigating epistemic risks, ethical architecture, and the philosophical foundations
                of machine intelligence.
              </p>
              <p className={`text-sm sm:text-base ${theme.textPrimary}`}>
                MA, BA Philosophy, Kazan Federal University | Founder, Kazan Philosophical Society
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className={`rounded-full border px-3 py-1.5 text-sm transition-colors hover:text-[#e94560] ${theme.border} ${theme.textPrimary}`}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              href="/research"
              className={`inline-flex items-center rounded-md px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ${theme.button}`}
            >
              Read Latest Research →
            </motion.a>
          </section>

          <section className={`rounded-2xl border p-6 sm:p-8 ${theme.border} ${theme.surface}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 lg:grid-cols-[220px_1fr]"
            >
              <div className="flex justify-start lg:justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-[#0f3460]/40 bg-white/50 text-center text-xs font-medium text-[#0f3460]">
                  Photo
                  <br />
                  Placeholder
                </div>
              </div>

              <div className="space-y-5">
                <h3 className={`${playfair.className} text-3xl ${theme.heading}`}>About</h3>
                <p className={`leading-relaxed ${theme.textSecondary}`}>
                  My academic training in philosophy at Kazan Federal University, where I completed both
                  BA and MA degrees, shaped my interest in how conceptual analysis can inform practical
                  technology governance.
                </p>
                <p className={`leading-relaxed ${theme.textSecondary}`}>
                  My research focuses on epistemic risks in AI, the philosophy of language models, and
                  normative questions about preserving human dignity within automated systems and
                  decision-making infrastructures.
                </p>
                <p className={`leading-relaxed ${theme.textSecondary}`}>
                  Current projects examine interpretability as a philosophical problem, standards for
                  responsible model deployment, and interdisciplinary methods that connect ethics,
                  social theory, and technical AI research.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e94560]/10 px-4 py-2 text-sm">
                  <Mail size={14} className="text-[#e94560]" />
                  <span className={theme.textPrimary}>
                    Currently seeking PhD opportunities in AI philosophy and ethics
                  </span>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}

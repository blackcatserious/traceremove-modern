'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const profileLinks = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/' },
  { label: 'PhilArchive', href: 'https://philarchive.org/' },
  { label: 'Academia.edu', href: 'https://www.academia.edu/' },
  { label: 'ORCID', href: 'https://orcid.org/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arthur-ziganshin' },
  { label: 'Email', href: 'mailto:artur@traceremove.com' },
];

const aboutParagraphs = [
  'Artur Ziganshin holds an MA in Philosophy from Kazan Federal University and has developed his work at the intersection of analytic philosophy, ethics, and artificial intelligence. His academic training grounds his approach in conceptual precision and critical method.',
  'His current research examines epistemic risks in AI systems, the philosophy of language models, and the relationship between automation and human dignity. He focuses on how machine-generated knowledge claims are interpreted, trusted, and institutionalized in social settings.',
  'Ongoing projects include frameworks for evaluating epistemic reliability in generative systems, ethical design criteria for language-model deployment, and philosophical analysis of agency, responsibility, and value alignment in human-machine collaboration.',
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      darkMode
        ? {
            page: 'bg-[#0f172a] text-slate-100',
            surface: 'bg-[#111827] border-slate-700',
            heading: 'text-slate-100',
            body: 'text-slate-300',
            muted: 'text-slate-400',
            accent: 'text-[#7dd3fc]',
            link: 'text-[#93c5fd] hover:text-[#bfdbfe]',
            highlight: 'text-[#fb7185]',
            button: 'bg-[#0f3460] text-white hover:bg-[#1d4d7a]',
          }
        : {
            page: 'bg-white text-[#1a1a2e]',
            surface: 'bg-white border-slate-200',
            heading: 'text-[#16213e]',
            body: 'text-[#1a1a2e]',
            muted: 'text-slate-600',
            accent: 'text-[#0f3460]',
            link: 'text-[#0f3460] hover:text-[#e94560]',
            highlight: 'text-[#e94560]',
            button: 'bg-[#0f3460] text-white hover:bg-[#16213e]',
          },
    [darkMode],
  );

  return (
    <div className={`-mt-24 min-h-screen w-full ${theme.page}`}>
      <div className="mx-auto w-full max-w-5xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <header className="mb-14 flex items-center justify-between border-b border-slate-200 pb-5 dark:border-slate-700">
          <p className={`text-sm ${theme.muted}`}>Personal research website</p>
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
              darkMode
                ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700'
                : 'border-slate-300 bg-white text-[#16213e] hover:bg-slate-50'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </header>

        <section className="space-y-7 pb-14">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`text-4xl font-semibold sm:text-5xl ${theme.heading}`}
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Artur Ziganshin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className={`text-lg ${theme.accent}`}
          >
            Independent Researcher in AI Philosophy
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className={`max-w-3xl text-base leading-relaxed ${theme.body}`}
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Investigating epistemic risks, ethical architecture, and the philosophical foundations of machine intelligence.
          </motion.p>

          <p className={`text-sm ${theme.muted}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            MA Philosophy, Kazan Federal University | Founder, Kazan Philosophical Society
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
            {profileLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className={`text-sm underline underline-offset-4 transition-colors ${theme.link}`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/research"
              className={`inline-flex rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${theme.button}`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Read Latest Research →
            </Link>
          </div>
        </section>

        <section className={`rounded-2xl border p-6 sm:p-8 ${theme.surface}`}>
          <h2
            className={`mb-6 text-2xl font-semibold ${theme.heading}`}
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            About
          </h2>

          <div className="grid gap-8 md:grid-cols-[140px_1fr] md:items-start">
            <div className="flex justify-start md:pt-1">
              <div
                className={`h-28 w-28 rounded-full border ${
                  darkMode ? 'border-slate-600 bg-slate-700' : 'border-slate-300 bg-slate-100'
                }`}
                aria-label="Profile photo placeholder"
              />
            </div>

            <div className="space-y-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {aboutParagraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph.slice(0, 24)}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className={`text-sm leading-7 sm:text-base ${theme.body}`}
                >
                  {paragraph}
                </motion.p>
              ))}

              <p className={`pt-2 text-sm font-medium sm:text-base ${theme.highlight}`}>
                Currently seeking PhD opportunities in AI philosophy and ethics.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

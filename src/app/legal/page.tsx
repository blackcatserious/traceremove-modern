'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, ScrollText, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const documents = [
  {
    title: 'Privacy policy',
    description: 'How Traceremove collects, safeguards, and processes data across research programmes, atlas tooling, and community engagements.',
    href: '/legal/privacy-policy'
  },
  {
    title: 'Ethics statement',
    description: 'Our commitments to fairness, transparency, and accountability when designing, deploying, and governing intelligent systems.',
    href: '/legal/ethics-statement'
  },
  {
    title: 'Site map',
    description: 'Navigate every cinematic blueprint, tool, and research corridor available across the Traceremove platform.',
    href: '/site-map'
  }
];

export default function LegalIndex() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,26,48,0.9)_45%,rgba(17,24,39,0.95)_100%)]" />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.55, scale: 1 } : { opacity: 0.85, scale: 1, rotate: [0, 8, -6, 0] }}
            transition={{ duration: prefersReducedMotion ? 1.2 : 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/35 via-sky-400/25 to-emerald-400/25 blur-3xl"
          />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.4, scale: 1 } : { opacity: 0.65, scale: 1, rotate: [0, -10, 8, 0] }}
            transition={{ duration: prefersReducedMotion ? 1.4 : 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -bottom-28 right-6 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/25 to-cyan-400/25 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
            <Sparkles className="h-5 w-5 text-indigo-200" />
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Governance & stewardship</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
          </div>
          <div className="mt-8 space-y-6">
            <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Transparency is a design principle.
            </h1>
            <p className="text-lg text-white/75">
              Explore the policies, commitments, and navigational resources that keep Traceremove’s research and engagements accountable to global partners.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-slate-950/85 py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(14,165,233,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {documents.map((document) => (
              <motion.div
                key={document.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  {document.title.includes('Privacy') ? <ShieldCheck className="h-6 w-6 text-white/70" /> : <ScrollText className="h-6 w-6 text-white/70" />}
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{document.title}</h2>
                <p className="mt-2 text-sm text-white/70">{document.description}</p>
                <Link href={document.href} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:text-white">
                  Open document
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

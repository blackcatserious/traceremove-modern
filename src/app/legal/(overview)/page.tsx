'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, ScrollText, ArrowRight } from 'lucide-react';
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
  return (
    <>
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
    </>
  );
}

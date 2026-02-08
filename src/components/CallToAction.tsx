'use client';

import Link from 'next/link';
import { Sparkles, UserPlus, CalendarCheck } from 'lucide-react';

import PremiumButton from '@/components/PremiumButton';

export default function CallToAction() {
  return (
    <section className="relative py-20" aria-label="Primary calls to action">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-indigo-950/70" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-[32px] border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-2xl sm:px-10 lg:px-14">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Next steps</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to collaborate on responsible AI?
          </h2>
          <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
            Subscribe for updates, join upcoming research programmes, or schedule a consultation to plan a responsible AI
            roadmap with the Traceremove team.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <PremiumButton href="/contact?intent=subscribe" icon={Sparkles} iconPosition="left" size="lg">
            Subscribe to updates
          </PremiumButton>
          <PremiumButton
            href="/contact?intent=research"
            variant="secondary"
            icon={UserPlus}
            iconPosition="left"
            size="lg"
          >
            Join research programmes
          </PremiumButton>
          <Link
            href="/contact?intent=consultation"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:px-7 sm:py-3.5"
          >
            <CalendarCheck className="h-4 w-4" />
            Request a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

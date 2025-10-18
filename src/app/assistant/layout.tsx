import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import BackgroundLayers from '@/components/BackgroundLayers';

export const metadata: Metadata = {
  title: 'Traceremove Assistant — Traceremove Research',
  description:
    'Converse with the Traceremove assistant to explore research blueprints, ethical guardrails, and operational guidance.',
};

export default function AssistantLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundLayers variant="assistant" className="opacity-60 mix-blend-screen" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_78%_20%,rgba(129,140,248,0.18),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.95)_0%,rgba(10,21,38,0.92)_52%,rgba(15,23,42,0.9)_100%)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

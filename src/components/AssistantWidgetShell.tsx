'use client';

import nextDynamic from 'next/dynamic';

const AskTraceremoveAIWidget = nextDynamic(() => import('./AskTraceremoveAI'), {
  ssr: false,
  loading: () => null,
});

export default function AssistantWidgetShell({ compact = true }: { compact?: boolean }) {
  return <AskTraceremoveAIWidget compact={compact} />;
}

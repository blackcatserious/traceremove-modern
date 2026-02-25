import type { ReactNode } from 'react';

type CalloutVariant = 'info' | 'warning' | 'question';

const styles: Record<CalloutVariant, string> = {
  info: 'border-blue-200 bg-blue-50 text-blue-900',
  warning: 'border-amber-200 bg-amber-50 text-amber-900',
  question: 'border-violet-200 bg-violet-50 text-violet-900',
};

export default function Callout({
  variant = 'info',
  children,
}: {
  variant?: CalloutVariant;
  children: ReactNode;
}) {
  return <div className={`my-6 rounded-xl border px-4 py-3 ${styles[variant]}`}>{children}</div>;
}

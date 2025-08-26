import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools — Traceremove Research',
  description: 'Utilities and tools developed at Traceremove Research for AI research and engineering.',
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

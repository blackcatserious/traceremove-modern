import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Artur Ziganshin',
  description: 'Profile of Artur Ziganshin: AI systems architect focused on AI ethics, privacy, and responsible AI.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

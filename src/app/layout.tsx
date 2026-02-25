import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';

import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://traceremove.dev'),
  title: 'Arthur Ziganshin — AI Philosophy Research | Traceremove',
  description:
    'Independent research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.',
  openGraph: {
    type: 'website',
    url: 'https://traceremove.dev',
    title: 'Arthur Ziganshin — AI Philosophy Research | Traceremove',
    description:
      'Independent research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.',
    images: [{ url: '/og-image', width: 1200, height: 630, alt: 'Traceremove OG image' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Ziganshin — AI Philosophy Research | Traceremove',
    description:
      'Independent research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.',
    images: ['/og-image'],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arthur Ziganshin',
  jobTitle: 'Independent Researcher in AI Philosophy',
  url: 'https://traceremove.dev',
  description:
    'Independent research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.',
  sameAs: [
    'https://scholar.google.com/',
    'https://philarchive.org/',
    'https://linkedin.com/in/arthur-ziganshin',
    'https://twitter.com/traceremove',
  ],
  knowsAbout: [
    'AI philosophy',
    'epistemic risks in AI',
    'ethical architecture',
    'language models',
    'AI governance',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-white pt-20 text-[#1a1a2e] antialiased dark:bg-slate-950 dark:text-slate-100`}>
        <Navigation />
        <main>{children}</main>
        <Footer />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}

        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
          <Script
            defer
            src="https://umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}

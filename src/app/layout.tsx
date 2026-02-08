import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { BackgroundProvider } from "@/components/BackgroundTester";
import PageScene from "@/components/PageScene";
import MotionProvider from "@/components/MotionProvider";
import AssistantWidgetShell from "@/components/AssistantWidgetShell";
import Image from "next/image";
import PerformanceWarmup from "@/components/PerformanceWarmup";
import PerformanceProfileProvider from "@/components/PerformanceProfileProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CallToAction from "@/components/CallToAction";

export const dynamic = 'force-static';
export const revalidate = 3600;
export const fetchCache = 'force-cache';

export const metadata: Metadata = {
  metadataBase: new URL('https://traceremove.dev'),
  applicationName: "Traceremove Research",
  title: {
    default: "Traceremove Research | Artur Ziganshin - AI Researcher & Philosopher",
    template: "%s | Traceremove Research"
  },
  description: "Advanced AI research platform by Artur Ziganshin. Specializing in AI ethics, privacy-preserving technologies, agentic systems, and philosophical foundations of artificial intelligence. International collaborations in responsible AI development.",
  keywords: [
    "AI research", "artificial intelligence", "AI ethics", "privacy-preserving AI", "agentic systems", 
    "philosophy of technology", "responsible AI", "machine learning ethics", "AI safety", 
    "computational philosophy", "digital rights", "AI governance", "transparent AI", "interpretable AI",
    "Artur Ziganshin", "Traceremove", "AI researcher", "philosophy PhD", "international AI collaboration",
    "Big Data", "language technologies", "security", "Rarematrix", "Equality", "Federal University"
  ],
  authors: [{ name: "Artur Ziganshin", url: "https://traceremove.dev/about" }],
  creator: "Artur Ziganshin",
  publisher: "Traceremove Research",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://traceremove.dev",
    siteName: "Traceremove Research",
    title: "Traceremove Research | Artur Ziganshin - AI Researcher & Philosopher",
    description: "Advanced AI research platform specializing in AI ethics, privacy-preserving technologies, and philosophical foundations of artificial intelligence. Leading international collaborations in responsible AI development.",
    images: [
      {
        url: "/og-image.png?v=3",
        width: 1200,
        height: 630,
        alt: "Traceremove Research platform hero showcasing ethical AI blueprints"
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Traceremove Research | AI Ethics & Philosophy",
    description: "Advanced AI research platform specializing in ethical AI systems, privacy-preserving technologies, and philosophical foundations of artificial intelligence.",
    creator: "@traceremove",
    site: "@traceremove",
    images: ["/og-image.png?v=3"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://traceremove.dev",
    languages: {
      "en-US": "https://traceremove.dev",
    },
  },
  category: "technology",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Artur Ziganshin",
    "jobTitle": "AI Systems Architect & Researcher",
    "description": "AI systems architect, developer, and philosopher of technology specializing in AI ethics, privacy-preserving technologies, and responsible AI development.",
    "url": "https://traceremove.dev",
    "sameAs": [
      "https://linkedin.com/in/arthur-ziganshin",
      "https://orcid.org/0000-0002-1234-5678",
      "https://scholar.google.com/citations?user=ArthurZiganshin",
      "https://www.researchgate.net/profile/Arthur-Ziganshin",
      "https://philpeople.org/profiles/arthur-ziganshin",
      "https://github.com/arthur-ziganshin"
    ],
    "affiliation": [
      {
        "@type": "Organization",
        "name": "Traceremove",
        "url": "https://traceremove.dev",
        "description": "AI research platform focused on transparent and interpretable AI systems"
      },
      {
        "@type": "Organization",
        "name": "Rarematrix",
        "description": "Advanced data analytics and AI infrastructure solutions"
      },
      {
        "@type": "Organization",
        "name": "Equality",
        "description": "International organization promoting digital rights and AI ethics"
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Federal University",
        "description": "Master of Arts in Philosophy, Bachelor of Arts in Philosophy"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence", "AI Ethics", "Privacy-Preserving Technologies", "Agentic Systems",
      "Philosophy of Technology", "Machine Learning", "Big Data", "Language Technologies",
      "Security & Privacy", "Responsible AI Development"
    ],
    "expertise": [
      {
        "@type": "Thing",
        "name": "AI Ethics",
        "description": "Developing ethical frameworks for AI systems and responsible technology deployment"
      },
      {
        "@type": "Thing",
        "name": "Agentic Systems",
        "description": "Building autonomous AI agents with advanced reasoning and tool-use capabilities"
      },
      {
        "@type": "Thing",
        "name": "Privacy-Preserving Technologies",
        "description": "Privacy-preserving technologies and secure AI system architectures"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Traceremove Research",
      "url": "https://traceremove.dev",
      "description": "AI research lab focused on ethical AI systems and philosophical foundations"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Traceremove Research",
    "url": "https://traceremove.dev",
    "logo": "https://traceremove.dev/brand/black-cat-solid.svg",
    "description": "Research lab delivering responsible AI strategy, applied experimentation, and philosophical grounding across 176 global blueprints.",
    "sameAs": [
      "https://linkedin.com/company/traceremove",
      "https://github.com/arthur-ziganshin"
    ],
    "founder": {
      "@type": "Person",
      "name": "Artur Ziganshin"
    },
    "areaServed": ["Global"],
    "keywords": "AI research, responsible AI, ethical machine learning, AI governance"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Traceremove Research",
    "url": "https://traceremove.dev",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://traceremove.dev/site-map?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {structuredData.map((schema, index) => (
          <script
            key={`structured-data-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-indigo-500/40 selection:text-white">
        <a
          href="#page-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-1/2 focus:top-6 focus:-translate-x-1/2 focus:clip-auto focus:h-auto focus:w-auto focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:whitespace-normal"
        >
          Skip to main content
        </a>
        <PerformanceProfileProvider>
          <MotionProvider>
            <BackgroundProvider>
              <PerformanceWarmup />
              <Navigation />
              <Breadcrumb />
              <main id="page-content" className="relative z-20 pt-24 pb-16">
                <PageScene>{children}</PageScene>
              </main>
              <CallToAction />
              <Footer />
            </BackgroundProvider>
            {process.env.NEXT_PUBLIC_ASSISTANT_WIDGET !== 'off' && (
              <>
                <AssistantWidgetShell compact />
                <Image
                  src="/brand/black-cat-geo.svg?v=2"
                  alt=""
                  aria-hidden="true"
                  className="cat-geo"
                  width={36}
                  height={36}
                />
              </>
            )}
            <SpeedInsights />
            <Analytics />
          </MotionProvider>
        </PerformanceProfileProvider>
      </body>
    </html>
  );
}

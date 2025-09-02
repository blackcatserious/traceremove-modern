import type { Metadata } from "next";
import { Inter, JetBrains_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { BackgroundProvider } from "@/components/BackgroundTester";
import AskTraceremoveAI from "@/components/AskTraceremoveAI";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL('https://traceremove.dev'),
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
      
    ],
  },
  twitter: {
    card: "summary",
    title: "Traceremove Research | AI Ethics & Philosophy",
    description: "Advanced AI research platform specializing in ethical AI systems, privacy-preserving technologies, and philosophical foundations of artificial intelligence.",
    creator: "@traceremove",
    site: "@traceremove",
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
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${ibmPlexSans.variable} ${ibmPlexSerif.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <BackgroundProvider>
          <Navigation />
          <Breadcrumb />
          <main className="relative pt-24 pb-16 z-20">
            {children}
          </main>
          <Footer />
        </BackgroundProvider>
        {process.env.NEXT_PUBLIC_ASSISTANT_WIDGET !== 'off' && (
          <>
            <AskTraceremoveAI compact />
            <img src="/brand/black-cat-geo.svg?v=2" alt="" aria-hidden="true" className="cat-geo" />
          </>
        )}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { BackgroundProvider } from "@/components/BackgroundTester";
import VantaBackground from "@/components/VantaBackground";
import DynamicLabBackground from "@/components/DynamicLabBackground";

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


export const metadata: Metadata = {
  metadataBase: new URL('https://traceremove.dev'),
  title: {
    default: "TraceRemove — AI Research Laboratory & Platform",
    template: "%s | TraceRemove AI Lab"
  },
  description: "Advanced AI research laboratory focused on ethical AI development, machine learning innovation, and responsible artificial intelligence. Explore cutting-edge research, publications, and AI tools.",
  keywords: [
    "AI research", "artificial intelligence", "machine learning", "ethical AI", "AI laboratory", 
    "research platform", "AI innovation", "responsible AI", "AI ethics", "deep learning", 
    "neural networks", "AI development", "research publications", "AI tools", 
    "TraceRemove", "AI platform", "academic research", "AI methodology",
    "AI safety", "AI governance", "computational intelligence", "AI experiments"
  ],
  authors: [{ name: "Artur Ziganshin", url: "https://traceremove.dev/about" }],
  creator: "TraceRemove AI Research Lab",
  publisher: "TraceRemove AI Research Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://traceremove.dev",
    siteName: "TraceRemove AI Research Lab",
    title: "TraceRemove — AI Research Laboratory & Platform",
    description: "Advanced AI research laboratory focused on ethical AI development, machine learning innovation, and responsible artificial intelligence research.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TraceRemove - AI Research Laboratory",
        type: "image/png",
      },
      {
        url: "/og-image-square.png", 
        width: 1200,
        height: 1200,
        alt: "TraceRemove AI Research Lab Logo",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TraceRemove — AI Research Laboratory & Platform",
    description: "Advanced AI research laboratory focused on ethical AI development and machine learning innovation.",
    images: ["/twitter-image.png"],
    creator: "@traceremove_ai",
    site: "@traceremove_ai",
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
  category: "research",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ResearchOrganization",
              "name": "TraceRemove AI Research Lab",
              "alternateName": "TraceRemove — AI Research Laboratory & Platform",
              "description": "Advanced AI research laboratory focused on ethical AI development, machine learning innovation, and responsible artificial intelligence research.",
              "url": "https://traceremove.dev",
              "logo": "https://traceremove.dev/logo.png",
              "image": "https://traceremove.dev/og-image.png",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "research inquiries",
                  "availableLanguage": ["English"]
                }
              ],
              "sameAs": [
                "https://github.com/blackcatserious"
              ],
              "serviceType": [
                "AI Research",
                "Machine Learning Development",
                "Ethical AI Consulting",
                "Research Publications",
                "AI Tool Development",
                "Academic Collaboration"
              ],
              "areaServed": {
                "@type": "Place",
                "name": "Global"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Research Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Research & Development",
                      "description": "Cutting-edge artificial intelligence research and development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions",
                      "description": "Custom machine learning models and solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ethical AI Consulting",
                      "description": "Consulting on responsible and ethical AI development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Research Publications",
                      "description": "Academic research papers and publications in AI"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Tools & Platforms",
                      "description": "Development of AI tools and research platforms"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${ibmPlexSans.variable} ${ibmPlexSerif.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <BackgroundProvider>
          <VantaBackground variant="hero" />
          <DynamicLabBackground intensity="high" />
          <Navigation />
          <Breadcrumb />
          <main className="relative pt-24 pb-16 z-20 min-h-screen">
            <div className="container mx-auto px-6 lg:px-8 w-full">
              {children}
            </div>
          </main>
          <Footer />
        </BackgroundProvider>
      </body>
    </html>
  );
}

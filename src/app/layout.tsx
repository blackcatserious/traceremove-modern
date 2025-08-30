import type { Metadata } from "next";
import { Inter, JetBrains_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
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
  metadataBase: new URL('https://traceremove.com'),
  title: {
    default: "TraceRemove — AI Reputation Firewall",
    template: "%s | TraceRemove"
  },
  description: "Negative link removal, reputation management, AI monitoring and brand protection system. Professional ORM services, deindexing, legal support.",
  keywords: [
    "reputation management", "negative link removal", "ORM", "deindexing", "brand protection", 
    "reputation monitoring", "AI tools", "legal support", "online reputation", 
    "negative reviews", "SEO reputation", "crisis management", "reputation audit", 
    "TraceRemove", "search removal", "right to be forgotten", "GDPR",
    "reputation risks", "brand monitoring", "digital reputation", "internet reputation"
  ],
  authors: [{ name: "TraceRemove Team", url: "https://traceremove.com/about" }],
  creator: "TraceRemove",
  publisher: "TraceRemove",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://traceremove.com",
    siteName: "TraceRemove",
    title: "TraceRemove — AI Reputation Firewall",
    description: "Professional reputation management: negative link removal, deindexing, brand monitoring using AI technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TraceRemove - AI Reputation Firewall",
        type: "image/png",
      },
      {
        url: "/og-image-square.png", 
        width: 1200,
        height: 1200,
        alt: "TraceRemove Logo",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TraceRemove — AI Reputation Firewall",
    description: "Professional reputation management and brand protection using AI technologies.",
    images: ["/twitter-image.png"],
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
    canonical: "https://traceremove.com",
    languages: {
      "ru-RU": "https://traceremove.com",
      "en-US": "https://traceremove.com/en",
    },
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
              "@type": "Organization",
              "name": "TraceRemove",
              "alternateName": "TraceRemove — AI Reputation Firewall",
              "description": "Professional reputation management services: negative link removal, deindexing, brand monitoring using AI technologies.",
              "url": "https://traceremove.com",
              "logo": "https://traceremove.com/logo.png",
              "image": "https://traceremove.com/og-image.png",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RU"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+7-XXX-XXX-XXXX",
                  "contactType": "customer service",
                  "availableLanguage": ["Russian", "English"]
                }
              ],
              "sameAs": [
                "https://t.me/traceremove",
                "https://wa.me/79XXXXXXXXX"
              ],
              "serviceType": [
                "Online Reputation Management",
                "Negative Link Removal",
                "Search Engine Deindexing",
                "Brand Monitoring",
                "Legal Support",
                "AI-powered Reputation Tools"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Russia"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Reputation Management Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ORM - Online Reputation Management",
                      "description": "Comprehensive online reputation management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Deindex - Search Removal",
                      "description": "Deindexing negative materials from search engines"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Legal Support",
                      "description": "Legal support for reputation issues"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Monitoring",
                      "description": "Reputation and brand monitoring on the internet"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Tools",
                      "description": "AI tools for reputation management"
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
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
              {children}
            </div>
          </main>
          <Footer />
          <ChatWidget />
        </BackgroundProvider>
      </body>
    </html>
  );
}

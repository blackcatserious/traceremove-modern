import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://traceremove.dev"),
  title: {
    default: "Artur Ziganshin — AI Philosophy Research",
    template: "%s | Artur Ziganshin",
  },
  description:
    "Artur Ziganshin — independent AI philosophy researcher. Epistemic risk assessment, ethical AI architecture, and philosophical frameworks for responsible artificial intelligence. Master of Philosophy, PhD of Philosophy.",
  keywords: [
    "AI philosophy",
    "epistemic risks",
    "AI ethics",
    "philosophy of artificial intelligence",
    "Artur Ziganshin",
  ],
  authors: [{ name: "Artur Ziganshin", url: "https://traceremove.dev" }],
  creator: "Artur Ziganshin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://traceremove.dev",
    siteName: "traceremove",
    title: "Artur Ziganshin — AI Philosophy Research",
    description:
      "Independent philosophical research on epistemic risks, ethical architecture, and AI foundations.",
    images: [{ url: "/og-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artur Ziganshin — AI Philosophy Research",
    description: "Independent philosophical research on epistemic risks and AI foundations.",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://traceremove.dev",
    types: { "application/rss+xml": "https://traceremove.dev/feed.xml" },
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only z-[100] rounded-md bg-[#ef5044] px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <div className="relative min-h-screen">
            <Header />
            <div id="main-content">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Artur Ziganshin",
                    url: "https://traceremove.dev",
                    jobTitle: "Independent AI Philosophy Researcher",
                    description:
                      "Independent philosophical research on epistemic risks, ethical architecture, and the foundations of artificial intelligence.",
                    sameAs: [
                      "https://orcid.org/0009-0001-0647-3753",
                      "https://philarchive.org/s/artur%20ziganshin",
                      "https://linkedin.com/in/artur-ziganshin",
                    ],
                    knowsAbout: [
                      "Artificial Intelligence",
                      "Epistemology",
                      "AI Ethics",
                      "Philosophy of Mind",
                      "Philosophy of Language",
                    ],
                    hasCredential: [
                      {
                        "@type": "EducationalOccupationalCredential",
                        credentialCategory: "degree",
                        name: "Master of Philosophy",
                      },
                      {
                        "@type": "EducationalOccupationalCredential",
                        credentialCategory: "degree",
                        name: "PhD of Philosophy",
                      },
                    ],
                  }),
                }}
              />
              {children}
            </div>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

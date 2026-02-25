import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Artur Ziganshin",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "traceremove",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/og-image", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image"],
    creator: siteConfig.author.twitter,
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
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },
  verification: {},
  icons: { icon: "/favicon.svg" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  jobTitle: "Independent AI Philosophy Researcher",
  description: siteConfig.description,
  sameAs: [siteConfig.author.orcid, siteConfig.author.philarchive, siteConfig.author.linkedin].filter(Boolean),
  knowsAbout: [
    "Artificial Intelligence",
    "Epistemology",
    "Philosophy of Mind",
    "AI Ethics",
    "Philosophy of Language",
    "Machine Learning",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Master of Philosophy" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "PhD of Philosophy" },
  ],
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
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

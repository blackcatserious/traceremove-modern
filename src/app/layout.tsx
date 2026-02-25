import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Instrument_Serif, JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const instrumentSerif = Instrument_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const sourceSans = Source_Sans_3({ variable: "--font-body", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

const defaultDescription =
  "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.";

export const metadata: Metadata = {
  title: "Artur Ziganshin — AI Philosophy Research",
  description: defaultDescription,
  keywords: ["AI philosophy", "epistemic risks", "AI ethics", "philosophy of AI", "Artur Ziganshin"],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Artur Ziganshin — AI Philosophy Research",
    description: defaultDescription,
    siteName: "Traceremove",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Traceremove — AI Philosophy Research" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artur Ziganshin — AI Philosophy Research",
    description: defaultDescription,
    images: [siteConfig.ogImage],
  },
  icons: { icon: "/favicon.svg" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  jobTitle: siteConfig.author.role,
  affiliation: { "@type": "Organization", name: "Independent Research" },
  email: siteConfig.author.email,
  sameAs: [siteConfig.links.philarchive, siteConfig.links.academia, siteConfig.links.orcid, siteConfig.links.github],
  description: siteConfig.author.bio,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only z-[100] rounded-md bg-[#ef5044] px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <div className="grain-overlay relative min-h-screen bg-[var(--bg)] text-[var(--fg)]">
            <Header />
            <main id="main-content" className="pt-28">
              {children}
            </main>
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

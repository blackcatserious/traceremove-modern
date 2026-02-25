import type { Metadata } from "next";
import NewsletterClient from "./newsletter-client";

export const metadata: Metadata = {
  title: "The Epistemic Mirror — Newsletter",
  description:
    "Weekly philosophical analysis of AI developments. No hype, no jargon — just clarity. Free newsletter by Artur Ziganshin.",
  openGraph: {
    title: "The Epistemic Mirror | Newsletter",
    url: "https://traceremove.dev/newsletter",
  },
};

export default function NewsletterPage() {
  return <NewsletterClient />;
}

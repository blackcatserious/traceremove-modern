import type { Metadata } from "next";
import NewsletterClient from "./newsletter-client";

export const metadata: Metadata = {
  title: "The Epistemic Mirror | Artur Ziganshin",
  description:
    "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.",
};

export default function NewsletterPage() {
  return <NewsletterClient />;
}

import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact | Artur Ziganshin",
  description:
    "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.",
};

export default function ContactPage() {
  return <ContactClient />;
}

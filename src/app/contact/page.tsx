import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for consulting inquiries, speaking invitations, research collaborations, or questions about AI philosophy.",
  openGraph: {
    title: "Contact | Artur Ziganshin",
    url: "https://traceremove.dev/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

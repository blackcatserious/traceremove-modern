import type { Metadata } from "next";
import ResearchClient from "./research-client";

export const metadata: Metadata = {
  title: "Research | Artur Ziganshin",
  description:
    "Independent AI philosophy research on epistemic risks, ethical architecture, and the philosophical foundations of artificial intelligence.",
};

export default function ResearchPage() {
  return <ResearchClient />;
}

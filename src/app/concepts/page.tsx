import type { Metadata } from "next";
import ConceptExplorer from "@/components/concepts/ConceptExplorer";

export const metadata: Metadata = {
  title: "Concept Explorer — AI Philosophy Map",
  description: "Interactive map of philosophical concepts for understanding AI epistemology, ethics, language, mind, and governance.",
};

export default function ConceptsPage() {
  return <ConceptExplorer />;
}

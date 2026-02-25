import type { Metadata } from "next";
import PhilosophyChat from "@/components/chat/PhilosophyChat";

export const metadata: Metadata = {
  title: "Philosophy Chat — Ask About AI Philosophy",
  description:
    "An AI assistant grounded in philosophical research on epistemic risks, AI ethics, and the foundations of artificial intelligence.",
};

export default function ChatPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto">
        <span className="overline">AI Assistant</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Philosophy Chat</h1>
        <p className="mt-4 text-lg text-[#8a8a97] max-w-3xl">
          Ask questions about AI philosophy, epistemic risks, ethics, or any topic from my research. Responses are
          grounded in philosophical analysis.
        </p>
      </div>

      <div className="mt-10">
        <PhilosophyChat />
      </div>

      <p className="max-w-3xl mx-auto mt-8 text-xs text-[#6b6b79]">
        This AI assistant provides philosophical perspectives. It is not a substitute for reading primary sources or
        consulting experts.
      </p>
    </div>
  );
}

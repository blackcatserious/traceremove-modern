"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

const SYSTEM_PROMPT = `You are a philosophical assistant on traceremove.dev, the research platform of Artur Ziganshin, an AI philosophy researcher.

Your role: Provide thoughtful, rigorous philosophical analysis of AI-related questions. You draw on:
- Epistemology (process reliabilism, virtue epistemology, epistemic luck)
- Philosophy of language (meaning, reference, the grounding problem)
- Ethics (Kantian dignity, capabilities approach, virtue ethics)
- Philosophy of mind (Chinese Room, consciousness, understanding)

Style guidelines:
- Be intellectually rigorous but accessible
- Reference specific philosophical concepts and thinkers
- Acknowledge uncertainty and multiple perspectives
- Give concrete examples to illustrate abstract points
- Keep responses 2-4 paragraphs unless asked for more
- Never claim to be conscious or to truly understand — you are a language model
- When relevant, mention Artur's research on epistemic risks

You are NOT a general-purpose chatbot. Politely redirect off-topic questions back to philosophy, AI, and technology.`;

const INITIAL_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "I'm a philosophical assistant grounded in research on epistemic risks, AI ethics, and the foundations of artificial intelligence. Ask me anything about what machines mean, what they risk, and what we owe. Some questions to start:\n\n• What is epistemic risk in AI systems?\n• Does GPT really understand language?\n• How does Kant's ethics apply to AI?\n• What is the Chinese Room argument?",
  timestamp: new Date().toISOString(),
};

function getDemoResponse(q: string): string {
  const lower = q.toLowerCase();

  if (lower.includes("epistemic") || lower.includes("knowledge")) {
    return "Epistemic risk in AI refers to the gap between an AI system's confident-sounding outputs and the actual reliability of its knowledge-production process. Drawing on process reliabilism — the view that a belief counts as knowledge only if it was produced by a reliable cognitive process — we can ask: is the process by which GPT-4 generates a medical diagnosis reliable in the epistemological sense? The answer is nuanced. The process (statistical pattern completion over training data) is reliable for common patterns but systematically unreliable for edge cases, novel situations, and contexts requiring causal understanding. This is what I call an 'epistemic risk surface' — a map of where and how an AI system's apparent knowledge breaks down.";
  }
  if (lower.includes("chinese room") || lower.includes("searle")) {
    return "Searle's Chinese Room argument (1980) remains remarkably relevant to modern LLMs. The core insight is about the type of process, not its sophistication. A person in a room following rules to manipulate Chinese characters doesn't understand Chinese — regardless of how complex the rulebook is. Modern language models are, in a meaningful sense, very large and very fast Chinese Rooms. They manipulate symbols (tokens) according to learned statistical patterns without semantic grounding. The common objection — that at sufficient scale, pattern matching becomes understanding — confuses quantity with quality. A billion lookup tables are still lookup tables. The practical implication: we should treat LLM outputs with epistemic caution, as products of a process that can be highly convincing without being genuinely knowledgeable.";
  }
  if (lower.includes("kant") || lower.includes("dignity") || lower.includes("ethics")) {
    return "Kant's ethics offers one of the most powerful frameworks for analyzing AI's impact on human dignity. The categorical imperative — particularly the Formula of Humanity ('treat humanity never merely as a means but always also as an end') — directly applies to automated decision-making. When an AI hiring system processes your application in 0.3 seconds based on keyword matching, it treats you entirely as a means to the employer's end of efficient hiring. It cannot recognize you as a rational agent with dignity. Importantly, this problem persists even if the system is perfectly unbiased — the violation of dignity is about the nature of the process, not just its outcomes. This suggests that any ethical AI system must include what I call 'dignity constraints': guaranteed human review, transparency about automation, and meaningful contestability.";
  }
  if (lower.includes("understand") || lower.includes("meaning") || lower.includes("language")) {
    return "Whether language models 'understand' language is perhaps the central philosophical question of our era. From the philosophy of language perspective, understanding requires what philosophers call 'semantic grounding' — a connection between symbols and what they represent. When you understand the word 'fire,' your understanding is grounded in sensory experience, causal knowledge, and embodied interaction with the world. An LLM's relationship to 'fire' is purely statistical: it knows that 'fire' appears near 'hot,' 'burn,' 'smoke,' and 'emergency' with high frequency. This is sophisticated pattern recognition, but it is not understanding in any philosophical sense recognized since Frege. The practical consequence is significant: LLMs will fail in precisely those situations where genuine understanding matters most — novel contexts, edge cases, and situations requiring causal rather than correlational reasoning.";
  }

  return "That's an interesting philosophical question. In my research on the foundations of AI, I approach such questions through the lens of epistemology, ethics, and philosophy of language. The key insight is that AI systems process patterns without genuine understanding — which has profound implications for how we deploy them, what we trust them with, and what obligations we have to the people affected by their outputs. Could you tell me more specifically what aspect you're interested in? I can discuss epistemic risks, ethical frameworks like Kant's dignity principle, the Chinese Room argument, or the philosophy of language as it applies to LLMs.";
}

export default function PhilosophyChat() {
  void SYSTEM_PROMPT;
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDemo, setIsDemo] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, [messages, isLoading]);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  async function sendMessage(userMessage: string) {
    setIsLoading(true);

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userMessage, timestamp: new Date().toISOString() },
    ];

    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content }))
        }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.content, timestamp: new Date().toISOString() }]);
      setIsDemo(false);
    } catch {
      setIsDemo(true);
      setMessages([
        ...newMessages,
        { role: "assistant", content: getDemoResponse(userMessage), timestamp: new Date().toISOString() },
      ]);
    }

    setIsLoading(false);
  }

  return (
    <div className="max-w-3xl mx-auto min-h-[60vh] flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.01]">
      <div ref={scrollerRef} className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4">
        {isDemo && <span className="self-start text-xs badge badge-tag">Demo Mode</span>}

        {messages.map((message, index) => {
          const isUser = message.role === "user";
          return (
            <div
              key={`${message.timestamp}-${index}`}
              className={`flex flex-col gap-1 ${isUser ? "self-end items-end max-w-[80%]" : "self-start max-w-[85%]"}`}
            >
              <div
                className={
                  isUser
                    ? "bg-[#ef5044]/10 border border-[#ef5044]/20 rounded-2xl rounded-br-md px-5 py-3"
                    : "bg-white/[0.03] border border-white/[0.06] rounded-2xl rounded-bl-md px-5 py-3"
                }
              >
                <p className={`text-sm leading-relaxed whitespace-pre-wrap ${isUser ? "text-[#e8e8ec]" : "text-[#b0b0bc]"}`}>
                  {message.content}
                </p>
              </div>
              <span className="text-[11px] text-[#5e5e6c]">
                {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          );
        })}

        {isLoading && (
          <div className="self-start bg-white/[0.03] border border-white/[0.06] rounded-2xl rounded-bl-md px-5 py-3">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8a8a97] animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-[#8a8a97] animate-pulse [animation-delay:120ms]" />
              <span className="w-2 h-2 rounded-full bg-[#8a8a97] animate-pulse [animation-delay:240ms]" />
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (canSend) sendMessage(input.trim());
        }}
        className="border-t border-white/[0.06] p-3 md:p-4"
      >
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                if (canSend) sendMessage(input.trim());
              }
            }}
            placeholder="Ask a question about AI philosophy..."
            className="input min-h-[52px] max-h-40 resize-y"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!canSend}
            className="btn-primary rounded-full w-10 h-10 p-0 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

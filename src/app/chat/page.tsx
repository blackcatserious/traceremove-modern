"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const DEMO_RESPONSES: Record<string, string> = {
  epistemic:
    "Epistemic risk in AI refers to the gap between confident-sounding outputs and actual reliability. Drawing on process reliabilism — the view that knowledge requires a reliable cognitive process — we can ask: is statistical pattern completion over training data a reliable process? It is for common patterns, but systematically unreliable for edge cases, novel situations, and contexts requiring causal understanding. This is what I call an 'epistemic risk surface' — mapping where AI knowledge breaks down.",

  chinese:
    "Searle's Chinese Room (1980) remains remarkably relevant. The core insight: a person following rules to manipulate Chinese characters doesn't understand Chinese, regardless of the rulebook's complexity. Modern LLMs are vast Chinese Rooms — they manipulate tokens via learned statistical patterns without semantic grounding. The common objection that scale creates understanding confuses quantity with quality. A billion lookup tables are still lookup tables. We should treat LLM outputs with epistemic caution.",

  kant:
    "Kant's categorical imperative — particularly 'treat humanity never merely as a means but always also as an end' — directly applies to automated decisions. When an AI hiring system processes your application in 0.3 seconds via keyword matching, it treats you entirely as a means. Even a perfectly unbiased system violates dignity, because the violation concerns the process itself, not just outcomes. This suggests AI systems need 'dignity constraints': human review, transparency, and contestability.",

  language:
    "Whether LLMs 'understand' language is the central philosophical question of our era. Understanding requires semantic grounding — a connection between symbols and what they represent. When you understand 'fire,' your understanding connects to sensory experience and causal knowledge. An LLM's relationship to 'fire' is purely statistical: it knows 'fire' co-occurs with 'hot' and 'burn.' This is pattern recognition, not understanding in any philosophical sense since Frege.",

  default:
    "That's a rich philosophical question. In my research on AI foundations, I approach such questions through epistemology, ethics, and philosophy of language. The key insight: AI systems process patterns without genuine understanding — which has profound implications for deployment, trust, and our obligations to affected people. I can discuss epistemic risks, Kant's dignity principle, the Chinese Room argument, or the philosophy of language as applied to LLMs. What aspect interests you most?",
};

function getDemoResponse(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes("epistemic") || lower.includes("knowledge") || lower.includes("reliab")) {
    return DEMO_RESPONSES.epistemic;
  }
  if (lower.includes("chinese room") || lower.includes("searle") || lower.includes("understand")) {
    return DEMO_RESPONSES.chinese;
  }
  if (lower.includes("kant") || lower.includes("dignity") || lower.includes("ethic") || lower.includes("moral")) {
    return DEMO_RESPONSES.kant;
  }
  if (
    lower.includes("language") ||
    lower.includes("meaning") ||
    lower.includes("grounding") ||
    lower.includes("semantic")
  ) {
    return DEMO_RESPONSES.language;
  }
  return DEMO_RESPONSES.default;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm a philosophical assistant grounded in research on epistemic risks, AI ethics, and the foundations of artificial intelligence.\n\nAsk me anything — some starting points:\n\n• What is epistemic risk in AI?\n• Does GPT really understand language?\n• How does Kant's ethics apply to AI?\n• What is the Chinese Room argument?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const updated = [...messages, { role: "user" as const, content: userMsg }];
    setMessages(updated);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated.map((m) => ({ role: m.role, content: m.content })) }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.content }]);
    } catch {
      await new Promise((r) => setTimeout(r, 800));
      setMessages([...updated, { role: "assistant", content: getDemoResponse(userMsg) }]);
    }
    setLoading(false);
  };

  return (
    <main>
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "120px 24px 24px" }}>
        <span className="overline">AI Assistant</span>
        <h1
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            marginTop: "12px",
          }}
        >
          Philosophy Chat
        </h1>
        <p style={{ color: "#6a6a78", fontSize: "14px", marginTop: "8px", marginBottom: "32px" }}>
          Ask questions about AI philosophy. Responses grounded in philosophical analysis.
        </p>
      </div>

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px", minHeight: "50vh" }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                maxWidth: "85%",
                padding: "16px 20px",
                borderRadius: msg.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                background: msg.role === "user" ? "rgba(239,80,68,0.08)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${msg.role === "user" ? "rgba(239,80,68,0.15)" : "rgba(255,255,255,0.06)"}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                {msg.role === "assistant" ? <Bot size={14} color="#7a7a88" /> : <User size={14} color="#ef5044" />}
                <span
                  style={{
                    fontSize: "11px",
                    color: "#4a4a58",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {msg.role === "assistant" ? "Philosophy Assistant" : "You"}
                </span>
              </div>
              <div
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: msg.role === "user" ? "#d0d0da" : "#9a9aaa",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "16px" }}>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: "20px 20px 20px 4px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", gap: "6px" }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#5a5a68",
                    animation: "pulseGlow 1s ease infinite",
                  }}
                />
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#5a5a68",
                    animation: "pulseGlow 1s ease infinite 0.2s",
                  }}
                />
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#5a5a68",
                    animation: "pulseGlow 1s ease infinite 0.4s",
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div
        style={{
          position: "sticky",
          bottom: 0,
          background: "linear-gradient(transparent, #09090e 30%)",
          padding: "20px 0 24px",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder="Ask about AI philosophy..."
            className="input"
            style={{ flex: 1 }}
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            className="btn-primary"
            style={{
              width: "44px",
              height: "44px",
              padding: 0,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: input.trim() ? 1 : 0.4,
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
        <p style={{ textAlign: "center", fontSize: "11px", color: "#3a3a45", marginTop: "10px" }}>
          Philosophical perspectives only · Not a substitute for primary sources
        </p>
      </div>
    </main>
  );
}

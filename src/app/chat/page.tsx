"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const DEMOS: Record<string, string> = {
  epistemic:
    "Epistemic risk in AI refers to the gap between confident-sounding outputs and actual reliability. Drawing on process reliabilism — the view that knowledge requires a reliable cognitive process — we can ask: is statistical pattern completion a reliable process? It is for common patterns, but systematically unreliable for edge cases and novel situations. This is what I call an 'epistemic risk surface' — mapping where AI knowledge breaks down.",
  chinese:
    "Searle's Chinese Room (1980) remains remarkably relevant. The core insight: a person following rules to manipulate Chinese characters doesn't understand Chinese, regardless of complexity. Modern LLMs are vast Chinese Rooms — they manipulate tokens via learned statistical patterns without semantic grounding. The common objection that scale creates understanding confuses quantity with quality. A billion lookup tables are still lookup tables.",
  kant:
    "Kant's categorical imperative — 'treat humanity never merely as a means but always also as an end' — directly applies to automated decisions. When an AI hiring system processes your application in 0.3 seconds via keyword matching, it treats you entirely as a means. Even a perfectly unbiased system violates dignity, because the violation concerns the process itself. This suggests AI systems need 'dignity constraints': human review, transparency, and contestability.",
  language:
    "Whether LLMs 'understand' language is the central philosophical question of our era. Understanding requires semantic grounding — a connection between symbols and what they represent. When you understand 'fire,' your understanding connects to sensory experience and causal knowledge. An LLM's relationship to 'fire' is purely statistical: it knows 'fire' co-occurs with 'hot' and 'burn.' This is pattern recognition, not understanding in any philosophical sense since Frege.",
  fallback:
    "That's a rich philosophical question. In my research on AI foundations, I approach such questions through epistemology, ethics, and philosophy of language. The key insight: AI systems process patterns without genuine understanding — with profound implications for deployment and trust. I can discuss epistemic risks, Kant's dignity principle, the Chinese Room argument, or philosophy of language as applied to LLMs. What interests you most?",
};

function getDemo(q: string): string {
  const l = q.toLowerCase();
  if (l.includes("epistemic") || l.includes("knowledge") || l.includes("reliab")) return DEMOS.epistemic;
  if (l.includes("chinese") || l.includes("searle") || l.includes("room")) return DEMOS.chinese;
  if (l.includes("kant") || l.includes("dignity") || l.includes("ethic") || l.includes("moral")) return DEMOS.kant;
  if (l.includes("language") || l.includes("meaning") || l.includes("understand") || l.includes("grounding")) return DEMOS.language;
  return DEMOS.fallback;
}

export default function ChatPage() {
  const [msgs, setMsgs] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm a philosophical assistant grounded in research on epistemic risks, AI ethics, and the foundations of artificial intelligence.\n\nSome questions to start:\n\n• What is epistemic risk in AI?\n• Does GPT really understand language?\n• How does Kant's ethics apply to AI?\n• What is the Chinese Room argument?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setInput("");
    const next = [...msgs, { role: "user" as const, content: text }];
    setMsgs(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.map((m) => ({ role: m.role, content: m.content })) }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMsgs([...next, { role: "assistant", content: data.content }]);
    } catch {
      await new Promise((r) => setTimeout(r, 600));
      setMsgs([...next, { role: "assistant", content: getDemo(text) }]);
    }
    setLoading(false);
  };

  return (
    <main>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "100px 24px 16px" }}>
        <span className="overline">AI Assistant</span>
        <h1
          style={{
            fontFamily: "'Instrument Serif',Georgia,serif",
            fontSize: "clamp(1.8rem,4vw,2.5rem)",
            marginTop: 12,
          }}
        >
          Philosophy Chat
        </h1>
        <p style={{ color: "#6a6a78", fontSize: 14, marginTop: 8, marginBottom: 24 }}>
          Ask questions about AI philosophy. Responses grounded in philosophical analysis.
        </p>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px", minHeight: "50vh" }}>
        {msgs.map((m, i) => (
          <div
            key={i}
            style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", marginBottom: 16 }}
          >
            <div
              style={{
                maxWidth: "85%",
                padding: "16px 20px",
                borderRadius: m.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                background: m.role === "user" ? "rgba(239,80,68,0.08)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${m.role === "user" ? "rgba(239,80,68,0.15)" : "rgba(255,255,255,0.06)"}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                {m.role === "assistant" ? <Bot size={14} color="#7a7a88" /> : <User size={14} color="#ef5044" />}
                <span
                  style={{
                    fontSize: 11,
                    color: "#4a4a58",
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.05em",
                  }}
                >
                  {m.role === "assistant" ? "Philosophy Assistant" : "You"}
                </span>
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: m.role === "user" ? "#d0d0da" : "#9a9aaa",
                  whiteSpace: "pre-wrap",
                }}
              >
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", marginBottom: 16 }}>
            <div
              style={{
                padding: "16px 20px",
                borderRadius: "20px 20px 20px 4px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 0.2, 0.4].map((d, i) => (
                  <span
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#5a5a68",
                      opacity: 0.5,
                      animation: `pulse 1.2s ease-in-out ${d}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div style={{ position: "sticky", bottom: 0, background: "linear-gradient(transparent, #09090e 30%)", padding: "20px 0 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px", display: "flex", gap: 10 }}>
          <input
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
              width: 44,
              height: 44,
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
        <p style={{ textAlign: "center", fontSize: 11, color: "#3a3a45", marginTop: 10 }}>
          Philosophical perspectives · Not a substitute for primary sources
        </p>
      </div>
    </main>
  );
}

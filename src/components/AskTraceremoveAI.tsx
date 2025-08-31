'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Loader2 } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

function Chat({
  messages,
  input,
  setInput,
  send,
  loading,
}: {
  messages: Msg[];
  input: string;
  setInput: (v: string) => void;
  send: () => void;
  loading: boolean;
}) {
  return (
    <div>
      <div className="space-y-3 max-h-64 overflow-y-auto mb-3 pr-1">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <div
              className={`inline-block px-3 py-2 rounded-2xl ${
                m.role === 'user' ? 'bg-accent-ai-purple/30' : 'bg-white/10'
              } text-white`}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') send();
          }}
          placeholder="Ask Traceremove AI..."
          className="flex-1 px-4 py-3 rounded-xl bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none"
        />
        <button
          onClick={send}
          className="px-4 py-3 rounded-xl bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white"
          disabled={loading}
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}

export default function AskTraceremoveAI({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(!compact);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);

  async function send() {
    if (!input.trim()) return;
    const userMsg: Msg = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      const content = data?.choices?.[0]?.message?.content ?? 'Assistant is thinking...';
      setMessages((prev) => [...prev, { role: 'assistant', content }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Assistant temporarily unavailable.' }]);
    } finally {
      setLoading(false);
    }
  }

  if (compact) {
    return (
      <div className="fixed right-4 bottom-4 z-50">
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-4 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white shadow-xl"
          aria-label="Open Traceremove AI"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 w-96 max-w-[95vw] rounded-2xl bg-slate-900/95 border border-white/20 backdrop-blur-2xl p-4"
          >
            <Chat messages={messages} input={input} setInput={setInput} send={send} loading={loading} />
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-900/95 border border-white/20 p-4">
      <Chat messages={messages} input={input} setInput={setInput} send={send} loading={loading} />
    </div>
  );
}

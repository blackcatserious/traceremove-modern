'use client';

import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Loader2 } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

type QuickPrompt = { label: string; prompt: string };

function Chat({
  messages,
  input,
  setInput,
  send,
  loading,
  prompts,
  onSelectPrompt,
  inputRef,
}: {
  messages: Msg[];
  input: string;
  setInput: (v: string) => void;
  send: () => void;
  loading: boolean;
  prompts: QuickPrompt[];
  onSelectPrompt: (prompt: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}) {
  return (
    <div>
      {prompts.length > 0 && messages.length === 0 && (
        <div className="mb-4 space-y-2">
          <p className="text-sm font-medium text-white/80">Jump into the Traceremove stack:</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {prompts.map((prompt) => (
              <button
                key={prompt.label}
                type="button"
                onClick={() => onSelectPrompt(prompt.prompt)}
                disabled={loading}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white transition hover:border-accent-ai-purple/60 hover:bg-accent-ai-purple/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ai-purple/60"
              >
                <span className="block font-semibold">{prompt.label}</span>
                <span className="mt-1 block text-white/70">{prompt.prompt}</span>
              </button>
            ))}
          </div>
        </div>
      )}
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
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Ask Traceremove AI..."
          className="flex-1 px-4 py-3 rounded-xl bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none"
          ref={inputRef}
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

const QUICK_PROMPTS: QuickPrompt[] = [
  {
    label: 'Metrics & observability plan',
    prompt: 'Outline the KPI dashboards and telemetry guardrails that Traceremove uses across the atlas.',
  },
  {
    label: 'Algorithm evaluation loop',
    prompt: 'Summarize how our algorithm review boards benchmark safety, fairness, and readiness.',
  },
  {
    label: 'Automation toolkit walkthrough',
    prompt: 'Explain the automation and tooling stack that powers the cinematic mega menu workflows.',
  },
  {
    label: 'Chatbot operations',
    prompt: 'Describe how the Traceremove assistant routes questions between metrics, tools, and algorithms.',
  },
];

export default function AskTraceremoveAI({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(!compact);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const messagesRef = useRef<Msg[]>(messages);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = useCallback(() => {
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const ask = useCallback(
    async (query: string) => {
      const trimmed = query.trim();
      if (!trimmed || loading) return;

      const userMsg: Msg = { role: 'user', content: trimmed };
      const history = [...messagesRef.current, userMsg];
    messagesRef.current = history;
    setMessages(history);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) {
        throw new Error('Assistant response failed');
      }

      const data = await res.json();
      const content: string = data?.choices?.[0]?.message?.content ?? 'Assistant is thinking...';
      const assistantMsg: Msg = { role: 'assistant', content };
      const nextHistory = [...history, assistantMsg];
      messagesRef.current = nextHistory;
      setMessages(nextHistory);
    } catch {
      const fallbackMsg: Msg = {
        role: 'assistant',
        content:
          'Traceremove AI is momentarily offline, but the on-site knowledge base is ready—try again in a moment or explore the atlas.',
      };
      const nextHistory = [...history, fallbackMsg];
      messagesRef.current = nextHistory;
      setMessages(nextHistory);
      } finally {
        setLoading(false);
      }
    },
    [loading],
  );

  const send = () => {
    void ask(input);
  };

  const handlePromptSelect = (prompt: string) => {
    void ask(prompt);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    type PromptDetail = { prompt?: string };

    const handler = (event: Event) => {
      const custom = event as CustomEvent<PromptDetail>;
      const detail = custom.detail;
      if (!detail?.prompt) {
        return;
      }

      if (compact) {
        setOpen(true);
      }

      setInput('');
      focusInput();

      if (!loading) {
        void ask(detail.prompt);
      } else {
        setInput(detail.prompt);
      }
    };

    window.addEventListener('traceremove-chat-prompt', handler as EventListener);
    return () => {
      window.removeEventListener('traceremove-chat-prompt', handler as EventListener);
    };
    }, [ask, compact, focusInput, loading]);

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
            <Chat
              messages={messages}
              input={input}
              setInput={setInput}
              send={send}
              loading={loading}
              prompts={QUICK_PROMPTS}
              onSelectPrompt={handlePromptSelect}
              inputRef={inputRef}
            />
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-900/95 border border-white/20 p-4">
      <Chat
        messages={messages}
        input={input}
        setInput={setInput}
        send={send}
        loading={loading}
        prompts={QUICK_PROMPTS}
        onSelectPrompt={handlePromptSelect}
        inputRef={inputRef}
      />
    </div>
  );
}

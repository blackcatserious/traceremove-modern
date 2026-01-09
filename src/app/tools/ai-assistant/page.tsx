'use client';

import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import BackgroundLayers from '@/components/BackgroundLayers';
import ChatAssistantPanel from '@/components/ChatAssistantPanel';

export default function AiAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <BackgroundLayers variant="research" className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-900/20 to-blue-900/40" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-100">
              <Sparkles className="h-4 w-4" />
              ChatGPT Integration
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
              TraceRemove AI Assistant
            </h1>
            <p className="mt-4 text-base text-slate-200 sm:text-lg">
              Engage directly with our ChatGPT-powered assistant for research insights, tooling guidance, and platform support.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
            <ChatAssistantPanel
              className="min-h-[32rem]"
              title="TraceRemove Assistant"
              subtitle="Ask about research, ethics, or the platform's capabilities."
            />

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-purple-300" />
                  <h2 className="text-lg font-semibold">What the assistant can do</h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li>Summarize research themes and link you to relevant pages.</li>
                  <li>Recommend tools and demos for your specific workflows.</li>
                  <li>Explain our ethics, privacy, and governance principles.</li>
                  <li>Guide you through platform features and next steps.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                <p className="font-semibold text-white">Tips for better answers</p>
                <p className="mt-3">Share your goal, audience, and constraints. The assistant tailors guidance based on the site knowledge base.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

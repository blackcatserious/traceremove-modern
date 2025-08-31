import React from 'react';
import AskTraceremoveAI from '@/components/AskTraceremoveAI';

export const metadata = {
  title: 'Assistant | Traceremove',
  description: 'Conversational assistant for Traceremove content',
};

export default function AssistantPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-ibm-sans mb-6">Traceremove Assistant</h1>
      <p className="text-lg text-research-text-secondary mb-8">
        Ask questions about our research, projects, tools, and articles.
      </p>
      <AskTraceremoveAI />
    </div>
  );
}

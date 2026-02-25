'use client';

import { useState } from 'react';
import { ArrowRight, BookOpenCheck, Building2, Gavel, Handshake, Landmark, MessageSquareText } from 'lucide-react';

type InquiryType = 'Consulting' | 'Speaking' | 'Research' | 'Other';

const consultingCards = [
  {
    title: 'AI Ethics Assessment',
    description:
      'Philosophical evaluation of AI systems for ethical risks, bias, and alignment with human values.',
    icon: BookOpenCheck,
  },
  {
    title: 'AI Governance Framework',
    description:
      'Development of ethical guidelines and governance structures for responsible AI deployment.',
    icon: Building2,
  },
  {
    title: 'EU AI Act Readiness',
    description:
      'Philosophical and ethical analysis to support compliance with the EU AI Act.',
    icon: Landmark,
  },
  {
    title: 'Research Partnerships',
    description:
      'Collaborative research on epistemic, ethical, and social dimensions of AI.',
    icon: Handshake,
  },
];

const speakingTopics = [
  'The Epistemic Crisis of AI',
  'Human Dignity in Automated Systems',
  "What Language Models Don't Understand",
  'Building Ethical AI from Philosophical Foundations',
];

export default function ServicesPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      organization: String(formData.get('organization') ?? ''),
      message: String(formData.get('message') ?? ''),
      inquiryType: String(formData.get('inquiryType') ?? 'Other') as InquiryType,
    };

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/services-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? 'Submission failed');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold text-[#16213e] sm:text-5xl" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          AI Philosophy & Ethics Consulting
        </h1>

        <div className="grid gap-5 md:grid-cols-2">
          {consultingCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <card.icon className="h-6 w-6 text-[#0f3460]" />
              <h2 className="mt-4 text-xl font-semibold text-[#16213e]">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#1a1a2e]">{card.description}</p>
              <a href="#contact-form" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0f3460] hover:text-[#e94560]">
                Inquire <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-3xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Speaking & Workshops
        </h2>
        <p className="mt-3 max-w-3xl text-[#1a1a2e]">
          Available for keynotes, panels, and workshops on AI philosophy, epistemic risks, and ethical AI architecture.
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-[#1a1a2e]">
          {speakingTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
        <a href="/contact" className="mt-6 inline-flex items-center rounded-md bg-[#0f3460] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16213e]">
          Book a Talk <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm sm:p-8">
        <h2 className="text-3xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Teaching
        </h2>
        <p className="mt-3 text-[#1a1a2e]">Online courses and workshops coming 2026.</p>
        <a href="mailto:artur@traceremove.com?subject=Teaching%20Launch%20Notification" className="mt-5 inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-[#1a1a2e] hover:bg-white">
          Email me for launch notification
        </a>
      </section>

      <section id="contact-form" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <MessageSquareText className="h-6 w-6 text-[#0f3460]" />
          <h2 className="text-3xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            Contact
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-[#16213e]">Name</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1a1a2e] focus:border-[#0f3460] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-[#16213e]">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1a1a2e] focus:border-[#0f3460] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="organization" className="text-sm font-medium text-[#16213e]">Organization</label>
            <input id="organization" name="organization" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1a1a2e] focus:border-[#0f3460] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="inquiryType" className="text-sm font-medium text-[#16213e]">Type</label>
            <select id="inquiryType" name="inquiryType" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1a1a2e] focus:border-[#0f3460] focus:outline-none" defaultValue="Consulting">
              <option>Consulting</option>
              <option>Speaking</option>
              <option>Research</option>
              <option>Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-[#16213e]">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1a1a2e] focus:border-[#0f3460] focus:outline-none" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" disabled={status === 'loading'} className="inline-flex items-center rounded-md bg-[#0f3460] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#16213e] disabled:opacity-70">
              {status === 'loading' ? 'Sending…' : 'Send inquiry'}
              <Gavel className="ml-2 h-4 w-4" />
            </button>
            <p className="mt-2 text-sm text-slate-600" aria-live="polite">
              {status === 'success'
                ? 'Thank you. Your message has been sent.'
                : status === 'error'
                  ? `Unable to send message: ${errorMessage}`
                  : 'Submissions are sent through Formspree.'}
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

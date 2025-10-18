'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  Send,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ShieldCheck,
  ArrowRight,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

const contactChannels = [
  {
    label: 'Strategic engagements',
    description: 'Collaborate on research programmes, atlas activations, and responsible AI delivery.',
    address: 'partners@traceremove.com',
    icon: ShieldCheck
  },
  {
    label: 'Media & speaking',
    description: 'Request keynotes, interviews, and commentary on ethical intelligence futures.',
    address: 'press@traceremove.com',
    icon: MessageSquare
  },
  {
    label: 'Academic collaborations',
    description: 'Co-develop syllabi, workshops, or research residencies with universities and institutes.',
    address: 'academic@traceremove.com',
    icon: Globe
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/arthur-ziganshin',
    description: 'Professional updates and partnership announcements.'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/traceremove',
    description: 'Open-source tooling, experimental prototypes, and reproducible artefacts.'
  },
  {
    name: 'ResearchGate',
    url: 'https://researchgate.net/profile/Arthur-Ziganshin',
    description: 'Research collaborations, datasets, and citation metrics.'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/traceremove',
    description: 'Real-time thoughts on philosophy, AI policy, and design futures.'
  }
];

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) {
      nextErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Please share at least 10 characters';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setFormStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (error) {
      console.error(error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="relative">
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_78%_22%,rgba(129,140,248,0.16),transparent_55%),linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(11,26,48,0.9)_45%,rgba(17,24,39,0.95)_100%)]" />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.55, scale: 1 } : { opacity: 0.85, scale: 1, rotate: [0, 8, -6, 0] }}
            transition={{ duration: prefersReducedMotion ? 1.2 : 18, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/35 via-sky-400/25 to-emerald-400/25 blur-3xl"
          />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 0.4, scale: 1 } : { opacity: 0.65, scale: 1, rotate: [0, -10, 8, 0] }}
            transition={{ duration: prefersReducedMotion ? 1.4 : 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -bottom-32 right-6 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/25 to-cyan-400/25 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-2xl">
            <Mail className="h-5 w-5 text-sky-200" />
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Connect with Traceremove</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />
          </div>
          <div className="mt-8 space-y-6">
            <h1 className="font-ibm-sans text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let’s choreograph responsible intelligence together.
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/75 sm:text-xl">
              Whether you are planning a research residency, deploying an atlas blueprint, or curating policy dialogue, the Traceremove lab is ready to collaborate across disciplines and geographies.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-slate-950/85 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_82%_60%,rgba(15,118,110,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <h2 className="text-2xl font-semibold text-white">Contact the studio</h2>
                <p className="mt-3 text-sm text-white/70">
                  Share your challenge, request, or collaboration idea. We respond within two business days with next steps and optional scheduling slots.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {contactChannels.map((channel) => (
                    <div key={channel.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <channel.icon className="h-5 w-5 text-white/70" />
                      <p className="mt-3 text-sm font-semibold text-white">{channel.label}</p>
                      <p className="mt-1 text-xs text-white/60">{channel.description}</p>
                      <Link
                        href={`mailto:${channel.address}`}
                        className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:text-white"
                      >
                        {channel.address}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-white/70" />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Office hours</p>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  We host weekly open office hours for civic technologists, scholars, and builders exploring atlas adoption. Include “office hours” in your subject line to receive the latest scheduling link.
                </p>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_36px_120px_rgba(15,23,42,0.55)] backdrop-blur-2xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    Name
                  </label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                    <User className="h-4 w-4 text-white/50" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={updateField}
                      className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    Email
                  </label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                    <Mail className="h-4 w-4 text-white/50" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={updateField}
                      className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                      placeholder="name@organisation.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  Subject
                </label>
                <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                  <MessageSquare className="h-4 w-4 text-white/50" />
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={updateField}
                    className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                    placeholder="How can we collaborate?"
                  />
                </div>
                {errors.subject && <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  Message
                </label>
                <div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={updateField}
                    rows={6}
                    className="w-full resize-none bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                    placeholder="Share goals, context, and timelines for your initiative."
                  />
                </div>
                {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_20px_45px_rgba(56,189,248,0.35)] transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending…' : 'Send message'}
                <Send className="h-4 w-4" />
              </motion.button>

              {formStatus === 'success' && <p className="text-center text-sm text-emerald-300">Message received — we will reply shortly.</p>}
              {formStatus === 'error' && <p className="text-center text-sm text-rose-400">Something went wrong. Please retry or email directly.</p>}
            </motion.form>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(56,189,248,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-ibm-sans text-3xl font-semibold sm:text-4xl">Community signals</h2>
            <p className="mt-3 text-lg text-white/70">Stay close to Traceremove across professional networks, research hubs, and discourse platforms.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl"
              >
                <div>
                  <p className="text-base font-semibold text-white">{social.name}</p>
                  <p className="text-sm text-white/70">{social.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-white/60 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

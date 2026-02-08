'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Globe,
  Twitter,
  Sparkles,
  Map,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

const coreLinks = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Projects', href: '/projects' },
  { name: 'Tools', href: '/tools' },
  { name: 'Atlas', href: '/atlas' },
  { name: 'Insights', href: '/articles' },
  { name: 'Academy', href: '/academic' },
  { name: 'Contact', href: '/contact' },
];

const atlasLinks = [
  { name: 'Atlas Overview', href: '/atlas' },
  { name: 'Governance · Global', href: '/atlas/transparent-ai-governance-global-initiative' },
  { name: 'Safety · Healthcare', href: '/atlas/human-centered-safety-systems-healthcare-alliance' },
  { name: 'Compute · Climate', href: '/atlas/planetary-compute-stewardship-climate-tech' },
  { name: 'Civic · Consortium', href: '/atlas/civic-tech-participation-civic-consortium' },
];

const researchLinks = [
  { name: 'Ethical Architecture', href: '/research/ethical-ai-architecture' },
  { name: 'Privacy-Preserving AI', href: '/research/privacy-preserving-ai' },
  { name: 'Agentic Systems & Tool Use', href: '/research/agentic-systems-tool-use' },
  { name: 'Longitudinal Impact Forecasting', href: '/research/societal-impacts' },
  { name: 'Papers', href: '/whitepapers' },
];

const policyLinks = [
  { name: 'Privacy Policy', href: '/legal/privacy-policy' },
  { name: 'Ethics Charter', href: '/legal/ethics-statement' },
  { name: 'Atlas FAQ', href: '/faq' },
  { name: 'Site Map', href: '/site-map' },
  { name: 'AI Lab Members', href: '/ai-lab-members' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/arthur-ziganshin', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/blackcatserious', icon: Github },
  { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=ArthurZiganshin', icon: Globe },
  { name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Arthur-Ziganshin', icon: Globe },
  { name: 'Twitter / X', href: 'https://twitter.com/traceremove', icon: Twitter },
];

const contactDetails = [
  { label: 'Studio', value: 'Traceremove AI Research Lab' },
  { label: 'Email', value: 'artur@traceremove.com', href: 'mailto:artur@traceremove.com' },
  { label: 'Collaborations', value: 'Accepting research residencies & policy partnerships' },
  { label: 'Office Hours', value: 'Weekly — schedule via contact form' },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterStatus('error');
      return;
    }

    setNewsletterStatus('loading');

    try {
      const response = await fetch('/api/hubspot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'newsletter',
          email: newsletterEmail,
          pageUri: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('HubSpot submission failed');
      }

      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 4000);
    } catch (error) {
      console.error(error);
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 4000);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mt-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),transparent_65%)]" />
      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_rgba(236,72,153,0.15),rgba(59,130,246,0.12),rgba(99,102,241,0.2),rgba(236,72,153,0.15))] animate-pulse" />
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                  <Sparkles className="h-5 w-5 text-accent-ai-purple" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Traceremove Research</p>
                  <h2 className="text-2xl font-semibold text-white">AI Ethics · Systems Philosophy · Civic Innovation</h2>
                </div>
              </div>
              <p className="text-base leading-relaxed text-white/70">
                We prototype responsible intelligence for institutions that value transparency, accountability, and human dignity. Our atlas, labs, and publications translate complex research into living playbooks you can deploy today.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-white/70">
                {['Ethical Autonomy', 'Planetary Stewardship', 'Human-Centered Safety'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 uppercase tracking-[0.2em]">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
              >
                Request a strategy session
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-10"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Platform</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {coreLinks.map((link) => (
                    <li key={link.name}>
                      <Link className="group inline-flex items-center gap-2 transition hover:text-white" href={link.href}>
                        <span>{link.name}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Experience Atlas</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {atlasLinks.map((link) => (
                    <li key={link.name}>
                      <Link className="group inline-flex items-center gap-2 transition hover:text-white" href={link.href}>
                        <Map className="h-3.5 w-3.5 text-white/60" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid gap-10"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Research & Impact</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {researchLinks.map((link) => (
                    <li key={link.name}>
                      <Link className="group inline-flex items-center gap-2 transition hover:text-white" href={link.href}>
                        <ShieldCheck className="h-3.5 w-3.5 text-white/60" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Policy & Resources</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {policyLinks.map((link) => (
                    <li key={link.name}>
                      <Link className="group inline-flex items-center gap-2 transition hover:text-white" href={link.href}>
                        <Calendar className="h-3.5 w-3.5 text-white/60" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Stay in Orbit</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Subscribe for atlas drops, new research instruments, and invitations to closed-door salons.
                </p>
                <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="work email"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent-ai-purple focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-ai-purple px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-ai-purple/40 transition hover:bg-accent-lab-purple"
                    disabled={newsletterStatus === 'loading'}
                  >
                    {newsletterStatus === 'loading' ? 'Joining…' : 'Join the list'}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
                <p className="mt-2 text-xs text-white/60" aria-live="polite">
                  {newsletterStatus === 'success'
                    ? 'Thanks for joining. We will share the next drop soon.'
                    : newsletterStatus === 'error'
                      ? 'Unable to subscribe right now. Try again or reach out via contact.'
                      : 'We send 1–2 updates per month. No spam, ever.'}
                </p>
              </div>

              <div className="space-y-3 text-sm text-white/70">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.25em] text-white/60">{detail.label}</span>
                    {detail.href ? (
                      <Link href={detail.href} className="text-white transition hover:text-accent-ai-purple">
                        {detail.value}
                      </Link>
                    ) : (
                      <span>{detail.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Connect</h3>
                <div className="space-y-3 text-sm text-white/70">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="group inline-flex items-center gap-2 transition hover:text-white"
                    >
                      <social.icon className="h-4 w-4 text-white/60 transition group-hover:text-accent-ai-purple" />
                      <span>{social.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© {currentYear} Traceremove AI Research Lab. Built with curiosity, ethics, and open collaboration.</p>
            <div className="flex flex-wrap gap-4">
              {policyLinks.slice(0, 2).map((link) => (
                <Link key={link.name} href={link.href} className="transition hover:text-white">
                  {link.name}
                </Link>
              ))}
              <Link href="/cv" className="transition hover:text-white">
                CV
              </Link>
              <Link href="/whitepapers" className="transition hover:text-white">
                Papers
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

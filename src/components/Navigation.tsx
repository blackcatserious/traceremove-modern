'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';

const navLinks = [
  { href: '/research', label: 'Research' },
  { href: '/articles', label: 'Articles' },
  { href: '/cv', label: 'CV' },
  { href: '/services', label: 'Services' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setDarkMode(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="text-2xl font-semibold text-[#16213e] dark:text-slate-100" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Traceremove
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[#1a1a2e] transition-colors hover:text-[#0f3460] dark:text-slate-200 dark:hover:text-sky-300">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-[#16213e] hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-[#16213e] md:hidden dark:border-slate-700 dark:text-slate-100"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-y-0 right-0 z-50 w-72 transform border-l border-slate-200 bg-white p-6 transition-transform duration-300 md:hidden dark:border-slate-700 dark:bg-slate-950 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-lg font-semibold text-[#16213e] dark:text-slate-100">Menu</p>
          <button type="button" onClick={() => setMobileOpen(false)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base text-[#1a1a2e] hover:text-[#0f3460] dark:text-slate-200 dark:hover:text-sky-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

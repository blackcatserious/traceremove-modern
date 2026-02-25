"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/research", label: "Research" },
  { href: "/articles", label: "Articles" },
  { href: "/cv", label: "CV" },
  { href: "/services", label: "Services" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");
    const shouldUseDark = storedTheme ? storedTheme === "dark" : preferredDark;

    setDark(shouldUseDark);
    root.classList.toggle("dark", shouldUseDark);

    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const next = !dark;
    setDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-neutral-200/80 transition-all dark:border-neutral-800/80 ${
        scrolled ? "bg-white/80 backdrop-blur dark:bg-neutral-950/80" : "bg-neutral-50/95 dark:bg-neutral-950/95"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-2xl font-semibold italic tracking-tight text-neutral-900 dark:text-neutral-100">
          traceremove
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-neutral-700 transition hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white">
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-full border border-neutral-300 p-2 text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-full border border-neutral-300 p-2 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full border border-neutral-300 p-2 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

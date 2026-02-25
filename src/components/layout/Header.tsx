"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";

const navLinks = [
  { href: "/research", label: "Research" },
  { href: "/articles", label: "Articles" },
  { href: "/cv", label: "CV" },
  { href: "/services", label: "Services" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/tools", label: "AI Tools" },
];

const socialLinks = [
  { href: "https://github.com/traceremove", label: "GitHub" },
  { href: "https://orcid.org/0009-0003-8406-9303", label: "ORCID" },
  { href: "https://philarchive.org/s/artur%20ziganshin", label: "PhilArchive" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const activeLabel = useMemo(
    () => navLinks.find((link) => isActivePath(pathname, link.href))?.label,
    [pathname],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const root = overlayRef.current;
    if (!root) return;

    const focusable = Array.from(
      root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
    );

    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "border-b border-ink-200/60 bg-paper-white/72 py-3 backdrop-blur-xl dark:border-ink-700/60 dark:bg-ink-950/72"
          : "bg-paper-white/45 py-6 backdrop-blur-md dark:bg-ink-950/45"
      }`}
    >
      <div className="mx-auto flex w-full max-w-wide items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-3xl italic tracking-tight text-ink-900 dark:text-paper-white">
          traceremove
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm transition-colors duration-300 ${
                  active
                    ? "text-ink-900 dark:text-paper-white"
                    : "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-paper-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                <span
                  className={`absolute -bottom-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-500 transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white/75 text-ink-700 transition-all duration-300 hover:border-ink-300 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-100"
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? "sun" : "moon"}
                initial={{ rotate: -30, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 30, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <Link
            href="/newsletter"
            className="rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-600"
          >
            Join Newsletter
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-800 transition md:hidden dark:border-ink-700 dark:bg-ink-900/60 dark:text-paper-white"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-ink-950/95 px-6 py-8 text-paper-white md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-3xl italic">traceremove</p>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-paper-white"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-12 flex h-[calc(100%-7rem)] flex-col justify-between">
              <nav className="space-y-5">
                {navLinks.map((link, index) => {
                  const active = isActivePath(pathname, link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.28 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`inline-flex items-center gap-2 font-display text-4xl italic ${
                          active ? "text-accent-400" : "text-paper-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="space-y-6">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 text-sm"
                >
                  {isDark ? <Sun size={15} /> : <Moon size={15} />}
                  {isDark ? "Light mode" : "Dark mode"}
                </button>
                <div className="flex items-center gap-5 text-sm text-ink-200">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-accent-300">
                      {social.label}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-ink-300">{activeLabel ? `You are viewing: ${activeLabel}` : "Navigate the archive"}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

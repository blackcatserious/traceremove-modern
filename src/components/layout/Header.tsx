"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/articles", label: "Articles" },
  { href: "/cv", label: "CV" },
  { href: "/services", label: "Services" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-2xl py-4 border-b border-white/[0.06]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span
            style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }}
            className="text-lg text-white tracking-tight"
          >
            traceremove
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link href={item.href} key={item.href} className="relative group">
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${
                    active ? "text-white" : "text-[#7a7a88] hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
                {active && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ef5044]" />
                )}
              </Link>
            );
          })}
        </nav>

        <button onClick={() => setMobileOpen(true)} className="md:hidden" aria-label="Open menu">
          <Menu className="w-5 h-5 text-white" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0a0a0f]/[0.98] backdrop-blur-3xl flex flex-col items-center justify-center">
          <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6" aria-label="Close menu">
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="flex flex-col items-center gap-6">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl text-white/80 hover:text-white transition-colors animate-fade-up"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-10 flex gap-6 text-sm text-[#5e5e6c]">
            <a href="mailto:artur@traceremove.dev">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noreferrer">PhilArchive</a>
          </div>
        </div>
      )}
    </header>
  );
}

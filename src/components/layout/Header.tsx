"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = "" };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(9,9,14,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          padding: scrolled ? "14px 0" : "22px 0",
          transition: "all 0.5s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl text-white tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }}>
              traceremove
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="relative py-1">
                <span className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  pathname === item.href || pathname?.startsWith(item.href + "/")
                    ? "text-white"
                    : "text-[#6a6a78] hover:text-white"
                }`}>
                  {item.label}
                </span>
                {(pathname === item.href || pathname?.startsWith(item.href + "/")) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ef5044]" />
                )}
              </Link>
            ))}
          </nav>

          <button className="md:hidden w-10 h-10 flex items-center justify-center relative z-[60]" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[55] flex flex-col items-center justify-center gap-2"
          style={{ background: "rgba(9,9,14,0.97)", backdropFilter: "blur(30px)" }}>
          {NAV.map((item, i) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              className="py-2 text-2xl transition-colors"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                color: pathname === item.href ? "#ef5044" : "rgba(255,255,255,0.65)",
                opacity: 0,
                animation: `fadeSlideIn 0.4s ease ${i * 0.06}s forwards`,
              }}>
              {item.label}
            </Link>
          ))}
          <div className="absolute bottom-8 flex gap-6 text-xs text-[#4a4a58]"
            style={{ opacity: 0, animation: "fadeSlideIn 0.4s ease 0.5s forwards" }}>
            <a href="mailto:artur@traceremove.dev" className="hover:text-white transition-colors">Email</a>
            <a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PhilArchive</a>
          </div>
        </div>
      )}
    </>
  );
}

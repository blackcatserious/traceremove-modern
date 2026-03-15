"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/research", label: "Research" },
  { href: "/articles", label: "Articles" },
  { href: "/concepts", label: "Concepts" },
  { href: "/chat", label: "Chat" },
  { href: "/services", label: "Services" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (pathname?.startsWith(href + "/") ?? false);

  return (
    <>
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(9,9,14,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        padding: scrolled ? "14px 0" : "22px 0",
        transition: "all 0.5s ease",
      }}>
        <div style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/">
            <span style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}>
              traceremove
            </span>
          </Link>

          {/* Desktop Navigation — uses JS isMobile check instead of Tailwind md: */}
          {!isMobile && (
            <nav style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}>
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} style={{ position: "relative", padding: "4px 0", textDecoration: "none" }}>
                  <span style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    color: isActive(item.href) ? "#ffffff" : "#6a6a78",
                    borderBottom: "1px solid transparent",
                    paddingBottom: "3px",
                    transition: "all 0.25s ease",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                  onMouseEnter={(e) => { 
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderBottomColor = "rgba(239,80,68,0.4)";
                    }
                  }}
                  onMouseLeave={(e) => { 
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = "#6a6a78";
                      e.currentTarget.style.borderBottomColor = "transparent";
                    }
                  }}
                  >
                    {item.label}
                  </span>
                  {isActive(item.href) && (
                    <span style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#ef5044",
                    }} />
                  )}
                </Link>
              ))}
            </nav>
          )}

          {/* Mobile hamburger — only shows on mobile */}
          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                position: "relative",
                zIndex: 60,
              }}
            >
              {open ? <X size={20} color="#fff" /> : <Menu size={20} color="#fff" />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 55,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: "rgba(9,9,14,0.97)",
          backdropFilter: "blur(30px)",
        }}>
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "1.75rem",
                color: isActive(item.href) ? "#ef5044" : "rgba(255,255,255,0.65)",
                textDecoration: "none",
                padding: "8px 0",
                opacity: 0,
                animation: `fadeSlideIn 0.4s ease ${i * 0.06}s forwards`,
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{
            position: "absolute",
            bottom: "32px",
            display: "flex",
            gap: "24px",
            fontSize: "12px",
            color: "#4a4a58",
            opacity: 0,
            animation: "fadeSlideIn 0.4s ease 0.5s forwards",
          }}>
            <a href="mailto:artur@traceremove.dev" style={{ color: "inherit", textDecoration: "none" }}>Email</a>
            <a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>PhilArchive</a>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "64px 24px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "#f0f0f3",
                }}
              >
                traceremove
              </span>
            </Link>
            <p
              style={{ fontSize: "13px", color: "#5a5a68", marginTop: "12px", lineHeight: 1.6, maxWidth: "200px" }}
            >
              Philosophical research on what AI means, risks, and owes.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#4a4a58",
                marginBottom: "16px",
              }}
            >
              Research
            </h4>
            <FooterLink href="/research">All Papers</FooterLink>
            <FooterLink href="/concepts">Concept Explorer</FooterLink>
            <FooterLink href="https://philarchive.org/s/artur%20ziganshin" external>
              PhilArchive
            </FooterLink>
          </div>

          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#4a4a58",
                marginBottom: "16px",
              }}
            >
              Writing
            </h4>
            <FooterLink href="/articles">Articles</FooterLink>
            <FooterLink href="/newsletter">The Epistemic Mirror</FooterLink>
            <FooterLink href="/chat">Philosophy Chat</FooterLink>
            <FooterLink href="/cv">CV</FooterLink>
          </div>

          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#4a4a58",
                marginBottom: "16px",
              }}
            >
              Connect
            </h4>
            <FooterLink href="mailto:artur@traceremove.dev">Email</FooterLink>
            <FooterLink href="https://linkedin.com/in/artur-ziganshin" external>
              LinkedIn
            </FooterLink>
            <FooterLink href="https://orcid.org/0009-0001-0647-3753" external>
              ORCID
            </FooterLink>
            <FooterLink href="/contact">Contact Form</FooterLink>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.03)",
            paddingTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#3a3a45" }}>© 2026 Artur Ziganshin</span>
          <span style={{ fontSize: "12px", color: "#3a3a45" }}>Master of Philosophy · PhD of Philosophy</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  const isExt = external || href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isExt ? "_blank" : undefined}
      rel={isExt ? "noopener noreferrer" : undefined}
      style={{
        display: "block",
        fontSize: "13px",
        color: "#6a6a78",
        textDecoration: "none",
        padding: "4px 0",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#f0f0f3";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#6a6a78";
      }}
    >
      {children}
    </a>
  );
}

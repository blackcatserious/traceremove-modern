"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <span className="overline">Get in Touch</span>
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          marginTop: "16px",
        }}>
          Contact
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", marginTop: "40px" }}>
          <div>
            <p style={{ color: "#9a9aaa", lineHeight: 1.7, marginBottom: "24px" }}>
              Whether you have a consulting inquiry, speaking invitation, research
              collaboration proposal, or want to discuss AI philosophy — I'd love to
              hear from you. I typically respond within 48 hours.
            </p>

            <div style={{ marginTop: "32px" }}>
              <ContactLink icon="✉" label="artur@traceremove.dev" href="mailto:artur@traceremove.dev" />
              <ContactLink icon="📄" label="PhilArchive Profile" href="https://philarchive.org/s/artur%20ziganshin" />
              <ContactLink icon="🔗" label="LinkedIn" href="https://linkedin.com/in/artur-ziganshin" />
            </div>
          </div>

          <div>
            {sent ? (
              <div style={{
                padding: "40px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}>
                <p style={{ color: "#ef5044", fontSize: "1.2rem", fontWeight: 600, marginBottom: "8px" }}>Thank you!</p>
                <p style={{ color: "#7a7a88" }}>I'll respond within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", color: "#5a5a68", marginBottom: "6px" }}>Name</label>
                  <input type="text" required className="input" />
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", color: "#5a5a68", marginBottom: "6px" }}>Email</label>
                  <input type="email" required className="input" />
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", color: "#5a5a68", marginBottom: "6px" }}>Type</label>
                  <select className="input" style={{ appearance: "none" }}>
                    <option value="consulting">Consulting</option>
                    <option value="speaking">Speaking</option>
                    <option value="research">Research Collaboration</option>
                    <option value="media">Media</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "13px", color: "#5a5a68", marginBottom: "6px" }}>Message</label>
                  <textarea required rows={5} className="input" style={{ resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactLink({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        display: "flex", alignItems: "center", gap: "12px",
        padding: "10px 0",
        color: "#9a9aaa", fontSize: "14px",
        textDecoration: "none",
        transition: "color 0.2s",
        borderBottom: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ marginBottom: 8 }}>
          <a href="/" style={{ fontSize: 12, color: "#4a4a58", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px", color: "#2a2a35" }}>/</span>
          <span style={{ fontSize: 12, color: "#5a5a68" }}>Contact</span>
        </div>
        <span className="overline">Get in Touch</span>
        <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", marginTop: 16 }}>
          Contact
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, marginTop: 40 }}>
          <div>
            <p style={{ color: "#9a9aaa", lineHeight: 1.7, marginBottom: 24 }}>
              Consulting, speaking, or research collaboration — I respond within 48 hours.
            </p>
            <a href="mailto:artur@traceremove.dev" style={{ display: "block", color: "#9a9aaa", fontSize: 14, textDecoration: "none", padding: "8px 0" }}>
              artur@traceremove.dev
            </a>
          </div>
          <div>
            {sent ? (
              <div style={{ padding: 40, borderRadius: 20, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
                <p style={{ color: "#ef5044", fontSize: "1.2rem", fontWeight: 600 }}>Thank you!</p>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, color: "#5a5a68", marginBottom: 6 }}>Name</label>
                  <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, color: "#5a5a68", marginBottom: 6 }}>Email</label>
                  <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 13, color: "#5a5a68", marginBottom: 6 }}>Message</label>
                  <textarea rows={5} className="input" style={{ resize: "vertical" }} value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button
                  onClick={() => {
                    if (!name || !email || !message) return;
                    const subj = encodeURIComponent(`Inquiry from ${name}`);
                    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
                    window.location.href = `mailto:artur@traceremove.dev?subject=${subj}&body=${body}`;
                    setSent(true);
                  }}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Send <Send size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

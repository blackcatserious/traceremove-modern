export const metadata = { title: "The Epistemic Mirror" };

export default function NewsletterPage() {
  return (
    <main>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "120px 24px 80px", textAlign: "center" }}>
        <div style={{ marginBottom: 8 }}>
          <a href="/" style={{ fontSize: 12, color: "#4a4a58", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px", color: "#2a2a35" }}>/</span>
          <span style={{ fontSize: 12, color: "#5a5a68" }}>Newsletter</span>
        </div>
        <span className="overline">Newsletter</span>
        <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", fontSize: "clamp(2rem,5vw,3.5rem)", marginTop: 16 }}>
          The Epistemic Mirror
        </h1>
        <p style={{ marginTop: 16, color: "#7a7a88", lineHeight: 1.7 }}>Weekly philosophical analysis of AI developments.</p>
        <div style={{ display: "flex", gap: 12, maxWidth: 380, margin: "28px auto 0" }}>
          <input type="email" placeholder="your@email.com" className="input" style={{ flex: 1 }} />
          <a
            href="mailto:artur@traceremove.dev?subject=Newsletter%20Subscription&body=I%20would%20like%20to%20subscribe%20to%20The%20Epistemic%20Mirror."
            className="btn-primary"
            style={{ textDecoration: "none", whiteSpace: "nowrap", padding: "12px 24px" }}
          >
            Subscribe
          </a>
        </div>
        <p style={{ fontSize: 12, color: "#3a3a45", marginTop: 10 }}>Free · Unsubscribe anytime</p>
      </div>
    </main>
  );
}

export const metadata = {
  title: "The Epistemic Mirror — Newsletter",
  description: "Weekly philosophical analysis of AI. Free newsletter by Artur Ziganshin.",
};

export default function NewsletterPage() {
  return (
    <main>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="overline">Newsletter</span>
          <h1 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginTop: "16px",
          }}>
            The Epistemic Mirror
          </h1>
          <p style={{ marginTop: "16px", color: "#7a7a88", lineHeight: 1.7 }}>
            Weekly philosophical analysis of AI developments — what machines mean,
            what they risk, and what we owe each other in the age of automation.
          </p>

          <div style={{ display: "flex", gap: "12px", maxWidth: "380px", margin: "28px auto 0", justifyContent: "center" }}>
            <input type="email" placeholder="your@email.com" className="input" style={{ flex: 1 }} />
            <button className="btn-primary" style={{ whiteSpace: "nowrap", padding: "12px 24px" }}>Subscribe</button>
          </div>
          <p style={{ fontSize: "12px", color: "#3a3a45", marginTop: "10px" }}>Free · Unsubscribe anytime</p>
        </div>

        <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.4rem", marginBottom: "20px" }}>
          What you get
        </h2>

        <div style={{ marginBottom: "24px", padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
          <p style={{ color: "#ef5044", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>EVERY TUESDAY</p>
          <p style={{ color: "#f0f0f3", fontSize: "1.05rem", fontWeight: 500, marginBottom: "6px" }}>Weekly Essay</p>
          <p style={{ color: "#7a7a88", fontSize: "14px", lineHeight: 1.6 }}>
            1,500–2,000 words of philosophical analysis of one AI development.
            Recent topics: the epistemology of DeepSeek, whether benchmarks measure
            understanding, dignity in automated hiring.
          </p>
        </div>

        <div style={{ marginBottom: "24px", padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
          <p style={{ color: "#e0ab4e", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>FIRST FRIDAY OF MONTH</p>
          <p style={{ color: "#f0f0f3", fontSize: "1.05rem", fontWeight: 500, marginBottom: "6px" }}>Monthly Deep Dive</p>
          <p style={{ color: "#7a7a88", fontSize: "14px", lineHeight: 1.6 }}>
            3,000–4,000 words. Academic rigor written for general readers.
            Structured as a philosophical paper with clear argument and evidence.
          </p>
        </div>

        <div style={{ marginBottom: "48px", padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
          <p style={{ color: "#6b8aed", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>QUARTERLY</p>
          <p style={{ color: "#f0f0f3", fontSize: "1.05rem", fontWeight: 500, marginBottom: "6px" }}>Research Updates</p>
          <p style={{ color: "#7a7a88", fontSize: "14px", lineHeight: 1.6 }}>
            New papers, conference talks, research directions.
            Plus early access to preprints before public release.
          </p>
        </div>

        <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.4rem", marginBottom: "20px" }}>
          Sample issues
        </h2>
        {[
          "Why DeepSeek Should Make You Question Every AI Benchmark",
          "The Chinese Room Is Not Dead — It Just Got Bigger",
          "What Kant Would Say About Your AI Recruiter",
        ].map((title, i) => (
          <div key={i} style={{
            padding: "16px 0",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ color: "#4a4a58", fontSize: "14px", fontWeight: 600, minWidth: "24px" }}>#{i + 1}</span>
            <span style={{ color: "#d0d0da", fontSize: "15px" }}>{title}</span>
          </div>
        ))}

        <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.4rem", marginTop: "48px", marginBottom: "20px" }}>
          FAQ
        </h2>
        {[
          { q: "Is this free?", a: "Yes, always. No paywalls, no premium tiers." },
          { q: "Who is this for?", a: "Engineers, policymakers, researchers, and anyone thinking seriously about AI's impact on society." },
          { q: "How do I unsubscribe?", a: "One click. No questions asked." },
        ].map((faq, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <p style={{ color: "#d0d0da", fontSize: "15px", fontWeight: 500, marginBottom: "4px" }}>{faq.q}</p>
            <p style={{ color: "#7a7a88", fontSize: "14px", lineHeight: 1.6 }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

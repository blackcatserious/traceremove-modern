import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Consulting & Speaking",
  description: "AI philosophy consulting, epistemic risk assessment, ethics review, and speaking.",
};

export default function ServicesPage() {
  return (
    <main>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "120px 24px 24px" }}>
        <span className="overline">Consulting</span>
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          marginTop: "16px",
        }}>
          Philosophical Clarity for AI Decisions
        </h1>
        <p style={{ marginTop: "12px", color: "#7a7a88", maxWidth: "550px", lineHeight: 1.6 }}>
          Consulting, speaking, and training for organizations navigating the ethical
          and epistemic challenges of artificial intelligence.
        </p>
      </div>

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>

          <div className="card" style={{ padding: "32px" }}>
            <div style={{ fontSize: "12px", color: "#ef5044", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "16px" }}>
              FROM $5,000
            </div>
            <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.3rem", color: "#f0f0f3", marginBottom: "12px" }}>
              Epistemic Risk Assessment
            </h3>
            <p style={{ color: "#7a7a88", fontSize: "15px", lineHeight: 1.7 }}>
              A philosophical evaluation of your AI system's knowledge-production process.
              Where is it genuinely reliable? Where does it produce plausible outputs without
              epistemic grounding? Deliverable: detailed report with risk taxonomy, failure
              mode analysis, and mitigation recommendations.
            </p>
          </div>

          <div className="card" style={{ padding: "32px" }}>
            <div style={{ fontSize: "12px", color: "#e0ab4e", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "16px" }}>
              FROM $3,000
            </div>
            <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.3rem", color: "#f0f0f3", marginBottom: "12px" }}>
              AI Ethics & Governance Review
            </h3>
            <p style={{ color: "#7a7a88", fontSize: "15px", lineHeight: 1.7 }}>
              Evaluation of your AI deployment against established ethical frameworks —
              consequentialist, deontological, and virtue ethics perspectives. Impact analysis
              on human dignity, autonomy, fairness, and consent. Alignment check with EU AI Act
              and emerging regulations.
            </p>
          </div>

          <div className="card" style={{ padding: "32px" }}>
            <div style={{ fontSize: "12px", color: "#6b8aed", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "16px" }}>
              FROM $2,500
            </div>
            <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.3rem", color: "#f0f0f3", marginBottom: "12px" }}>
              Philosophical Foundations Workshop
            </h3>
            <p style={{ color: "#7a7a88", fontSize: "15px", lineHeight: 1.7 }}>
              Half-day or full-day workshop for technical teams. What knowledge is and why
              it matters for AI. The difference between accuracy and understanding. Ethical
              reasoning frameworks for AI design decisions.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px" }}>
        <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.5rem", marginBottom: "16px" }}>
          Speaking
        </h2>
        <p style={{ color: "#7a7a88", lineHeight: 1.7, marginBottom: "16px" }}>
          Available for keynotes, panels, and conference presentations on:
        </p>
        <div style={{ color: "#9a9aaa", fontSize: "15px", lineHeight: 2 }}>
          <p>• The Epistemic Crisis of AI: When Machines Sound Right but Don't Know</p>
          <p>• Human Dignity in the Age of Automation</p>
          <p>• What Language Models Don't Understand</p>
          <p>• Building Ethical AI from Philosophical Foundations</p>
        </div>
        <p style={{ color: "#5a5a68", fontSize: "13px", marginTop: "16px" }}>
          Fee: $2,000–$5,000 depending on event
        </p>
      </div>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "24px 24px 80px", textAlign: "center" }}>
        <div style={{
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}>
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.3rem", color: "#f0f0f3", marginBottom: "12px" }}>
            Ready to bring philosophical rigor to your AI decisions?
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "8px" }}>
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}

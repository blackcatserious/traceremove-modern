import type { CSSProperties, ReactNode } from "react";

export const metadata = {
  title: "Curriculum Vitae",
  description: "Academic CV of Artur Ziganshin — AI philosophy researcher.",
};

export default function CVPage() {
  return (
    <main>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <span className="overline">Curriculum Vitae</span>
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          marginTop: "16px",
        }}>
          Artur Ziganshin
        </h1>
        <p style={{ marginTop: "8px", color: "#7a7a88", fontSize: "1.05rem" }}>
          Master of Philosophy · PhD of Philosophy
        </p>

        <Section title="Research Interests">
          <P>
            My research investigates the epistemic and ethical foundations of artificial
            intelligence, focusing on three interconnected questions: What conditions must
            AI systems satisfy to produce genuine knowledge? How should ethical constraints
            be integrated into AI architecture? And how do we preserve meaningful human
            agency in the face of increasing automation?
          </P>
        </Section>

        <Section title="Education">
          <Item main="PhD of Philosophy" />
          <Item main="Master of Philosophy (MPhil)" />
        </Section>

        <Section title="Research Areas">
          <P>Epistemology of AI — process reliabilism, epistemic risk, machine testimony</P>
          <P>Philosophy of Language & AI — meaning, reference, semantic grounding</P>
          <P>AI Ethics — human dignity, fairness, consent, autonomy</P>
          <P>Philosophy of Mind & AI — consciousness, understanding, agency</P>
          <P>Political Philosophy of AI — governance, regulation, democratic oversight</P>
        </Section>

        <Section title="Publications">
          <P style={{ color: "#5a5a68", fontSize: "13px", marginBottom: "16px" }}>
            All papers available as open-access preprints on PhilArchive.
          </P>
          <CVPaper title="Epistemic Risk Surfaces in Large Language Models" />
          <CVPaper title="The Grounding Problem in Neural Language Models" />
          <CVPaper title="Ethical Architecture: Design Principles for Normative AI" />
          <CVPaper title="Human Dignity and Automated Decision-Making" />
          <CVPaper title="Process Reliabilism and Machine Testimony" />
          <CVPaper title="The Chinese Room Revisited: LLMs and Understanding" />
          <CVPaper title="Democratic Oversight of AI Systems" />
        </Section>

        <Section title="Skills & Languages">
          <P>Languages: Russian (native), English (professional proficiency)</P>
          <P>Technical: Python, data analysis, LLM evaluation, LaTeX</P>
          <P>Research tools: Zotero, PhilPapers, PhilArchive, arXiv</P>
        </Section>

        <Section title="Professional Activities">
          <P>Independent AI philosophy researcher</P>
          <P>Founder, Kazan Philosophical Society</P>
          <P>Author, The Epistemic Mirror (weekly newsletter)</P>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginTop: "48px" }}>
      <h2 style={{
        fontFamily: "'Instrument Serif', Georgia, serif",
        fontSize: "1.5rem",
        color: "#f0f0f3",
        marginBottom: "16px",
        paddingBottom: "8px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function P({ children, style: extraStyle }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p style={{ color: "#9a9aaa", fontSize: "15px", lineHeight: 1.7, marginBottom: "8px", ...extraStyle }}>
      {children}
    </p>
  );
}

function Item({ main, sub }: { main: string; sub?: string }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <p style={{ color: "#d0d0da", fontSize: "15px", fontWeight: 500 }}>{main}</p>
      {sub && <p style={{ color: "#5a5a68", fontSize: "13px" }}>{sub}</p>}
    </div>
  );
}

function CVPaper({ title }: { title: string }) {
  return (
    <p style={{ color: "#9a9aaa", fontSize: "14px", lineHeight: 1.6, marginBottom: "6px", paddingLeft: "12px", borderLeft: "2px solid rgba(255,255,255,0.04)" }}>
      Ziganshin, A. (2025). "{title}." <span style={{ color: "#5a5a68" }}>PhilArchive preprint.</span>
    </p>
  );
}

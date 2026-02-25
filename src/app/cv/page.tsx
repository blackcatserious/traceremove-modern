import { papers } from "@/data/papers";

export default function CVPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-semibold">Curriculum Vitae</h1>

      <section className="card">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>MA Philosophy, Kazan Federal University (2023)</li>
          <li>BA Philosophy, Kazan Federal University (2021)</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">Research Interests</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
          <li>Epistemic risks in foundation models</li>
          <li>Machine agency and normative responsibility</li>
          <li>Ethical architecture for sociotechnical systems</li>
          <li>Human dignity in automated decision-making</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">Publications</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {papers.map((paper) => (
            <li key={paper.title}>
              <strong>{paper.title}</strong> ({paper.year}) — <a className="underline" href={paper.philArchiveUrl} target="_blank" rel="noreferrer">PhilArchive</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="mt-4 text-sm">Philosophy of AI, comparative model analysis, epistemic risk audits, normative systems design, technical writing, and policy communication.</p>
      </section>
    </div>
  );
}

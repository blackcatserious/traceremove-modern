"use client";

import { FormEvent, useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Newsletter</p>
        <h1 className="mt-2 text-4xl font-semibold">The Epistemic Mirror</h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          A focused newsletter on what current AI systems can justify, what they only simulate, and how institutions should respond.
        </p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">What subscribers get</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
          <li>Monthly research notes on epistemic risk</li>
          <li>Curated reading recommendations in philosophy of AI</li>
          <li>Frameworks for responsible model evaluation</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">Join now</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900"
          />
          <button type="submit" className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

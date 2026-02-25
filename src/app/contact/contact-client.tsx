"use client";

import { useState } from "react";

export default function ContactClient() {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
      <section className="space-y-5">
        <h1 className="text-5xl" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>Get in Touch</h1>
        <p className="text-[#4d4d58] dark:text-[#d9d9de]">
          Whether you have a consulting inquiry, speaking invitation, research collaboration proposal, or want to discuss AI philosophy — I would love to hear from you.
        </p>
        <p className="text-sm text-[#6b6b79]">I typically respond within 48 hours.</p>
        <div className="space-y-2 text-sm">
          <p><strong>Email:</strong> <a href="mailto:artur@traceremove.dev" className="text-[#ef5044]">artur@traceremove.dev</a></p>
          <p><strong>PhilArchive:</strong> <a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noreferrer" className="text-[#ef5044]">Profile</a></p>
          <p><strong>ORCID:</strong> <a href="https://orcid.org/0009-0003-8406-9303" target="_blank" rel="noreferrer" className="text-[#ef5044]">0009-0003-8406-9303</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#ef5044]">LinkedIn</a></p>
        </div>
      </section>

      <section className="card p-6">
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            console.log("contact submission", Object.fromEntries(formData.entries()));
            setMessage("Thank you. I'll respond within 48 hours.");
            event.currentTarget.reset();
          }}
        >
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="name">Name</label>
            <input id="name" name="name" required className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm dark:border-white/15 dark:bg-[#1c1c22]" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm dark:border-white/15 dark:bg-[#1c1c22]" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="type">Type</label>
            <select id="type" name="type" className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm dark:border-white/15 dark:bg-[#1c1c22]">
              <option>Consulting</option><option>Speaking</option><option>Research Collaboration</option><option>Media</option><option>General</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm dark:border-white/15 dark:bg-[#1c1c22]" />
          </div>
          <button type="submit" className="rounded-full bg-[#ef5044] px-5 py-2.5 text-sm font-semibold text-white">Submit</button>
          {message ? <p className="text-sm text-emerald-600 dark:text-emerald-400">{message}</p> : null}
        </form>
      </section>
    </div>
  );
}

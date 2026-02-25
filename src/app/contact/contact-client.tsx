"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactClient() {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <span className="overline">Get in Touch</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Contact</h1>
        <p className="mt-4 text-lg text-[#8a8a97] max-w-2xl">
          Whether you have a consulting inquiry, speaking invitation, research collaboration proposal, or want to discuss AI philosophy — I would love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <FadeIn>
          <section className="space-y-5">
            <p className="text-sm text-[#5e5e6c]">I typically respond within 48 hours.</p>
            <div className="space-y-2 text-sm text-[#b0b0bc]">
              <p><strong>Email:</strong> <a href="mailto:artur@traceremove.dev" className="accent-link">artur@traceremove.dev</a></p>
              <p><strong>PhilArchive:</strong> <a href="https://philarchive.org/s/artur%20ziganshin" target="_blank" rel="noreferrer" className="accent-link">Profile</a></p>
              <p><strong>ORCID:</strong> <a href="https://orcid.org/0009-0003-8406-9303" target="_blank" rel="noreferrer" className="accent-link">0009-0003-8406-9303</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="accent-link">LinkedIn</a></p>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="card">
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
                <input id="name" name="name" required className="input" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="input" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="type">Type</label>
                <select id="type" name="type" className="input">
                  <option>Consulting</option><option>Speaking</option><option>Research Collaboration</option><option>Media</option><option>General</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required className="input" />
              </div>
              <button type="submit" className="btn-primary">Submit</button>
              {message ? <p className="text-sm text-emerald-400">{message}</p> : null}
            </form>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}

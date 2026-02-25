export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[2fr_1fr]">
      <section className="card">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">For collaborations, speaking invitations, and consulting inquiries.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
            <input id="name" name="name" required className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <div>
            <label htmlFor="type" className="mb-1 block text-sm font-medium">Inquiry Type</label>
            <select id="type" name="type" className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900">
              <option>Research collaboration</option>
              <option>Consulting</option>
              <option>Speaking</option>
              <option>Media</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={6} required className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <button type="submit" className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
            Send message
          </button>
        </form>
      </section>

      <aside className="card h-fit">
        <h2 className="text-2xl font-semibold">Contact Info</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li><strong>Email:</strong> hello@traceremove.com</li>
          <li><strong>Newsletter:</strong> The Epistemic Mirror</li>
          <li><strong>Response time:</strong> 2–4 business days</li>
          <li><strong>Location:</strong> Remote / Europe</li>
        </ul>
      </aside>
    </div>
  );
}

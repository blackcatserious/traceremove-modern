# traceremove.dev

A production-ready Next.js 15 site for **Traceremove** (Arthur Ziganshin), focused on AI philosophy research, long-form MDX articles, services inquiries, and newsletter growth.

## Tech stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS
- MDX content pipeline
- Vercel deployment
- GitHub Actions CI/CD

## Local setup

1. Clone the repository.
2. Install dependencies.
3. Configure environment variables.
4. Run development server.

```bash
git clone <your-repo-url>
cd traceremove-modern
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev      # Local development
npm run lint     # ESLint checks
npm run build    # Production build validation
npm run start    # Run production build locally
```

## Deployment

### Vercel

This project includes a ready-to-use `vercel.json` with redirects, cache policy, and security headers.

Deploy manually:

```bash
npm i -g vercel
vercel
```

Deploy to production:

```bash
vercel --prod
```

### GitHub Actions CI/CD

Workflow file: `.github/workflows/ci.yml`

- On PRs to `main`: runs lint, typecheck, build, then Vercel **preview deploy**.
- On pushes to `main`: runs lint, typecheck, build, then Vercel **production deploy**.

Required repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

> `vercel pull` reads project linkage from `.vercel/project.json` or from org/project IDs configured for the token.

## Content management (MDX articles)

Long-form content lives under `content/articles`.

### Add a new article

1. Create a new `.mdx` file in `content/articles/` (slug = filename).
2. Add frontmatter at the top.
3. Write content using Markdown + JSX-compatible MDX.
4. Visit `/articles/<slug>` locally to verify rendering.

Example:

```mdx
---
title: "Your Article Title"
excerpt: "Short summary"
publishedAt: "2026-01-01"
author: "Arthur Ziganshin"
tags:
  - ai-philosophy
  - governance
---

## Section title

Your content here.
```

## Environment variables

Documented in `.env.example`.

### Required

- `NEXT_PUBLIC_SITE_URL`: canonical site URL.
- `CONTACT_FORM_ENDPOINT`: endpoint used for contact submission fallback.
- `NEWSLETTER_API_KEY`: API key for newsletter provider integrations (e.g., Buttondown).
- `ANALYTICS_ID`: analytics property/site id.

### Integrations used by current app

- `HUBSPOT_PORTAL_ID`
- `HUBSPOT_CONTACT_FORM_ID`
- `HUBSPOT_NEWSLETTER_FORM_ID`
- `FORMSPREE_ENDPOINT`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` (optional)

## Notes

- Keep route redirects in both `next.config.js` and `vercel.json` aligned.
- Update CSP directives in `vercel.json` if you add new third-party scripts/APIs.

let articles: any[] = [];
try {
  const m = require("@/data/articles");
  articles = m.articles || m.default || [];
} catch {}

export async function GET() {
  const base = "https://traceremove.dev";

  const items = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      (a) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${base}/articles/${a.slug}</link>
      <guid isPermaLink="true">${base}/articles/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description><![CDATA[${a.excerpt}]]></description>
      <author>artur@traceremove.dev (Artur Ziganshin)</author>
      ${(a.tags || []).map((t: string) => `<category>${t}</category>`).join("\n      ")}
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Artur Ziganshin — AI Philosophy Research</title>
    <link>${base}</link>
    <description>Philosophical research on epistemic risks, ethical architecture, and AI foundations.</description>
    <language>en</language>
    <managingEditor>artur@traceremove.dev (Artur Ziganshin)</managingEditor>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let title = humanizeSlug(slug);
  let tags = "";

  try {
    const { articles } = await import("@/data/articles");
    const article = articles.find((a) => a.slug === slug);
    if (article) {
      title = article.title;
      tags = article.tags.slice(0, 3).join(" · ");
    }
  } catch {
    // keep fallback title/tags for edge safety
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0f",
          color: "#e8e8ec",
          fontFamily: "Georgia, serif",
        }}
      >
        <div>
          <div style={{ fontSize: 14, color: "#ef5044", letterSpacing: "0.2em", marginBottom: 32 }}>
            TRACEREMOVE · AI PHILOSOPHY
          </div>
          <div style={{ fontSize: 52, lineHeight: 1.15, maxWidth: 900 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 20, color: "#8a8a97" }}>Artur Ziganshin</div>
          <div style={{ fontSize: 16, color: "#5e5e6c" }}>{tags}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

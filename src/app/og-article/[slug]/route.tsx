import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  request: Request,
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  const title = slug
    .split("-")
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

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
          background: "linear-gradient(135deg, #0a0a0f 0%, #151520 100%)",
          color: "#e8e8ec",
          fontFamily: "Georgia, serif",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 14,
              color: "#ef5044",
              letterSpacing: "0.25em",
              marginBottom: 36,
              textTransform: "uppercase" as const,
            }}
          >
            traceremove · AI Philosophy
          </div>
          <div style={{ fontSize: 48, lineHeight: 1.12, maxWidth: 850 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 20, color: "#7a7a88" }}>Artur Ziganshin</div>
          <div style={{ fontSize: 16, color: "#4a4a58" }}>traceremove.dev</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

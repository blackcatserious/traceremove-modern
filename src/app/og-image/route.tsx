import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #151520 100%)",
          color: "#e8e8ec",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#ef5044",
            letterSpacing: "0.25em",
            marginBottom: 28,
            textTransform: "uppercase" as const,
          }}
        >
          AI Philosophy Research
        </div>
        <div style={{ fontSize: 60, lineHeight: 1.08, marginBottom: 36, maxWidth: 800 }}>
          What machines mean, what they risk, what we owe.
        </div>
        <div style={{ fontSize: 22, color: "#7a7a88" }}>Artur Ziganshin · traceremove.dev</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

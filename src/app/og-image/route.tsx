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
          background: "#0a0a0f",
          color: "#e8e8ec",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 20, color: "#ef5044", letterSpacing: "0.2em", marginBottom: 24 }}>
          AI PHILOSOPHY RESEARCH
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.1, marginBottom: 32 }}>
          {"What machines mean,"}
          <br />
          {"what they risk,"}
          <br />
          {"what we owe."}
        </div>
        <div style={{ fontSize: 22, color: "#8a8a97" }}>Artur Ziganshin · traceremove.dev</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

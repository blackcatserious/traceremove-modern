import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px',
          background: 'linear-gradient(135deg, #0f3460 0%, #16213e 60%, #1a1a2e 100%)',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9 }}>Traceremove</div>
        <div style={{ marginTop: 18, fontSize: 58, lineHeight: 1.1, fontWeight: 700, maxWidth: 900 }}>
          Artur Ziganshin — AI Philosophy Research
        </div>
        <div style={{ marginTop: 24, fontSize: 28, opacity: 0.92, maxWidth: 980 }}>
          Epistemic risks · Ethical architecture · Philosophy of AI
        </div>
      </div>
    ),
    { ...size },
  );
}

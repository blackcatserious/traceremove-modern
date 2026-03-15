import { NextRequest, NextResponse } from "next/server";

const SYS = `You are a philosophical assistant on traceremove.dev by Artur Ziganshin (MPhil, PhD Philosophy). Provide rigorous philosophical analysis of AI. Draw on epistemology, philosophy of language, ethics (Kantian, virtue, capabilities), philosophy of mind. Style: 2-4 paragraphs, concrete examples, acknowledge uncertainty. Reference specific thinkers. Stay on philosophy/AI/ethics topics.`;

export async function POST(req: NextRequest) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return NextResponse.json({ error: "No API key" }, { status: 503 });
  try {
    const { messages } = await req.json();
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: SYS }, ...messages.slice(-10)],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return NextResponse.json({ content: data.choices[0].message.content });
  } catch {
    return NextResponse.json({ error: "API error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a philosophical assistant on traceremove.dev, the research platform of Artur Ziganshin, an AI philosophy researcher (MPhil, PhD Philosophy).

Provide thoughtful, rigorous philosophical analysis. Draw on epistemology, philosophy of language, ethics (Kantian, virtue, capabilities), and philosophy of mind.

Style: intellectually rigorous but accessible, 2-4 paragraphs, concrete examples, acknowledge uncertainty. Reference specific thinkers and concepts. When relevant, mention Artur's work on epistemic risks.

Stay on topic: philosophy, AI, technology, ethics. Politely redirect other topics.`;

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "No API key configured" }, { status: 503 });
  }

  try {
    const { messages } = await request.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...(messages ?? []).slice(-10)],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "OpenAI error" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ content: data.choices?.[0]?.message?.content ?? "" });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

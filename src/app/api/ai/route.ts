import { NextResponse } from 'next/server';
import { aiGenerate } from '@/lib/ai/traceremoveNet';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await aiGenerate(body);
    return NextResponse.json(data, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'AI error' }, { status: 500 });
  }
}

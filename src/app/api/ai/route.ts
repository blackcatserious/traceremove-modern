import { NextResponse } from 'next/server';
import { aiGenerate } from '@/lib/ai/traceremoveNet';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await aiGenerate(body);
    return NextResponse.json(data, { status: 200 });
  } catch (e: unknown) {
    let message = 'AI error';
    if (e instanceof Error) {
      message = e.message;
    } else if (typeof e === 'object' && e !== null && 'message' in e) {
      const m = (e as Record<string, unknown>).message;
      message = typeof m === 'string' ? m : 'AI error';
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

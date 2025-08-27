import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.redirect(new URL('/whitepapers', process.env.NEXT_PUBLIC_SITE_URL || 'https://traceremove.dev'), 308);
}

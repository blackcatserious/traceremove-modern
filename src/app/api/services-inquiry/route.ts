import { NextResponse } from 'next/server';

type InquiryPayload = {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
  inquiryType?: 'Consulting' | 'Speaking' | 'Research' | 'Other';
};

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;

export async function POST(request: Request) {
  const body = (await request.json()) as InquiryPayload;

  if (!body.name || !body.email || !body.organization || !body.message || !body.inquiryType) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  if (!FORMSPREE_ENDPOINT) {
    return NextResponse.json(
      { error: 'Form endpoint is not configured. Set FORMSPREE_ENDPOINT.' },
      { status: 500 },
    );
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      organization: body.organization,
      message: body.message,
      inquiryType: body.inquiryType,
      source: 'services-page',
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    return NextResponse.json({ error: 'Failed to deliver inquiry.', details }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

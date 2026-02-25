import { NextResponse } from 'next/server';

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const HUBSPOT_CONTACT_FORM_ID = process.env.HUBSPOT_CONTACT_FORM_ID;
const HUBSPOT_NEWSLETTER_FORM_ID = process.env.HUBSPOT_NEWSLETTER_FORM_ID;

type HubspotPayload = {
  formType: 'contact' | 'newsletter';
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  pageUri?: string;
  pageName?: string;
};

export async function POST(request: Request) {
  let body: HubspotPayload | null = null;

  try {
    body = (await request.json()) as HubspotPayload;
  } catch (error) {
    console.error(error);
  }

  if (!body || !body.formType) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const portalId = HUBSPOT_PORTAL_ID;
  const formId =
    body.formType === 'contact' ? HUBSPOT_CONTACT_FORM_ID : HUBSPOT_NEWSLETTER_FORM_ID;

  if (!portalId || !formId) {
    return NextResponse.json({ error: 'HubSpot configuration missing' }, { status: 500 });
  }

  const fields = [];

  if (body.formType === 'contact') {
    if (!body.email || !body.name || !body.subject || !body.message) {
      return NextResponse.json({ error: 'Missing contact fields' }, { status: 400 });
    }

    fields.push({ name: 'firstname', value: body.name });
    fields.push({ name: 'email', value: body.email });
    fields.push({ name: 'subject', value: body.subject });
    fields.push({ name: 'message', value: body.message });
  } else {
    if (!body.email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    fields.push({ name: 'email', value: body.email });
  }

  const payload = {
    fields,
    context: {
      pageUri: body.pageUri,
      pageName: body.pageName,
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    return NextResponse.json(
      { error: 'HubSpot submission failed', details },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

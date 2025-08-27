export async function GET() {
  const headers = new Headers();
  headers.set('Content-Type', 'image/png');
  return new Response(new Uint8Array(), { status: 200, headers });
}

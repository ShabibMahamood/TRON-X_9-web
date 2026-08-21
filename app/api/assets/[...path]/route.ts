import { NextRequest } from 'next/server';
import { Buffer } from 'node:buffer';

const allowed = new Set([
  'Afterglow.png',
  'MetaSploit.png',
  'Gobuster.png',
  'SetMeFree.jpg',
  'On & On (1).png',
  '12HouRPNG.png',
  'TRON!X9NEWDP.jpg',
]);

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  const name = decodeURIComponent(params.path.join('/'));
  const match = name.match(/^(?:artworks|profile)\/(.+)$/);
  const filename = match?.[1];

  if (!filename || !allowed.has(filename)) {
    return new Response('Not found', { status: 404 });
  }

  const upstream = `${request.nextUrl.origin}/__asset-proxy/${encodeURIComponent(filename)}`;
  return Response.redirect(upstream, 307);
}

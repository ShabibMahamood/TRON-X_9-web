import { NextRequest, NextResponse } from 'next/server';
import { sql } from '../../../../lib/db';

export const dynamic = 'force-dynamic';

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `release-${Date.now()}`;
}

export async function GET() {
  try {
    const releases = await sql`
      SELECT id, title, type, date, artwork,
             spotify, apple_music AS "appleMusic",
             youtube, soundcloud, published
      FROM releases
      ORDER BY created_at DESC
    `;
    return NextResponse.json({ releases });
  } catch (error) {
    console.error('GET /api/admin/releases failed', error);
    return NextResponse.json({ error: 'database unavailable' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body?.title || !body?.artwork) {
      return NextResponse.json({ error: 'title and artwork are required' }, { status: 400 });
    }

    const baseId = slugify(String(body.title).trim());
    const existing = await sql`SELECT id FROM releases WHERE id LIKE ${baseId + '%'} ORDER BY id`;
    const used = new Set(existing.map((row) => String(row.id)));
    let id = baseId;
    let suffix = 2;
    while (used.has(id)) id = `${baseId}-${suffix++}`;

    const title = String(body.title).trim();
    const type = String(body.type ?? 'Single').trim();
    const date = String(body.date ?? new Date().getFullYear()).trim();
    const artwork = String(body.artwork).trim();
    const spotify = body.spotify ? String(body.spotify).trim() : null;
    const appleMusic = body.appleMusic ? String(body.appleMusic).trim() : null;
    const youtube = body.youtube ? String(body.youtube).trim() : null;
    const soundcloud = body.soundcloud ? String(body.soundcloud).trim() : null;
    const published = body.published !== false;

    const [release] = await sql`
      INSERT INTO releases (id, title, type, date, artwork, spotify, apple_music, youtube, soundcloud, published)
      VALUES (${id}, ${title}, ${type}, ${date}, ${artwork}, ${spotify}, ${appleMusic}, ${youtube}, ${soundcloud}, ${published})
      RETURNING id, title, type, date, artwork,
                spotify, apple_music AS "appleMusic",
                youtube, soundcloud, published
    `;

    return NextResponse.json(release, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/releases failed', error);
    return NextResponse.json({ error: 'could not create release' }, { status: 500 });
  }
}

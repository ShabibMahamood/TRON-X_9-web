import { NextRequest, NextResponse } from 'next/server';
import { readStore, writeStore, type StoredRelease } from '../../../../lib/cms-store';

export async function GET() {
  const store = await readStore();
  return NextResponse.json(store);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body?.title || !body?.artwork) {
      return NextResponse.json({ error: 'title and artwork are required' }, { status: 400 });
    }

    const store = await readStore();
    const baseId = String(body.title)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || `release-${Date.now()}`;

    const existingIds = new Set(store.releases.map((item) => item.id));
    let id = baseId;
    let suffix = 2;
    while (existingIds.has(id)) id = `${baseId}-${suffix++}`;

    const release: StoredRelease = {
      id,
      title: String(body.title).trim(),
      type: String(body.type ?? 'Single').trim(),
      date: String(body.date ?? new Date().getFullYear()).trim(),
      artwork: String(body.artwork).trim(),
      ...(body.spotify ? { spotify: String(body.spotify).trim() } : {}),
      ...(body.appleMusic ? { appleMusic: String(body.appleMusic).trim() } : {}),
      ...(body.youtube ? { youtube: String(body.youtube).trim() } : {}),
      ...(body.soundcloud ? { soundcloud: String(body.soundcloud).trim() } : {}),
      published: body.published !== false,
    };

    const nextStore = {
      ...store,
      releases: [release, ...store.releases],
      latestReleaseId: body.makeLatest === true ? id : store.latestReleaseId,
    };

    await writeStore(nextStore);
    return NextResponse.json(release, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 });
  }
}

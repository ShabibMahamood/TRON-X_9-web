import { NextRequest, NextResponse } from 'next/server';
import { readStore, writeStore } from '../../../../lib/cms-store';

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
    const release = {
      title: String(body.title).trim(),
      type: String(body.type ?? 'Single').trim(),
      date: String(body.date ?? new Date().getFullYear()).trim(),
      artwork: String(body.artwork).trim(),
      spotify: body.spotify ? String(body.spotify).trim() : undefined,
      appleMusic: body.appleMusic ? String(body.appleMusic).trim() : undefined,
      youtube: body.youtube ? String(body.youtube).trim() : undefined,
      soundcloud: body.soundcloud ? String(body.soundcloud).trim() : undefined,
      published: body.published !== false,
    };
    const nextStore = { ...store, releases: [release, ...store.releases] };
    await writeStore(nextStore);
    return NextResponse.json(release, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 });
  }
}

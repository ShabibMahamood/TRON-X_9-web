import { NextResponse } from 'next/server';
import { readStore } from '../../../../lib/cms-store';

export async function GET() {
  const store = await readStore();
  return NextResponse.json(store);
}

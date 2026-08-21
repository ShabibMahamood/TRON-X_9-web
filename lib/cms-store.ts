import fs from 'node:fs/promises';
import path from 'node:path';

export type StoredRelease = {
  id: string;
  title: string;
  type: string;
  date: string;
  artwork: string;
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
  soundcloud?: string;
  published: boolean;
};

type Store = {
  releases: StoredRelease[];
  latestReleaseId: string;
};

const dataDir = path.join(process.cwd(), '.data');
const storePath = path.join(dataDir, 'releases.json');

async function ensureStore() {
  try {
    await fs.access(storePath);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
    const { releases } = await import('../data/releases');
    const initial: Store = {
      releases: releases.map((release, index) => ({
        id: release.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        ...release,
        published: true,
      })),
      latestReleaseId: releases[0] ? releases[0].title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '',
    };
    await fs.writeFile(storePath, JSON.stringify(initial, null, 2), 'utf8');
  }
}

export async function readStore(): Promise<Store> {
  await ensureStore();
  return JSON.parse(await fs.readFile(storePath, 'utf8')) as Store;
}

export async function writeStore(store: Store) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(storePath, JSON.stringify(store, null, 2), 'utf8');
}

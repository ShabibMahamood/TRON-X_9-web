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

export type Store = {
  releases: StoredRelease[];
  latestReleaseId: string;
};

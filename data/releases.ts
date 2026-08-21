export type Release = {
  title: string;
  type: string;
  date: string;
  artwork: string;
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
  soundcloud?: string;
};

export const releases: Release[] = [
  { title: 'AFTERGLOW', type: 'Single', date: '2026', artwork: '/artworks/afterglow.png' },
  { title: 'METASPLOIT', type: 'Single', date: '2026', artwork: '/artworks/metasploit.png' },
  { title: 'GOBUSTER', type: 'Single', date: '2026', artwork: '/artworks/gobuster.png' },
  { title: 'SET ME FREE', type: 'Single', date: '2026', artwork: '/artworks/set-me-free.jpg' },
  { title: 'ON & ON', type: 'Single', date: '2026', artwork: '/artworks/on-and-on.png' },
  { title: '12 HOURS', type: 'Single', date: '2026', artwork: '/artworks/12-hours.png' }
];

export const latestRelease = releases[0];

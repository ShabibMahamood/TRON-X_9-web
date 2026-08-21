export type Release = {
  title: string;
  type: string;
  date: string;
  artwork: string;
  spotify?: string;
  youtube?: string;
  soundcloud?: string;
};

export const releases: Release[] = [
  { title: 'AFTERGLOW', type: 'Single', date: '2026', artwork: '/New%20Artworks/Afterglow.png' },
  { title: 'METASPLOIT', type: 'Single', date: '2026', artwork: '/New%20Artworks/MetaSploit.png' },
  { title: 'GOBUSTER', type: 'Single', date: '2026', artwork: '/New%20Artworks/Gobuster.png' },
  { title: 'SET ME FREE', type: 'Single', date: '2026', artwork: '/New%20Artworks/SetMeFree.jpg' },
  { title: 'ON & ON', type: 'Single', date: '2026', artwork: '/New%20Artworks/On%20%26%20On%20(1).png' },
  { title: '12 HOURS', type: 'Single', date: '2026', artwork: '/New%20Artworks/12HouRPNG.png' }
];

export const latestRelease = releases[0];

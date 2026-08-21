import Link from 'next/link';

const socials = [
  ['Instagram', '#'],
  ['YouTube', '#'],
  ['Spotify', '#'],
  ['SoundCloud', '#'],
  ['TikTok', '#']
];

export default function SocialPage(){return <main className="shell"><nav className="nav"><Link className="brand" href="/">TRON!X 9</Link><div className="links"><Link href="/releases">Releases</Link><Link href="/about">About</Link><Link href="/social">Social</Link></div></nav><section className="section"><div className="eyebrow">Follow the project</div><h2>SOCIAL</h2><div className="grid">{socials.map(([name,url])=><a className="button" key={name} href={url}>{name}</a>)}</div></section></main>}

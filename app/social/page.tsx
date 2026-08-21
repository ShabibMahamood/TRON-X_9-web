import Link from 'next/link';

const socials = [
  ['Instagram', '#', 'Visuals & updates'],
  ['YouTube', '#', 'Music videos & visualizers'],
  ['Spotify', '#', 'Stream the releases'],
  ['SoundCloud', '#', 'Listen to the archive'],
  ['TikTok', '#', 'Short-form clips & edits']
];

export default function SocialPage(){return <main className="shell"><nav className="nav glass-nav"><Link className="brand" href="/">TRON!X 9</Link><div className="links"><Link href="/releases">Releases</Link><Link href="/about">About</Link><Link href="/social">Social</Link></div></nav><section className="social-page reveal-in"><div className="eyebrow">Follow the project</div><h1 className="display-title">SOCIAL</h1><div className="social-list">{socials.map(([name,url,desc],i)=><a className="social-row" key={name} href={url}><span className="social-no">0{i+1}</span><span className="social-name">{name}</span><span className="social-desc">{desc}</span><span className="social-arrow">↗</span></a>)}</div></section></main>}

import Link from 'next/link';
import { releases } from '@/data/releases';

export default function ReleasesPage() {
  return <main className="shell"><nav className="nav"><Link className="brand" href="/">TRON!X 9</Link><div className="links"><Link href="/releases">Releases</Link><Link href="/about">About</Link><Link href="/social">Social</Link></div></nav><section className="section"><div className="eyebrow">Discography</div><h2>RELEASES</h2><div className="grid">{releases.map((release) => <article className="card" key={release.title}><img src={release.artwork} alt={release.title} /><h3>{release.title}</h3><span>{release.type} · {release.date}</span><div>{release.spotify && <a className="button" href={release.spotify}>Spotify</a>}</div></article>)}</div></section></main>}

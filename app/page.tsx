import Link from 'next/link';
import { latestRelease, releases } from '../data/releases';
import { FadeIn, Reveal } from '../components/Motion';

export default function Home() {
  return (
    <>
      <main className="shell">
        <nav className="nav"><Link className="brand" href="/">TRON!X 9</Link><div className="links"><Link href="/releases">Releases</Link><Link href="/about">About</Link><Link href="/social">Social</Link></div></nav>
        <section className="hero">
          <FadeIn><div className="eyebrow">Electronic artist / producer</div><h1>TRON!X<br/>9</h1><p>Electronic music built for impact. From atmospheric tension to high-energy drops, TRON!X 9 moves across modern EDM without losing its identity.</p><Link className="button" href="/releases">Explore releases</Link></FadeIn>
          <Reveal><div className="art"><img src={latestRelease.artwork} alt={`${latestRelease.title} artwork`} /><div className="tag">Latest release — {latestRelease.title}</div></div></Reveal>
        </section>
        <section className="section"><div className="section-head"><FadeIn><div><div className="eyebrow">Selected music</div><h2>RELEASES</h2></div></FadeIn><Link className="button" href="/releases">View all</Link></div><div className="grid">{releases.slice(0,3).map((release,i)=><FadeIn key={release.title} delay={i*.08}><article className="card"><img src={release.artwork} alt={release.title}/><h3>{release.title}</h3><span>{release.type} · {release.date}</span></article></FadeIn>)}</div></section>
      </main><footer className="footer shell">© {new Date().getFullYear()} TRON!X 9</footer>
    </>
  );
}

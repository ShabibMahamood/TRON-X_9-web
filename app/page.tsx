import Link from 'next/link';
import { releases } from '../data/releases';
import { FadeIn, Reveal } from '../components/Motion';

const latestRelease = releases[0];

export default function Home() {
  return (
    <main className="home-page">
      <div className="shell">
        <nav className="nav">
          <Link className="brand" href="/">TRON!X 9</Link>
          <div className="links">
            <Link href="/releases">Releases</Link>
            <Link href="/about">About</Link>
            <Link href="/social">Social</Link>
          </div>
        </nav>

        <section className="hero hero-flagship">
          <FadeIn>
            <div className="hero-copy">
              <div className="eyebrow">Electronic artist / producer</div>
              <h1>TRON!X<br />9</h1>
              <p className="hero-lead">Modern electronic music with cinematic atmosphere, club energy and a visual identity built to move.</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/releases">Explore releases</Link>
                <Link className="text-link" href="/about">Discover the artist <span>↗</span></Link>
              </div>
            </div>
          </FadeIn>

          <Reveal>
            <div className="feature-art feature-art-home">
              <div className="feature-art-label"><span>01</span><span>Latest release</span></div>
              <img src={latestRelease.artwork} alt={`${latestRelease.title} artwork`} />
              <div className="feature-caption">
                <div>
                  <span className="eyebrow">{latestRelease.type} · {latestRelease.date}</span>
                  <h2>{latestRelease.title}</h2>
                </div>
                <Link className="circle-link" href="/releases" aria-label="Open releases">↗</Link>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="marquee-band" aria-hidden="true">
          <div className="marquee-track">
            <span>TRON!X 9</span><span>•</span><span>NEW ELECTRONIC ENERGY</span><span>•</span><span>TRON!X 9</span><span>•</span><span>NEW ELECTRONIC ENERGY</span>
          </div>
        </section>

        <section className="section spotlight-section">
          <div className="section-head">
            <FadeIn>
              <div>
                <div className="eyebrow">Selected music</div>
                <h2>RELEASES</h2>
              </div>
            </FadeIn>
            <Link className="button button-ghost" href="/releases">View all</Link>
          </div>

          <div className="spotlight-grid">
            {releases.slice(0, 3).map((release, i) => (
              <FadeIn key={release.title} delay={i * 0.08}>
                <article className={`spotlight-card spotlight-${i + 1}`}>
                  <img src={release.artwork} alt={release.title} />
                  <div className="spotlight-overlay" />
                  <div className="spotlight-meta">
                    <span>{String(i + 1).padStart(2, '0')} / {release.type}</span>
                    <h3>{release.title}</h3>
                    <small>{release.date}</small>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="home-closing">
          <FadeIn>
            <div className="eyebrow">Keep listening</div>
            <h2>THE NEXT<br />DROP IS CLOSER.</h2>
            <Link className="button button-primary" href="/social">Follow TRON!X 9</Link>
          </FadeIn>
        </section>

        <footer className="footer">© {new Date().getFullYear()} TRON!X 9</footer>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { releases } from '../../data/releases';

export default function ReleasesPage() {
  return (
    <main className="shell">
      <nav className="nav glass-nav">
        <Link className="brand" href="/">TRON!X 9</Link>
        <div className="links">
          <Link href="/releases">Releases</Link>
          <Link href="/about">About</Link>
          <Link href="/social">Social</Link>
        </div>
      </nav>

      <section className="page-intro reveal-in">
        <div className="eyebrow">Discography</div>
        <div className="title-row">
          <h1 className="display-title">RELEASES</h1>
          <span className="count">{String(releases.length).padStart(2, '0')} RECORDS</span>
        </div>
      </section>

      <section className="release-list">
        {releases.map((release, index) => (
          <article className="release-row reveal-in" key={release.title}>
            <div className="release-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="release-art">
              <img src={release.artwork} alt={`${release.title} artwork`} />
            </div>
            <div className="release-meta">
              <div className="eyebrow">{release.type} · {release.date}</div>
              <h2>{release.title}</h2>
              <div className="release-links">
                {release.spotify && <a href={release.spotify} target="_blank" rel="noreferrer">Spotify ↗</a>}
                {release.appleMusic && <a href={release.appleMusic} target="_blank" rel="noreferrer">Apple Music ↗</a>}
                {release.youtube && <a href={release.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>}
                {release.soundcloud && <a href={release.soundcloud} target="_blank" rel="noreferrer">SoundCloud ↗</a>}
                {!release.spotify && !release.appleMusic && !release.youtube && !release.soundcloud && (
                  <span className="muted-link">Streaming links coming soon</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

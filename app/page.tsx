import Link from 'next/link';

const releases = [
  { title: 'AFTERGLOW', type: 'Latest release', image: '/New%20Artworks/Afterglow.png' },
  { title: 'METASPLOIT', type: 'Single', image: '/New%20Artworks/MetaSploit.png' },
  { title: 'GOBUSTER', type: 'Single', image: '/New%20Artworks/Gobuster.png' },
];

export default function Home() {
  return (
    <>
      <main className="shell">
        <nav className="nav">
          <Link className="brand" href="/">TRON!X 9</Link>
          <div className="links">
            <Link href="/releases">Releases</Link>
            <Link href="/about">About</Link>
            <Link href="/social">Social</Link>
          </div>
        </nav>

        <section className="hero">
          <div>
            <div className="eyebrow">Electronic artist / producer</div>
            <h1>TRON!X<br />9</h1>
            <p>
              Electronic music built for impact. From atmospheric tension to high-energy drops,
              TRON!X 9 moves across modern EDM without losing its identity.
            </p>
            <Link className="button" href="/releases">Explore releases</Link>
          </div>
          <div className="art">
            <img src={releases[0].image} alt="Afterglow artwork" />
            <div className="tag">Now playing — Afterglow</div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <div className="eyebrow">Selected music</div>
              <h2>RELEASES</h2>
            </div>
            <Link className="button" href="/releases">View all</Link>
          </div>
          <div className="grid">
            {releases.map((release) => (
              <article className="card" key={release.title}>
                <img src={release.image} alt={`${release.title} artwork`} />
                <h3>{release.title}</h3>
                <span>{release.type}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer shell">© {new Date().getFullYear()} TRON!X 9</footer>
    </>
  );
}

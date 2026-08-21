import Link from 'next/link';
import { releases } from '../../data/releases';

export default function AdminPage() {
  return (
    <main className="admin-page shell">
      <nav className="nav">
        <Link className="brand" href="/">TRON!X 9</Link>
        <div className="links"><Link href="/">View site</Link></div>
      </nav>

      <section className="admin-header">
        <div>
          <div className="eyebrow">Private workspace</div>
          <h1 className="display-title">ADMIN</h1>
          <p>Manage releases and artist content from one place.</p>
        </div>
        <button className="button button-primary" type="button">+ New release</button>
      </section>

      <section className="admin-panel">
        <div className="admin-panel-head">
          <div><div className="eyebrow">Music library</div><h2>RELEASES</h2></div>
          <span className="count">{String(releases.length).padStart(2, '0')} RECORDS</span>
        </div>
        <div className="admin-table">
          {releases.map((release, index) => (
            <article className="admin-release" key={release.title}>
              <div className="admin-release-art"><img src={release.artwork} alt="" /></div>
              <div className="admin-release-main">
                <span className="admin-index">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{release.title}</h3><p>{release.type} · {release.date}</p></div>
              </div>
              <span className="admin-status">Published</span>
              <button className="admin-action" type="button">Edit</button>
            </article>
          ))}
        </div>
      </section>

      <section className="admin-panel admin-coming">
        <div className="eyebrow">Next</div>
        <h2>CONTENT CONTROL</h2>
        <p>The next CMS pass will connect this interface to persistent storage, authentication, artwork uploads and publish controls.</p>
      </section>
    </main>
  );
}

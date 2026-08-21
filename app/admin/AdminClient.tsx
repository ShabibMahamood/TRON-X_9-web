'use client';

import { useEffect, useState } from 'react';

type Release = {
  title: string;
  type: string;
  date: string;
  artwork: string;
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
  soundcloud?: string;
};

export default function AdminClient() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [title, setTitle] = useState('');
  const [artwork, setArtwork] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  async function load() {
    const response = await fetch('/api/admin/releases', { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to load releases');
    const data = await response.json();
    setReleases(data.releases ?? []);
  }

  useEffect(() => {
    load().catch(() => setMessage('Could not load release library.'));
  }, []);

  async function createRelease(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      const response = await fetch('/api/admin/releases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, artwork, type: 'Single', date: String(new Date().getFullYear()) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Save failed');
      setTitle('');
      setArtwork('');
      await load();
      setMessage('Release saved.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <section className="admin-header">
        <div>
          <div className="eyebrow">Private workspace</div>
          <h1 className="display-title">ADMIN</h1>
          <p>Manage releases without editing website code.</p>
        </div>
      </section>

      <section className="admin-panel">
        <div className="admin-panel-head"><div><div className="eyebrow">Quick publish</div><h2>NEW RELEASE</h2></div></div>
        <form className="admin-form" onSubmit={createRelease}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Release title" required />
          <input value={artwork} onChange={(e) => setArtwork(e.target.value)} placeholder="Artwork URL / public path" required />
          <button className="button button-primary" disabled={saving}>{saving ? 'Saving…' : 'Publish release'}</button>
        </form>
        {message && <p className="admin-message">{message}</p>}
      </section>

      <section className="admin-panel">
        <div className="admin-panel-head"><div><div className="eyebrow">Music library</div><h2>RELEASES</h2></div><span className="count">{String(releases.length).padStart(2, '0')} RECORDS</span></div>
        <div className="admin-table">
          {releases.map((release, index) => (
            <article className="admin-release" key={`${release.title}-${index}`}>
              <div className="admin-release-art"><img src={release.artwork} alt="" /></div>
              <div className="admin-release-main"><span className="admin-index">{String(index + 1).padStart(2, '0')}</span><div><h3>{release.title}</h3><p>{release.type} · {release.date}</p></div></div>
              <span className="admin-status">Published</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

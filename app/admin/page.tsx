import Link from 'next/link';
import AdminClient from './AdminClient';

export default function AdminPage() {
  return (
    <main className="admin-page shell">
      <nav className="nav">
        <Link className="brand" href="/">TRON!X 9</Link>
        <div className="links"><Link href="/">View site</Link></div>
      </nav>
      <AdminClient />
    </main>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TRON!X 9 — Official',
  description: 'Official website of TRON!X 9, electronic music producer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

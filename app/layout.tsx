import type { Metadata } from 'next';
import './globals.css';
import { sitePath } from '@/lib/site-path';
export const metadata: Metadata = {
  title: 'GWC Information Systems, LLC | Sage Accounting Software Consulting',
  description: 'Sage accounting software consulting for small and mid-size businesses in Los Angeles and beyond.',
  robots: { index: process.env.GITHUB_PAGES_BUILD === '1', follow: process.env.GITHUB_PAGES_BUILD === '1' },
  icons: { icon: sitePath('/favicon.svg') },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

export const dynamic = 'force-static';

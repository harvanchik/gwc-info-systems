import type { Metadata } from 'next';
import './globals.css';
import { sitePath } from '@/lib/site-path';
import { siteUrl, seoDescription } from '@/lib/seo';
const title = 'GWC Information Systems | Sage 100 Implementation, Training & Support';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: seoDescription,
  alternates: { canonical: siteUrl },
  openGraph: { type: 'website', locale: 'en_US', siteName: 'GWC Information Systems, LLC', title, description: seoDescription, url: siteUrl },
  twitter: { card: 'summary', title, description: seoDescription },
  robots: { index: process.env.GITHUB_PAGES_BUILD === '1', follow: process.env.GITHUB_PAGES_BUILD === '1' },
  icons: { icon: sitePath('/favicon.svg') },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
export const dynamic = 'force-static';

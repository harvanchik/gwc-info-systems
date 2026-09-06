import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'GWC Information Systems, LLC | Sage Accounting Software Consulting',
  description: 'Sage accounting software consulting for small and mid-size businesses in Los Angeles and beyond.',
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

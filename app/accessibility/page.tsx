import { sitePath } from '@/lib/site-path';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Accessibility | GWC Information Systems, LLC' };
export default function Accessibility() {
return <main className="legal-page container"><a href={sitePath('/')}>Back to GWC Information Systems</a><h1>Accessibility</h1><p>This website is designed to support keyboard navigation, readable text, visible focus indicators, mobile layouts, and reduced-motion preferences. WCAG 2.2 Level AA is the technical target used when reviewing the site; this statement is not a certification of conformance.</p><h2>Need help accessing information?</h2><p>If you have difficulty using the website, contact Lew Weiner by <a href="mailto:lweiner@gwcis.com">email at lweiner@gwcis.com</a> or <a href="tel:+13109203603">phone at (310) 920-3603</a>. Please describe the page or information you need and, if helpful, the technology you are using.</p><h2>External services</h2><p>The website links to Google Maps and LinkedIn, and the private review site uses a hosting sign-in service. Those services have their own interfaces and accessibility features.</p></main>;
}


export const dynamic = 'force-static';

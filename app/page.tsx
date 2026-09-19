import { sitePath } from '@/lib/site-path';
import { BackToTop } from '@/components/back-to-top';

const phone = '(310) 920-3603';
const email = 'lweiner@gwcis.com';
const maps = 'https://www.google.com/maps/search/18375+Ventura+Blvd.,+%23801+Tarzana,+CA+91356-4218?entry=gmail&source=g';
const services = ['Sage 100 software implementation', 'Sage 100 training', 'Sage 100 support'];
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header" id="page-top" tabIndex={-1}><div className="container header-inner">
      <a href="#" className="wordmark" aria-label="GWC Information Systems home"><strong>GWC</strong><span>INFORMATION<br />SYSTEMS, LLC</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <a className="header-phone" href="tel:+13109203603">{phone} </a>
    </div></header>
    <main id="main" tabIndex={-1}>
      <section className="hero"><div className="container hero-inner"><div className="hero-copy">
        <p className="eyebrow"><span /> GWC INFORMATION SYSTEMS, LLC</p>
        <h1>Sage 100 accounting<br className="desktop-break" /> software consulting</h1>
        <p className="hero-description">for small and mid-size businesses.</p>
        <a className="primary-link" href="#contact">Get in Touch </a>
      </div></div></section>
      <section id="about" className="section about container"><div className="section-heading"><p className="eyebrow">01 / ABOUT GWC</p><h2>About GWC</h2></div><div className="about-copy"><p className="lead">GWC Information Systems has helped businesses implement and manage their accounting systems since 1990.</p><p>We focus on getting Sage 100 software set up right the first time, so your books stay accurate and your team stays productive.</p></div></section>
      <section className="lew-section" id="lew" aria-labelledby="lew-heading"><div className="container lew-grid">
        <figure className="portrait"><img className="portrait-photo" src={sitePath('/images/lew-weiner.png')} alt="Lew Weiner" width={541} height={768} loading="lazy" decoding="async" /><figcaption>Lew Weiner <span>GWC Information Systems, LLC</span></figcaption></figure>
        <div className="lew-copy"><p className="eyebrow">02 / ABOUT LEW</p><h2 id="lew-heading">Lew Weiner</h2><p className="role">Manager / Owner</p><p className="lead">Lew Weiner has spent his career in enterprise software and financial systems, holding an MBA in Business from Fairleigh Dickinson University.</p><p>He works directly with clients on Sage 100 implementation, so businesses get hands-on expertise instead of a call center.</p>
          <div className="lew-details"><div><h3>Education</h3><p>MBA in Business<br />Fairleigh Dickinson University</p></div><div><h3>Professional affiliation</h3><p>Affiliated with <a className="affiliation-link" href="https://technology-partners.com">Technology Integrators Partners</a></p></div></div>
          <a className="profile-link" href="https://www.linkedin.com/in/lew-weiner-7409a540/">View Lew’s LinkedIn profile</a>
        </div>
      </div></section>
      <section id="services" className="section container services-section"><div className="section-heading"><p className="eyebrow">03 / SERVICES</p><h2>Services</h2></div><ol className="services-list">{services.map((service,index)=><li key={service}><span className="service-number">0{index+1}</span><h3>{service}</h3><span className="service-mark" aria-hidden="true">—</span></li>)}</ol></section>
      <section className="contact-section" id="contact"><div className="container contact-grid"><div><p className="eyebrow">04 / CONTACT</p><h2>Get in Touch</h2><p className="contact-name">GWC Information Systems, LLC</p><address><a href={maps}>18375 Ventura Blvd., #801<br />Tarzana, CA 91356-4218 </a></address></div><div className="contact-methods"><a href="tel:+13109203603"><span className="small-label">CALL LEW</span><span className="contact-value">{phone}</span></a><a href={`mailto:${email}`}><span className="small-label">EMAIL US</span><span className="contact-value">{email}</span></a></div></div></section>
    </main>
    <footer className="site-footer"><div className="container compact-footer"><span>© 2026 GWC Information Systems, LLC</span><div className="footer-links"><a href={sitePath('/privacy/')}>Privacy</a><a href={sitePath('/accessibility/')}>Accessibility</a></div></div></footer>
    <BackToTop />
  </>;
}



export const dynamic = 'force-static';


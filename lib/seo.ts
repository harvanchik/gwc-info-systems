export const siteUrl = 'https://harvanchik.github.io/gwc-info-systems/';
export const seoDescription = 'Sage 100 implementation, training and support from Lew Weiner at GWC Information Systems in Tarzana, California. Accounting software consulting since 1990.';
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': siteUrl + '#business',
  name: 'GWC Information Systems, LLC',
  url: siteUrl,
  description: seoDescription,
  telephone: '+1-310-920-3603',
  email: 'lweiner@gwcis.com',
  address: { '@type': 'PostalAddress', streetAddress: '18375 Ventura Blvd., #801', addressLocality: 'Tarzana', addressRegion: 'CA', postalCode: '91356-4218', addressCountry: 'US' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Sage 100 consulting services',
    itemListElement: ['Sage 100 software implementation', 'Sage 100 training', 'Sage 100 support'].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }))
  }
};

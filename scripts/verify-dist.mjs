import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const base = (process.env.PAGES_BASE_PATH ?? '/gwc-info-systems').replace(/\/$/, '');
let checked = 0;
for (const route of ['index.html', 'privacy/index.html', 'accessibility/index.html', '404.html']) {
 const html = await readFile(path.join(dist, route), 'utf8');
 if (!html.includes('<html') || !html.includes('<title>')) throw new Error(`Incomplete HTML: ${route}`);
 const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]);
 if (!links.some(link=>link.endsWith('.css'))) throw new Error(`Missing stylesheet: ${route}`);
 for (const link of links) {
  if (!link.startsWith('/') || link.startsWith('//')) continue;
  const urlPath = link.split(/[?#]/)[0];
  if (base && !urlPath.startsWith(base+'/')) throw new Error(`Unprefixed URL: ${link}`);
  const local = urlPath.slice(base.length);
  let file = path.resolve(dist, '.' + local);
  if (file !== path.resolve(dist) && !file.startsWith(dist)) throw new Error(`Invalid URL: ${link}`);
  if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
  await stat(file);checked++;
 }
}
await stat(path.join(dist, '.nojekyll'));
console.log(`Verified all exported pages and ${checked} local asset/link references.`);

const productionOrigin = 'https://harvanchik.github.io';
for (const [file, route] of [['index.html', '/'], ['privacy/index.html', '/privacy/'], ['accessibility/index.html', '/accessibility/']]) {
 const html = await readFile(path.join(dist, file), 'utf8');
 const expected = productionOrigin + base + route;
 if (!html.includes(`rel="canonical" href="${expected}"`)) throw new Error(`Incorrect canonical: ${file}`);
 if (!/name="description" content="[^"]+"/.test(html)) throw new Error(`Missing description: ${file}`);
 if (/content="[^"]*noindex/.test(html)) throw new Error(`Unexpected noindex: ${file}`);
}
const home = await readFile(path.join(dist, 'index.html'), 'utf8');
const schemaMatch = home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!schemaMatch) throw new Error('Missing business schema');
const schema = JSON.parse(schemaMatch[1]);
if (schema.url !== productionOrigin + base + '/' || schema.hasOfferCatalog.itemListElement.length !== 3) throw new Error('Invalid business schema');
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
for (const route of ['/', '/privacy/', '/accessibility/']) {
 if (!sitemap.includes(`<loc>${productionOrigin}${base}${route}</loc>`)) throw new Error(`Missing sitemap route: ${route}`);
}
console.log('Verified canonical URLs, indexing, descriptions, business schema and sitemap.');

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


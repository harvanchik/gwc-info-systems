import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { cp, mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { minify } from 'html-minifier-terser';
const root = fileURLToPath(new URL('../', import.meta.url));
const base = (process.env.PAGES_BASE_PATH ?? '/gwc-info-systems').replace(/\/$/, '');
if (base && !/^\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(base)) throw new Error('Invalid PAGES_BASE_PATH');
const env = { ...process.env, GITHUB_PAGES_BUILD: '1', NEXT_PUBLIC_BASE_PATH: base };
const result = spawnSync(process.execPath, [path.join(root, 'node_modules/vinext/dist/cli.js'), 'build'], { cwd: root, env, stdio: 'inherit' });
if (result.status !== 0) process.exit(result.status || 1);
const dist = path.join(root, 'dist');
const client = path.join(dist, 'client');
await readFile(path.join(client, 'index.html')); // Never stage a partial/failed export.
const stage = path.join(root, 'work', 'pages-stage');
await mkdir(path.dirname(stage), { recursive: true });
await rm(stage, { recursive: true, force: true });
await cp(client, stage, { recursive: true });
async function optimize(dir) {
 for (const entry of await readdir(dir, { withFileTypes: true })) {
  const file = path.join(dir, entry.name);
  if (entry.isDirectory()) await optimize(file);
  else if (entry.name.endsWith('.html')) await writeFile(file, await minify(await readFile(file, 'utf8'), { collapseWhitespace: false, removeComments: false, minifyCSS: true, minifyJS: true, keepClosingSlash: true }));
  else if (entry.name.endsWith('.map')) await rm(file);
 }
}
for (const route of ['privacy', 'accessibility']) {
 await mkdir(path.join(stage, route), { recursive: true });
 await rename(path.join(stage, route + '.html'), path.join(stage, route, 'index.html'));
}
await optimize(stage);
await writeFile(path.join(stage, '.nojekyll'), '');
// Replace only the build output inside this repository, after staging succeeds.
if (path.dirname(dist) !== root.replace(/[\\/]$/, '')) throw new Error('Unsafe output directory');
await rm(dist, { recursive: true, force: true });
await rename(stage, dist);
console.log(`Static GitHub Pages output: dist/ (base path: ${base || '/'})`);



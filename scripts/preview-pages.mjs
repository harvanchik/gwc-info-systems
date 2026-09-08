import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const base = (process.env.PAGES_BASE_PATH ?? '/gwc-info-systems').replace(/\/$/, '');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.rsc':'text/x-component','.txt':'text/plain'};
http.createServer(async (req,res) => {
 try {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (base && pathname !== base && !pathname.startsWith(base+'/')) {res.writeHead(404);res.end();return;}
  const relative = pathname.slice(base.length);
  let file = path.resolve(root, '.'+relative);
  if (file !== root.replace(/[\\/]$/, '') && !file.startsWith(root)) throw new Error('Invalid path');
  if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
  res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream'});res.end(await readFile(file));
 } catch {res.writeHead(404);res.end('Not found');}
}).listen(4173,'127.0.0.1',()=>console.log(`Static preview: http://127.0.0.1:4173${base}/`));

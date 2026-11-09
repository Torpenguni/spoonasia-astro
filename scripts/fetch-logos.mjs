// Downloads brand logos listed in src/data/logo-sources.json into src/assets/logos/<id>.<ext>.
// Run by .github/workflows/fetch-logos.yml (the build sandbox has no open internet).
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';

const OUT = 'src/assets/logos';
const UA = 'SpoonAsiaLogoFetcher/1.0 (+https://spoonasia-astro-production.up.railway.app)';
const sources = JSON.parse(await readFile('src/data/logo-sources.json', 'utf8'));
await mkdir(OUT, { recursive: true });

const extFor = (url, type) => {
  const m = /\.(svg|png|jpe?g|webp)$/i.exec(new URL(url).pathname);
  if (m) return m[1].toLowerCase().replace('jpeg', 'jpg');
  if (/svg/.test(type)) return 'svg';
  if (/png/.test(type)) return 'png';
  if (/webp/.test(type)) return 'webp';
  return 'jpg';
};

let ok = 0;
const failed = [];
for (const [id, { url }] of Object.entries(sources)) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'image/*' } });
    const type = res.headers.get('content-type') || '';
    if (!res.ok || !/image|svg/.test(type)) throw new Error(`${res.status} ${type}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = extFor(url, type);
    // drop an older file for this id with a different extension
    for (const f of await readdir(OUT)) {
      if (f.replace(/\.[^.]+$/, '') === id && !f.endsWith(`.${ext}`)) await unlink(path.join(OUT, f));
    }
    await writeFile(path.join(OUT, `${id}.${ext}`), buf);
    ok++;
  } catch (e) {
    failed.push(`${id}: ${e.message}`);
  }
}
console.log(`logos: ${ok} saved, ${failed.length} failed`);
if (failed.length) console.log(failed.join('\n'));

// Logo files live in src/assets/logos/<id>.<ext>; the id is a group or brand id
// from src/data/operators-map.ts. Missing files fall back to a monogram.
const files = import.meta.glob('/src/assets/logos/*.{svg,png,webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byId: Record<string, string> = {};
for (const [path, url] of Object.entries(files)) {
  const id = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byId[id] = url;
}

import sources from '../data/logo-sources.json';

type LogoMeta = { url: string; fit?: 'fill'; bg?: 'dark'; via?: string };
const meta = sources as Record<string, LogoMeta>;

export const logoFor = (id: string): string | undefined => byId[id];
export const logoMeta = (id: string): LogoMeta | undefined => meta[id];

// "Central Restaurants Group" → "CR", "The Pizza Company" → "PC", "S&P Syndicate" → "S&P", "KFC" → "KFC"
export function monogram(name: string): string {
  const clean = name.replace(/\(.*?\)/g, '').trim();
  const first = clean.split(/\s+/)[0];
  if (/^[A-Z0-9&]{2,4}$/.test(first)) return first; // KFC, CRG, S&P, ZEN
  const words = clean.split(/[\s-]+/).filter((w) => w && !/^(the|of|and|&)$/i.test(w));
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase(); // Shabushi → SH
  return words.slice(0, 2).map((w) => w[0].toUpperCase()).join('');
}

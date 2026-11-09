import type { Origin } from '../data/operators-map';

export const originLabel: Record<Origin, string> = {
  homegrown: 'Homegrown',
  'imported-franchise': 'Foreign franchise',
  acquired: 'Acquired',
  stake: 'Minority stake',
  unverified: '',
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// '2025-12-31' → 'Dec 2025', '2026-02' → 'Feb 2026', '2026' → '2026', 'n/a' → ''
export function asOf(d: string): string {
  const m = /^(\d{4})(?:-(\d{2}))?/.exec(d);
  if (!m) return '';
  return m[2] ? `${months[parseInt(m[2], 10) - 1]} ${m[1]}` : m[1];
}

// '120 (all Teenoi brands)' → ['120', '(all Teenoi brands)']
export function splitFigure(v: string): [string, string] {
  const m = /^([^(]+?)\s*(\(.*\))?$/.exec(v);
  return m ? [m[1], m[2] ?? ''] : [v, ''];
}

// SpoonAsia — house promos and events
//
// These render in the right rail of every section front, in the slot where a
// publication would normally sell display advertising. Editing this file is
// the whole job of swapping a campaign — no layout work.
//
//   sections  omit to run everywhere, or list the section keys it belongs on:
//             'news' | 'deals' | 'analysis' | 'operators' | 'supplier-intel'
//             | 'events' | 'locations' | 'properties' | 'videos'
//   image     optional. Supplied art replaces the ink panel; the frame and the
//             footer bar stay, so a paid placement never reads as editorial.

export interface Promo {
  eyebrow: string;
  title: string;
  when: string;
  cta: string;
  place: string;
  href: string;
  image?: string;
  sections?: string[];
}

export const promos: Promo[] = [
  {
    eyebrow: 'SpoonAsia Events',
    title: 'Bangkok F&B Investor Briefing',
    when: 'Join us · 14 Nov 2026',
    cta: 'Reserve a seat',
    place: 'Sathorn',
    href: '/penguin-x',
  },
];

export function promoFor(section: string): Promo | undefined {
  return promos.find((p) => !p.sections || p.sections.includes(section));
}

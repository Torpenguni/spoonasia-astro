// SpoonAsia — industry event calendar
//
// Third-party F&B events, Thai and international. These are NOT our events —
// PenguinX's own programme lives in src/pages/events.astro. This list is a
// service to readers, so two rules apply:
//
//   1. Every entry carries a `source`. A calendar that is wrong is worse than
//      no calendar, so nothing goes in here without a URL you can check it
//      against. Verify before you add.
//   2. Dates are ISO. `end` is optional for single-day events.
//
// Past events drop off automatically at build time — see upcomingEvents().
// The site is statically built, so the list only re-filters on a deploy. The
// ticker Action commits with [skip ci], so if nothing else ships for a while,
// redeploy to clear events that have passed.

export interface IndustryEvent {
  name: string;
  start: string;          // ISO date, e.g. '2027-05-25'
  end?: string;           // ISO date for multi-day runs
  venue: string;
  city: string;
  country: string;
  organiser: string;
  category: 'Trade show' | 'Conference' | 'Seminar' | 'Expo';
  href: string;
  source: string;         // where the dates were checked
  note?: string;
}

export const industryEvents: IndustryEvent[] = [
  {
    name: 'Roadmap Meat & Poultry Edition 2026',
    start: '2026-10-16',
    venue: 'Jupiter Room 4–13, Challenger Hall, IMPACT',
    city: 'Nonthaburi',
    country: 'Thailand',
    organiser: 'Food Focus Thailand',
    category: 'Seminar',
    href: 'https://foodfocusthailand.com/events/',
    source: 'https://foodfocusthailand.com/events/',
    note: 'Single-day technical programme on meat and poultry processing.',
  },
  {
    name: 'SIAL InterFOOD Jakarta 2026',
    start: '2026-11-04',
    end: '2026-11-06',
    venue: 'JIExpo Kemayoran',
    city: 'Jakarta',
    country: 'Indonesia',
    organiser: 'SIAL Network',
    category: 'Trade show',
    href: 'https://www.sial-network.com/en/sial-exhibitions/sial-jakarta',
    source: 'https://www.sial-network.com/en/sial-exhibitions/sial-jakarta',
    note: 'Indonesia’s largest B2B food and beverage expo.',
  },
  {
    name: 'Gulfood 2027',
    start: '2027-03-15',
    end: '2027-03-19',
    venue: 'Dubai World Trade Centre',
    city: 'Dubai',
    country: 'UAE',
    organiser: 'Dubai World Trade Centre',
    category: 'Trade show',
    href: 'https://www.gulfood.com/',
    source: 'https://www.gulfood.com/',
    note: 'The largest food sourcing show in the Gulf — relevant for export lines.',
  },
  {
    name: 'THAIFEX – Anuga Asia 2027',
    start: '2027-05-25',
    end: '2027-05-29',
    venue: 'IMPACT Muang Thong Thani',
    city: 'Nonthaburi',
    country: 'Thailand',
    organiser: 'Koelnmesse · DITP · TCC',
    category: 'Trade show',
    href: 'https://thaifex-anuga.com/',
    source: 'https://thaifex-anuga.com/date-opening-hours/',
    note: 'Asia’s biggest food and beverage trade show. HOREC Asia runs alongside it.',
  },
  {
    name: 'ProPak Asia 2027',
    start: '2027-06-09',
    end: '2027-06-12',
    venue: 'IMPACT Muang Thong Thani',
    city: 'Nonthaburi',
    country: 'Thailand',
    organiser: 'Informa Markets',
    category: 'Trade show',
    href: 'https://www.propakasia.com/',
    // Venue moved from BITEC for this edition — worth re-checking closer to the date.
    source: 'https://www.propakasia.com/',
    note: 'Processing and packaging. Where central-kitchen and production kit gets specified.',
  },
  {
    name: 'Fi Asia Thailand 2027',
    start: '2027-09-01',
    end: '2027-09-03',
    venue: 'Queen Sirikit National Convention Center',
    city: 'Bangkok',
    country: 'Thailand',
    organiser: 'Informa Markets',
    category: 'Trade show',
    href: 'https://www.figlobal.com/asia-thailand/',
    source: 'https://www.figlobal.com/asia-thailand/',
    note: 'Food ingredients — the supplier side of the board, in one hall.',
  },
  {
    name: 'Anuga 2027',
    start: '2027-10-09',
    end: '2027-10-13',
    venue: 'Koelnmesse',
    city: 'Cologne',
    country: 'Germany',
    organiser: 'Koelnmesse',
    category: 'Trade show',
    href: 'https://www.anuga.com/',
    source: 'https://www.anuga.com/',
    note: 'The global food trade fair, biennial. Sets the category trends THAIFEX picks up.',
  },
];

/** Events that have not finished yet, soonest first. */
export function upcomingEvents(now: Date = new Date()): IndustryEvent[] {
  const today = now.toISOString().slice(0, 10);
  return industryEvents
    .filter((e) => (e.end ?? e.start) >= today)
    .sort((a, b) => a.start.localeCompare(b.start));
}

/** "16 Oct 2026" for a single day, "25–29 May 2027" when it runs a few days. */
export function formatRun(e: IndustryEvent): string {
  const d = (iso: string) => new Date(`${iso}T00:00:00Z`);
  const day = (x: Date) => x.getUTCDate();
  const mon = (x: Date) =>
    x.toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' });
  const yr = (x: Date) => x.getUTCFullYear();

  const s = d(e.start);
  if (!e.end) return `${day(s)} ${mon(s)} ${yr(s)}`;

  const t = d(e.end);
  if (mon(s) === mon(t) && yr(s) === yr(t)) return `${day(s)}–${day(t)} ${mon(s)} ${yr(s)}`;
  if (yr(s) === yr(t)) return `${day(s)} ${mon(s)} – ${day(t)} ${mon(t)} ${yr(s)}`;
  return `${day(s)} ${mon(s)} ${yr(s)} – ${day(t)} ${mon(t)} ${yr(t)}`;
}

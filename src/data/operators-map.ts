// Thailand F&B Operators Map — data for the Operator Stories section.
//
// Three layers:
//   1. groups        — ~20 operator groups (one profile page each)
//   2. anchorBrands  — ~40 brands that get a full card
//   3. brand index   — every known brand inside those groups (groups[].brands)
//
// Rules for this file:
//   - Every figure carries an `asOf` date and a source. No figure without both.
//   - `origin: 'unverified'` / `status: 'verify'` mark entries the desk has not
//     yet confirmed. Fix them before they appear on a public page.
//   - `priceTier` is a desk classification, not a reported figure.

// ───────────────────────────── Taxonomy ─────────────────────────────

export type Archetype = 'conglomerate' | 'listed' | 'founder-led' | 'master-franchisee';

export const archetypes: Record<Archetype, { label: string; summary: string }> = {
  conglomerate: {
    label: 'Conglomerate Platforms',
    summary:
      'Restaurant arms of Thailand’s largest business groups. The main gateway for foreign brands and the most active acquirers of local chains.',
  },
  listed: {
    label: 'Listed Pure-Plays',
    summary:
      'Restaurant companies listed on the Stock Exchange of Thailand. Public filings make them the benchmark set for margins, same-store sales and expansion pace.',
  },
  'founder-led': {
    label: 'Founder-Led Challengers',
    summary:
      'Private groups still run by their founders. The fastest movers in the market, and the pool from which the next IPOs and acquisition targets come.',
  },
  'master-franchisee': {
    label: 'Master Franchisees',
    summary:
      'Companies holding Thai rights to a single global brand. They show how foreign brands actually enter Thailand, and who controls those rights today.',
  },
};

export type Segment =
  | 'hotpot-buffet'
  | 'japanese'
  | 'korean'
  | 'western'
  | 'coffee-tea'
  | 'bakery-dessert'
  | 'thai-casual'
  | 'thai-street-franchise';

export const segments: Record<Segment, { label: string; summary: string }> = {
  'hotpot-buffet': {
    label: 'Hotpot & Buffet',
    summary: 'Suki, shabu and grill buffets. The defining Thai chain category and the site of the 2025–26 “suki war”.',
  },
  japanese: {
    label: 'Japanese',
    summary: 'Sushi, ramen, tonkatsu and teishoku chains, from conveyor-belt mass to premium omakase.',
  },
  korean: {
    label: 'Korean',
    summary: 'Korean BBQ and fried chicken, riding sustained K-culture demand.',
  },
  western: {
    label: 'Western: QSR & Casual',
    summary: 'Global fast-food franchises, homegrown pizza and Western casual dining.',
  },
  'coffee-tea': {
    label: 'Coffee & Tea',
    summary: 'From fuel-forecourt coffee at national scale to mall-based global chains.',
  },
  'bakery-dessert': {
    label: 'Bakery & Dessert',
    summary: 'Donuts, pretzels, ice cream and dessert cafés.',
  },
  'thai-casual': {
    label: 'Thai Casual Dining',
    summary: 'Sit-down Thai food chains, mostly mall-based.',
  },
  'thai-street-franchise': {
    label: 'Thai Street-Food Formats',
    summary: 'Street-food menus packaged as franchisable small formats, increasingly exported.',
  },
};

// How the brand entered the group's portfolio.
export type Origin =
  | 'homegrown' // built by the group
  | 'imported-franchise' // foreign brand operated under licence / franchise
  | 'acquired' // bought outright or majority stake
  | 'stake' // minority stake; group does not operate it
  | 'unverified';

export type Status = 'active' | 'exited' | 'verify';

export type PriceTier = 'budget' | 'mass' | 'mass-premium' | 'premium';

export interface Figure {
  value: string;
  asOf: string; // ISO date or 'YYYY' / 'YYYY-MM' when the source gives no day
  source: string; // key into `sources`
}

export interface BrandIndexEntry {
  name: string;
  nameTh?: string;
  segment: Segment;
  origin: Origin;
  status: Status;
  note?: string;
}

export interface OperatorGroup {
  id: string;
  name: string;
  short: string; // tile label on the section front
  nameTh?: string;
  archetype: Archetype;
  owner: string; // parent / controlling shareholder, as reported
  listing?: string;
  facts: Figure[];
  moves: { date: string; text: string; source: string }[];
  brands: BrandIndexEntry[];
}

export interface AnchorBrand {
  id: string;
  name: string;
  nameTh?: string;
  groupId: string; // primary operator
  segment: Segment;
  origin: Origin;
  priceTier?: PriceTier;
  outlets?: Figure;
  whyItMatters: string;
  sources: string[];
}

// ───────────────────────────── Sources ─────────────────────────────

export const sources: Record<string, { title: string; url: string }> = {
  mitihoonMK2025: { title: 'Mitihoon — MK Group Q1 2025 (13 brands, 723 outlets)', url: 'https://www.mitihoon.com/2025/05/14/543327/' },
  mitihoonMK2026: { title: 'Mitihoon — MK Group 2025 results, Bonus Suki', url: 'https://www.mitihoon.com/2026/02/27/620941/' },
  biMK: { title: 'Brand Inside — MK Restaurant tag (MK Paradise, Bonus Suki)', url: 'https://brandinside.asia/tag/mk-restaurant/' },
  mgrSukiWar: { title: 'MGR Online — Suki war squeezes MK and Sukishi (Aug 2026)', url: 'https://en.mgronline.com/economy/hotly-contested-sukiyaki-war-squeezes-profits-at-both-players-mk-down-20-sukishi/' },
  jobsdbSNP: { title: 'JobsDB — S&P Syndicate company profile', url: 'https://th.jobsdb.com/companies/snp-syndicate-172714349736519' },
  stockanalysisSNP: { title: 'StockAnalysis — S&P Syndicate company description', url: 'https://stockanalysis.com/quote/bkk/SNP/company' },
  msUmenohana: { title: 'MarketScreener — S&P acquires remaining Umenohana S&P stake (2023)', url: 'https://uk.marketscreener.com/quote/stock/S-P-SYNDICATE-20699768/news/S-P-Syndicate-Public-Company-Limited-acquired-an-additional-40-stake-in-Umenohana-S-P-Co-Ltd-from-43551677/' },
  mitihoonMaguro2026: { title: 'Mitihoon — MAGURO Group brand count (Feb 2026)', url: 'https://www.mitihoon.com/2026/02/19/618499/' },
  marketeerKiwamiya: { title: 'Marketeer — MAGURO launches KIWAMIYA (Sep 2025)', url: 'https://marketeeronline.co/archives/433144' },
  wealthyMaguro: { title: 'WealthyThai — MAGURO 2024 brands incl. CouCou', url: 'https://www.wealthythai.com/th/updates/stock-of-the-day/33465' },
  centralRestaurants: { title: 'Central Group — Restaurants business line', url: 'https://www.centralgroup.com/en/businesses/key-business-lines/restaurants' },
  centelPortfolio: { title: 'CENTEL IR — Food portfolio (as of 31 Dec 2025)', url: 'https://investor.centarahotelsresorts.com/en/our-business/food-business/food-portfolio' },
  prachachatShinkanzen: { title: 'Prachachat — CRG closes 51% Shinkanzen Sushi deal (May 2022)', url: 'https://www.prachachat.net/marketing/news-923393' },
  kaohoonLucky: { title: 'Kaohoon — CRG takes 40% of Lucky Suki operator (Nov 2025)', url: 'https://www.kaohooninternational.com/?p=570333' },
  bbLucky: { title: 'Brand Buffet — CRG invests THB 940m in Lucky Suki', url: 'https://www.brandbuffet.in.th/2025/11/centel-invests-in-lucky-suki-940-millions-bahts/' },
  centralHanam: { title: 'Central Group — CRG acquires Hanam BBQ (Jan 2026)', url: 'https://www.centralgroup.com/en/newsroom/corporate-news/704/crg-strengthens-korean-bbq-portfolio-with-the-acquisition-of-hanam-bbq-aiming-for-over-300-million-baht-in-revenue-within-3-5-years' },
  biCRG: { title: 'Brand Inside — CRG tag (Tenya exit, Aug 2025)', url: 'https://brandinside.asia/tag/crg/' },
  mgrCRG: { title: 'MGR Online — CRG stakes in Salad Factory, Shinkanzen, Senma', url: 'https://mgronline.com/business/detail/9650000109664' },
  thairathOishi: { title: 'Thairath — Oishi 27th anniversary, 165 restaurants (Sep 2026)', url: 'https://en.thairath.co.th/news/local/2958030' },
  wikiOishi: { title: 'Wikipedia — Oishi Group', url: 'https://www.wikipedia.org/wiki/Oishi_Group' },
  bpThaiBevFood: { title: 'Bangkok Post — ThaiBev food expansion, Food of Asia brands (Jan 2022)', url: 'https://www.pressreader.com/thailand/bangkok-post/20220110/282033330548159' },
  nationKFC: { title: 'The Nation — ThaiBev says no KFC sale process (Aug 2026)', url: 'https://www.nationthailand.com/business/corporate/40070060' },
  thairathKFC: { title: 'Thairath — ThaiBev considers selling KFC outlets (Jul 2026)', url: 'https://en.thairath.co.th/money/business_marketing/business_strategy/2946934' },
  kaohoonKFC: { title: 'Kaohoon — ThaiBev weighs KFC exit; CENTEL and RD outlet counts', url: 'https://www.kaohooninternational.com/markets/587002' },
  avinewsThaiBev: { title: 'aviNews — ThaiBev’s 30 restaurant brands', url: 'https://avinews.com/en/thaibev-reportedly-weighs-sale-of-kfc-thailand-despite-strong-business-growth/' },
  bpDevyani: { title: 'Bangkok Post — Devyani acquires Restaurants Development', url: 'https://www.bangkokpost.com/business/general/2708766/indian-firm-acquires-thai-kfc-franchisee' },
  yahooStarbucks: { title: 'Reuters/Yahoo — Starbucks licenses Thai operations to Coffee Concepts', url: 'https://sg.finance.yahoo.com/news/starbucks-licenses-thai-operations-charoen-105117120.html' },
  minorBonchon: { title: 'Minor International — Bonchon acquisition press release (Aug 2026)', url: 'https://www.minor.com/storage/update/press-releases/2026/08/20260811-mint-news1-en.pdf' },
  fcBonchon: { title: 'Fast Casual — Bonchon acquisition closes (Sep 2026)', url: 'https://www.fastcasual.com/news/bonchon-acquisition-by-minor-food-serruya-private-equity-closes/' },
  minorFood: { title: 'Minor International — Minor Food business page', url: 'https://minor.com/en/businesses/minor-food' },
  storyMinor: { title: 'The Story Thailand — Minor Food franchise brands incl. The Steak & More', url: 'https://www.thestorythailand.com/en/?p=159762' },
  inklPizzaHut: { title: 'Bangkok Post via inkl — Yum sells Pizza Hut; Thai market context', url: 'https://www.inkl.com/news/yum-sells-pizza-hut-business-for-2-7-billion' },
  biPizzaHut: { title: 'Brand Inside — Pizza Hut Thailand continues, 212 outlets (Jun 2026)', url: 'https://brandinside.asia/pizza-hut-thailand-go-to/' },
  nationPHC: { title: 'The Nation — PH Capital becomes sole Pizza Hut franchisee (2017)', url: 'https://www.nationthailand.com/business/30332733' },
  oopsOR: { title: 'Marketing Oops — OR non-oil businesses and stakes', url: 'https://www.marketingoops.com/?p=282969' },
  timeoutOR: { title: 'Time Out — OR non-oil brands incl. Pearly Tea', url: 'https://www.timeout.com/bangkok/th/news/กลุ่ม-ปตท-เปิดตัว-‘โออาร์’-บริษัทเรือธงใหม่ที่จะพาธุรกิจไทยไปสู่การเป็นแบรนด์ระดับโลก-110419' },
  bpOR: { title: 'Bangkok Post — OR stakes in Ohkajhu, Pacamara', url: 'https://www.bangkokpost.com/business/2181967/or-looks-to-food-and-beverage' },
  oopsTexas: { title: 'Marketing Oops — OR closes Texas Chicken', url: 'https://www.marketingoops.com/?p=331759' },
  bbOR2026: { title: 'Brand Buffet — OR Q2/2026, Café Amazon record 117m cups', url: 'https://www.brandbuffet.in.th/?p=302437' },
  thansettakijCPF: { title: 'Thansettakij — CPF brands Five Star, Chester’s', url: 'https://www.thansettakij.com/social-biz/650472' },
  mitihoonKrata: { title: 'Mitihoon — CPF Restaurant & Food Chain operates Krata Lek', url: 'https://www.mitihoon.com/?p=374584' },
  mitihoonFiveStar: { title: 'Mitihoon — Five Star at 41 years', url: 'https://www.mitihoon.com/?p=488529' },
  mitihoonStarCoffee: { title: 'Mitihoon — Five Star and Star Coffee', url: 'https://www.mitihoon.com/?p=270359' },
  setAU: { title: 'SET — After You listed company snapshot FY2025', url: 'https://lssmedia.setlink.set.or.th/2025/YE/AU-YE68-ListedCompanySnapshot-EN.html' },
  oopsAU: { title: 'Marketing Oops — After You 10 success factors, Mikka rebrand', url: 'https://www.marketingoops.com/?p=331327' },
  standardZen: { title: 'The Standard — ZEN Group 10 brands, 317 outlets', url: 'https://thestandard.co/?p=1059001' },
  infoquestZen: { title: 'InfoQuest — ZEN pushes Tum Mour, Lao Yuan, Khiang in 2026', url: 'https://www.infoquest.co.th/?p=612910' },
  bbIberry: { title: 'Brand Buffet — iberry group overseas plan, THB 4.4bn sales', url: 'https://www.brandbuffet.in.th/2025/07/iberry-group-plans-to-expand-overseas-markets/' },
  bbIberryUOB: { title: 'Brand Buffet — iberry group brand list (UOB campaign)', url: 'https://www.brandbuffet.in.th/tag/%e0%b9%84%e0%b8%ad%e0%b9%80%e0%b8%9a%e0%b8%ad%e0%b8%a3%e0%b9%8c%e0%b8%a3%e0%b8%b5%e0%b9%88-%e0%b8%81%e0%b8%a3%e0%b8%b8%e0%b9%8a%e0%b8%9b/' },
  marketeerBuramarie: { title: 'Marketeer — iberry launches BURAMARIE', url: 'https://marketeeronline.co/archives/432922' },
  bbTeenoi2025: { title: 'Brand Buffet — Suki Teenoi 2025 results', url: 'https://www.brandbuffet.in.th/2026/02/suki-teenoi-reported-net-profit-decrease-in-2025/' },
  bbTeenoi2026: { title: 'Brand Buffet — Suki Teenoi 2026 targets, IPO 2027', url: 'https://www.brandbuffet.in.th/2026/02/suki-teenoi-targets-thb1-billion-profit-in-2026/' },
  prachachatTeenoi: { title: 'Prachachat — Teenoi 120 outlets, 2026 target', url: 'https://www.prachachat.net/?p=2019647' },
  biTeenoi: { title: 'Brand Inside — Teenoi PLUS, Teenoi Gold', url: 'https://brandinside.asia/tag/%e0%b8%aa%e0%b8%b8%e0%b8%81%e0%b8%b5%e0%b9%89%e0%b8%95%e0%b8%b5%e0%b9%8b%e0%b8%99%e0%b9%89%e0%b8%ad%e0%b8%a2/' },
  bbFoodPassion: { title: 'Brand Buffet — Food Passion takes over Red Sun (2019)', url: 'https://www.brandbuffet.in.th/2019/03/food-passion-takes-over-red-sun/' },
  bbFoodPassionESG: { title: 'Brand Buffet — Food Passion brands incl. GON Express', url: 'https://www.brandbuffet.in.th/?p=228351' },
  bbPocha: { title: 'Brand Buffet — Food Passion launches Pocha (2020)', url: 'https://www.brandbuffet.in.th/2020/03/pocha-new-brand-from-food-passion/' },
  thansettakijSukishi: { title: 'Thansettakij — Sukishi Intergroup brands', url: 'https://www.thansettakij.com/business/marketing/567499' },
  thansettakijSukishi2: { title: 'Thansettakij — Sukishi Intergroup incl. Woogogi', url: 'https://www.thansettakij.com/business/marketing/597603' },
  bbSukishi2026: { title: 'Brand Buffet — Sukishi “Korean Flavor Solution Partner” (Jul 2026)', url: 'https://www.brandbuffet.in.th/2026/07/sukishi-korean-flavor-solution/' },
  marketeerMomo: { title: 'Marketeer — Noble Restaurant on Mo-Mo-Paradise', url: 'https://marketeeronline.co/archives/424253' },
  ktcMomo: { title: 'KTC — Mo-Mo-Paradise in 2026 (~30 outlets)', url: 'https://www.ktc.co.th/article/dining/restaurant/diy-menu-at-momo-paradise' },
  kaohoonMinor: { title: 'Kaohoon — Minor Food franchise and modular store strategy', url: 'https://www.kaohooninternational.com/?p=562910' },
  nationMinor: { title: 'The Nation — Minor Food targets 4,500 outlets by 2029', url: 'https://www.nationthailand.com/business/corporate/40053729' },
  bbFoodPassionTag: { title: 'Brand Buffet — Food Passion tag (Barbie Gon licensing)', url: 'https://www.brandbuffet.in.th/tag/food-passion/' },
  bbOishiBrands: { title: 'Brand Buffet — Oishi brand breakdown (Shabushi 158, Oishi Ramen 53, Kakashi 22)', url: 'https://www.brandbuffet.in.th/?p=158582' },
  biZenSauce: { title: 'Brand Inside — ZEN sells Tum Mour bottled sauces', url: 'https://brandinside.asia/zen-corporation-2018-strategy/' },
  oopsZen: { title: 'Marketing Oops — ZEN Group history since 1991', url: 'https://www.marketingoops.com/?p=304498' },
  bpMomo: { title: 'Bangkok Post — Mo-Mo-Paradise to expand', url: 'https://bangkokpost.com/business/2431529/mo-mo-paradise-to-expand' },
};

// ───────────────────────────── Groups ─────────────────────────────

export const groups: OperatorGroup[] = [
  // ── Conglomerate platforms ──
  {
    id: 'crg',
    name: 'Central Restaurants Group (CRG)',
    short: 'CRG',
    nameTh: 'เซ็นทรัล เรสตอรองส์ กรุ๊ป',
    archetype: 'conglomerate',
    owner: 'Central Group, via Central Plaza Hotel PCL',
    listing: 'Parent listed: SET: CENTEL',
    facts: [
      { value: '15 brands, 1,429 outlets', asOf: '2025-12-31', source: 'centelPortfolio' },
    ],
    moves: [
      { date: '2022-05', text: 'Acquired 51% of The Food Selection Group (Shinkanzen Sushi, Senma Sushi).', source: 'prachachatShinkanzen' },
      { date: '2025-08', text: 'Tenya closed its last Thai outlet after 10 years.', source: 'biCRG' },
      { date: '2025-11', text: 'Took a 40% stake in Miracle Planet (Lucky Suki, Lucky BBQ) for about THB 940m.', source: 'kaohoonLucky' },
      { date: '2026-01', text: 'Acquired Korean BBQ brand Hanam BBQ.', source: 'centralHanam' },
    ],
    brands: [
      { name: 'Mister Donut', segment: 'bakery-dessert', origin: 'imported-franchise', status: 'active' },
      { name: 'Arigato', segment: 'japanese', origin: 'unverified', status: 'active' },
      { name: 'KFC', segment: 'western', origin: 'imported-franchise', status: 'active', note: 'One of three Thai KFC franchisees' },
      { name: "Auntie Anne's", segment: 'bakery-dessert', origin: 'imported-franchise', status: 'active' },
      { name: 'Pepper Lunch', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'Ootoya', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'Katsuya', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'Yoshinoya', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'Chabuton Ramen', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'Ramen Kagetsu Arashi', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'Kiani', segment: 'japanese', origin: 'unverified', status: 'active' },
      { name: 'Shinkanzen Sushi', segment: 'japanese', origin: 'acquired', status: 'active', note: '51% stake' },
      { name: 'Senma Sushi', segment: 'japanese', origin: 'acquired', status: 'verify', note: 'Came with the Shinkanzen deal' },
      { name: 'Salad Factory', segment: 'western', origin: 'acquired', status: 'active', note: 'Equity partner; stake size not confirmed' },
      { name: 'Hanam BBQ', segment: 'korean', origin: 'acquired', status: 'active' },
      { name: 'Aroi Dee', nameTh: 'อร่อยดี', segment: 'thai-casual', origin: 'unverified', status: 'active' },
      { name: 'Somtamnua', nameTh: 'ส้มตำนัว', segment: 'thai-casual', origin: 'unverified', status: 'active' },
      { name: 'Nak-La Mookata', segment: 'hotpot-buffet', origin: 'unverified', status: 'active' },
      { name: 'Terraces De Bangkok', segment: 'thai-casual', origin: 'unverified', status: 'active' },
      { name: 'Kowlune', segment: 'thai-casual', origin: 'unverified', status: 'active', note: 'Chinese' },
      { name: 'Tenya', segment: 'japanese', origin: 'imported-franchise', status: 'exited', note: 'Closed Aug 2025' },
    ],
  },
  {
    id: 'thaibev',
    name: 'ThaiBev Food (Oishi, Food of Asia, QSA)',
    short: 'ThaiBev',
    nameTh: 'ไทยเบฟ',
    archetype: 'conglomerate',
    owner: 'Thai Beverage PCL (Sirivadhanabhakdi family)',
    listing: 'Parent listed on SGX',
    facts: [
      { value: 'About 30 restaurant brands across the group', asOf: '2026', source: 'avinewsThaiBev' },
      { value: 'Oishi: 165 participating restaurants in its anniversary campaign', asOf: '2026-09', source: 'thairathOishi' },
      { value: 'QSA (KFC): 561 outlets', asOf: '2026-03-31', source: 'nationKFC' },
    ],
    moves: [
      { date: '2008', text: 'Completed acquisition of Oishi Group.', source: 'wikiOishi' },
      { date: '2017', text: 'QSA bought 240 KFC stores from Yum for about THB 11.4bn.', source: 'nationKFC' },
      { date: '2026-07', text: 'Reported to be exploring a sale of QSA; in Aug 2026 ThaiBev said there was no sale process.', source: 'nationKFC' },
    ],
    brands: [
      { name: 'Oishi Grand', segment: 'japanese', origin: 'acquired', status: 'active' },
      { name: 'Oishi Eatery', segment: 'japanese', origin: 'acquired', status: 'active' },
      { name: 'Oishi Buffet', segment: 'japanese', origin: 'acquired', status: 'active' },
      { name: 'Nikuya', segment: 'japanese', origin: 'acquired', status: 'active' },
      { name: 'Shabushi', segment: 'hotpot-buffet', origin: 'acquired', status: 'active' },
      { name: 'Oishi Ramen', segment: 'japanese', origin: 'acquired', status: 'active' },
      { name: 'Kakashi', segment: 'japanese', origin: 'acquired', status: 'active' },
      { name: 'Oishi Bistro', segment: 'japanese', origin: 'acquired', status: 'active' },
      { name: 'KFC', segment: 'western', origin: 'imported-franchise', status: 'active', note: 'Via QSA, largest Thai KFC franchisee' },
      { name: 'So asean Cafe & Restaurant', segment: 'thai-casual', origin: 'homegrown', status: 'verify', note: 'Source dated 2022' },
      { name: 'Man Fu Yuan', segment: 'thai-casual', origin: 'homegrown', status: 'verify', note: 'Chinese; source dated 2022' },
      { name: 'MX Cakes & Bakery', segment: 'bakery-dessert', origin: 'homegrown', status: 'verify', note: 'Source dated 2022' },
      { name: 'Cafe Chilli', segment: 'thai-casual', origin: 'homegrown', status: 'verify', note: 'Source dated 2022' },
      { name: 'Hide & Seek', segment: 'thai-casual', origin: 'homegrown', status: 'verify', note: 'Source dated 2022' },
      { name: 'Ban Suriyasai', nameTh: 'บ้านสุริยาศัย', segment: 'thai-casual', origin: 'unverified', status: 'active' },
      { name: 'Lerdlao', segment: 'thai-casual', origin: 'unverified', status: 'active' },
    ],
  },
  {
    id: 'minor-food',
    name: 'Minor Food',
    short: 'Minor Food',
    archetype: 'conglomerate',
    owner: 'Minor International PCL',
    listing: 'Parent listed: SET: MINT',
    facts: [{ value: '2,843 outlets in 24 countries', asOf: '2026-08', source: 'minorBonchon' }],
    moves: [
      { date: '2001', text: 'Launched The Pizza Company after leaving the Pizza Hut franchise.', source: 'inklPizzaHut' },
      { date: '2026-09', text: 'Closed the acquisition of Bonchon with Serruya PE; now owns the brand globally outside the Americas.', source: 'fcBonchon' },
    ],
    brands: [
      { name: 'The Pizza Company', segment: 'western', origin: 'homegrown', status: 'active' },
      { name: "Swensen's", segment: 'bakery-dessert', origin: 'imported-franchise', status: 'active', note: 'Franchise since 1986' },
      { name: 'Sizzler', segment: 'western', origin: 'imported-franchise', status: 'active' },
      { name: 'Dairy Queen', segment: 'bakery-dessert', origin: 'imported-franchise', status: 'active', note: 'Since 1996' },
      { name: 'Burger King', segment: 'western', origin: 'imported-franchise', status: 'active', note: 'Since 2000' },
      { name: 'Bonchon', segment: 'korean', origin: 'acquired', status: 'active' },
      { name: 'The Steak & More', segment: 'western', origin: 'homegrown', status: 'active' },
      { name: 'GAGA', segment: 'coffee-tea', origin: 'unverified', status: 'active' },
      { name: 'Coffee Journey', segment: 'coffee-tea', origin: 'unverified', status: 'active' },
      { name: 'The Coffee Club', segment: 'coffee-tea', origin: 'acquired', status: 'active', note: 'Mostly outside Thailand' },
      { name: 'Benihana', segment: 'japanese', origin: 'unverified', status: 'active', note: 'Thai presence to verify' },
      { name: 'Riverside Grilled Fish', segment: 'thai-casual', origin: 'acquired', status: 'active', note: 'China-based; not a Thai brand' },
      { name: 'Thai Express', segment: 'thai-casual', origin: 'acquired', status: 'active', note: 'Outside Thailand' },
      { name: 'Sanook Kitchen', segment: 'thai-casual', origin: 'unverified', status: 'active' },
    ],
  },
  {
    id: 'or',
    name: 'OR (PTT Oil and Retail)',
    short: 'OR (PTT)',
    nameTh: 'ปตท. น้ำมันและการค้าปลีก',
    archetype: 'conglomerate',
    owner: 'PTT PCL',
    listing: 'SET: OR',
    facts: [{ value: 'Café Amazon sold a record 117m cups in Q2/2026', asOf: '2026-06-30', source: 'bbOR2026' }],
    moves: [
      { date: '2021', text: 'Bought 20% of Ohkajhu organic restaurants.', source: 'bpOR' },
      { date: 'n/a', text: 'Closed all Texas Chicken outlets to refocus its lifestyle portfolio.', source: 'oopsTexas' },
    ],
    brands: [
      { name: 'Café Amazon', segment: 'coffee-tea', origin: 'homegrown', status: 'active' },
      { name: 'Pearly Tea', segment: 'coffee-tea', origin: 'homegrown', status: 'active' },
      { name: 'Hua Seng Hong Dim Sum', nameTh: 'ฮั่วเซ่งฮง ติ่มซำ', segment: 'thai-casual', origin: 'imported-franchise', status: 'active', note: 'OR is master franchisee of a Thai brand' },
      { name: 'Kouen', segment: 'japanese', origin: 'stake', status: 'active', note: '25% stake' },
      { name: 'Ohkajhu', segment: 'western', origin: 'stake', status: 'active', note: '20% stake; organic salad' },
      { name: 'Kamu Tea', segment: 'coffee-tea', origin: 'stake', status: 'active', note: '25% stake' },
      { name: 'Pacamara', segment: 'coffee-tea', origin: 'stake', status: 'active' },
      { name: 'Texas Chicken', segment: 'western', origin: 'imported-franchise', status: 'exited' },
    ],
  },
  {
    id: 'cpf',
    name: 'CPF Restaurant and Food Chain',
    short: 'CPF',
    nameTh: 'ซีพีเอฟ เรสเทอรองท์ แอนด์ ฟู้ดเชน',
    archetype: 'conglomerate',
    owner: 'Charoen Pokphand Foods PCL (CP Group)',
    listing: 'Parent listed: SET: CPF',
    facts: [],
    moves: [],
    brands: [
      { name: 'Five Star', nameTh: 'ห้าดาว', segment: 'thai-street-franchise', origin: 'homegrown', status: 'active' },
      { name: "Chester's", nameTh: 'เชสเตอร์', segment: 'western', origin: 'homegrown', status: 'active' },
      { name: 'Krata Lek', nameTh: 'กระทะเหล็ก', segment: 'thai-street-franchise', origin: 'homegrown', status: 'active' },
      { name: 'Star Coffee', segment: 'coffee-tea', origin: 'homegrown', status: 'verify' },
    ],
  },

  // ── Listed pure-plays ──
  {
    id: 'mk',
    name: 'MK Restaurant Group',
    short: 'MK Group',
    nameTh: 'เอ็มเค เรสโตรองต์ กรุ๊ป',
    archetype: 'listed',
    owner: 'Founding family; widely held',
    listing: 'SET: M',
    facts: [
      { value: '13 brands, 723 outlets (688 in Thailand, 35 overseas franchise)', asOf: '2025-03-31', source: 'mitihoonMK2025' },
      { value: 'H1 2026 revenue THB 8,243m (+12.4% YoY)', asOf: '2026-06-30', source: 'mgrSukiWar' },
    ],
    moves: [
      { date: '2025-07', text: 'Launched Bonus Suki for the budget-buffet segment; 15 outlets within 2025.', source: 'mitihoonMK2026' },
      { date: '2026-03', text: 'Launched MK Paradise, a premium suki format, at Siam Paragon.', source: 'biMK' },
    ],
    brands: [
      { name: 'MK Restaurants', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'MK Live', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'MK Gold', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'MK Buffet', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'MK Paradise', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'Bonus Suki', nameTh: 'โบนัสสุกี้', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'Yayoi', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'Hikiniku to Come', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'Hakata Ramen', segment: 'japanese', origin: 'unverified', status: 'active' },
      { name: 'Miyazaki', segment: 'japanese', origin: 'homegrown', status: 'active' },
      { name: 'Laem Charoen Seafood', nameTh: 'แหลมเจริญ ซีฟู้ด', segment: 'thai-casual', origin: 'acquired', status: 'active' },
      { name: 'Le Siam', nameTh: 'เลอ สยาม', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Na Siam', nameTh: 'ณ สยาม', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Bizzy Box', segment: 'thai-casual', origin: 'homegrown', status: 'active', note: 'Grab & go' },
      { name: 'Le Petit', segment: 'bakery-dessert', origin: 'homegrown', status: 'active' },
    ],
  },
  {
    id: 'snp',
    name: 'S&P Syndicate',
    short: 'S&P Syndicate',
    nameTh: 'เอส แอนด์ พี ซินดิเคท',
    archetype: 'listed',
    owner: 'Founding family; widely held',
    listing: 'SET: SNP',
    facts: [{ value: 'More than 517 branches', asOf: 'n/a', source: 'jobsdbSNP' }],
    moves: [{ date: '2023-04', text: 'Raised its Umenohana S&P stake to about 100%.', source: 'msUmenohana' }],
    brands: [
      { name: 'S&P Restaurant & Bakery', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'BlueCup', segment: 'coffee-tea', origin: 'homegrown', status: 'active' },
      { name: 'Patio', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Patara', segment: 'thai-casual', origin: 'unverified', status: 'active', note: 'Mostly overseas' },
      { name: 'Grand Seaside', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Vanilla', segment: 'bakery-dessert', origin: 'homegrown', status: 'verify' },
      { name: 'SNP Cake Studio', segment: 'bakery-dessert', origin: 'homegrown', status: 'active' },
      { name: 'Nais Table', segment: 'thai-casual', origin: 'homegrown', status: 'verify' },
      { name: 'Umenohana', segment: 'japanese', origin: 'imported-franchise', status: 'active', note: 'Formerly JV with Umenohana Co.' },
      { name: 'Tonkatsu Maisen', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
    ],
  },
  {
    id: 'zen',
    name: 'ZEN Corporation Group',
    short: 'ZEN Group',
    nameTh: 'เซ็น คอร์ปอเรชั่น กรุ๊ป',
    archetype: 'listed',
    owner: 'Widely held',
    listing: 'SET: ZEN',
    facts: [{ value: '10 brands, 317 outlets (177 company-owned, 140 franchised)', asOf: '2024', source: 'standardZen' }],
    moves: [{ date: '2026', text: 'Made Tum Mour, Lao Yuan and Khiang its flagships for domestic and overseas expansion.', source: 'infoquestZen' }],
    brands: [
      { name: 'ZEN', segment: 'japanese', origin: 'homegrown', status: 'active' },
      { name: 'AKA', segment: 'japanese', origin: 'homegrown', status: 'active', note: 'Yakiniku / shabu' },
      { name: 'On the Table', segment: 'japanese', origin: 'homegrown', status: 'active' },
      { name: "Din's", segment: 'japanese', origin: 'homegrown', status: 'active' },
      { name: 'TETSU', segment: 'japanese', origin: 'homegrown', status: 'active' },
      { name: 'Sushi Cyu & Carnival', segment: 'japanese', origin: 'homegrown', status: 'active' },
      { name: 'Khiang', nameTh: 'เขียง', segment: 'thai-street-franchise', origin: 'homegrown', status: 'active' },
      { name: 'Tum Mour', nameTh: 'ตำมั่ว', segment: 'thai-street-franchise', origin: 'homegrown', status: 'active' },
      { name: 'Lao Yuan', nameTh: 'ลาวญวน', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'De Tummour', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
    ],
  },
  {
    id: 'maguro',
    name: 'MAGURO Group',
    short: 'MAGURO Group',
    nameTh: 'มากุโระ กรุ๊ป',
    archetype: 'listed',
    owner: 'Founders; listed',
    listing: 'Listed (SET/mai)',
    facts: [{ value: 'MAGURO 20, HITORI SHABU 16, SSAMTHING TOGETHER 6 outlets', asOf: '2026-02', source: 'mitihoonMaguro2026' }],
    moves: [{ date: '2025-09', text: 'Opened imported hamburg-steak brand KIWAMIYA and MAGURO Kappou at Central Park.', source: 'marketeerKiwamiya' }],
    brands: [
      { name: 'MAGURO', segment: 'japanese', origin: 'homegrown', status: 'active', note: 'Incl. MAGURO Kappou' },
      { name: 'HITORI SHABU', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active', note: 'Incl. HITORI SUKIYAKI' },
      { name: 'SSAMTHING TOGETHER', segment: 'korean', origin: 'homegrown', status: 'active' },
      { name: 'Tonkatsu AOKI', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
      { name: 'CouCou', segment: 'hotpot-buffet', origin: 'unverified', status: 'verify' },
      { name: 'KIWAMIYA', segment: 'japanese', origin: 'imported-franchise', status: 'active' },
    ],
  },
  {
    id: 'after-you',
    name: 'After You',
    short: 'After You',
    nameTh: 'อาฟเตอร์ ยู',
    archetype: 'listed',
    owner: 'Founders; listed',
    listing: 'SET: AU',
    facts: [{ value: 'FY2025 revenue THB 1,632m; net profit THB 204m', asOf: '2025-12-31', source: 'setAU' }],
    moves: [],
    brands: [
      { name: 'After You', segment: 'bakery-dessert', origin: 'homegrown', status: 'active' },
      { name: 'Mikka', segment: 'coffee-tea', origin: 'homegrown', status: 'active' },
      { name: 'Fruit shop (name to verify)', segment: 'bakery-dessert', origin: 'homegrown', status: 'verify' },
    ],
  },

  // ── Founder-led challengers ──
  {
    id: 'bnn',
    name: 'BNN Restaurant Group (Suki Teenoi)',
    short: 'BNN (Suki Teenoi)',
    nameTh: 'บี เอ็น เอ็น เรสเตอรองท์ กรุ๊ป',
    archetype: 'founder-led',
    owner: 'Founder Nattamon Pisalkitwanich; JMART holds 30%',
    listing: 'Private; IPO targeted for 2027',
    facts: [
      { value: '2025 revenue THB 9,147m (+30.3%); profit THB 860m (−26%)', asOf: '2025-12-31', source: 'bbTeenoi2025' },
      { value: '120 outlets across all brands', asOf: '2026', source: 'prachachatTeenoi' },
    ],
    moves: [
      { date: '2025-08', text: 'Launched Teenoi Gold, a higher-priced suki format.', source: 'biTeenoi' },
      { date: '2026-03', text: 'Launched Teenoi PLUS at THB 299.', source: 'biTeenoi' },
    ],
    brands: [
      { name: 'Suki Teenoi', nameTh: 'สุกี้ตี๋น้อย', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'Teenoi BBQ', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'Teenoi Gold', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'Teenoi PLUS', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active', note: 'Format of Suki Teenoi' },
    ],
  },
  {
    id: 'iberry',
    name: 'iberry Group',
    short: 'iberry Group',
    nameTh: 'ไอเบอร์รี่ กรุ๊ป',
    archetype: 'founder-led',
    owner: 'Founder Atchara Buranarak',
    listing: 'Private',
    facts: [
      { value: 'Sales above THB 4,400m', asOf: '2025-07', source: 'bbIberry' },
      { value: '18 brands, planning 20 by end of 2025', asOf: '2025', source: 'marketeerBuramarie' },
    ],
    moves: [{ date: '2025', text: 'Opened BURAMARIE, a Thai tea-room concept, at Siam Paragon.', source: 'marketeerBuramarie' }],
    brands: [
      { name: 'iberry', segment: 'bakery-dessert', origin: 'homegrown', status: 'active' },
      { name: 'Kub Kao Kub Pla', nameTh: "กับข้าว'กับปลา", segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Rosniyom', nameTh: "รส'นิยม", segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Thongsmith', nameTh: 'ทองสมิทธิ์', segment: 'thai-casual', origin: 'homegrown', status: 'active', note: 'Boat noodles' },
      { name: 'Thongsmith Hotpot', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'Rongsi Phochana', nameTh: 'โรงสีโภชนา', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Charoen Kaeng', nameTh: 'เจริญแกง', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Fah Pla Tan', nameTh: 'ฟ้าปลาทาน', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Burn Bussaba', nameTh: 'เบิร์นบุษบา', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
      { name: 'Chin Bo Dang', nameTh: 'ชิ้นโบแดง', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active', note: 'Mookata' },
      { name: 'An Kem An Ka', nameTh: 'อันเกิม อันก๋า', segment: 'thai-casual', origin: 'homegrown', status: 'active', note: 'Vietnamese' },
      { name: "Fran's", segment: 'bakery-dessert', origin: 'homegrown', status: 'active' },
      { name: 'Maison RORU', segment: 'bakery-dessert', origin: 'homegrown', status: 'active' },
      { name: 'OMGM', segment: 'thai-casual', origin: 'unverified', status: 'active' },
      { name: 'BURAMARIE', segment: 'thai-casual', origin: 'homegrown', status: 'active' },
    ],
  },
  {
    id: 'food-passion',
    name: 'Food Passion',
    short: 'Food Passion',
    nameTh: 'ฟู้ดแพชชั่น',
    archetype: 'founder-led',
    owner: 'Private',
    listing: 'Private',
    facts: [],
    moves: [{ date: '2019', text: 'Acquired Korean chain Red Sun.', source: 'bbFoodPassion' }],
    brands: [
      { name: 'Bar B Q Plaza', nameTh: 'บาร์บีคิวพลาซ่า', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'GON Express', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'Red Sun', segment: 'korean', origin: 'acquired', status: 'active' },
      { name: 'Joom Zap Hut', nameTh: 'จุ่มแซ่บฮัท', segment: 'hotpot-buffet', origin: 'homegrown', status: 'verify', note: 'Source dated 2019' },
      { name: 'Charna', nameTh: 'ฌานา', segment: 'thai-casual', origin: 'homegrown', status: 'verify', note: 'Source dated 2019' },
      { name: 'Space Q', segment: 'hotpot-buffet', origin: 'homegrown', status: 'verify', note: 'Source dated 2019' },
      { name: 'Pocha', nameTh: 'โภชา', segment: 'thai-casual', origin: 'homegrown', status: 'verify', note: 'Source dated 2020' },
    ],
  },
  {
    id: 'sukishi',
    name: 'Sukishi Intergroup',
    short: 'Sukishi Intergroup',
    nameTh: 'ซูกิชิ อินเตอร์กรุ๊ป',
    archetype: 'founder-led',
    owner: 'Private',
    listing: 'Private',
    facts: [],
    moves: [{ date: '2026', text: 'Repositioned as a “Korean Flavor Solution Partner”, co-developing products with partners.', source: 'bbSukishi2026' }],
    brands: [
      { name: 'Sukishi Korean Charcoal Grill', segment: 'korean', origin: 'homegrown', status: 'active' },
      { name: 'Sukishi Everyday', segment: 'korean', origin: 'homegrown', status: 'active' },
      { name: 'Woogogi', segment: 'korean', origin: 'homegrown', status: 'verify' },
      { name: 'Tiga Pizza', segment: 'western', origin: 'homegrown', status: 'verify' },
      { name: 'Tokki Izakaya', segment: 'japanese', origin: 'homegrown', status: 'verify' },
      { name: 'Wawacha Fresh', segment: 'coffee-tea', origin: 'homegrown', status: 'active' },
    ],
  },
  {
    id: 'miracle-planet',
    name: 'Miracle Planet (Lucky Suki)',
    short: 'Miracle Planet',
    nameTh: 'มิราเคิล แพลนเนท',
    archetype: 'founder-led',
    owner: 'Founders; CRG holds 40%',
    listing: 'Private',
    facts: [{ value: '27 Lucky Suki and 11 Lucky BBQ outlets', asOf: '2025-10-31', source: 'bbLucky' }],
    moves: [{ date: '2025-11', text: 'CRG bought 40% for about THB 940m, valued on DCF.', source: 'kaohoonLucky' }],
    brands: [
      { name: 'Lucky Suki', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
      { name: 'Lucky BBQ', segment: 'hotpot-buffet', origin: 'homegrown', status: 'active' },
    ],
  },

  // ── Master franchisees ──
  {
    id: 'noble',
    name: 'Noble Restaurant',
    short: 'Noble Restaurant',
    nameTh: 'โนเบิล เรสเตอท์รองต์',
    archetype: 'master-franchisee',
    owner: 'Telan family',
    listing: 'Private',
    facts: [{ value: 'About 30 Mo-Mo-Paradise outlets', asOf: '2026', source: 'ktcMomo' }],
    moves: [],
    brands: [{ name: 'Mo-Mo-Paradise', segment: 'hotpot-buffet', origin: 'imported-franchise', status: 'active' }],
  },
  {
    id: 'ph-capital',
    name: 'PH Capital',
    short: 'PH Capital',
    archetype: 'master-franchisee',
    owner: 'Thoresen Thai Agencies 70%, PM Capital (Mahagitsiri family) 30%',
    listing: 'Parent listed: SET: TTA',
    facts: [{ value: '212 Pizza Hut outlets in 60 provinces', asOf: '2026-06', source: 'biPizzaHut' }],
    moves: [
      { date: '2017', text: 'Became sole Pizza Hut franchisee in Thailand, taking over 92 outlets from Yum.', source: 'nationPHC' },
      { date: '2026', text: 'Yum agreed to sell Pizza Hut outside China to LongRange Capital; PH Capital says Thai operations continue.', source: 'biPizzaHut' },
    ],
    brands: [{ name: 'Pizza Hut', segment: 'western', origin: 'imported-franchise', status: 'active' }],
  },
  {
    id: 'coffee-concepts',
    name: 'Coffee Concepts Thailand',
    short: 'Coffee Concepts',
    archetype: 'master-franchisee',
    owner: "JV of Maxim's Caterers and F&N Retail Connection (ThaiBev group)",
    listing: 'Private',
    facts: [],
    moves: [{ date: '2019', text: "Took over Starbucks Thailand under a full licence; Maxim's runs operations.", source: 'yahooStarbucks' }],
    brands: [{ name: 'Starbucks', segment: 'coffee-tea', origin: 'imported-franchise', status: 'active' }],
  },
  {
    id: 'restaurants-development',
    name: 'Restaurants Development (RD)',
    short: 'Restaurants Development',
    archetype: 'master-franchisee',
    owner: 'Devyani International (India) via its Dubai unit',
    listing: 'Private; parent listed in India',
    facts: [{ value: 'More than 240 KFC outlets', asOf: '2026-03', source: 'kaohoonKFC' }],
    moves: [{ date: '2024', text: 'Acquired by Devyani International for about US$129m.', source: 'bpDevyani' }],
    brands: [{ name: 'KFC', segment: 'western', origin: 'imported-franchise', status: 'active' }],
  },
];

// ───────────────────────────── Anchor brands (40) ─────────────────────────────

export const anchorBrands: AnchorBrand[] = [
  // Hotpot & Buffet (8)
  {
    id: 'mk-restaurants', name: 'MK Restaurants', nameTh: 'เอ็มเค สุกี้', groupId: 'mk', segment: 'hotpot-buffet', origin: 'homegrown', priceTier: 'mass',
    whyItMatters: 'The incumbent of Thai suki. How MK defends share against cheaper buffets is the clearest read on mass-market dining.',
    sources: ['mitihoonMK2025', 'mgrSukiWar'],
  },
  {
    id: 'bonus-suki', name: 'Bonus Suki', nameTh: 'โบนัสสุกี้', groupId: 'mk', segment: 'hotpot-buffet', origin: 'homegrown', priceTier: 'budget',
    outlets: { value: '15', asOf: '2025-12-31', source: 'mitihoonMK2026' },
    whyItMatters: 'MK’s fighting brand, launched in 2025 for the budget-buffet segment: the incumbent’s answer to Teenoi.',
    sources: ['mitihoonMK2026'],
  },
  {
    id: 'suki-teenoi', name: 'Suki Teenoi', nameTh: 'สุกี้ตี๋น้อย', groupId: 'bnn', segment: 'hotpot-buffet', origin: 'homegrown', priceTier: 'budget',
    outlets: { value: '120 (all Teenoi brands)', asOf: '2026', source: 'prachachatTeenoi' },
    whyItMatters: 'Founded in 2018, it passed THB 9bn in revenue in 2025 (+30% YoY) and is targeting an IPO in 2027.',
    sources: ['bbTeenoi2025', 'bbTeenoi2026'],
  },
  {
    id: 'lucky-suki', name: 'Lucky Suki', groupId: 'miracle-planet', segment: 'hotpot-buffet', origin: 'homegrown', priceTier: 'budget',
    outlets: { value: '27', asOf: '2025-10-31', source: 'bbLucky' },
    whyItMatters: 'Central Group’s entry into the suki war, made by buying a stake rather than building a brand.',
    sources: ['kaohoonLucky', 'bbLucky'],
  },
  {
    id: 'shabushi', name: 'Shabushi', groupId: 'thaibev', segment: 'hotpot-buffet', origin: 'acquired', priceTier: 'mass',
    whyItMatters: 'Oishi’s mass shabu buffet and its largest restaurant brand by branch count in the last published breakdown.',
    sources: ['thairathOishi', 'bbOishiBrands'],
  },
  {
    id: 'bar-b-q-plaza', name: 'Bar B Q Plaza', nameTh: 'บาร์บีคิวพลาซ่า', groupId: 'food-passion', segment: 'hotpot-buffet', origin: 'homegrown', priceTier: 'mass',
    whyItMatters: 'Food Passion’s flagship tabletop-grill brand, with a character IP (Barbie Gon) used for licensing.',
    sources: ['bbFoodPassionTag'],
  },
  {
    id: 'mo-mo-paradise', name: 'Mo-Mo-Paradise', groupId: 'noble', segment: 'hotpot-buffet', origin: 'imported-franchise', priceTier: 'mass-premium',
    outlets: { value: 'About 30', asOf: '2026', source: 'ktcMomo' },
    whyItMatters: 'A Japanese shabu franchise run by a single-brand local operator, a model for mid-size foreign brands entering Thailand.',
    sources: ['bpMomo', 'marketeerMomo'],
  },
  {
    id: 'hitori-shabu', name: 'HITORI SHABU', groupId: 'maguro', segment: 'hotpot-buffet', origin: 'homegrown', priceTier: 'mass-premium',
    outlets: { value: '16 (incl. HITORI SUKIYAKI)', asOf: '2026-02', source: 'mitihoonMaguro2026' },
    whyItMatters: 'Solo-dining Kansai-style shabu: a premium single-pot format growing inside a buffet-dominated category.',
    sources: ['mitihoonMaguro2026'],
  },

  // Japanese (4)
  {
    id: 'shinkanzen-sushi', name: 'Shinkanzen Sushi', groupId: 'crg', segment: 'japanese', origin: 'acquired', priceTier: 'mass',
    outlets: { value: '91', asOf: '2025-12-31', source: 'centelPortfolio' },
    whyItMatters: 'A founder-built value sushi chain that CRG bought 51% of in 2022, a template for conglomerate M&A of local brands.',
    sources: ['prachachatShinkanzen', 'centelPortfolio'],
  },
  {
    id: 'zen', name: 'ZEN', groupId: 'zen', segment: 'japanese', origin: 'homegrown', priceTier: 'mass-premium',
    whyItMatters: 'Founded in 1991, it is still ZEN Group’s top revenue brand.',
    sources: ['standardZen', 'oopsZen'],
  },
  {
    id: 'maguro', name: 'MAGURO', groupId: 'maguro', segment: 'japanese', origin: 'homegrown', priceTier: 'premium',
    outlets: { value: '20 (incl. MAGURO Kappou)', asOf: '2026-02', source: 'mitihoonMaguro2026' },
    whyItMatters: 'Premium sushi that built a listed multi-brand group in about a decade.',
    sources: ['mitihoonMaguro2026'],
  },
  {
    id: 'yayoi', name: 'Yayoi', groupId: 'mk', segment: 'japanese', origin: 'imported-franchise', priceTier: 'mass',
    whyItMatters: 'A Japanese teishoku brand run by a Thai suki leader, showing how local operators carry foreign concepts.',
    sources: ['mitihoonMK2025'],
  },

  // Korean (5)
  {
    id: 'sukishi', name: 'Sukishi Korean Charcoal Grill', groupId: 'sukishi', segment: 'korean', origin: 'homegrown', priceTier: 'mass',
    whyItMatters: 'A Korean BBQ chain of 25 years, now pivoting from restaurants to selling Korean flavour solutions to partners.',
    sources: ['bbSukishi2026', 'mgrSukiWar', 'thansettakijSukishi'],
  },
  {
    id: 'red-sun', name: 'Red Sun', groupId: 'food-passion', segment: 'korean', origin: 'acquired', priceTier: 'mass',
    whyItMatters: 'Acquired by Food Passion in 2019 to reach a younger customer base than Bar B Q Plaza.',
    sources: ['bbFoodPassion'],
  },
  {
    id: 'bonchon', name: 'Bonchon', groupId: 'minor-food', segment: 'korean', origin: 'acquired', priceTier: 'mass',
    whyItMatters: 'Minor went from Thai master franchisee to global owner (outside the Americas) in 2026. A Thai group buying the brand it once licensed.',
    sources: ['minorBonchon', 'fcBonchon'],
  },
  {
    id: 'ssamthing-together', name: 'SSAMTHING TOGETHER', groupId: 'maguro', segment: 'korean', origin: 'homegrown', priceTier: 'premium',
    outlets: { value: '6', asOf: '2026-02', source: 'mitihoonMaguro2026' },
    whyItMatters: 'Premium Korean BBQ from a Japanese-led group, evidence of cross-cuisine portfolio building.',
    sources: ['mitihoonMaguro2026'],
  },
  {
    id: 'hanam-bbq', name: 'Hanam BBQ', groupId: 'crg', segment: 'korean', origin: 'acquired',
    whyItMatters: 'CRG’s January 2026 acquisition to complete its Korean BBQ portfolio.',
    sources: ['centralHanam'],
  },

  // Western: QSR & Casual (7)
  {
    id: 'kfc', name: 'KFC', groupId: 'thaibev', segment: 'western', origin: 'imported-franchise', priceTier: 'mass',
    outlets: { value: '1,226 nationwide (QSA 561, CRG ~350, RD 240+)', asOf: '2026-03', source: 'nationKFC' },
    whyItMatters: 'Thailand’s largest QSR brand, split across three franchisees by design. Present in all 77 provinces.',
    sources: ['nationKFC', 'kaohoonKFC', 'bpDevyani'],
  },
  {
    id: 'the-pizza-company', name: 'The Pizza Company', groupId: 'minor-food', segment: 'western', origin: 'homegrown', priceTier: 'mass',
    outlets: { value: 'Close to 450', asOf: '2026', source: 'inklPizzaHut' },
    whyItMatters: 'Born in 2001 when Minor left Pizza Hut: a homegrown brand that out-scaled the global franchise it replaced.',
    sources: ['inklPizzaHut', 'minorFood'],
  },
  {
    id: 'pizza-hut', name: 'Pizza Hut', groupId: 'ph-capital', segment: 'western', origin: 'imported-franchise', priceTier: 'mass',
    outlets: { value: '212', asOf: '2026-06', source: 'biPizzaHut' },
    whyItMatters: 'A global brand whose ultimate owner changed in 2026 while the Thai franchisee stayed in place.',
    sources: ['biPizzaHut', 'nationPHC'],
  },
  {
    id: 'burger-king', name: 'Burger King', groupId: 'minor-food', segment: 'western', origin: 'imported-franchise', priceTier: 'mass',
    whyItMatters: 'Minor has run it since 2000; it shows a conglomerate operating global QSR franchises.',
    sources: ['minorFood'],
  },
  {
    id: 'chesters', name: "Chester's", nameTh: 'เชสเตอร์', groupId: 'cpf', segment: 'western', origin: 'homegrown', priceTier: 'mass',
    whyItMatters: 'CP Group’s homegrown chicken QSR, competing in KFC’s core category.',
    sources: ['thansettakijCPF'],
  },
  {
    id: 'sizzler', name: 'Sizzler', groupId: 'minor-food', segment: 'western', origin: 'imported-franchise', priceTier: 'mass-premium',
    whyItMatters: 'A Western casual brand that has stayed relevant in Thailand. Minor is now taking it overseas.',
    sources: ['minorFood', 'nationMinor'],
  },
  {
    id: 'salad-factory', name: 'Salad Factory', groupId: 'crg', segment: 'western', origin: 'acquired', priceTier: 'mass-premium',
    outlets: { value: '53', asOf: '2025-12-31', source: 'centelPortfolio' },
    whyItMatters: 'A healthy-eating chain inside CRG, now opening in hospitals as well as malls.',
    sources: ['centelPortfolio', 'mgrCRG', 'biCRG'],
  },

  // Coffee & Tea (4)
  {
    id: 'cafe-amazon', name: 'Café Amazon', groupId: 'or', segment: 'coffee-tea', origin: 'homegrown', priceTier: 'mass',
    whyItMatters: 'Fuel-forecourt coffee at national scale, a model that grew out of Thailand’s petrol-station network.',
    sources: ['bbOR2026', 'oopsOR'],
  },
  {
    id: 'starbucks', name: 'Starbucks', groupId: 'coffee-concepts', segment: 'coffee-tea', origin: 'imported-franchise', priceTier: 'premium',
    whyItMatters: 'Fully licensed since 2019 to a JV of Hong Kong’s Maxim’s and a ThaiBev-group company: a foreign operator paired with local capital.',
    sources: ['yahooStarbucks'],
  },
  {
    id: 'bluecup', name: 'BlueCup', groupId: 'snp', segment: 'coffee-tea', origin: 'homegrown', priceTier: 'mass',
    whyItMatters: 'Coffee built into an existing restaurant-and-bakery network rather than standalone stores.',
    sources: ['jobsdbSNP'],
  },
  {
    id: 'mikka', name: 'Mikka', groupId: 'after-you', segment: 'coffee-tea', origin: 'homegrown', priceTier: 'mass-premium',
    whyItMatters: 'After You’s drinks brand, born during COVID and being repositioned toward specialty coffee.',
    sources: ['oopsAU'],
  },

  // Bakery & Dessert (5)
  {
    id: 'after-you', name: 'After You', groupId: 'after-you', segment: 'bakery-dessert', origin: 'homegrown', priceTier: 'mass-premium',
    whyItMatters: 'A listed dessert café company: the clearest public benchmark for Thai dessert economics.',
    sources: ['setAU'],
  },
  {
    id: 'mister-donut', name: 'Mister Donut', groupId: 'crg', segment: 'bakery-dessert', origin: 'imported-franchise', priceTier: 'mass',
    outlets: { value: '454 (incl. Arigato)', asOf: '2025-12-31', source: 'centelPortfolio' },
    whyItMatters: 'CRG’s largest brand by outlet count.',
    sources: ['centelPortfolio'],
  },
  {
    id: 'swensens', name: "Swensen's", groupId: 'minor-food', segment: 'bakery-dessert', origin: 'imported-franchise', priceTier: 'mass-premium',
    whyItMatters: 'Franchised since 1986 and built by Minor into Thailand’s largest premium ice-cream brand.',
    sources: ['minorFood'],
  },
  {
    id: 'dairy-queen', name: 'Dairy Queen', groupId: 'minor-food', segment: 'bakery-dessert', origin: 'imported-franchise', priceTier: 'mass',
    whyItMatters: 'Kiosk soft-serve now being tested in standalone modular stores next to convenience stores.',
    sources: ['minorFood', 'kaohoonMinor'],
  },
  {
    id: 'auntie-annes', name: "Auntie Anne's", groupId: 'crg', segment: 'bakery-dessert', origin: 'imported-franchise', priceTier: 'mass',
    outlets: { value: '257', asOf: '2025-12-31', source: 'centelPortfolio' },
    whyItMatters: 'A US pretzel brand scaled to 257 Thai outlets, the third-largest brand in CRG.',
    sources: ['centelPortfolio'],
  },

  // Thai Casual Dining (4)
  {
    id: 'kub-kao-kub-pla', name: 'Kub Kao Kub Pla', nameTh: "กับข้าว'กับปลา", groupId: 'iberry', segment: 'thai-casual', origin: 'homegrown', priceTier: 'mass-premium',
    whyItMatters: 'Flagship of iberry Group, the founder-led multi-concept house with sales above THB 4.4bn.',
    sources: ['bbIberry'],
  },
  {
    id: 'thongsmith', name: 'Thongsmith', nameTh: 'ทองสมิทธิ์', groupId: 'iberry', segment: 'thai-casual', origin: 'homegrown', priceTier: 'mass-premium',
    whyItMatters: 'Boat noodles moved up-market into malls, a playbook for premiumising Thai everyday food.',
    sources: ['bbIberry'],
  },
  {
    id: 'sp-restaurant', name: 'S&P Restaurant & Bakery', groupId: 'snp', segment: 'thai-casual', origin: 'homegrown', priceTier: 'mass',
    whyItMatters: 'Founded in 1973, the long-running Thai family-dining and bakery chain.',
    sources: ['stockanalysisSNP', 'jobsdbSNP'],
  },
  {
    id: 'laem-charoen', name: 'Laem Charoen Seafood', nameTh: 'แหลมเจริญ ซีฟู้ด', groupId: 'mk', segment: 'thai-casual', origin: 'acquired', priceTier: 'mass-premium',
    whyItMatters: 'A Thai seafood brand inside MK’s portfolio, with franchise outlets in Malaysia.',
    sources: ['mitihoonMK2025'],
  },

  // Thai Street-Food Formats (3)
  {
    id: 'khiang', name: 'Khiang', nameTh: 'เขียง', groupId: 'zen', segment: 'thai-street-franchise', origin: 'homegrown', priceTier: 'budget',
    whyItMatters: 'Thai rice-dish street food as a franchise, already in Japan, Laos, Malaysia and the Philippines.',
    sources: ['standardZen', 'infoquestZen'],
  },
  {
    id: 'tum-mour', name: 'Tum Mour', nameTh: 'ตำมั่ว', groupId: 'zen', segment: 'thai-street-franchise', origin: 'homegrown', priceTier: 'mass',
    whyItMatters: 'A 37-year-old som tam brand ZEN is using as an export flagship, with packaged sauces beyond the restaurant.',
    sources: ['infoquestZen', 'biZenSauce'],
  },
  {
    id: 'five-star', name: 'Five Star', nameTh: 'ห้าดาว', groupId: 'cpf', segment: 'thai-street-franchise', origin: 'homegrown', priceTier: 'budget',
    whyItMatters: 'Four decades of grilled and fried chicken at value prices, CP Group’s mass-market food chain.',
    sources: ['mitihoonFiveStar'],
  },
];

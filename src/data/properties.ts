// SpoonAsia — the property files.
// One entry per mega-project in Supply Watch. The Locations page renders
// these as cards; /properties/<slug> renders the full file. Facts stay
// coarse on purpose — announced, opened, targeted — per the data-discipline
// rule: no fabricated precision.

export interface PropertyFact {
  label: string;
  value: string;
}

export interface PropertySection {
  head: string;
  paragraphs: string[];
}

export type PropertyGroup = 'open' | 'next' | 'announced';

export const groupLabels: Record<PropertyGroup, string> = {
  open: 'Open — ramping',
  next: 'Opening next',
  announced: 'Announced & under construction',
};

export interface Property {
  slug: string;
  name: string;
  district: string;
  format: string;
  status: string;
  group: PropertyGroup;
  read: string; // the one-paragraph read shown on the card
  // Standardized factsheet (the spotlight spec): coarse, sourced, honest.
  owner: string;
  location: string;
  area: string;
  openYear: string;
  anchors: string;
  highlight: string;
  customers: string;
  tier: string;
  image: string;
  images?: string[]; // slideshow; falls back to [image]
  imageCredit?: string;
  imageCreditHref?: string;
  imageNote?: string; // set when the photo shows the corridor, not the project
  facts: PropertyFact[];
  sections: PropertySection[];
}

export const properties: Property[] = [
  {
    slug: 'one-bangkok',
    group: 'open',
    name: 'One Bangkok',
    district: 'Rama IV / Wireless',
    format: 'Mixed-use — retail, office, hotels, residences',
    status: 'Open — ramping through 2026',
    read: 'The largest single addition of F&B floorplate in Bangkok history. Office towers fill faster than retail — weekday lunch works now, dinner catchment still forming. First-phase tenants carry the ramp risk.',
    owner: 'TCC Assets × Frasers Property',
    location: 'Rama IV × Wireless Road, CBD',
    area: '~1.83M sqm GFA project-wide; retail share undisclosed',
    openYear: 'Phased from late 2024, ramping through 2026',
    anchors: 'Food halls and flagship dining precincts; line-up still building',
    highlight: "Bangkok's largest single district — the statement address",
    customers: 'CBD office workers, hotel guests, upper-mid Bangkok',
    tier: 'Premium – Luxury',
    image: '/images/properties/one-bangkok.webp',
    imageCredit: 'Magnamonkun \u00b7 CC0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:Parade_at_One_Bangkok-2024-11-23.jpg',
    facts: [
      { label: 'Developer', value: 'TCC Assets × Frasers Property' },
      { label: 'Site', value: '~104 rai at Rama IV × Wireless Road' },
      { label: 'Opened', value: 'First retail phase late 2024, ramping in phases' },
      { label: 'F&B posture', value: 'Multi-tier: food hall to destination dining, spread across several retail precincts' },
      { label: 'Nearest rail', value: 'MRT Lumphini' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'One Bangkok is the biggest private-sector development Thailand has attempted — a district, not a mall, assembled on the old Suan Lum night bazaar land. For F&B, what matters is simpler: it adds more organized-retail dining floorplate in one location than the market has ever absorbed at once.',
          'The development opens in phases, which means the "opening" never happened on a single day. Retail traffic, office occupancy, and hotel keys all ramp on separate curves — and an F&B tenant’s P&L sits at the intersection of all three.',
        ],
      },
      {
        head: 'The catchment',
        paragraphs: [
          'The daytime story is already real: office towers lease up faster than retail matures, and the weekday lunch trade at the casual tier performs. The unresolved question is evenings and weekends. Rama IV has never been a leisure destination; One Bangkok is spending heavily to make it one, and that re-education of the city takes years, not quarters.',
          'Lumphini MRT adjacency helps, but the BTS-riding spender this project wants lives on the Sukhumvit line. Watch whether the shuttle behavior from Silom and Sathorn offices converts into after-hours dwell — that is the number that decides dinner.',
        ],
      },
      {
        head: 'The math',
        paragraphs: [
          'First-phase tenants carry the ramp risk: rent is contracted now, catchment matures later. The operators doing this well negotiated ramp-linked terms — stepped rents, revenue-share floors that bite later, fit-out contributions. The ones doing it badly signed headline rates against a footfall projection.',
          'A landlord of this scale can afford patience and will protect the asset’s positioning over any single tenant’s survival. Assume curation pressure: concepts that fit the district story get support; commodity concepts compete on rent alone.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: brands that monetize weekday office traffic now and can hold through the leisure ramp; flagship concepts where presence in Bangkok’s statement address is itself marketing. Wrong for: thin-margin casual formats that need day-one full catchment, and any operator whose lease can’t survive two slow ramp years. If you missed phase one, that is not necessarily a loss — phase-two terms will price against observed, not projected, traffic.',
        ],
      },
    ],
  },
  {
    slug: 'dusit-central-park',
    group: 'open',
    name: 'Dusit Central Park',
    district: 'Silom / Rama IV',
    format: 'Mixed-use — hotel, residences, office, retail podium',
    status: 'Retail opened 2025',
    read: 'Completes the Rama IV corridor with One Bangkok and Samyan Mitrtown — three projects now compete for the same office-worker lunch. Expect effective-rent softness at the corridor’s casual tier.',
    owner: 'Dusit Thani × Central Pattana (JV)',
    location: 'Silom × Rama IV, opposite Lumpini Park',
    area: '~440,000 sqm GFA mixed-use; compact retail podium',
    openYear: 'Hotel 2024; Central Park retail 2025',
    anchors: 'Park-front lifestyle dining; Dusit hotel F&B',
    highlight: 'Only rooftop-park frontage in the CBD; double rail interchange',
    customers: 'CBD workers, park-goers, hotel guests',
    tier: 'Premium',
    image: '/images/properties/dusit-central-park.webp',
    imageCredit: 'Chainwit. \u00b7 CC BY 4.0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:Dusit_Arun_at_Dusit_Central_Park_(07-09-2025)_-_img_02.jpg',
    facts: [
      { label: 'Developer', value: 'Dusit Thani × Central Pattana (JV)' },
      { label: 'Site', value: 'Silom × Rama IV corner, opposite Lumpini Park' },
      { label: 'Opened', value: 'Reborn Dusit Thani hotel 2024; Central Park retail 2025' },
      { label: 'F&B posture', value: 'Park-facing lifestyle retail; rooftop park as the differentiator' },
      { label: 'Nearest rail', value: 'MRT Si Lom · BTS Sala Daeng interchange' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'The old Dusit Thani corner is the best-connected piece of land in the CBD — the Si Lom MRT / Sala Daeng BTS interchange, opposite Lumpini Park. The JV rebuilt it as a compact mixed-use stack with a retail podium branded Central Park, leaning on the one asset no competitor can copy: a direct park frontage.',
          'This is Central Pattana operating in its home discipline, which matters for tenants: a professional mall operator’s leasing machine, marketing calendar, and traffic engineering — different in kind from an office landlord leasing retail as a sideline.',
        ],
      },
      {
        head: 'The corridor problem',
        paragraphs: [
          'Dusit Central Park did not open into empty space. With One Bangkok next door and Samyan Mitrtown up the road, Rama IV now runs three organized-retail dining offers against what is, on weekdays, substantially one shared catchment of office workers. Lunch demand is real but finite; three landlords are now bidding for it with floorplate.',
          'The pattern to expect is the one Bangkok malls always produce in oversupply: headline rents hold, effective rents soften through incentives — fit-out money, rent holidays, revenue-share structures. Casual-tier operators should negotiate accordingly and should not sign the first term sheet.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: concepts that monetize the park — brunch, coffee, health-leaning formats that turn the green frontage into the product; and interchange-fed grab-and-go at the transit tier. Wrong for: another interchangeable casual-dining brand entering the most contested lunch corridor in the city at list rent. The differentiated site is the park edge; the commodity site is everything else.',
        ],
      },
    ],
  },
  {
    slug: 'emsphere',
    group: 'open',
    name: 'EmSphere',
    district: 'Sukhumvit / Phrom Phong',
    format: 'Retail — food-hall-weighted, arena-anchored',
    status: 'Open since Dec 2023',
    read: 'The EM District’s third box leans food-first — which siphons casual-tier traffic from EmQuartier’s upper floors more than it grows the district. A cautionary read for "new supply = new demand" assumptions.',
    owner: 'The Mall Group',
    location: 'Sukhumvit / Phrom Phong (EM District)',
    area: '~200,000 sqm GFA',
    openYear: 'December 2023',
    anchors: 'EM Market food hall · UOB Live arena · IKEA city store',
    highlight: 'Food-first mall with an arena on top — event-night traffic',
    customers: 'Young Bangkok, event crowds, EM District shoppers',
    tier: 'Mid – Premium',
    image: '/images/properties/emsphere.webp',
    imageCredit: 'Suicasmo \u00b7 CC BY-SA 4.0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:EmSphere_20240915.jpg',
    facts: [
      { label: 'Developer', value: 'The Mall Group (EM District)' },
      { label: 'Opened', value: 'December 2023' },
      { label: 'Anchor', value: 'UOB Live arena; large-format food halls' },
      { label: 'F&B posture', value: 'Food-first mall: street-food hall to late-night tier' },
      { label: 'Nearest rail', value: 'BTS Phrom Phong' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'EmSphere completed The Mall Group’s EM District trilogy with a deliberately different posture: younger, louder, food-first, with an arena on top. Where EmQuartier sells premium retail with dining attached, EmSphere sells eating and entertainment with retail attached.',
          'Two years in, it is the clearest live experiment in Bangkok on the question every landlord deck hand-waves: does new F&B supply create new demand, or move existing demand around?',
        ],
      },
      {
        head: 'What the district learned',
        paragraphs: [
          'The evidence reads as redistribution first. The casual tier that once rode EmQuartier’s upper-floor dining loops now has a cheaper, louder alternative two hundred meters away — and premium-mall F&B vacancy across the district sits at multi-year highs while EmSphere’s food floors trade well. Same shoppers, new address.',
          'Arena nights are the genuine incremental demand: event traffic that would not otherwise be at Phrom Phong on a Tuesday. Operators positioned on the arena flow — late hours, high throughput, drink-led margin — capture something real. Operators who signed for generic mall traffic bought the redistribution.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: high-energy, high-turn formats that can flex to event-night spikes, and first-store-in-Thailand concepts that want maximum young-Bangkok visibility per baht of rent. Wrong for: quiet premium dining — the building’s energy works against it, and EmQuartier next door serves that job better. Treat EmSphere as a case study before treating it as an address: it is the district’s proof that floorplate does not create appetite.',
        ],
      },
    ],
  },
  {
    slug: 'cloud-11',
    group: 'next',
    name: 'Cloud 11',
    district: 'South Sukhumvit / On Nut',
    format: 'Mixed-use — creator-economy hub',
    status: 'Phased opening from 2026',
    read: 'The bet that matters for the Phra Khanong–On Nut frontier: if its creator tenancy lands, the corridor’s rent curve re-rates early. Watch pre-let announcements, not the opening date.',
    owner: 'MQDC',
    location: 'South Sukhumvit / On Nut',
    area: '~254,000 sqm GFA (announced)',
    openYear: 'Phased from 2026 (targeted)',
    anchors: 'Content studios, creator offices, hotel (announced)',
    highlight: 'Creator-economy anchor tenancy — daytime population play',
    customers: 'Creators, production crews, On Nut residents',
    tier: 'Mid – Premium',
    image: '/images/properties/cloud-11.webp',
    imageCredit: 'Magnamonkun \u00b7 CC0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:Cloud_11_Bangkok.jpg',
    facts: [
      { label: 'Developer', value: 'MQDC' },
      { label: 'Site', value: 'Sukhumvit south corridor, On Nut side' },
      { label: 'Positioning', value: 'Announced as a content-creator hub: studios, offices, retail, hotel' },
      { label: 'Status', value: 'Phased opening targeted from 2026' },
      { label: 'Nearest rail', value: 'BTS On Nut / Phra Khanong corridor' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'Cloud 11 is a thesis in concrete: that Bangkok’s content-creator economy is big enough to anchor a district. Studios, production floors, creator offices and supporting retail on the unfashionable side of Sukhumvit — where land was cheap enough to try.',
          'For F&B, the project itself is almost secondary. What matters is the corridor: Phra Khanong–On Nut is the frontier zone we already flag, rents up strongly off a low base, with a window of entry still open. Cloud 11 is the event that could close it.',
        ],
      },
      {
        head: 'The mechanism',
        paragraphs: [
          'Creator tenancy is daytime population with high food spend and long dwell — the exact demography that re-prices a neighborhood’s F&B rents. If the studios and offices actually fill, every soi within walking distance re-rates, the way Thonglor re-rated a decade ago. If they do not fill, Cloud 11 is a large building on the wrong side of town and the corridor keeps its slow, organic curve.',
          'Hence the read: watch pre-let announcements, not the opening date. A ribbon-cutting proves construction; signed creator and production tenants prove the thesis. The gap between those two is where the entry window either closes fast or stays open.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: operators already eyeing Phra Khanong–On Nut — the corridor entry logic stands on its own, and Cloud 11 is upside optionality on top. Independent and small-format concepts benefit most: they can sign street-level leases now at frontier rents. Wrong for: paying a Cloud 11-premium inside the project itself before tenancy is proven. The corridor is the trade; the building is the catalyst to monitor.',
        ],
      },
    ],
  },
  {
    slug: 'bangkok-mall',
    group: 'announced',
    name: 'Bangkok Mall',
    district: 'Bangna',
    format: 'Regional mall — super-scale',
    status: 'Under construction — late-decade',
    read: 'Bangna’s catchment is real but already served. The question a term sheet here must answer: does super-scale supply grow east-side dining spend, or redistribute it at higher rent?',
    owner: 'The Mall Group',
    location: 'Bangna intersection, eastern Bangkok',
    area: 'Announced at super-regional scale (‘SEA’s largest’ per launch)',
    openYear: 'Under construction — late-decade target',
    anchors: 'Bangkok Arena; department store TBA',
    highlight: 'Super-scale plus a 16,000-seat arena',
    customers: 'East-Bangkok families, airport corridor',
    tier: 'Mid – Premium',
    image: '/images/properties/bangkok-mall.webp',
    imageCredit: '\u0e01\u0e2a\u0e34\u0e13\u0e18\u0e23 \u0e23\u0e32\u0e0a\u0e42\u0e2d\u0e23\u0e2a \u00b7 CC BY-SA 4.0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2-%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94_Bangna-Trat_Road_(2).jpg',
    imageNote: 'Bangna\u2013Trad corridor \u2014 the project\u2019s trade area, not the mall itself',
    facts: [
      { label: 'Developer', value: 'The Mall Group' },
      { label: 'Site', value: 'Bangna intersection, eastern Bangkok' },
      { label: 'Positioning', value: 'Announced as one of Southeast Asia’s largest malls' },
      { label: 'Status', value: 'Under construction; opening targeted late-decade' },
      { label: 'Context', value: 'Faces incumbent supply: Mega Bangna, Central Bangna' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'Bangkok Mall is The Mall Group’s long-gestating bet on the eastern corridor — announced at super-regional scale at the Bangna intersection, in a trade area already anchored by Mega Bangna and Central Bangna. The project has moved slowly for years; the announced ambition has not shrunk.',
          'East Bangkok’s catchment is genuinely deep: suburban families, the airport corridor, and EEC-linked growth behind it. The question is not whether people are there. It is whether they are underserved.',
        ],
      },
      {
        head: 'The math',
        paragraphs: [
          'Suburban mall dining in Thailand is family-format economics: bigger tickets per table, lower frequency, brutal weekday-weekend skew. Mega Bangna already runs that playbook at scale and runs it well. A third super-scale offer must either grow total east-side dining spend — possible, if it pulls trips that currently go into town — or slice the same pie thinner at higher rent.',
          'For chains, Bangna becomes a portfolio question: a Bangkok Mall flagship likely cannibalizes your own Mega Bangna unit before it cannibalizes a competitor’s. Model the pair, not the site.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: category leaders who will be offered anchor-grade terms to complete the landlord’s line-up — the leverage sits with tenants the mall needs, and it should be used. Wrong for: independents and first-time suburban entrants; this is chain terrain. There is no urgency premium here — the project’s own timeline grants years to watch pre-leasing and let the anchor terms surface. Sign late, sign informed.',
        ],
      },
    ],
  },
  {
    slug: 'ics',
    group: 'open',
    name: 'ICS',
    district: 'Charoen Nakhon / Thonburi riverside',
    format: 'Mixed-use — retail podium, hotel, offices',
    status: 'Open since 2023',
    read: 'The value-tier half of the ICONSIAM cluster. Thonburi\u2019s first organized-retail district now runs a two-mall system \u2014 and the F&B math differs sharply between the two boxes.',
    owner: 'Siam Piwat consortium (ICONSIAM group)',
    location: 'Charoen Nakhon, Thonburi riverside',
    area: '~70,000 sqm (per launch reports)',
    openYear: '2023',
    anchors: "Lotus's flagship store · Hilton Garden Inn · offices",
    highlight: 'Daily-tier half of the ICONSIAM cluster; Gold Line-fed',
    customers: 'Riverside residents, commuters, office workers',
    tier: 'Mid',
    image: '/images/properties/ics.webp',
    imageCredit: 'Idea Works Communications \u00b7 CC BY-SA 4.0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:ICS_Night_copy.jpg',
    facts: [
      { label: 'Developer', value: 'Siam Piwat consortium (ICONSIAM group)' },
      { label: 'Site', value: 'Charoen Nakhon Road, opposite ICONSIAM' },
      { label: 'Opened', value: '2023' },
      { label: 'F&B posture', value: 'Daily-tier dining and convenience, complementing ICONSIAM\u2019s destination tier' },
      { label: 'Nearest rail', value: 'BTS Gold Line Charoen Nakhon' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'ICS completes what ICONSIAM started: turning the Thonburi riverside from a hotel strip into an organized-retail district. Where ICONSIAM sells spectacle to tourists and destination shoppers, ICS is built for the other catchment \u2014 the offices upstairs, the Gold Line commuters, and the fast-growing residential towers along Charoen Nakhon.',
          'For F&B operators the cluster now works as a two-tier system: destination pricing across the road, daily pricing here. Mistaking which box your concept belongs in is the expensive error.',
        ],
      },
      {
        head: 'The catchment',
        paragraphs: [
          'Thonburi\u2019s riverside has quietly become one of Bangkok\u2019s densest new-condo corridors, and that residential base \u2014 not tourism \u2014 is what underwrites weekday F&B at ICS. Tourist flow tops up weekends but arrives via ICONSIAM first; ICS captures spillover, not the primary trip.',
          'The Gold Line matters more than it looks: it converts the cluster into a walkable extension of the BTS network, and the commuter flow it feeds is exactly the repeat-frequency customer a daily-tier concept needs.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: daily-frequency formats \u2014 coffee, fast casual, grab-and-go \u2014 priced for residents and office workers, riding a rent card meaningfully below ICONSIAM\u2019s. Wrong for: destination concepts that belong across the road, and anything priced as if the tourist is the base customer. Read the cluster as one district with two rent curves, and sign on the curve that matches your ticket size.',
        ],
      },
    ],
  },
  {
    slug: 'the-forestias',
    group: 'next',
    name: 'The Forestias',
    district: 'Bangna\u2013Trad',
    format: 'Mixed-use township — residential-led, forest-centered',
    status: 'Phased — town center ramping',
    read: 'A residential-led township betting that a private forest can anchor suburban life. For F&B, the catchment is captive but thin until the homes fill \u2014 township retail runs on rooftops, not footfall projections.',
    owner: 'MQDC',
    location: 'Bangna–Trad corridor, eastern Bangkok',
    area: '~398-rai township; town-center retail share undisclosed',
    openYear: 'Residential handovers under way; town center ramping',
    anchors: 'Township retail, wellness and medical anchors',
    highlight: 'A cultivated private forest as the amenity',
    customers: 'Township residents, east-side families',
    tier: 'Premium (residential-led)',
    image: '/images/properties/the-forestias.webp',
    imageCredit: '\u0e01\u0e2a\u0e34\u0e13\u0e18\u0e23 \u0e23\u0e32\u0e0a\u0e42\u0e2d\u0e23\u0e2a \u00b7 CC BY-SA 4.0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2-%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94_Bangna-Trat_Road_(2).jpg',
    imageNote: 'Bangna\u2013Trad corridor \u2014 the project\u2019s corridor, not the township itself',
    facts: [
      { label: 'Developer', value: 'MQDC' },
      { label: 'Site', value: 'Bangna\u2013Trad corridor, eastern Bangkok' },
      { label: 'Positioning', value: 'Wellness township around a central forest; residences, seniors living, retail town center' },
      { label: 'Status', value: 'Residential phases handing over; town center ramping in phases' },
      { label: 'Context', value: 'Same corridor as Mega Bangna and the announced Bangkok Mall' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'The Forestias is the most unusual large project in Thailand: a township where the amenity is a cultivated forest, aimed at multi-generation families and wellness-minded buyers. Retail exists to serve the township first and the corridor second \u2014 the reverse of a mall\u2019s logic.',
          'That inversion changes the F&B math entirely. Demand here is a function of units handed over and occupied, not of traffic engineering. The forest brings visitors on weekends; the P&L is underwritten by the people who sleep there.',
        ],
      },
      {
        head: 'The math',
        paragraphs: [
          'Township retail ramps with residency, and residency ramps slowly \u2014 handovers, fit-outs, families actually moving in. Early F&B tenants face the same shape of risk as One Bangkok\u2019s first phase, at suburban ticket sizes: real rent now, maturing catchment later.',
          'The offset is loyalty economics. A township customer eats with you weekly, not once a quarter \u2014 retention replaces reach. Formats that build repeat habits (bakery-cafe, family dining, health-leaning daily food) compound here in a way high-energy destination concepts cannot.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: neighborhood-loyalty formats with patient capital and lease terms indexed to the township\u2019s actual occupancy. Wrong for: anything that needs corridor-scale footfall from day one \u2014 Mega Bangna up the road already owns that job, at scale. Enter when handover data, not the marketing suite, says the rooftops are real.',
        ],
      },
    ],
  },
  {
    slug: 'asiatique-riverfront',
    group: 'announced',
    name: 'Asiatique 2.0',
    district: 'Charoenkrung riverside',
    format: 'Riverfront mixed-use — announced redevelopment',
    status: 'Announced — long game',
    read: 'AWC\u2019s plan to rebuild the night-market riverfront into a full mixed-use destination. The existing Asiatique keeps trading while the vision seeks its timeline \u2014 which is precisely the read: announced is not under way.',
    owner: 'Asset World Corp (AWC)',
    location: 'Charoenkrung riverside',
    area: 'Expansion announced; current site ~12 rai riverfront market',
    openYear: 'Operating; THB 8bn expansion announced 2026 (per report)',
    anchors: 'Night market · Asiatique Sky wheel · hotels planned',
    highlight: 'River frontage, ferry access, announced cross-river cable car',
    customers: 'Tourists, evening leisure crowds',
    tier: 'Tourist / Mid',
    image: '/images/properties/asiatique-riverfront.webp',
    imageCredit: 'Moel81 \u00b7 CC BY-SA 4.0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:Asiatique_Sky_Ferris_Wheel.jpg',
    facts: [
      { label: 'Owner', value: 'Asset World Corp (AWC)' },
      { label: 'Site', value: 'Asiatique The Riverfront, Charoenkrung riverside' },
      { label: 'Positioning', value: 'Announced expansion into towers, hotels and expanded retail around the existing night market' },
      { label: 'Status', value: 'Announced; the current Asiatique continues operating' },
      { label: 'Context', value: 'Tourist-led riverfront; ferry-fed access from Saphan Taksin' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'Asiatique already proved the location: a ferry-fed riverfront night destination that tourists reliably find. AWC\u2019s announced redevelopment would stack hotels and towers onto that proof \u2014 turning an evening market into an all-day district.',
          'The operative word is announced. Mega-projects on this scale move with financing cycles and tourism confidence, and the gap between a launch event and a piling rig can run years. The current asset trades on regardless.',
        ],
      },
      {
        head: 'The math',
        paragraphs: [
          'Today\u2019s Asiatique is a tourist-margin business: high evening peaks, soft weekdays, and a customer who visits once. That suits souvenir-tier F&B and photogenic flagships; it starves frequency-led formats. The redevelopment, if built, changes the equation by adding hotel guests and office workers \u2014 a captive, repeat base the site has never had.',
          'For operators, that makes this a monitoring file, not a term-sheet file. The trade is being positioned when construction becomes real \u2014 riverside sites with this kind of access do not stay reasonably priced once cranes appear.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: operators already in tourist-led formats who can trade the existing evening peaks profitably now, with an option on the bigger district later. Wrong for: committing capital against the announced masterplan before ground actually breaks. Watch AWC\u2019s capex announcements and hotel-brand signings \u2014 those, not renders, are the signal.',
        ],
      },
    ],
  },
  {
    slug: 'emporium',
    group: 'announced',
    name: 'EM District Completion',
    district: 'Sukhumvit / Phrom Phong',
    format: 'Renovation — Emporium revamp',
    status: 'Renovation underway',
    read: 'The Mall Group\u2019s final move at Phrom Phong: rebuilding Emporium to match its two younger siblings. Renovation churn means tenant displacement \u2014 and displacement means negotiating leverage across the whole district.',
    owner: 'The Mall Group',
    location: 'Sukhumvit / Phrom Phong (EM District)',
    area: 'Not disclosed (full renovation of the original box)',
    openYear: 'Phased renovation while trading',
    anchors: 'Department store · luxury flagships · gourmet market',
    highlight: 'The final piece of the three-mall EM District masterplan',
    customers: 'Phrom Phong premium residents, Japanese expat belt',
    tier: 'Luxury – Premium',
    image: '/images/properties/emporium.webp',
    imageCredit: 'Chainwit. \u00b7 CC BY-SA 4.0',
    imageCreditHref: 'https://commons.wikimedia.org/wiki/File:Emporium_Bangkok_2020.jpg',
    facts: [
      { label: 'Developer', value: 'The Mall Group' },
      { label: 'Site', value: 'Emporium, Phrom Phong \u2014 the EM District\u2019s original box' },
      { label: 'Positioning', value: 'Full revamp to complete the three-mall EM District masterplan' },
      { label: 'Status', value: 'Phased renovation while trading' },
      { label: 'Context', value: 'Adjacent to EmQuartier and EmSphere; BTS Phrom Phong' },
    ],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'Emporium is where Bangkok premium-mall retail started, and it is now the dated box between two newer siblings. The Mall Group\u2019s revamp is the last piece of the EM District masterplan: three malls, one BTS station, one continuous premium precinct.',
          'A renovation-while-trading is a different animal from a new build: floors close in sequence, tenants get relocated, offered new terms, or quietly not renewed. That churn is the story for F&B.',
        ],
      },
      {
        head: 'The mechanism',
        paragraphs: [
          'Renovation churn hands leverage to strong operators. A landlord clearing floors needs proven tenants to anchor the reopened ones, and a district with three boxes has three places to put you \u2014 which makes this the moment to renegotiate the whole Phrom Phong relationship, not one lease.',
          'It also compounds the district\u2019s existing problem: EmSphere already redistributed the casual tier, and premium-mall vacancy sits at multi-year highs. Emporium\u2019s reopened floors will re-set the district\u2019s premium dining line-up \u2014 whoever is in the landlord\u2019s good graces when the music stops gets the best real estate at Phrom Phong for a decade.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: operators already trading in the EM District \u2014 use the churn window to consolidate into better positions across the three boxes. Wrong for: newcomers paying full district pricing mid-renovation; let the reopened floors prove their traffic first. The asset to watch is not the renovation render \u2014 it is which anchor restaurants The Mall Group announces for the reopened floors.',
        ],
      },
    ],
  },
  {
    slug: 'the-central-phaholyothin',
    group: 'next',
    name: 'The Central Phaholyothin',
    district: 'Phahon Yothin / Vibhavadi, North Bangkok',
    format: 'Retail flagship — mall + convention hall',
    status: 'Opening Q4 2026 (announced)',
    read: "CPN's THB 21bn 'flagship of the future' plants a super-premium box in North Bangkok \u2014 next door to its own Central Ladprao. The question is whether it upgrades the catchment or cannibalizes the family silver.",
    owner: 'Central Pattana (CPN)',
    location: 'Between Phahon Yothin and Vibhavadi Rangsit Roads (Ha Yaek Lat Phrao node)',
    area: '~457,000 sqm GBA on 49 rai (announced)',
    openYear: 'Q4 2026 (announced)',
    anchors: '6,700 sqm convention hall; retail anchors TBA',
    highlight: 'THB 21bn flagship \u2014 announced as the landmark of northern Bangkok',
    customers: 'North-Bangkok families, Lat Phrao office belt, event crowds',
    tier: 'Premium',
    image: '/images/properties/the-central-phaholyothin.webp',
    facts: [],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'The Central is CPN going all-in on its home turf: a THB 21 billion flagship on 49 rai between Phahon Yothin and Vibhavadi, at the Ha Yaek Lat Phrao interchange where BTS and MRT catchments overlap. The announced GBA \u2014 roughly 457,000 sqm \u2014 puts it in the same weight class as the biggest boxes in the city, and the 6,700 sqm convention hall signals the play: events as a traffic engine, not just shopping.',
          'The location is loaded. Central Ladprao \u2014 CPN\u2019s original flagship \u2014 sits within walking distance, and Union Mall serves the value tier at the same junction.',
        ],
      },
      {
        head: 'The math',
        paragraphs: [
          'For F&B operators the tension is simple: North Bangkok has deep residential catchment but has never had a true premium dining destination \u2014 spend leaks south to Sukhumvit. If The Central captures that leakage, its dining floors start with demand no new supply usually gets. If it merely redistributes traffic from Central Ladprao, tenants in both boxes share one pie at two rents.',
          'The convention hall changes the shape of demand: event-day spikes reward high-throughput formats and punish concepts that need steady covers. Read the anchor announcements \u2014 and which existing Ladprao tenants CPN relocates \u2014 before pricing the catchment.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: category leaders that can negotiate anchor-grade terms in a flagship the landlord must fill impressively, and event-adjacent formats built for spikes. Wrong for: paying flagship rent on the assumption North Bangkok spend arrives day one \u2014 the leakage thesis is plausible, not proven. Watch pre-lets through 2026.',
        ],
      },
    ],
  },
  {
    slug: 'central-central',
    group: 'announced',
    name: 'CenTRal cENtrAL',
    district: 'Pathumwan / Siam Square',
    format: 'Mixed-use — youth-culture retail',
    status: 'Retail targeted Q2 2027 (announced)',
    read: "CPN's first JV with Mitsubishi Estate drops THB 11bn on the Pathumwan intersection to double down on Siam Square as a global youth-culture destination \u2014 the highest-frequency young footfall in the country.",
    owner: 'Central Pattana \u00d7 Mitsubishi Estate (JV)',
    location: 'Pathumwan intersection, Siam Square',
    area: 'Project value announced at THB 11bn+; floorplate TBA',
    openYear: 'Retail targeted Q2 2027 (announced)',
    anchors: 'Youth-culture retail and entertainment anchors TBA',
    highlight: 'First CPN \u00d7 Mitsubishi Estate JV; Siam Square youth-culture play',
    customers: 'Students, Gen Z Bangkok, tourists on the Siam axis',
    tier: 'Mid \u2013 Premium (youth-led)',
    image: '/images/properties/central-central.webp',
    facts: [],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'The Pathumwan intersection already runs the densest young footfall in Thailand \u2014 Siam Square, Siam Paragon, MBK and CentralWorld all within a walk. CenTRal cENtrAL adds a purpose-built youth-culture box to that axis, with Mitsubishi Estate\u2019s Tokyo retail experience on the cap table \u2014 a JV structure CPN has not used before.',
        ],
      },
      {
        head: 'The math',
        paragraphs: [
          'Youth-led retail is frequency economics: small tickets, high visits, brutal trend cycles. F&B here lives on throughput and Instagram velocity, not ticket size \u2014 the Siam Square shophouse market already proves both the upside (queues) and the churn (concepts die in 18 months). An organized-retail version of that game offers better infrastructure at meaningfully higher rent.',
          'The open question is differentiation against Siam Square itself, one soi over, where CPN\u2019s own low-rise blocks incubate the trends this box will want to harvest.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: high-turn, trend-native formats with the menu cadence to ride 18-month cycles, and international youth brands entering Thailand at maximum visibility. Wrong for: quiet premium dining and anything that needs a stable five-year concept \u2014 this address will reward reinvention and punish stillness.',
        ],
      },
    ],
  },
  {
    slug: 'central-northville',
    group: 'open',
    name: 'Central NorthVille',
    district: 'Rattanathibet / Bang Yai, Nonthaburi',
    format: 'Regional mall — mixed-use rebuild',
    status: 'Opened July 2026',
    read: 'CPN rebuilt an ageing box on the Purple Line into a 210,000 sqm, 215-store regional center \u2014 the suburban-northwest test of whether rail-fed family malls still compound.',
    owner: 'Central Pattana (CPN)',
    location: 'Rattanathibet corridor, Bang Yai, Nonthaburi',
    area: '~210,000 sqm, 215 stores (reported at opening)',
    openYear: 'July 2026',
    anchors: 'Standard CPN mix \u2014 department store, hypermarket tier, cineplex',
    highlight: 'Full rebuild of an ageing site into a Purple Line\u2013fed mixed-use center',
    customers: 'Northwest-suburb families, Purple Line commuters',
    tier: 'Mid',
    image: '/images/properties/central-northville.webp',
    facts: [],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'NorthVille is the quieter kind of CPN move: take an ageing retail site on the Rattanathibet corridor, rebuild it into a modern 210,000 sqm mixed-use center, and let the Purple Line deliver the catchment. It opened in July 2026 with 215 stores \u2014 a full-size regional mall for a suburb that has grown a decade past its old retail stock.',
        ],
      },
      {
        head: 'The math',
        paragraphs: [
          'Suburban family malls are the most predictable F&B economics in Thailand: weekend-heavy, family-format, lower rents than town, loyal repeat trade. The northwest quadrant has added condo supply along the Purple Line for years while organized dining lagged \u2014 NorthVille is effectively the corridor\u2019s first modern food floor, with CPN\u2019s Westville sibling proving the playbook on the west side.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: family casual dining, daily-frequency formats, and chains filling out a Bangkok-perimeter portfolio at sane rents. Wrong for: destination or premium concepts \u2014 this catchment pays for reliability, not novelty. The practical note: opening-year malls over-trade, so underwrite year-three traffic, not month three.',
        ],
      },
    ],
  },
  {
    slug: 'aquatique-pattaya',
    group: 'announced',
    name: 'Aquatique Pattaya',
    district: 'South Pattaya beachfront',
    format: 'Mixed-use resort district — hotels, retail, attractions',
    status: 'Phased — under development',
    read: "AWC's beachfront district stacks hotels, retail and branded attractions (Legoland and Peppa Pig parks per reports) on South Pattaya \u2014 attraction-anchored traffic, which is the most predictable tourist footfall there is.",
    owner: 'Asset World Corp (AWC)',
    location: 'South Pattaya beachfront',
    area: 'Multi-phase district; floorplate disclosures partial',
    openYear: 'Phased; early components operating, build-out continuing',
    anchors: 'Branded attractions (Legoland Discovery, Peppa Pig per reports) \u00b7 hotels \u00b7 convention space',
    highlight: 'Beachfront scale with attraction anchors \u2014 engineered family traffic',
    customers: 'Thai and international tourists, families, EEC weekenders',
    tier: 'Tourist Mid \u2013 Premium',
    image: '/images/properties/aquatique-pattaya.webp',
    facts: [],
    sections: [
      {
        head: 'The setup',
        paragraphs: [
          'Aquatique is AWC applying the Asiatique lesson at Pattaya scale: control a long beachfront, anchor it with things families must visit \u2014 branded attractions, hotels, convention space \u2014 and let retail and dining monetize the flow. Attraction-led districts produce the most predictable tourist footfall in the industry, because the anchor is the reason for the trip, not an impulse.',
        ],
      },
      {
        head: 'The math',
        paragraphs: [
          'Tourist-district F&B runs on peaks: high evening and weekend loads, soft weekday troughs, one-visit customers who never return. That suits photogenic flagships, family-format restaurants sized to attraction exit-flow, and drink-led margin. It starves frequency concepts. Pattaya adds an EEC tailwind \u2014 weekday corporate and convention traffic that classic Pattaya retail never had.',
        ],
      },
      {
        head: 'The call',
        paragraphs: [
          'Right for: operators already running tourist-format economics who want engineered footfall instead of gambling on a strip; family formats positioned on attraction exits. Wrong for: local-frequency concepts and anyone underwriting Bangkok-style weekday covers. Phase discipline applies \u2014 sign against operating attractions, not announced ones.',
        ],
      },
    ],
  },
];

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

export interface Property {
  slug: string;
  name: string;
  district: string;
  format: string;
  status: string;
  read: string; // the one-paragraph read shown on the card
  image: string;
  imageCredit?: string;
  imageCreditHref?: string;
  imageNote?: string; // set when the photo shows the corridor, not the project
  facts: PropertyFact[];
  sections: PropertySection[];
}

export const properties: Property[] = [
  {
    slug: 'one-bangkok',
    name: 'One Bangkok',
    district: 'Rama IV / Wireless',
    format: 'Mixed-use — retail, office, hotels, residences',
    status: 'Open — ramping through 2026',
    read: 'The largest single addition of F&B floorplate in Bangkok history. Office towers fill faster than retail — weekday lunch works now, dinner catchment still forming. First-phase tenants carry the ramp risk.',
    image: '/images/properties/one-bangkok.webp',
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
    name: 'Dusit Central Park',
    district: 'Silom / Rama IV',
    format: 'Mixed-use — hotel, residences, office, retail podium',
    status: 'Retail opened 2025',
    read: 'Completes the Rama IV corridor with One Bangkok and Samyan Mitrtown — three projects now compete for the same office-worker lunch. Expect effective-rent softness at the corridor’s casual tier.',
    image: '/images/properties/dusit-central-park.webp',
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
    name: 'EmSphere',
    district: 'Sukhumvit / Phrom Phong',
    format: 'Retail — food-hall-weighted, arena-anchored',
    status: 'Open since Dec 2023',
    read: 'The EM District’s third box leans food-first — which siphons casual-tier traffic from EmQuartier’s upper floors more than it grows the district. A cautionary read for "new supply = new demand" assumptions.',
    image: '/images/properties/emsphere.webp',
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
    name: 'Cloud 11',
    district: 'South Sukhumvit / On Nut',
    format: 'Mixed-use — creator-economy hub',
    status: 'Phased opening from 2026',
    read: 'The bet that matters for the Phra Khanong–On Nut frontier: if its creator tenancy lands, the corridor’s rent curve re-rates early. Watch pre-let announcements, not the opening date.',
    image: '/images/properties/cloud-11.webp',
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
    name: 'Bangkok Mall',
    district: 'Bangna',
    format: 'Regional mall — super-scale',
    status: 'Under construction — late-decade',
    read: 'Bangna’s catchment is real but already served. The question a term sheet here must answer: does super-scale supply grow east-side dining spend, or redistribute it at higher rent?',
    image: '/images/properties/bangkok-mall.webp',
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
];

// i18n registry: supported languages, UI strings, and which routes have a
// Japanese edition. English is the default and lives at the root (/x);
// Japanese lives under /ja (/ja/x).

export const languages = {
  en: 'English',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

// Routes (in their English form) that have a Japanese counterpart at /ja/...
// Add a route here when its /ja page ships. This drives hreflang tags, the
// language switcher target and nav/footer link localisation, so an
// untranslated page never gets linked or advertised as Japanese.
export const translatedRoutes: string[] = [
  '/',
];

export const ui = {
  en: {
    'site.tagline': "Decoding Thailand's F&B landscape for international investors, suppliers, and operators.",
    'site.origin': 'A Torpenguin publication · Bangkok',
    'site.city': 'Bangkok',
    'site.home': 'SpoonAsia home',

    'nav.news': 'News',
    'nav.deals': 'M&A & Deals',
    'nav.analysis': 'Market Analysis',
    'nav.operators': 'Operator Stories',
    'nav.supplier': 'Supplier Intel',
    'nav.events': 'Events',
    'nav.locations': 'Locations',
    'nav.videos': 'Videos',
    'nav.search': 'Search',
    'nav.newsletters': 'Newsletters',
    'nav.subscribe': 'Subscribe',
    'nav.menu': 'Open menu',
    'nav.language': 'Language',

    'footer.editorial': 'Editorial',
    'footer.company': 'Company',
    'footer.channels': 'Channels',
    'footer.analysis': 'Analysis',
    'footer.videos': 'Videos',
    'footer.marketWatch': 'Market Watch',
    'footer.properties': 'Property Files',
    'footer.about': 'About',
    'footer.events': 'Events',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Newsletter',
    'footer.newsHead': 'F&B intelligence on Asia, every Sunday.',
    'footer.newsNote': 'Unit economics, neighborhood alpha, and the gaps in pitch decks. Read by operators across SG · JP · KR · UK · CN.',
    'footer.emailPlaceholder': 'your@email.com',
    'footer.emailLabel': 'Email address',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.colophon': 'Colophon',

    'common.englishOnly': 'English',
  },
  ja: {
    'site.tagline': 'タイの外食市場を、海外の投資家・サプライヤー・事業者のために読み解く。',
    'site.origin': 'Torpenguin 発行 · バンコク',
    'site.city': 'バンコク',
    'site.home': 'SpoonAsia ホーム',

    'nav.news': 'ニュース',
    'nav.deals': 'M&A・ディール',
    'nav.analysis': '市場分析',
    'nav.operators': '事業者ストーリー',
    'nav.supplier': 'サプライヤー情報',
    'nav.events': 'イベント',
    'nav.locations': 'エリア',
    'nav.videos': '動画',
    'nav.search': '検索',
    'nav.newsletters': 'ニュースレター',
    'nav.subscribe': '購読する',
    'nav.menu': 'メニューを開く',
    'nav.language': '言語',

    'footer.editorial': '編集コンテンツ',
    'footer.company': '会社情報',
    'footer.channels': 'チャンネル',
    'footer.analysis': '分析',
    'footer.videos': '動画',
    'footer.marketWatch': 'マーケットウォッチ',
    'footer.properties': '物件ファイル',
    'footer.about': '私たちについて',
    'footer.events': 'イベント',
    'footer.contact': 'お問い合わせ',
    'footer.newsletter': 'ニュースレター',
    'footer.newsHead': 'アジアの外食インテリジェンスを、毎週日曜日に。',
    'footer.newsNote': 'ユニットエコノミクス、エリア分析、事業計画書が見落とすポイント。シンガポール・日本・韓国・英国・中国の事業者が購読中。',
    'footer.emailPlaceholder': 'メールアドレス',
    'footer.emailLabel': 'メールアドレス',
    'footer.rights': '無断転載を禁じます',
    'footer.privacy': 'プライバシー',
    'footer.terms': '利用規約',
    'footer.colophon': 'コロフォン',

    'common.englishOnly': '英語版のみ',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

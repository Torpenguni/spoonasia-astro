// Fetches F&B tickers from Yahoo Finance and writes public/tickers.json
// Used by GitHub Actions cron (.github/workflows/update-tickers.yml)
// and can also be run locally: `node scripts/update-tickers.mjs`
//
// The symbol list lives in src/lib/symbols.mjs and is shared with the site.
// It used to be duplicated here, which meant adding a ticker to the site did
// not add it to the feed.
import YahooFinance from 'yahoo-finance2';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { SYMBOLS } from '../src/lib/symbols.mjs';

const yahooFinance = new YahooFinance({ suppressNotices: ['yahooSurvey'] });


const fmt = (v, c) => `${c === 'THB' ? '฿' : '$'}${v.toFixed(2)}`;
const fmtPct = (p) => `${p >= 0 ? '+' : ''}${p.toFixed(2)}%`;

const asOf = new Date().toLocaleString('en-GB', {
  timeZone: 'Asia/Bangkok',
  hour: '2-digit',
  minute: '2-digit',
  day: '2-digit',
  month: 'short',
});

const results = await yahooFinance.quote(SYMBOLS.map(s => s.symbol));
const byId = new Map(results.map(r => [r.symbol, r]));

const tickers = SYMBOLS.map(cfg => {
  const r = byId.get(cfg.symbol);
  if (!r || r.regularMarketPrice == null) {
    return { label: cfg.label, value: '—', change: '—', positive: true };
  }
  const pct = r.regularMarketChangePercent ?? 0;
  return {
    label: cfg.label,
    value: fmt(r.regularMarketPrice, cfg.currency),
    change: fmtPct(pct),
    positive: pct >= 0,
  };
});

const payload = { tickers, asOf, live: true, updatedAt: new Date().toISOString() };

const outPath = resolve(process.cwd(), 'public', 'tickers.json');
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(payload, null, 2));

console.log(`[update-tickers] Wrote ${tickers.length} tickers to ${outPath}`);
console.log(`[update-tickers] As of ${asOf} ICT`);

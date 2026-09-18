// The symbol universe — imported by both src/lib/tickers.ts (the site) and
// scripts/update-tickers.mjs (the GitHub Action). Plain JS on purpose: the
// Action runs bare `node`, and a second hand-maintained copy of this list is
// how adding a ticker to the site silently failed to reach the feed.
//
// group: 'operator' | 'brand' | 'supplier' | 'distribution' | 'commodity'
// supplies: for suppliers, what it actually sells into a kitchen.

export const SYMBOLS = [
  // --- Restaurant operators ---
  { symbol: 'MINT.BK',    label: 'MINT',      currency: 'THB', group: 'operator' },
  { symbol: 'CENTEL.BK',  label: 'CENTEL',    currency: 'THB', group: 'operator' },
  { symbol: 'M.BK',       label: 'M (MK)',    currency: 'THB', group: 'operator' },
  { symbol: 'AU.BK',      label: 'AU',        currency: 'THB', group: 'operator' },
  { symbol: 'ZEN.BK',     label: 'ZEN',       currency: 'THB', group: 'operator' },
  { symbol: 'MAGURO.BK',  label: 'MAGURO',    currency: 'THB', group: 'operator' },
  { symbol: 'SNP.BK',     label: 'S&P',       currency: 'THB', group: 'operator' },

  // --- Consumer F&B brands ---
  { symbol: 'CBG.BK',     label: 'CBG',       currency: 'THB', group: 'brand' },
  { symbol: 'OSP.BK',     label: 'OSP',       currency: 'THB', group: 'brand' },
  { symbol: 'ICHI.BK',    label: 'ICHI',      currency: 'THB', group: 'brand' },
  { symbol: 'SAPPE.BK',   label: 'SAPPE',     currency: 'THB', group: 'brand' },
  { symbol: 'TKN.BK',     label: 'TKN',       currency: 'THB', group: 'brand' },
  { symbol: 'TFMAMA.BK',  label: 'TFMAMA',    currency: 'THB', group: 'brand' },
  { symbol: 'PB.BK',      label: 'PB',        currency: 'THB', group: 'brand' },
  { symbol: 'SNNP.BK',    label: 'SNNP',      currency: 'THB', group: 'brand' },

  // --- Suppliers: protein and seafood into kitchens ---
  { symbol: 'CPF.BK',     label: 'CPF',       currency: 'THB', group: 'supplier', supplies: 'Poultry, pork, processed protein' },
  { symbol: 'BTG.BK',     label: 'BTG',       currency: 'THB', group: 'supplier', supplies: 'Pork, poultry, foodservice cuts' },
  { symbol: 'TFG.BK',     label: 'TFG',       currency: 'THB', group: 'supplier', supplies: 'Poultry and pork, export and domestic' },
  { symbol: 'GFPT.BK',    label: 'GFPT',      currency: 'THB', group: 'supplier', supplies: 'Integrated poultry' },
  { symbol: 'SORKON.BK',  label: 'SORKON',    currency: 'THB', group: 'supplier', supplies: 'Processed pork, Thai sausage' },
  { symbol: 'TU.BK',      label: 'TU',        currency: 'THB', group: 'supplier', supplies: 'Tuna, seafood, ambient protein' },
  { symbol: 'ASIAN.BK',   label: 'ASIAN',     currency: 'THB', group: 'supplier', supplies: 'Frozen seafood, surimi' },
  { symbol: 'CHOTI.BK',   label: 'CHOTI',     currency: 'THB', group: 'supplier', supplies: 'Frozen seafood trading' },
  { symbol: 'CM.BK',      label: 'CM',        currency: 'THB', group: 'supplier', supplies: 'Frozen vegetables and produce' },

  // --- Suppliers: ingredients, seasoning, flour, starch ---
  { symbol: 'RBF.BK',     label: 'RBF',       currency: 'THB', group: 'supplier', supplies: 'Flavours, coatings, breadcrumbs, seasoning' },
  { symbol: 'KCG.BK',     label: 'KCG',       currency: 'THB', group: 'supplier', supplies: 'Butter, cheese, bakery ingredients' },
  { symbol: 'SAUCE.BK',   label: 'SAUCE',     currency: 'THB', group: 'supplier', supplies: 'Soy sauce and seasoning (Golden Mountain)' },
  { symbol: 'XO.BK',      label: 'XO',        currency: 'THB', group: 'supplier', supplies: 'Thai sauces and pastes' },
  { symbol: 'JDF.BK',     label: 'JDF',       currency: 'THB', group: 'supplier', supplies: 'Seasoning powder, dehydrated food' },
  { symbol: 'TWPC.BK',    label: 'TWPC',      currency: 'THB', group: 'supplier', supplies: 'Tapioca starch, vermicelli' },
  { symbol: 'TMILL.BK',   label: 'TMILL',     currency: 'THB', group: 'supplier', supplies: 'Wheat flour for bakery and noodles' },
  { symbol: 'PRG.BK',     label: 'PRG',       currency: 'THB', group: 'supplier', supplies: 'Rice milling' },

  // --- Suppliers: oils and fats ---
  { symbol: 'TVO.BK',     label: 'TVO',       currency: 'THB', group: 'supplier', supplies: 'Soybean oil and meal' },
  { symbol: 'LST.BK',     label: 'LST',       currency: 'THB', group: 'supplier', supplies: 'Cooking oil, palm and blended' },
  { symbol: 'CPI.BK',     label: 'CPI',       currency: 'THB', group: 'supplier', supplies: 'Crude palm oil' },
  { symbol: 'UVAN.BK',    label: 'UVAN',      currency: 'THB', group: 'supplier', supplies: 'Palm oil' },

  // --- Suppliers: sugar and sweeteners ---
  { symbol: 'KSL.BK',     label: 'KSL',       currency: 'THB', group: 'supplier', supplies: 'Sugar' },
  { symbol: 'KTIS.BK',    label: 'KTIS',      currency: 'THB', group: 'supplier', supplies: 'Sugar and bio-products' },
  { symbol: 'BRR.BK',     label: 'BRR',       currency: 'THB', group: 'supplier', supplies: 'Sugar' },
  { symbol: 'KBS.BK',     label: 'KBS',       currency: 'THB', group: 'supplier', supplies: 'Sugar' },

  // --- Suppliers: produce ---
  { symbol: 'APURE.BK',   label: 'APURE',     currency: 'THB', group: 'supplier', supplies: 'Sweet corn and canned produce' },
  { symbol: 'SUN.BK',     label: 'SUN',       currency: 'THB', group: 'supplier', supplies: 'Sweet corn' },

  // --- Suppliers: beverage supply into foodservice and convenience ---
  { symbol: 'TACC.BK',    label: 'TACC',      currency: 'THB', group: 'supplier', supplies: 'Beverages for 7-Eleven All Café' },
  { symbol: 'HTC.BK',     label: 'HTC',       currency: 'THB', group: 'supplier', supplies: 'Coca-Cola bottling, southern Thailand' },
  { symbol: 'TIPCO.BK',   label: 'TIPCO',     currency: 'THB', group: 'supplier', supplies: 'Juice and fruit processing' },
  { symbol: 'MALEE.BK',   label: 'MALEE',     currency: 'THB', group: 'supplier', supplies: 'Juice, OEM beverage' },
  { symbol: 'NSL.BK',     label: 'NSL',       currency: 'THB', group: 'supplier', supplies: 'Sandwiches and bakery into convenience' },
  { symbol: 'NRF.BK',     label: 'NRF',       currency: 'THB', group: 'supplier', supplies: 'Ethnic food, plant-based ingredients' },

  // --- Distribution and wholesale ---
  { symbol: 'CPALL.BK',   label: 'CPALL',     currency: 'THB', group: 'distribution' },
  { symbol: 'CPAXT.BK',   label: 'CPAXT',     currency: 'THB', group: 'distribution' },
  { symbol: 'BJC.BK',     label: 'BJC',       currency: 'THB', group: 'distribution' },
  { symbol: 'PM.BK',      label: 'PM',        currency: 'THB', group: 'distribution' },

  // --- Commodities relevant to F&B operators ---
  { symbol: 'KC=F',       label: 'Coffee C',  currency: 'USD', group: 'commodity' },
  { symbol: 'ZW=F',       label: 'Wheat',     currency: 'USD', group: 'commodity' },
  { symbol: 'SB=F',       label: 'Sugar #11', currency: 'USD', group: 'commodity' },
];

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://spoonasia.com',
  // One URL per page: internal links never carry a trailing slash, so the
  // canonical, hreflang and sitemap URLs don't either.
  trailingSlash: 'never',
  // English stays at the root; Japanese lives under /ja. Page-level language
  // logic (hreflang, switcher, translated routes) lives in src/i18n.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Pairs /x with /ja/x and emits xhtml:link hreflang entries for both.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ja: 'ja' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    preview: {
      allowedHosts: true,
    },
  },
});

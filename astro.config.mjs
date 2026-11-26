// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap()],
  build: {
    assets: '_resources',
    inlineStylesheets: `never`
  },
  prefetch: {
    prefetchAll: true,
  }
});

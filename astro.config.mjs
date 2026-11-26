// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://adrianoenache.github.io/astro/",
  integrations: [sitemap()],
  build: {
    assets: '_resources',
    inlineStylesheets: `never`
  },
  prefetch: {
    prefetchAll: true,
  }
});

// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  build: {
    assets: '_resources',
    inlineStylesheets: `never`
  },
  prefetch: {
    prefetchAll: true,
  }
});

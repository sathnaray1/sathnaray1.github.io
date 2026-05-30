// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site → served at the root of https://sathnaray1.github.io (no base path).
export default defineConfig({
  site: 'https://sathnaray1.github.io',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});

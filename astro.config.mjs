// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://skylineautorepair.app',
  integrations: [
    tailwind(), 
    sitemap({
      // Customize the built-in sitemap
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Exclude your custom sitemap to avoid conflicts
      filter: (page) => !page.includes('sitemap.xml')
    }), 
    mdx()
  ]
});
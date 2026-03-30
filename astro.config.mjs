import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://digital-runners.ch',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/admin/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

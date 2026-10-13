import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://islehacks.org',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/store/',
    '/cheats/lite/': '/store/',
    '/cheats/pro/': '/store/',
    '/cheats/elite/': '/store/',
    '/cheats/compare/': '/features/',
    '/contact/': '/support/',
    '/products/dota-2-cheats/': '/store/',
    '/products/dota-2-cheats/elite/': '/store/',
    '/products/dota-2-cheats/utilities/': '/store/',
    '/products/the-isle-hacks/': '/store/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        const siteRoot = 'https://geekbytes.vercel.app';

        if (url === siteRoot || url === `${siteRoot}/`) {
          return { ...item, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
        }
        // Legal pages change rarely
        return { ...item, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() };
      },
    }),
  ],
  site: 'https://geekbytes.vercel.app',
});

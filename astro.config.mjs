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
        const siteRoot = 'https://www.geekbytestech.com';

        if (url === siteRoot || url === `${siteRoot}/`) {
          return { ...item, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
        }
        if (url === `${siteRoot}/services` || url === `${siteRoot}/blog`) {
          return { ...item, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
        }
        if (url.startsWith(`${siteRoot}/services/`)) {
          return { ...item, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
        }
        if (url.startsWith(`${siteRoot}/blog/`)) {
          return { ...item, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
        }
        // Legal pages change rarely
        return { ...item, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() };
      },
    }),
  ],
  site: 'https://www.geekbytestech.com',
  trailingSlash: 'never',
});

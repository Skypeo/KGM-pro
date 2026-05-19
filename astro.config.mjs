// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: remplacer par le vrai domaine une fois acheté
const SITE_URL = 'https://kgm-pro-decor.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Prefetch automatique : précharge en arrière-plan les pages liées au viewport,
  // pour une navigation quasi instantanée (combiné aux ClientRouter View Transitions).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  // Minifie le HTML servi : retire les espaces inutiles, plus léger sur le wire.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Inline les CSS modules < 4KB pour réduire le nombre de requêtes
      cssCodeSplit: true,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      // Priorité plus haute pour la home et les pages services principales
      serialize(item) {
        if (item.url === SITE_URL + '/' || item.url === SITE_URL) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/services/') || item.url === SITE_URL + '/services') {
          item.priority = 0.9;
        } else if (item.url.includes('/zones/')) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://unleash-lab.tech',
  generateRobotsTxt: false, // Nous avons notre propre robots.txt
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  alternateRefs: [
    {
      href: 'https://unleash-lab.tech/fr',
      hreflang: 'fr-FR',
    },
    {
      href: 'https://unleash-lab.tech/en', 
      hreflang: 'en-US',
    },
  ],
  transform: async (config, path) => {
    // Priorité personnalisée pour les pages importantes
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/contact') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path === '/about') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('/blog')) {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (path.includes('/privacy') || path.includes('/terms')) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    {
      loc: '/services',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ],
};
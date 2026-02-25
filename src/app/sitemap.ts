import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://traceremove.dev';
  const now = new Date();

  const routes = [
    '/',
    '/research',
    '/articles',
    '/cv',
    '/services',
    '/newsletter',
    '/contact',
    '/about',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}

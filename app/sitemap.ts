import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://feji.fi';
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'monthly' as const },
    { path: '/orka/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/orka/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/styrka/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/styrka/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

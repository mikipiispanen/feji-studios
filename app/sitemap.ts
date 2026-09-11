import type { MetadataRoute } from 'next';
import { getDocument } from './legal-content';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://feji.fi';
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'monthly' as const },
    { path: '/orka', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/styrka', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/orka/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/orka/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/styrka/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/styrka/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];
  return routes.filter(({ path }) => {
    const [, product, document] = path.split('/');
    return !document || !getDocument(product, document)?.draft;
  }).map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    changeFrequency,
    priority,
  }));
}

import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/config/seo';
import { locales, defaultLocale } from '@/routing';

// Minimal sitemap with localized homepage entries and priority.
// Extend by adding more paths if needed.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  // Known localized routes to include; add new paths here when pages exist
  const paths = ['']; // '' represents the locale root e.g. /en, /id

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      const loc = `${baseUrl}/${locale}${path ? `/${path}` : ''}`;
      entries.push({
        url: loc,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: locale === defaultLocale ? 1.0 : 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${path ? `/${path}` : ''}`])
          ),
        },
      });
    }
  }

  return entries;
}

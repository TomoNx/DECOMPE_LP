import type { MetadataRoute } from 'next';
import { siteName } from '@/config/seo';
import { locales, defaultLocale } from '@/routing';

/**
 * Generates a comprehensive sitemap for DECOMPE 4.0 website
 * 
 * This sitemap includes:
 * - All available pages in the application
 * - Support for all configured locales
 * - Proper priority settings based on page importance
 * - Appropriate change frequencies for different content types
 * - Language alternates for each page
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Use the provided domain for production
  const baseUrl = 'https://www.decompeofficial.site';

  // All available routes in the application
  const paths = [
    '', // Home page
    'about', // About page
    'registration', // Registration page
    'timeline', // Timeline page
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Define page priorities and change frequencies
  const pagePriorities: Record<string, { priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = {
    '': { priority: 1.0, changeFrequency: 'daily' }, // Homepage has highest priority
    'about': { priority: 0.8, changeFrequency: 'monthly' },
    'registration': { priority: 0.9, changeFrequency: 'weekly' },
    'timeline': { priority: 0.9, changeFrequency: 'weekly' },
    // API routes tidak perlu ditambahkan ke sitemap karena tidak diakses langsung oleh pengguna
  };
  
  // Exclude API routes and other non-page routes
  const excludePatterns = [
    /^\/api\//,      // API routes
    /^\/admin\//,    // Admin routes (jika ada)
    /^\/_/,          // Next.js internal routes
  ];

  // Current date for lastModified
  const lastModified = new Date();
  
  // Generate entries for each locale and path
  for (const locale of locales) {
    for (const path of paths) {
      const relativePath = path ? `/${path}` : '';
      const fullPath = `/${locale}${relativePath}`;
      
      // Skip paths that match exclude patterns
      if (excludePatterns.some(pattern => pattern.test(fullPath))) {
        continue;
      }
      
      const loc = `${baseUrl}${fullPath}`;
      const { priority: basePriority, changeFrequency } = pagePriorities[path];
      
      // Slightly lower priority for non-default locales
      const priority = locale === defaultLocale ? basePriority : Math.max(0.1, basePriority - 0.1);
      
      entries.push({
        url: loc,
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${relativePath}`])
          ),
        },
      });
    }
  }

  // Validasi entries sebelum mengembalikan
  if (entries.length === 0) {
    console.warn('Sitemap: No entries generated. Check configuration.');
  }

  return entries;
}

import type { MetadataRoute } from 'next';
import { siteName } from '@/config/seo';

/**
 * Generates robots.txt configuration for DECOMPE 4.0 website
 * 
 * This configuration:
 * - Allows all user agents to access the site
 * - Disallows access to API routes and admin areas
 * - Specifies the sitemap location
 * - Sets the host domain
 */
export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.decompeofficial.site';
  
  return {
    rules: [
      { 
        userAgent: '*', 
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/*.json$',
        ] 
      },
    ],
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  };
}

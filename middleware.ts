import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/routing';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if pathname already has a locale
  const hasLocale = locales.some(locale => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  // Skip middleware for static files, API routes, and files with extensions
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    hasLocale
  ) {
    return NextResponse.next();
  }
  
  // Redirect root path and other paths to default locale
  const newUrl = new URL(`/${defaultLocale}${pathname === '/' ? '' : pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Match all paths except those starting with:
    // - _next/static (static files)
    // - _next/image (image optimization files) 
    // - favicon.ico (favicon file)
    // - public folder files
    // - sitemap.xml and robots.txt
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\..*|api).*)',
  ],
};
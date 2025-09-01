export function getBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    try {
      // Ensure it is a valid absolute URL and normalized without trailing slash
      const u = new URL(envUrl);
      return u.origin;
    } catch {}
  }
  // Fallback for local/dev
  return 'http://localhost:3000';
}

export const siteName = 'DECOMPE 4.0';

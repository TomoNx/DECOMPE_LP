import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales, defaultLocale } from '@/routing';
import { getBaseUrl } from '@/config/seo';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  
  // Providing all messages to the client
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}

// Localized SEO metadata per locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as any)) {
    // Fallback just in case
    return {};
  }

  const baseUrl = getBaseUrl();
  const titles: Record<string, string> = {
    en: 'DECOMPE 4.0 | National UI/UX Competition',
    id: 'DECOMPE 4.0 | Kompetisi UI/UX Nasional',
  };
  const descriptions: Record<string, string> = {
    en: "DECOMPE 4.0 is a platform for young talents to showcase innovative UI/UX. Join the journey to shape Indonesia’s digital future.",
    id: 'DECOMPE 4.0 adalah ajang bagi talenta muda untuk menampilkan karya UI/UX inovatif. Bergabung dan wujudkan masa depan digital Indonesia.',
  };

  // hreflang alternates
  const languageAlternates = locales.reduce<Record<string, string>>((acc, l) => {
    acc[l] = `${baseUrl}/${l}`;
    return acc;
  }, {});

  return {
    metadataBase: new URL(baseUrl),
    title: titles[locale] ?? titles[defaultLocale],
    description: descriptions[locale] ?? descriptions[defaultLocale],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      title: titles[locale] ?? titles[defaultLocale],
      description: descriptions[locale] ?? descriptions[defaultLocale],
      url: `${baseUrl}/${locale}`,
      siteName: 'DECOMPE 4.0',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles[defaultLocale],
      description: descriptions[locale] ?? descriptions[defaultLocale],
    },
  };
}
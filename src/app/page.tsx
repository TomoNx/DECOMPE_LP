import { redirect } from 'next/navigation';
import { defaultLocale } from '@/routing';

export default function RootPage() {
  // Redirect to default locale for Vercel deployment
  redirect(`/${defaultLocale}`);
}
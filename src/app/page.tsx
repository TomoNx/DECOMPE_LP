import { redirect } from 'next/navigation';

export default function RootPage() {
  // This page should not be reached in normal navigation
  // as the custom server handles locale redirection
  return null;
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DECOMPE 4.0 | UI/UX Design Competition",
  description:
    "Kompetisi desain UI/UX yang diselenggarakan UKM Coding Cyber University. Ikuti DECOMPE 4.0 dan tunjukkan karya inovatifmu!",
  keywords: [
    "DECOMPE 4.0",
    "UI/UX Design Competition",
    "Cyber University",
    "Lomba Desain",
    "UI Design",
    "UX Design",
    "Kompetisi Mahasiswa",
  ],
  authors: [{ name: "UKM Coding Cyber University" }],
  openGraph: {
    title: "DECOMPE 4.0 | UI/UX Design Competition",
    description:
      "Kompetisi desain UI/UX untuk pelajar dan mahasiswa se-Indonesia. Tunjukkan inovasi desainmu di DECOMPE 4.0!",
    url: "https://decompe4.cyber-univ.ac.id", // ganti ke domain resmi
    siteName: "DECOMPE 4.0",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECOMPE 4.0 | UI/UX Design Competition",
    description:
      "Ikuti DECOMPE 4.0, kompetisi desain UI/UX untuk pelajar dan mahasiswa se-Indonesia.",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

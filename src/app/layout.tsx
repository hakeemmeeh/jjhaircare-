import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://jjhaircare.vercel.app'),
  title: {
    default: 'JJHairCare | Premium Natural Hair Care — Where Nature Meets Beauty',
    template: '%s | JJHairCare',
  },
  description: 'Natural hair care from Nairobi — Herbal Hair Oil, Scalp Detox Mask, Hibiscus and Moringa Hair Butter, and Hair Mist. Order on WhatsApp.',
  keywords: ['natural hair care', 'herbal hair oil', 'hair butter', 'scalp detox mask', 'hair mist', 'natural hair Kenya', 'hair care Nairobi'],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'JJHairCare',
    title: 'JJHairCare | Premium Natural Hair Care',
    description: 'Natural hair care from Nairobi. Order on WhatsApp.',
    images: [
      {
        url: '/images/og-jjhaircare.jpg',
        width: 1200,
        height: 630,
        alt: 'JJHairCare — Where Nature Meets Beauty',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JJHairCare | Premium Natural Hair Care',
    description: 'Natural hair care from Nairobi. Order on WhatsApp.',
    images: ['/images/og-jjhaircare.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <SmoothScrollProvider>
          {children}
          <BackToTop />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

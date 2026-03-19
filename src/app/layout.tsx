import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import BackToTop from "@/components/BackToTop";
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
  description: 'Handcrafted, 100% natural hair care products made with ethically sourced shea butter, castor oil, and botanicals. Sulfate-free, paraben-free, cruelty-free.',
  keywords: ['natural hair care', 'shea butter hair products', 'organic hair oil', 'natural hair butter', 'cruelty free hair care', 'black hair care', 'curly hair products', '4C hair', 'loc care', 'natural hair growth'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'JJHairCare',
    title: 'JJHairCare | Premium Natural Hair Care',
    description: 'Handcrafted, 100% natural hair care. Ethically sourced. Sulfate-free. Cruelty-free.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JJHairCare — Where Nature Meets Beauty',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JJHairCare | Premium Natural Hair Care',
    description: 'Handcrafted, 100% natural hair care. Ethically sourced. Sulfate-free. Cruelty-free.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

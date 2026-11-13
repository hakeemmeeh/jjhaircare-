import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://jjhaircare.vercel.app/#website",
      name: "JJ Haircare",
      alternateName: ["JJHairCare", "JJ Herbal Haircare"],
      url: "https://jjhaircare.vercel.app/",
      inLanguage: "en-KE",
    },
    {
      "@type": "Organization",
      "@id": "https://jjhaircare.vercel.app/#organization",
      name: "JJ Haircare",
      url: "https://jjhaircare.vercel.app/",
      logo: "https://jjhaircare.vercel.app/logo.png",
      description: "Natural, plant-based hair care made in Nairobi, Kenya.",
      email: "jjherbal744@gmail.com",
      telephone: "+254743600499",
      address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
      areaServed: [
        { "@type": "City", name: "Nairobi" },
        { "@type": "Country", name: "Kenya" },
      ],
      sameAs: [
        "https://www.instagram.com/jj_haircareke",
        "https://www.tiktok.com/@jj_herbal_haircare",
      ],
    },
  ],
};

export const viewport = { themeColor: '#0A0A0A' };

export const metadata = {
  metadataBase: new URL('https://jjhaircare.vercel.app'),
  title: {
    default: 'Natural Hair Care in Nairobi, Kenya | JJ Haircare',
    template: '%s | JJ Haircare',
  },
  description: 'Natural hair care from Nairobi — Herbal Hair Oil, Scalp Detox Mask, Hibiscus and Moringa Hair Butter, and Hair Mist. Order on WhatsApp.',
  keywords: ['natural hair care', 'herbal hair oil', 'hair butter', 'scalp detox mask', 'hair mist', 'natural hair Kenya', 'hair care Nairobi'],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'JJ Haircare',
    title: 'Natural Hair Care in Nairobi, Kenya | JJ Haircare',
    description: 'Herbal hair oil, hair butters, scalp detox mask and hair mist, made in Nairobi. Order on WhatsApp or call 0743 600 499.',
    images: [
      {
        url: '/images/og-jjhaircare.jpg',
        width: 1200,
        height: 630,
        alt: 'JJ Haircare — Where Nature Meets Beauty',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natural Hair Care in Nairobi, Kenya | JJ Haircare',
    description: 'Herbal hair oil, hair butters, scalp detox mask and hair mist, made in Nairobi. Order on WhatsApp or call 0743 600 499.',
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
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          {children}
          <BackToTop />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

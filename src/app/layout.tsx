import { Inter, Cormorant_Garamond } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { SITE_URL, SITE_NAME, HOME_TITLE, HOME_SHARE_DESCRIPTION } from "@/lib/seo";
import { SOCIALS, PHONE_E164, CONTACT_EMAIL } from "@/data/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: ["JJHairCare", "JJ Herbal Haircare"],
      url: `${SITE_URL}/`,
      inLanguage: "en-KE",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      description: "Natural, plant-based hair care made in Nairobi, Kenya.",
      email: CONTACT_EMAIL,
      telephone: PHONE_E164,
      address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
      areaServed: [
        { "@type": "City", name: "Nairobi" },
        { "@type": "Country", name: "Kenya" },
      ],
      sameAs: [SOCIALS.instagram, SOCIALS.tiktok],
    },
  ],
};

export const viewport = { themeColor: '#0A0A0A' };

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: '%s | JJ Haircare',
  },
  description: 'Natural hair care from Nairobi — Herbal Hair Oil, Scalp Detox Mask, Hibiscus and Moringa Hair Butter, and Hair Mist. Order on WhatsApp.',
  keywords: ['natural hair care', 'herbal hair oil', 'hair butter', 'scalp detox mask', 'hair mist', 'natural hair Kenya', 'hair care Nairobi'],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_SHARE_DESCRIPTION,
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
    title: HOME_TITLE,
    description: HOME_SHARE_DESCRIPTION,
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-jj-black focus:text-white focus:px-6 focus:py-3 focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to content
        </a>
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

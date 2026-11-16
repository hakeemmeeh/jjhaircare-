# JJ Haircare

Where Nature Meets Beauty. A luxurious, natural hair care brand website built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Modern Animations:** Fluid page transitions, parallax scrolling, and interactive hover effects built with Framer Motion.
- **Dynamic Routing:** Beautiful product detail pages utilizing Next.js app router.
- **Custom Theming:** A bespoke neutral and dark luxury color palette configured in Tailwind CSS v4.

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router, React 19)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (Icons)
- [Embla Carousel](https://www.embla-carousel.com/)

## Ordering
Orders happen on WhatsApp. `OrderWizard` and the order buttons build a pre-filled message and open `https://wa.me/<number>` via `whatsappOrderUrl()`.

## Site Configuration
- `src/data/site-config.ts`: WhatsApp number, phone, email and social links. Change contact details here only.
- `src/data/products.ts`: the product catalogue (name, slug, price, image).
- `src/data/faqs.ts`: FAQ content, also used for FAQ structured data.

## SEO
- `src/lib/seo.ts`: `SITE_URL`, shared titles, the default Open Graph image, and the `pageMeta()` helper for per-page metadata.
- Structured data (JSON-LD) covers the organization, product list, FAQ, breadcrumbs and individual products.
- `sitemap.ts`, `robots.ts` and `manifest.ts` live in `src/app`.

## Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
This project is fully ready to be deployed to [Vercel](https://vercel.com). Simply import the repository into your Vercel dashboard and deploy. No extra configuration is needed.
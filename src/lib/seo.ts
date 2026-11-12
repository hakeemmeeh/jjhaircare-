export const SITE_URL = "https://jjhaircare.vercel.app";
export const SITE_NAME = "JJ Haircare";
const SUFFIX = ` | ${SITE_NAME}`;

/** Drops the brand suffix (added by the root title template) conceptually: returns a title object
 *  that keeps the whole page title within 60 characters. */
export function seoTitle(title: string): string | { absolute: string } {
  return title.length + SUFFIX.length <= 60 ? title : { absolute: title.length > 60 ? clip(title, 60) : title };
}

/** Cuts at a word boundary and adds an ellipsis. */
export function clip(text: string, max = 155): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—-]+$/, "") + "…";
}

const OG_IMAGE = { url: "/images/og-jjhaircare.jpg", width: 1200, height: 630, alt: "JJ Haircare — natural hair care made in Nairobi" };

/** Title, description, canonical and matching share preview (Open Graph + Twitter) for a static page. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  const full = `${title}${SUFFIX}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      url: path,
      siteName: SITE_NAME,
      locale: "en_KE",
      title: full,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image" as const, title: full, description, images: [OG_IMAGE.url] },
  };
}

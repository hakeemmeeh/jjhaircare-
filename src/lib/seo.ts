export const SITE_URL = "https://jjhaircare.vercel.app";
export const SITE_NAME = "JJHairCare";
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

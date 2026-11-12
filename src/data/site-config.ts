/**
 * Set this to the brand's WhatsApp number in international format, digits only
 * (e.g. "2547XXXXXXXX"). Until it is set, the order button opens WhatsApp with the
 * message pre-filled and lets the customer pick the contact.
 */
export const WHATSAPP_NUMBER = "254743600499";

export function whatsappOrderUrl(message: string): string {
  const text = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const SOCIALS = {
  instagram: "https://www.instagram.com/jj_haircareke",
  tiktok: "https://www.tiktok.com/@jj_herbal_haircare",
};

/** Number shown to visitors (same line as WhatsApp). */
export const PHONE_DISPLAY = "0743 600 499";

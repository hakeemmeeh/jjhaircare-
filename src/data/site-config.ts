/**
 * Set this to the brand's WhatsApp number in international format, digits only
 * (e.g. "2547XXXXXXXX"). Until it is set, the order button opens WhatsApp with the
 * message pre-filled and lets the customer pick the contact.
 */
export const WHATSAPP_NUMBER = "";

export function whatsappOrderUrl(message: string): string {
  const text = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const SOCIALS = {
  instagram: "https://www.instagram.com/jj_haircareke?igsh=MXB1b2t3MGFwYnkxMg==",
  tiktok: "https://www.tiktok.com/@jj_herbal_haircare?_r=1&_t=ZS-94iGVNG2TJo",
};

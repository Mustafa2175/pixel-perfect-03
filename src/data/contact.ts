export const CONTACT = {
  whatsappNumber: "201154362612",
  whatsappDisplay: "+20 115 436 2612",
  email: "mnsaasklrasak@gmail.com",
  instagram: "https://www.instagram.com/mnsaasklrasak",
  facebook: "https://www.facebook.com/share/1FsYfjT8dm/",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function emailLink(subject?: string) {
  return `mailto:${CONTACT.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}

import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import { CONTACT, emailLink, whatsappLink } from "@/data/contact";
import { langSearch, useLang } from "@/lib/i18n";
import { NAV } from "./SiteHeader";
import { ExternalLink } from "./ui";

export function SiteFooter() {
  const lang = useLang();
  const s = langSearch(lang);
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">من <span className="text-primary">SaaS</span>ك لراسك</p>
          <p className="mt-3 max-w-xs text-sm opacity-75">
            {lang === "ar" ? "استوديو حلول رقمية مصري. مواقع وأنظمة على مقاس شغلك." : "An Egyptian digital studio. Websites and systems built to fit your business."}
          </p>
        </div>
        <nav aria-label={lang === "ar" ? "روابط" : "Links"} className="flex flex-col gap-2 text-sm">
          {[...NAV, { to: "/contact", ar: "تواصل معانا", en: "Contact" } as const].map((n) => (
            <Link key={n.to} to={n.to} search={s} className="opacity-80 hover:opacity-100">{n[lang]}</Link>
          ))}
        </nav>
        <ul className="flex flex-col gap-3 text-sm">
          <li><ExternalLink href={whatsappLink()} className="inline-flex items-center gap-2 hover:text-primary"><MessageCircle size={16} /> <span dir="ltr">{CONTACT.whatsappDisplay}</span></ExternalLink></li>
          <li><a href={emailLink()} className="inline-flex items-center gap-2 hover:text-primary"><Mail size={16} /> {CONTACT.email}</a></li>
          <li><ExternalLink href={CONTACT.instagram} className="inline-flex items-center gap-2 hover:text-primary"><Instagram size={16} /> Instagram</ExternalLink></li>
          <li><ExternalLink href={CONTACT.facebook} className="inline-flex items-center gap-2 hover:text-primary"><Facebook size={16} /> Facebook</ExternalLink></li>
        </ul>
      </div>
      <div className="container-site border-t border-background/20 py-5 text-xs opacity-60">© {new Date().getFullYear()} Men SaaSak Le Rasak</div>
    </footer>
  );
}

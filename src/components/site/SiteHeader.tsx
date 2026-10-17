import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { langSearch, useLang } from "@/lib/i18n";
import { btnPrimary } from "./ui";

export const NAV = [
  { to: "/", ar: "الرئيسية", en: "Home" },
  { to: "/services", ar: "خدماتنا", en: "Services" },
  { to: "/portfolio", ar: "شغلنا", en: "Work" },
  { to: "/about", ar: "عننا", en: "About" },
] as const;

export function SiteHeader() {
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const s = langSearch(lang);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2">
        {lang === "ar" ? "انتقل للمحتوى" : "Skip to content"}
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link to="/" search={s} className="flex items-baseline gap-2" aria-label="Men SaaSak Le Rasak">
          <span className="font-display text-xl font-extrabold">من <span className="text-primary">SaaS</span>ك لراسك</span>
        </Link>
        <nav aria-label={lang === "ar" ? "القائمة الرئيسية" : "Main"} className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} search={s} className="text-sm font-medium hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>
              {n[lang]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to={pathname as "/"} search={lang === "en" ? {} : { lang: "en" }} className="rounded-full border border-foreground px-3 py-1 text-xs font-bold" aria-label={lang === "en" ? "التبديل للعربية" : "Switch to English"}>
            {lang === "en" ? "ع" : "EN"}
          </Link>
          <Link to="/contact" search={s} className={`${btnPrimary} hidden !px-4 !py-2 text-sm md:inline-flex`}>
            {lang === "ar" ? "كلمنا" : "Let's talk"}
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={lang === "ar" ? "القائمة" : "Menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="container-site flex flex-col gap-1 pb-4 md:hidden">
          {[...NAV, { to: "/contact", ar: "تواصل معانا", en: "Contact" } as const].map((n) => (
            <Link key={n.to} to={n.to} search={s} onClick={() => setOpen(false)} className="border-b border-border py-3 font-medium">
              {n[lang]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

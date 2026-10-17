import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/ui";
import { SERVICES } from "@/data/services";
import { useLang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: pageMeta(
      "خدماتنا — مواقع وأنظمة مطاعم وجيم ومساحات عمل | Men SaaSak Le Rasak",
      "مواقع مخصوصة، أنظمة إدارة المطاعم والجيمات ومساحات العمل، وبرمجيات على مقاس شغلك. Services: websites, restaurant, gym and workspace systems, custom software.",
    ),
  }),
  component: Services,
});

function Services() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={lang === "ar" ? "خدماتنا" : "Services"}
        title={lang === "ar" ? "حلول رقمية على مقاس شغلك" : "Digital solutions that fit your business"}
        intro={lang === "ar" ? "اختار اللي محتاجه، ولو مش لاقيه هنا — كلمنا ونبنيه." : "Pick what you need. Not listed? Talk to us and we'll build it."}
      />
      <div className="container-site">
        {SERVICES.map((sv, i) => (
          <article key={sv.id} id={sv.id} className="grid gap-6 border-t border-foreground py-12 md:grid-cols-[8rem_1fr_1fr]">
            <span className="font-display text-5xl font-extrabold text-primary">0{i + 1}</span>
            <div>
              <h2 className="text-3xl font-bold">{sv.title[lang]}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{sv.short[lang]}</p>
            </div>
            <ul className="space-y-3">
              {sv.points.map((pt) => (
                <li key={pt.en} className="flex items-center gap-3"><Check size={18} className="text-teal" /> {pt[lang]}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <CtaBand />
    </>
  );
}

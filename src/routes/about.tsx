import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/site/ui";
import { useLang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { CtaBand, PROCESS } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "عننا — حكاية من SaaSك لراسك | About us",
      "استوديو حلول رقمية مصري بيبني مواقع وأنظمة إدارة بشكل بسيط وواضح. An Egyptian digital studio — our story, values and process.",
    ),
  }),
  component: About,
});

const VALUES = [
  { ar: "وضوح", en: "Clarity", dAr: "بنتكلم بلغتك، من غير مصطلحات معقدة.", dEn: "We speak your language, no jargon." },
  { ar: "على مقاسك", en: "Made to fit", dAr: "كل حل بيتبني حوالين شغلك أنت.", dEn: "Every solution is built around your business." },
  { ar: "جودة", en: "Quality", dAr: "سريع، ثابت، وسهل الاستخدام.", dEn: "Fast, reliable and easy to use." },
  { ar: "شراكة", en: "Partnership", dAr: "بنفضل معاك بعد التسليم.", dEn: "We stay with you after launch." },
];

function About() {
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={lang === "ar" ? "عننا" : "About"}
        title={lang === "ar" ? "اسمنا هزار، بس شغلنا جد." : "Our name is a joke. Our work isn't."}
        intro={
          lang === "ar"
            ? "«من SaaSك لراسك» استوديو مصري صغير بيبني مواقع وأنظمة إدارة لأصحاب البيزنس. فكرتنا بسيطة: إنت تركز في شغلك، وإحنا نشيل عنك وجع دماغ السوفتوير."
            : "“Men SaaSak Le Rasak” is a small Egyptian studio building websites and management systems for business owners. The idea is simple: you focus on your business, we handle the software headache."
        }
      />
      <section className="container-site py-12">
        <SectionHead num="01" eyebrow={lang === "ar" ? "قيمنا" : "Values"} title={lang === "ar" ? "اللي بنؤمن بيه" : "What we believe in"} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.en} className="border-t-4 border-primary pt-4">
              <h3 className="text-xl font-bold">{lang === "ar" ? v.ar : v.en}</h3>
              <p className="mt-2 text-muted-foreground">{lang === "ar" ? v.dAr : v.dEn}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-site py-12">
        <SectionHead num="02" eyebrow={lang === "ar" ? "طريقتنا" : "Process"} title={lang === "ar" ? "من أول مكالمة للتسليم" : "From first call to launch"} />
        <ol className="space-y-4">
          {PROCESS.map((p, i) => (
            <li key={p.en} className="flex gap-6 border-b border-border pb-4">
              <span className="font-display text-3xl font-extrabold text-primary">{i + 1}</span>
              <div>
                <h3 className="text-lg font-bold">{lang === "ar" ? p.ar : p.en}</h3>
                <p className="text-muted-foreground">{lang === "ar" ? p.dAr : p.dEn}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}

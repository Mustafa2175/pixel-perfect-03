import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-desk.jpg";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHead, btnGhost, btnPrimary } from "@/components/site/ui";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { langSearch, useLang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "من SaaSك لراسك — مواقع وأنظمة إدارة لشغلك في مصر",
      "استوديو مصري بيبني مواقع وأنظمة إدارة للمطاعم والجيمات ومساحات العمل وبرمجيات مخصوصة. Egyptian studio for websites and management systems.",
    ),
  }),
  component: Home,
});

export const PROCESS = [
  { ar: "نسمعك", en: "We listen", dAr: "نفهم شغلك والمشكلة اللي عايز تحلها.", dEn: "We understand your business and the problem to solve." },
  { ar: "نخطط", en: "We plan", dAr: "نحدد المطلوب والشكل والوقت بوضوح.", dEn: "We define scope, design and timeline clearly." },
  { ar: "نبني", en: "We build", dAr: "نصمم ونبرمج ونوريك أول بأول.", dEn: "We design and develop, showing you as we go." },
  { ar: "نسلّم ونكمل معاك", en: "We launch & stay", dAr: "نطلق المشروع ونفضل جنبك بعدها.", dEn: "We launch and keep supporting you." },
];

function Home() {
  const lang = useLang();
  const s = langSearch(lang);
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      <section className="container-site grid items-center gap-12 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-20">
        <div className="fade-up">
          <span className="sticker">{lang === "ar" ? "من الفكرة للتشغيل" : "From idea to launch"}</span>
          <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] md:text-7xl">
            {lang === "ar" ? (
              <>سيب السوفتوير <span className="text-primary">علينا</span>،<br />وركّز في شغلك.</>
            ) : (
              <>Leave the software <span className="text-primary">to us</span>.<br />Focus on your business.</>
            )}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            {lang === "ar"
              ? "بنعمل مواقع وأنظمة إدارة مخصوصة للمطاعم والجيمات ومساحات العمل وأي بيزنس في مصر — بسيطة، سريعة، ومعمولة على مقاسك."
              : "We build custom websites and management systems for restaurants, gyms, workspaces and any business in Egypt — simple, fast, made to fit."}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" search={s} className={btnPrimary}>
              {lang === "ar" ? "خلينا نتكلم عن مشروعك" : "Let's talk about your project"} <Arrow size={18} />
            </Link>
            <Link to="/portfolio" search={s} className={btnGhost}>{lang === "ar" ? "شوف شغلنا" : "See our work"}</Link>
          </div>
        </div>
        <div className="relative fade-up [animation-delay:150ms]">
          <img src={hero} alt={lang === "ar" ? "لابتوب وموبايل عليهم مواقع على مكتب في القاهرة" : "Laptop and phone showing websites on a desk in Cairo"} width={1536} height={1152} className="aspect-[4/3] w-full rounded-2xl border-2 border-foreground object-cover shadow-[8px_8px_0_var(--color-foreground)]" />
          <p className="absolute -bottom-5 end-6 rounded-full border-2 border-foreground bg-teal px-4 py-1.5 text-sm font-semibold text-teal-foreground">
            {lang === "ar" ? "صُنع في مصر 🇪🇬" : "Made in Egypt 🇪🇬"}
          </p>
        </div>
      </section>

      <section className="container-site py-16">
        <SectionHead num="01" eyebrow={lang === "ar" ? "خدماتنا" : "Services"} title={lang === "ar" ? "إيه اللي نقدر نعمله لك" : "What we can build for you"} />
        <ul className="grid border-s border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((sv, i) => (
            <li key={sv.id} className="border-b border-e border-border p-7 transition-colors hover:bg-card">
              <span className="font-display text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{sv.title[lang]}</h3>
              <p className="mt-2 text-muted-foreground">{sv.short[lang]}</p>
            </li>
          ))}
          <li className="flex items-center border-b border-e border-border p-7">
            <Link to="/services" search={s} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              {lang === "ar" ? "كل التفاصيل" : "All details"} <Arrow size={18} />
            </Link>
          </li>
        </ul>
      </section>

      <section className="container-site py-16">
        <SectionHead num="02" eyebrow={lang === "ar" ? "شغلنا" : "Work"} title={lang === "ar" ? "مشاريع مختارة" : "Selected projects"} />
        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section className="container-site py-16">
        <SectionHead num="03" eyebrow={lang === "ar" ? "طريقتنا" : "Process"} title={lang === "ar" ? "إزاي بنشتغل" : "How we work"} />
        <ol className="grid gap-6 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <li key={p.en} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground font-display font-bold text-background">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{lang === "ar" ? p.ar : p.en}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{lang === "ar" ? p.dAr : p.dEn}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}

export function CtaBand() {
  const lang = useLang();
  return (
    <section className="container-site pt-16">
      <div className="rounded-2xl border-2 border-foreground bg-primary p-10 text-primary-foreground md:p-16">
        <h2 className="max-w-3xl text-3xl font-extrabold md:text-5xl">
          {lang === "ar" ? "عندك فكرة؟ احكيلنا عنها، والباقي من SaaSنا لراسك." : "Got an idea? Tell us — we'll take it from there."}
        </h2>
        <Link to="/contact" search={langSearch(lang)} className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-6 py-3 font-semibold text-foreground">
          {lang === "ar" ? "خلينا نتكلم عن مشروعك" : "Let's talk about your project"}
        </Link>
      </div>
    </section>
  );
}

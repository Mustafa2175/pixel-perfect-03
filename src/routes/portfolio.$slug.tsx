import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExternalLink as Ext } from "lucide-react";
import { ExternalLink, btnGhost, btnPrimary } from "@/components/site/ui";
import { CATEGORY_LABELS, STATUS_LABELS, getProject } from "@/data/projects";
import { langSearch, useLang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProject(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    return { meta: pageMeta(`${p.name.ar} — ${p.name.en} | من SaaSك لراسك`, `${p.short.ar} ${p.short.en}`) };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useLoaderData();
  const p = getProject(slug)!;
  const lang = useLang();
  const s = langSearch(lang);

  return (
    <article className="container-site pt-14">
      <Link to="/portfolio" search={s} className="text-sm text-muted-foreground hover:text-primary">
        {lang === "ar" ? "→ كل المشاريع" : "← All projects"}
      </Link>
      {p.sample && (
        <p role="note" className="mt-6 rounded-lg border border-dashed border-primary bg-accent p-4 text-sm">
          {lang === "ar" ? "ده مشروع تجريبي لعرض الشكل بس — هيتستبدل بمشروع حقيقي." : "This is a placeholder to preview the layout — it will be replaced with a real project."}
        </p>
      )}
      <header className="mt-8 fade-up">
        <p className="eyebrow">{CATEGORY_LABELS[p.category][lang]} · {STATUS_LABELS[p.status][lang]}</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">{p.name[lang]}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.short[lang]}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.demoUrl && <ExternalLink href={p.demoUrl} className={btnPrimary}>{lang === "ar" ? "شوف المشروع" : "Live demo"} <Ext size={16} /></ExternalLink>}
          {p.repoUrl && <ExternalLink href={p.repoUrl} className={btnGhost}>{lang === "ar" ? "الكود" : "Repository"}</ExternalLink>}
        </div>
      </header>

      {p.images[0] && (
        <img src={p.images[0].src} alt={p.images[0].alt[lang]} width={1280} height={896} className="mt-12 w-full rounded-2xl border-2 border-foreground object-cover" />
      )}

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-bold">{lang === "ar" ? "المشكلة" : "The problem"}</h2>
          <p className="mt-3 text-muted-foreground">{p.problem[lang]}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">{lang === "ar" ? "الحل" : "The solution"}</h2>
          <p className="mt-3 text-muted-foreground">{p.solution[lang]}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">{lang === "ar" ? "اللي اتنفذ" : "What we built"}</h2>
          <ul className="mt-3 list-disc space-y-2 ps-5">{p.features.map((f) => <li key={f.en}>{f[lang]}</li>)}</ul>
        </section>
        {p.tech && p.tech.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold">{lang === "ar" ? "التقنيات" : "Tech stack"}</h2>
            <ul className="mt-3 flex flex-wrap gap-2" dir="ltr">{p.tech.map((t) => <li key={t} className="rounded-full border border-border px-3 py-1 text-sm">{t}</li>)}</ul>
          </section>
        )}
      </div>

      {p.images.length > 1 && (
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {p.images.slice(1).map((im) => <img key={im.src} src={im.src} alt={im.alt[lang]} loading="lazy" className="w-full rounded-xl border border-border" />)}
        </div>
      )}
    </article>
  );
}

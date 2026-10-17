import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_LABELS, STATUS_LABELS, type Project } from "@/data/projects";
import { langSearch, useLang } from "@/lib/i18n";

export function ProjectCard({ project }: { project: Project }) {
  const lang = useLang();
  const img = project.images[0];
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      search={langSearch(lang)}
      className="group card-lift block overflow-hidden rounded-xl border border-border bg-card"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-muted">
        {img && <img src={img.src} alt={img.alt[lang]} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />}
        {project.sample && <span className="sticker absolute start-4 top-4">{lang === "ar" ? "مثال — استبدلني" : "Sample — replace me"}</span>}
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <p className="eyebrow">{CATEGORY_LABELS[project.category][lang]} · {STATUS_LABELS[project.status][lang]}</p>
          <h3 className="mt-2 text-xl font-bold">{project.name[lang]}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.short[lang]}</p>
        </div>
        <ArrowUpRight className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 rtl:-scale-x-100" />
      </div>
    </Link>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PageHero } from "@/components/site/ui";
import { CATEGORY_LABELS, PROJECTS, type ProjectCategory } from "@/data/projects";
import { useLang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: pageMeta(
      "شغلنا — مشاريع من SaaSك لراسك | Portfolio",
      "شوف المشاريع اللي عملناها: مواقع وأنظمة إدارة لبيزنس في مصر. See our websites and management systems projects.",
    ),
  }),
  component: Portfolio,
});

function Portfolio() {
  const lang = useLang();
  const [cat, setCat] = useState<ProjectCategory | "all">("all");
  const cats = Array.from(new Set(PROJECTS.map((p) => p.category)));
  const list = cat === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);

  return (
    <>
      <PageHero eyebrow={lang === "ar" ? "شغلنا" : "Work"} title={lang === "ar" ? "مشاريع عملناها" : "Projects we've built"} />
      <div className="container-site">
        <div role="group" aria-label={lang === "ar" ? "فلترة حسب النوع" : "Filter by category"} className="mb-10 flex flex-wrap gap-2">
          {(["all", ...cats] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={cn("rounded-full border border-foreground px-4 py-1.5 text-sm font-medium", cat === c ? "bg-foreground text-background" : "hover:bg-card")}
            >
              {c === "all" ? (lang === "ar" ? "الكل" : "All") : CATEGORY_LABELS[c][lang]}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </div>
    </>
  );
}

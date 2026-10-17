import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground border-2 border-foreground shadow-[3px_3px_0_var(--color-foreground)] transition-transform hover:-translate-y-0.5 active:translate-y-0";
export const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground px-6 py-3 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background";

export function SectionHead({ num, eyebrow, title, children }: { num: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-10 grid gap-4 border-t border-foreground pt-6 md:grid-cols-[8rem_1fr]">
      <div className="font-display text-sm text-muted-foreground">{num}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold md:text-5xl">{title}</h2>
        {children && <div className="mt-4 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="container-site pb-12 pt-16 md:pt-24 fade-up">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-7xl">{title}</h1>
      {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
    </section>
  );
}

export function ExternalLink({ className, ...p }: ComponentProps<"a">) {
  return <a target="_blank" rel="noopener noreferrer" className={cn(className)} {...p} />;
}

export { Link };

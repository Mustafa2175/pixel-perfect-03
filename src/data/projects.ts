import type { T } from "@/lib/i18n";
import sampleRestaurant from "@/assets/sample-restaurant.jpg";
import sampleGym from "@/assets/sample-gym.jpg";

export type ProjectCategory = "websites" | "restaurants" | "gyms" | "workspaces" | "custom";
export type ProjectStatus = "live" | "in-progress" | "completed";

export type Project = {
  slug: string;
  /** true = placeholder entry; shows a "sample" label. Remove when adding real work. */
  sample?: boolean;
  featured?: boolean;
  name: T;
  category: ProjectCategory;
  short: T;
  problem: T;
  solution: T;
  features: T[];
  tech?: string[];
  images: { src: string; alt: T }[];
  demoUrl?: string;
  repoUrl?: string;
  status: ProjectStatus;
};

/**
 * HOW TO ADD A PROJECT: copy one object below, change the text, put screenshots
 * in src/assets and import them, and remove `sample: true`.
 */
export const PROJECTS: Project[] = [
  {
    slug: "sample-restaurant-system",
    sample: true,
    featured: true,
    name: { ar: "مثال: نظام مطعم", en: "Sample: Restaurant System" },
    category: "restaurants",
    short: {
      ar: "مشروع تجريبي لعرض الشكل — استبدله بمشروع حقيقي.",
      en: "Placeholder project to preview the layout — replace with real work.",
    },
    problem: { ar: "اكتب هنا المشكلة اللي كان العميل بيواجهها.", en: "Describe the client's business problem here." },
    solution: { ar: "اكتب هنا الحل اللي قدمناه.", en: "Describe the solution you delivered here." },
    features: [
      { ar: "ميزة ١ (مثال)", en: "Feature 1 (placeholder)" },
      { ar: "ميزة ٢ (مثال)", en: "Feature 2 (placeholder)" },
    ],
    tech: ["React", "TypeScript"],
    images: [{ src: sampleRestaurant, alt: { ar: "صورة توضيحية لنظام مطعم", en: "Illustrative restaurant system mockup" } }],
    status: "in-progress",
  },
  {
    slug: "sample-gym-system",
    sample: true,
    featured: true,
    name: { ar: "مثال: نظام جيم", en: "Sample: Gym System" },
    category: "gyms",
    short: {
      ar: "مشروع تجريبي لعرض الشكل — استبدله بمشروع حقيقي.",
      en: "Placeholder project to preview the layout — replace with real work.",
    },
    problem: { ar: "اكتب هنا المشكلة اللي كان العميل بيواجهها.", en: "Describe the client's business problem here." },
    solution: { ar: "اكتب هنا الحل اللي قدمناه.", en: "Describe the solution you delivered here." },
    features: [
      { ar: "ميزة ١ (مثال)", en: "Feature 1 (placeholder)" },
      { ar: "ميزة ٢ (مثال)", en: "Feature 2 (placeholder)" },
    ],
    images: [{ src: sampleGym, alt: { ar: "صورة توضيحية لنظام جيم", en: "Illustrative gym system mockup" } }],
    status: "in-progress",
  },
];

export const CATEGORY_LABELS: Record<ProjectCategory, T> = {
  websites: { ar: "مواقع", en: "Websites" },
  restaurants: { ar: "مطاعم", en: "Restaurants" },
  gyms: { ar: "جيمات", en: "Gyms" },
  workspaces: { ar: "مساحات عمل", en: "Workspaces" },
  custom: { ar: "برمجيات مخصوصة", en: "Custom software" },
};

export const STATUS_LABELS: Record<ProjectStatus, T> = {
  live: { ar: "شغال أونلاين", en: "Live" },
  "in-progress": { ar: "جاري التنفيذ", en: "In progress" },
  completed: { ar: "خلص", en: "Completed" },
};

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

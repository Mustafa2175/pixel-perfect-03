import type { T } from "@/lib/i18n";

export type Service = {
  id: string;
  title: T;
  short: T;
  points: T[];
};

/** Edit service text here — pages update automatically. */
export const SERVICES: Service[] = [
  {
    id: "websites",
    title: { ar: "مواقع مخصوصة", en: "Custom Websites" },
    short: {
      ar: "موقع سريع وشكله يشبهك، يعرّف الناس بيك ويجيبلك عملا.",
      en: "Fast websites that look like you and bring in customers.",
    },
    points: [
      { ar: "تصميم خاص بهويتك", en: "Design built around your brand" },
      { ar: "شغال على الموبايل والكمبيوتر", en: "Works on mobile and desktop" },
      { ar: "جاهز لمحركات البحث", en: "Search-engine ready" },
    ],
  },
  {
    id: "restaurants",
    title: { ar: "أنظمة إدارة المطاعم", en: "Restaurant Management Systems" },
    short: {
      ar: "من الأوردر للمطبخ للحساب — كله في مكان واحد.",
      en: "From order to kitchen to bill — all in one place.",
    },
    points: [
      { ar: "منيو وطلبات", en: "Menu and orders" },
      { ar: "متابعة المطبخ", en: "Kitchen tracking" },
      { ar: "تقارير المبيعات", en: "Sales reports" },
    ],
  },
  {
    id: "gyms",
    title: { ar: "أنظمة إدارة الجيم", en: "Gym Management Systems" },
    short: {
      ar: "اشتراكات، حضور، ومواعيد من غير ورق ولا دوشة.",
      en: "Memberships, attendance and schedules — no paperwork.",
    },
    points: [
      { ar: "إدارة الاشتراكات", en: "Membership management" },
      { ar: "تسجيل الحضور", en: "Check-ins" },
      { ar: "جدول الكلاسات", en: "Class schedules" },
    ],
  },
  {
    id: "workspaces",
    title: { ar: "أنظمة مساحات العمل", en: "Workspace Management Systems" },
    short: {
      ar: "حجوزات الأماكن والقاعات والفواتير بشكل منظم.",
      en: "Seat and room bookings plus billing, neatly organized.",
    },
    points: [
      { ar: "حجز الأماكن والقاعات", en: "Seat and room booking" },
      { ar: "باقات وساعات", en: "Plans and hours" },
      { ar: "فواتير", en: "Invoicing" },
    ],
  },
  {
    id: "custom",
    title: { ar: "برمجيات مخصوصة", en: "Custom Software" },
    short: {
      ar: "عندك فكرة أو مشكلة في شغلك؟ نبنيلك الحل على مقاسك.",
      en: "Have an idea or a business problem? We build the fit.",
    },
    points: [
      { ar: "تحليل الاحتياج", en: "Needs analysis" },
      { ar: "تطبيقات ويب", en: "Web applications" },
      { ar: "دعم بعد التسليم", en: "Support after launch" },
    ],
  },
];

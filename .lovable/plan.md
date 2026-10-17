# Men SaaSak Le Rasak — Company Website (Phase 1 proposal)

## Sitemap (separate pages, Arabic + English)
- `/` Home: hero, value proposition, services overview, featured projects, process, call to action
- `/services` 5 services: Custom Websites, Restaurant, Gym, Workspace systems, Custom Software
- `/portfolio` project cards with category filter
- `/portfolio/:slug` case study (problem, solution, features, tech, screenshots, links, status)
- `/about` story, values, process
- `/contact` WhatsApp, email, Instagram, Facebook + inquiry form
- 404 page, sitemap.xml, robots.txt

Language: Arabic by default (right to left), with an EN switch that keeps the same page. Arabic and English text live side by side in one content file.

## Design direction — "Cairo print studio"
- Warm paper background (off-white), deep ink near-black text, one bold accent: Nile-tile orange-red, with a small teal secondary.
- Type: Arabic "Alexandria" display and "IBM Plex Sans Arabic" body; English "Bricolage Grotesque" display and "IBM Plex Sans" body.
- Thin rule lines, numbered sections, oversized headings, playful touches (a hand-drawn arrow, a sticker-style tag for the name pun) — no glassy gradients, no fake dashboards.
- Subtle motion only: fade-up on scroll, hover lift on project cards.
- All colors and fonts as design tokens in one stylesheet, listed in the docs.

## Portfolio
- One projects data file. Each project: name, category, short description, problem, solution, features, tech, screenshots, demo and repo links, status.
- Starts with 2 clearly labeled "Sample project — replace me" entries so you can see the layout; you swap in your real projects later (I'll show you how, or you just send me the details).
- No invented clients, testimonials, or numbers anywhere.

## Contact and inquiries
- WhatsApp +201154362612, email mnsaasklrasak@gmail.com, Instagram and Facebook links in the header, footer and contact page.
- Form: name, business type, needed solution, description (+ phone/email to reply), checked with clear Arabic/English error messages.
- Every inquiry saved in Lovable Cloud. Email alerts to your Gmail need a domain you own (e.g. menssaask.com) verified for sending; until then you read inquiries in Cloud. The form only shows success after the save really worked.

## Build order
1. Design system + Home page, check it in the browser.
2. Services, Portfolio, case study, About pages + projects data.
3. Contact page, saving inquiries, page titles/share info, mobile polish, accessibility.
4. Tests (navigation, project rendering, contact links), fix issues.
5. Launch checklist and short guide for adding projects.

## Open items (need from you later)
- Logo (I'll make a simple text logo for now) and real project screenshots.
- A domain, if you want email alerts for inquiries.

## Technical notes
- TanStack Start (React + TypeScript + Vite + Tailwind v4) — the platform's fixed stack, equivalent to the brief's React/Vite. Hosted on Lovable instead of Vercel/Netlify.
- Language stored as `?lang=en` search param so each language version is shareable; `dir="rtl"` set on html.
- Inquiries: `inquiries` table, insert via server function with zod validation, no public read access.

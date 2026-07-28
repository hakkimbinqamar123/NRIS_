# NRIS — React Clone

A React (Vite) recreation of the NRIS Pro Portal insurance brokerage site — same pages, sections, color palette, and scroll/hover animations, rebuilt as a standalone React app.

## Stack

- **React 19 + Vite** — app shell & build tooling
- **React Router** — client-side routing for all 6 pages
- **Tailwind CSS v4** — styling, using the site's brand color `#0B4EA2` as the primary theme color
- **Framer Motion** — scroll-reveal animations, mobile menu transitions, FAQ accordion, hero float animation
- **lucide-react** — iconography (with custom inline SVGs for social brand icons, since lucide no longer ships trademarked logos)

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, "Why Choose NRIS", Services, Process, Stats, Testimonials, News, CTA |
| `/health-insurance` | Health Insurance — overview, plans, benefits, why NRIS, FAQ |
| `/motor-insurance` | Motor Insurance — products, included benefits, claims process, FAQ |
| `/engineering-insurance` | Engineering Insurance — overview, product lines, why NRIS, FAQ |
| `/news` | News & Insights — filterable article grid |
| `/contact` | Contact — quote request form + company info |

## Notes on assets

The original site's photography is hosted on the source project's private CDN and could not be re-hosted here, so photo sections are recreated as branded gradient placeholders with icons (see `src/components/PhotoBlock.jsx`). Swap in your own images by replacing `<PhotoBlock ... />` with an `<img />` tag wherever you'd like real photography.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Navbar, Footer, Layout, PageHero, CTASection, FAQAccordion,
                AnimatedSection, PhotoBlock, SocialIcons
  pages/        Home, HealthInsurance, MotorInsurance, EngineeringInsurance,
                News, Contact
  index.css     Tailwind v4 theme tokens + utility classes (buttons, badges,
                cards, hero gradient, float/fade animations)
```

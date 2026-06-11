## Project Overview
Rebuild Xtratech Global Solutions as a modern fintech + SaaS + ICT services site. Replace the dated informational layout with a polished, conversion-focused experience driven by the brand's red + black identity (from the uploaded logo + favicon).

## Brand Assets (Uploaded)
- **Full logo** (`ChatGPT_Image_Jun_11_2026_07_17_28_PM.png`) → used in navbar and footer
- **App icon / favicon** (`ChatGPT_Image_Jun_11_2026_07_17_44_PM.png`) → used as favicon + apple-touch-icon + OG fallback
- Both will be uploaded via `lovable-assets` (not copied into repo)

## Design Direction
- **Palette**: Deep charcoal/black background, crisp white text, signature Xtratech **red** (`#E50914`-ish, matched from logo) as the primary accent. Subtle red glow gradients on CTAs and hero. No purple/indigo.
- **Typography**: Space Grotesk (headings) + DM Sans (body) — modern, technical, readable.
- **Feel**: Spacious, card-based, subtle motion, premium fintech-meets-ICT aesthetic.

## Pages & Routes
1. **Home (`/`)** — Hero with value prop + CTAs, services grid, featured projects, testimonials, final CTA
2. **About (`/about`)** — Story, mission, why Xtratech, team placeholder
3. **Services (`/services`)** — SaaS, Web Dev, SEO, Car Tracking, Blockchain, Mobile Apps (benefit-driven copy)
4. **Portfolio (`/portfolio`)** — Case study cards with visuals
5. **Contact (`/contact`)** — Form + click-to-call/email + WhatsApp
6. **Blog (`/blog`)** — Insights listing (starter articles)

## Shared Components
- Sticky navbar with Xtratech logo + mobile menu
- Footer with logo, sitemap, social, RC: 1585165
- **Floating WhatsApp button** (bottom-right, all pages) → `https://wa.me/2349026155550` with pre-filled greeting
- Per-route SEO meta (title, description, OG, canonical) using TanStack `head()`
- Favicon + apple-touch-icon wired in `__root.tsx`

## Technical Plan
- **Stack**: TanStack Start + React 19 + Tailwind v4 + Radix UI (already installed)
- **Design tokens** in `src/styles.css`: add `--brand-red`, `--brand-red-glow`, dark surface tokens, gradient + shadow tokens
- **Forms**: React Hook Form + Zod (already installed)
- **Lead capture**: Contact form submissions stored in **Lovable Cloud** (PostgreSQL) via server function; surfaced for follow-up
- **Animations**: CSS transitions + tw-animate-css (already installed) for scroll reveals and hover states
- **SEO**: Unique meta per route, JSON-LD Organization on root, sitemap-ready structure
- **Accessibility**: WCAG AA, keyboard nav, focus rings in brand red, alt text everywhere

## Data Model (Lovable Cloud)
```
contacts (id, name, email, phone, service_interest, message, created_at)
```
(Blog stays as static MDX-style content in v1 — no DB needed.)

## Implementation Phases
1. **Brand foundation** — Upload logo + favicon as assets, wire favicon in `__root.tsx`, add red/black design tokens to `styles.css`, install Space Grotesk + DM Sans fonts
2. **Shared shell** — Navbar (with logo), Footer, WhatsApp floating button, root SEO defaults + Organization JSON-LD
3. **Content pages** — Home, About, Services, Portfolio (with per-route `head()`)
4. **Contact + Lead capture** — Form UI, enable Lovable Cloud, create `contacts` table + server function, success toast
5. **Blog** — Listing page + 3 starter articles
6. **Polish** — Scroll animations, image optimization, accessibility pass, SEO sweep

## WhatsApp Integration (Confirmed)
- Floating action button, brand-red, subtle pulse
- Opens `https://wa.me/2349026155550?text=Hi%20Xtratech...` in new tab
- Visible on every route

## Deliverables
- 6 fully built routes with the Xtratech brand
- Logo in navbar/footer, favicon + apple-touch-icon
- Contact form connected to Lovable Cloud
- WhatsApp click-to-chat live
- SEO-ready, mobile-first, accessible
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Xtratech" },
      {
        name: "description",
        content:
          "Selected projects by Xtratech Global Solutions — SaaS dashboards, fintech apps, fleet tracking, and Web3 platforms.",
      },
      { property: "og:title", content: "Portfolio — Xtratech Global Solutions" },
      { property: "og:description", content: "Case studies and selected work." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "Pan-African fintech onboarding portal",
    category: "SaaS · Fintech",
    summary:
      "KYC + onboarding flow processing 12k applications/month with bank-grade audit logging.",
    stat: "+38% completion",
  },
  {
    title: "Fleet tracking platform",
    category: "Vehicle Tracking",
    summary:
      "Real-time GPS, geofencing, and driver scoring across 200+ vehicles for a logistics operator.",
    stat: "200+ vehicles live",
  },
  {
    title: "Agency project hub",
    category: "Web App",
    summary:
      "Replacement for a tangle of spreadsheets — one source of truth for clients, briefs, and approvals.",
    stat: "15h saved/week",
  },
  {
    title: "NFT marketplace MVP",
    category: "Blockchain",
    summary:
      "Smart-contract minting, wallet onboarding, and a clean creator dashboard — shipped in 8 weeks.",
    stat: "8-week launch",
  },
  {
    title: "E-commerce + SEO relaunch",
    category: "Web · SEO",
    summary:
      "Headless storefront with technical SEO overhaul. Organic traffic up 2.4× in 90 days.",
    stat: "+140% organic",
  },
  {
    title: "On-the-road service app",
    category: "Mobile",
    summary:
      "Offline-first iOS + Android app for field agents with sync, signatures, and live dispatch.",
    stat: "4.8★ rating",
  },
];

function PortfolioPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-28">
          <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            Portfolio
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Selected work that ships and scales.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            A snapshot of recent projects across SaaS, fintech, logistics, and Web3.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border/60 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-brand">
                {p.category}
              </span>
              <h2 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
              <p className="mt-4 text-2xl font-bold text-foreground">{p.stat}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

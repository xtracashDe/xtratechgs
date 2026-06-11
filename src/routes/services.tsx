import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { fintechServices, digitalServices, type Service } from "@/lib/services-data";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fintech, Core Banking, Agency Banking & Digital | Xtratech" },
      {
        name: "description",
        content:
          "Xtratech's services: core banking, agency banking, digital payments, SaaS, web, mobile, blockchain, and SEO — engineered for banks, fintechs, and businesses.",
      },
      { property: "og:title", content: "Services — Xtratech Global Solutions" },
      {
        property: "og:description",
        content: "Core banking, agency banking, payments, and digital products.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServiceCard({ s, idx }: { s: Service; idx: number }) {
  return (
    <article
      className="grid items-start gap-6 rounded-3xl border border-border/60 bg-surface p-6 md:grid-cols-[auto_1fr_auto] md:p-8"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <s.icon className="h-7 w-7" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-brand">
          0{idx + 1} · {s.tagline}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">{s.title}</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">{s.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {s.benefits.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-foreground"
            >
              <Check className="h-3.5 w-3.5 text-brand" /> {b}
            </li>
          ))}
        </ul>
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center gap-1 self-start rounded-md bg-brand-gradient px-4 py-2 text-sm font-semibold text-brand-foreground shadow-brand"
      >
        Discuss <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-28">
          <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            Services
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Fintech infrastructure & digital products.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Two practices, one accountable team. We power banks, MFBs and fintechs with core
            and agency banking — and ship the SaaS, web, and mobile products that grow with
            them.
          </p>
        </div>
      </section>

      <Section eyebrow="Practice 01" title="Fintech & Banking">
        <div className="grid gap-6">
          {fintechServices.map((s, idx) => (
            <ServiceCard key={s.slug} s={s} idx={idx} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Practice 02" title="Digital Products">
        <div className="grid gap-6">
          {digitalServices.map((s, idx) => (
            <ServiceCard key={s.slug} s={s} idx={idx} />
          ))}
        </div>
      </Section>
    </>
  );
}

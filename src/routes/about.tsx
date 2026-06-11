import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Target, Eye, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Xtratech Global Solutions" },
      {
        name: "description",
        content:
          "Xtratech Global Solutions Limited (RC: 1585165) is an ICT and SaaS company building modern software for SMEs and agencies across Africa and beyond.",
      },
      { property: "og:title", content: "About — Xtratech Global Solutions" },
      { property: "og:description", content: "Who we are, what we believe, and how we work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-28">
          <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            About us
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
            We're builders, partners, and operators — not just an agency.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Xtratech Global Solutions Limited (RC: 1585165) is a Nigerian ICT and SaaS company.
            We design and ship the software that small and mid-sized businesses, agencies, and
            ambitious founders depend on every day.
          </p>
        </div>
      </section>

      <Section title="Our story" eyebrow="Who we are">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-base text-muted-foreground md:text-lg">
            Xtratech was founded on a simple idea: African businesses deserve world-class
            software, built with the same craft and rigor as anywhere else. From a single web
            project, we've grown into a full-stack ICT partner — covering SaaS platforms, web
            and mobile apps, blockchain integrations, SEO, and vehicle tracking.
          </p>
          <p className="text-base text-muted-foreground md:text-lg">
            We work the way modern product teams work: short cycles, measurable outcomes, and a
            relentless focus on the user. We don't just deliver projects — we ship products our
            clients are proud to put their name on.
          </p>
        </div>
      </Section>

      <Section eyebrow="What guides us" title="Mission, vision, values" center>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Target, t: "Mission", d: "Equip ambitious businesses with the modern software they need to win." },
            { icon: Eye, t: "Vision", d: "Be the most trusted ICT partner for SMEs and agencies across emerging markets." },
            { icon: Users, t: "Values", d: "Craft, candor, accountability. We say what we'll do — and do what we said." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border/60 bg-surface p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

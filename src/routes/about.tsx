import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Target, Eye, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Xtratech Global Solutions" },
      {
        name: "description",
        content:
          "Xtratech Global Solutions Limited (RC: 1585165) is a fintech, core banking, and agency banking solutions provider — and a builder of modern digital products.",
      },
      { property: "og:title", content: "About — Xtratech Global Solutions" },
      { property: "og:description", content: "Fintech, core banking, agency banking and digital products." },
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
            Fintech infrastructure & digital products — built by operators.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Xtratech Global Solutions Limited (RC: 1585165) is a Nigerian fintech and ICT
            company. We build the core banking, agency banking, and digital payments
            infrastructure that banks, MFBs and fintechs run on — and the SaaS, web, and
            mobile products our clients put their name on.
          </p>
        </div>
      </section>

      <Section title="Our story" eyebrow="Who we are">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-base text-muted-foreground md:text-lg">
            Xtratech was founded on a simple idea: African banks and businesses deserve
            world-class software, built with the same craft and rigor as anywhere else. We
            started with digital products and grew into a full fintech infrastructure
            partner — core banking, agency banking, and digital payments at the centre.
          </p>
          <p className="text-base text-muted-foreground md:text-lg">
            We work the way modern product teams work: short cycles, measurable outcomes,
            and a relentless focus on the end user — whether that's a bank operator, an
            agent in the field, or a customer with a phone.
          </p>
        </div>
      </Section>

      <Section eyebrow="What guides us" title="Mission, vision, values" center>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Target, t: "Mission", d: "Power Africa's banks, fintechs, and ambitious businesses with software that just works." },
            { icon: Eye, t: "Vision", d: "Be the most trusted fintech and digital products partner across emerging markets." },
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

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-border/60 bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Meet the team</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            A chairman, three co-founders, and an operating team of builders behind every
            product we ship.
          </p>
          <Link
            to="/team"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
          >
            See the team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

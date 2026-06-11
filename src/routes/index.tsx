import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xtratech Global Solutions — SaaS, Web, Blockchain & ICT Solutions" },
      {
        name: "description",
        content:
          "Xtratech builds SaaS platforms, web apps, mobile apps, and blockchain solutions for SMEs and agencies. Engineered for scale.",
      },
      { property: "og:title", content: "Xtratech Global Solutions — Modern ICT & SaaS" },
      {
        property: "og:description",
        content:
          "SaaS, web, mobile, and blockchain solutions for SMEs and agencies.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 md:py-28 lg:py-32">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              <Sparkles className="h-3.5 w-3.5" /> ICT · SaaS · Web3
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Revolutionizing <span className="bg-brand-gradient bg-clip-text text-transparent">ICT solutions</span> for SMEs &amp; agencies.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              From SaaS platforms and mobile apps to blockchain solutions — we
              engineer software that ships fast, scales hard, and earns trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Explore Services
              </Link>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { k: "50+", v: "Projects delivered" },
                { k: "10+", v: "Industries served" },
                { k: "24/7", v: "Support coverage" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border/60 bg-surface/60 p-3">
                  <dt className="text-2xl font-bold text-foreground">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-20 blur-3xl" />
            <div className="grid grid-cols-2 gap-4">
              {services.slice(0, 4).map((s) => (
                <div
                  key={s.slug}
                  className="group rounded-2xl border border-border/60 bg-surface p-5 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        eyebrow="What we do"
        title="Software built for outcomes."
        subtitle="Six core practices, one accountable team. We design, ship, and operate the systems your business runs on."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              className="group rounded-2xl border border-border/60 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Xtratech */}
      <Section
        eyebrow="Why Xtratech"
        title="Engineered for trust. Designed for scale."
        center
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Zap, t: "Velocity", d: "MVPs in weeks, not quarters. We move fast without breaking trust." },
            { icon: ShieldCheck, t: "Security-first", d: "HTTPS, encryption, RLS, and audited integrations baked in by default." },
            { icon: CheckCircle2, t: "Outcomes", d: "We measure success in your KPIs — leads, revenue, retention — not lines of code." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border/60 bg-surface p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="What clients say" title="Trusted by founders & operators." center>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { q: "Xtratech rebuilt our portal in 6 weeks. Conversions up 38%.", a: "Operations Lead, Lagos fintech" },
            { q: "Senior engineering at a startup price. Easy recommendation.", a: "Founder, SaaS startup" },
            { q: "The blockchain integration was seamless and secure. Highly recommend.", a: "CTO, DeFi platform" },
          ].map((t) => (
            <figure key={t.a} className="rounded-2xl border border-border/60 bg-surface p-6">
              <blockquote className="text-base text-foreground">“{t.q}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-10 md:p-16">
          <div className="absolute inset-0 -z-10 bg-hero opacity-80" />
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Let's build the system your business runs on.
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Tell us what you're working on. We'll respond within one business day with a clear scope and next steps.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

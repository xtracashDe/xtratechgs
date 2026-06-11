import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { team } from "@/lib/team-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Xtratech Global Solutions" },
      {
        name: "description",
        content:
          "Meet the chairman and co-founders behind Xtratech Global Solutions — fintech, core banking, and agency banking specialists.",
      },
      { property: "og:title", content: "Team — Xtratech Global Solutions" },
      {
        property: "og:description",
        content: "Chairman and co-founders behind Xtratech.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamCard({ m }: { m: (typeof team)[number] }) {
  return (
    <article className="group rounded-2xl border border-border/60 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand">
      {m.photo ? (
        <div className="h-24 w-24 overflow-hidden rounded-2xl shadow-brand ring-2 ring-brand/30">
          <img src={m.photo} alt={m.name} className="h-full w-full object-cover object-top" />
        </div>
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-lg font-bold text-brand-foreground shadow-brand">
          {m.initials}
        </div>
      )}
      <h3 className="mt-5 text-lg font-semibold text-foreground">{m.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand">{m.role}</p>
      <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
    </article>
  );
}


function TeamPage() {
  const board = team.filter((m) => m.group === "board");
  const directors = team.filter((m) => m.group === "directors");

  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-28">
          <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            The team
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
            The people behind Xtratech.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Bankers, engineers, and operators with deep experience across core banking, agency
            banking, and digital products — accountable for every system we ship.
          </p>
        </div>
      </section>

      <Section eyebrow="Governance" title="Board">
        <div className="grid gap-5 md:grid-cols-3">
          {board.map((m) => (
            <TeamCard key={m.role} m={m} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Co-founders & Directors">
        <div className="grid gap-5 md:grid-cols-3">
          {directors.map((m) => (
            <TeamCard key={m.role} m={m} />
          ))}
        </div>
      </Section>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-border/60 bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Want to work with this team?
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Tell us about your bank, fintech, or product. We'll set up a working session within
            one business day.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

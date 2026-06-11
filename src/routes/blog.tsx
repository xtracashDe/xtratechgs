import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Articles — Xtratech" },
      {
        name: "description",
        content:
          "Tech insights from Xtratech: SaaS, SEO, blockchain, mobile-app strategy, and how modern teams ship software.",
      },
      { property: "og:title", content: "Insights — Xtratech Global Solutions" },
      { property: "og:description", content: "Articles on SaaS, SEO, blockchain, and mobile." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "5 SEO mistakes killing your B2B website",
    excerpt:
      "Most B2B sites lose rankings to the same handful of fixable issues. Here's how to find and fix them.",
    tag: "SEO",
    read: "6 min read",
  },
  {
    title: "Should your business use blockchain? A practical framework",
    excerpt:
      "Cutting through the hype: when blockchain genuinely solves a business problem and when it's a distraction.",
    tag: "Blockchain",
    read: "8 min read",
  },
  {
    title: "How to scope a SaaS MVP without scope creep",
    excerpt:
      "A simple three-question framework we use to size MVPs that ship in weeks, not months.",
    tag: "SaaS",
    read: "5 min read",
  },
  {
    title: "Mobile-first isn't optional anymore",
    excerpt:
      "Why every product surface — landing pages, dashboards, even admin tools — needs a mobile story.",
    tag: "Mobile",
    read: "4 min read",
  },
];

function BlogPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-28">
          <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            Insights
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Notes from the build.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Practical takes on SaaS, SEO, blockchain, and mobile — written by the team
            actually shipping the work.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border/60 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-brand/10 px-2.5 py-1 font-medium text-brand">{p.tag}</span>
                <span className="text-muted-foreground">{p.read}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to="/contact" className="mt-4 inline-block text-sm font-medium text-brand hover:underline">
                Discuss this topic →
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          More articles coming soon. Want us to write about something specific?{" "}
          <Link to="/contact" className="font-medium text-brand hover:underline">
            Drop us a line
          </Link>
          .
        </p>
      </Section>
    </>
  );
}

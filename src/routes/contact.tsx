import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, Phone, MessageCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Section } from "@/components/Section";
import { submitContact } from "@/lib/contact.functions";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Xtratech Global Solutions" },
      {
        name: "description",
        content:
          "Tell us about your project. Reach Xtratech by form, phone (+234 902 615 5550), email, or WhatsApp.",
      },
      { property: "og:title", content: "Contact — Xtratech Global Solutions" },
      { property: "og:description", content: "Reach Xtratech by form, phone, email, or WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await submitContact({ data: values });
      toast.success("Thanks — we'll get back to you within one business day.");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or reach us by WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-24">
          <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            Contact
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Let's build something exceptional.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Tell us about your project and we'll respond within one business day with next steps.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-border/60 bg-surface p-6 md:p-8"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  className="input-base"
                  autoComplete="name"
                  placeholder="Ada Obi"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  className="input-base"
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Phone (optional)" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  type="tel"
                  autoComplete="tel"
                  className="input-base"
                  placeholder="+234 ..."
                />
              </Field>
              <Field label="Service of interest" error={errors.service?.message}>
                <select {...register("service")} className="input-base">
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </Field>
            </div>
            <Field label="What are you building?" error={errors.message?.message} className="mt-5">
              <textarea
                {...register("message")}
                rows={6}
                className="input-base resize-y"
                placeholder="A short description of your project, goals, and timeline."
              />
            </Field>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {submitting ? "Sending..." : "Send message"}
            </button>
          </form>

          <aside className="space-y-4">
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Call us"
              value="+234 902 615 5550"
              href="tel:+2349026155550"
            />
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              value="info@xtratechgs.com"
              href="mailto:info@xtratechgs.com"
            />
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
              value="Chat instantly"
              href={
                "https://wa.me/2349026155550?text=" +
                encodeURIComponent("Hi Xtratech, I'd like to discuss a project.")
              }
              external
            />
          </aside>
        </div>
      </Section>

      <style>{`
        .input-base {
          width: 100%;
          background: var(--background);
          color: var(--foreground);
          border: 1px solid var(--input);
          border-radius: 0.5rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 120ms;
        }
        .input-base:focus { border-color: var(--brand); box-shadow: 0 0 0 3px color-mix(in oklab, var(--brand) 25%, transparent); }
      `}</style>
    </>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-4 rounded-2xl border border-border/60 bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </a>
  );
}

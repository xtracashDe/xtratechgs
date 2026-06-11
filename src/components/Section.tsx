import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`container-x py-20 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className={`mb-12 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
          {eyebrow ? (
            <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
          ) : null}
          {title ? (
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <p className="mt-3 text-base text-muted-foreground md:text-lg">{subtitle}</p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}

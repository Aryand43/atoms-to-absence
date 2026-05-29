import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        {(title || description) && (
          <header className="mb-12 max-w-2xl">
            {title && (
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

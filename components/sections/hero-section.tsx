import { home } from "@/content/home";
import { profile } from "@/content/profile/bio";

export function HeroSection() {
  const { hero } = home;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
          {hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-light leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{hero.subhead}</p>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/80">
          <span>{profile.name}</span>
          <span className="text-border" aria-hidden>
            /
          </span>
          <span>{profile.role}</span>
          <span className="text-border" aria-hidden>
            /
          </span>
          <span>{profile.location}</span>
        </div>
        <p className="mt-16 max-w-2xl border-l border-accent/40 pl-5 text-base leading-relaxed text-foreground/85">
          {profile.tagline}
        </p>
      </div>
    </section>
  );
}

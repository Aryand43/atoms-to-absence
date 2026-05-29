import { profile } from "@/content/profile/bio";
import { Section } from "@/components/layout/section";

export function ResearchDirectionSection() {
  const { researchDirection } = profile;

  return (
    <Section id="research" title={researchDirection.title}>
      <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">
        {researchDirection.summary}
      </p>
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {researchDirection.themes.map((theme) => (
          <li
            key={theme}
            className="border border-border bg-surface/50 px-5 py-4 text-sm leading-relaxed text-foreground/85"
          >
            {theme}
          </li>
        ))}
      </ul>
    </Section>
  );
}

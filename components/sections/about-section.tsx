import { profile } from "@/content/profile/bio";
import { Section } from "@/components/layout/section";

export function AboutSection() {
  const { about } = profile;

  return (
    <Section id="about" title={about.title}>
      <div className="max-w-2xl space-y-6 text-base leading-relaxed text-foreground/85">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

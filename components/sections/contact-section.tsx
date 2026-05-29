import { profile } from "@/content/profile/bio";
import { links } from "@/content/profile/links";
import { Section } from "@/components/layout/section";

export function ContactSection() {
  const { contact } = profile;

  const externalLinks = [
    { label: "Email", href: `mailto:${links.email}`, show: !!links.email },
    { label: "GitHub", href: links.github, show: !!links.github },
    { label: "Scholar", href: links.scholar, show: !!links.scholar },
    { label: "LinkedIn", href: links.linkedin, show: !!links.linkedin },
  ].filter((item) => item.show);

  return (
    <Section id="contact" title={contact.title}>
      <p className="max-w-xl text-base leading-relaxed text-muted">{contact.intro}</p>
      <div className="mt-10 flex flex-wrap gap-6">
        {externalLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/60"
          >
            {item.label}
          </a>
        ))}
      </div>
    </Section>
  );
}

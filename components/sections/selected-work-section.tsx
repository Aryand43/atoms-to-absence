import { home } from "@/content/home";
import { getFeaturedProjects } from "@/lib/content/projects";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/ui/project-card";

export function SelectedWorkSection() {
  const featured = getFeaturedProjects();
  const { selectedWork } = home;

  return (
    <Section
      id="work"
      title={selectedWork.title}
      description={selectedWork.description}
    >
      <ul className="divide-y divide-border border-y border-border">
        {featured.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

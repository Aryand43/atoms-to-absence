import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

function projectAffiliation(project: Project): string | undefined {
  return "affiliation" in project ? project.affiliation : undefined;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const affiliation = projectAffiliation(project);

  return (
    <article className="group py-8 transition-colors">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <span className="text-xs tabular-nums text-muted">{project.year}</span>
      </div>
      {affiliation && (
        <p className="mt-2 text-xs leading-relaxed text-accent/90">{affiliation}</p>
      )}
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{project.oneLiner}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

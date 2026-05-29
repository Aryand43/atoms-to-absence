import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group grid gap-4 py-8 transition-colors md:grid-cols-[1fr_auto] md:items-start md:gap-12">
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <span className="text-xs tabular-nums text-muted">{project.year}</span>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{project.oneLiner}</p>
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
      </div>
      <span className="text-xs uppercase tracking-widest text-muted/60 md:pt-1">
        Coming in Phase 2
      </span>
    </article>
  );
}

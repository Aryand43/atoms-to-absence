import { projects } from "@/content/projects";

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

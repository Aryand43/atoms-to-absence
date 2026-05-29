import { roaPenaltyNeurallyapunov } from "./project-roa-penalty-neurallyapunov";
import { metalAmThermalRecovery } from "./project-metal-am-thermal-recovery";
import { seaqrDigitalTwin } from "./project-seaqr-digital-twin";
import { llmRobustnessEvaluation } from "./project-llm-robustness-evaluation";
import { portfolioOptimization } from "./project-portfolio-optimization";

export const projects = [
  roaPenaltyNeurallyapunov,
  metalAmThermalRecovery,
  seaqrDigitalTwin,
  llmRobustnessEvaluation,
  portfolioOptimization,
] as const;

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

# Atoms to Absence

Atoms to Absence is a minimal, research-grade portfolio built to present work aligned with Professor Hiroshi Ishii’s Tangible Media Group and the TeleAbsence vision at the MIT Media Lab.

The site focuses on systems that connect AI, physical sensing, and human memory across time, with an emphasis on presence across time (not just space), tangible interfaces, and rigorous infrastructure for embodied media.

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS (dark, minimal theme)
- Typed content modules under `content/`
- Reserved for an internal LangGraph workflow in `agents/portfolio-orchestrator/` (content evaluation and refinement; not part of the runtime yet)

## Structure

- `app/` – layout and routes
- `components/` – layout and section components
- `content/` – profile, projects, and writing (single source of truth)
- `lib/` – content helpers
- `agents/portfolio-orchestrator/` – placeholder for LangGraph workflows
- `docs/` – infra and content specs

## Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production check

```bash
npm run lint
npm run build
npm run start
```

## Status

- v0: One-page portfolio with TeleAbsence-aligned framing and featured projects.
- Next: Project detail pages and a LangGraph-based content evaluator for TeleAbsence alignment.

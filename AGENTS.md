# AGENTS.md

Instructions for AI agents working on this repository.

## Quick Reference

- **Stack**: Next.js 16 + Fumadocs + Tailwind CSS v4 + TypeScript
- **Content**: MDX files in `docs/content/docs/`
- **Build**: `cd docs && pnpm build` (static export, must pass after every change)
- **Lint/Format**: `cd docs && pnpm lint` / `pnpm format` (Biome, not ESLint)

## Repository Structure

```
docs/                    # Next.js + Fumadocs documentation site
├── app/                 # App router pages and layouts
├── content/docs/        # MDX documentation content
├── components/          # React components
├── lib/                 # Shared utilities and config
├── public/              # Static assets (logos, favicon)
├── source.config.ts     # Fumadocs MDX plugin and content schema config
└── package.json
.github/workflows/       # CI/CD (GitHub Pages deployment)
```

## Key Files

| File | Purpose |
|------|---------|
| `docs/lib/layout.shared.tsx` | Site title, nav links, GitHub link |
| `docs/source.config.ts` | Content schema, remark/rehype MDX plugins |
| `docs/mdx-components.tsx` | MDX component registry |
| `docs/next.config.mjs` | Next.js config, base path |
| `docs/content/docs/meta.json` | Top-level sidebar page order |
| `.github/workflows/deploy.yml` | GitHub Pages deployment |

## Rules

1. **Always validate** — run `pnpm build` in `docs/` after any change.
2. **Static export only** — `output: "export"` in next.config.mjs. No API routes with runtime logic, no server actions, no dynamic routes without `generateStaticParams`.
3. **No `any`** — use proper TypeScript types, strict mode.
4. **Biome only** — do not use ESLint or Prettier.
5. **Client components** need `"use client"` at the top of the file.
6. **Minimal changes** — don't refactor unrelated code.

## Content

- Documentation pages are `.mdx` files in `docs/content/docs/`.
- Every folder with pages needs a `meta.json` to control sidebar order.
- Frontmatter requires `title`; `description` is recommended.
- Mermaid diagrams: use ` ```mermaid ` fenced code blocks.
- Math: use `$...$` for inline, `$$...$$` for display blocks.

### Available MDX Components

These work in any `.mdx` file without imports:

`Callout`, `Card`, `Cards`, `Tabs`, `Tab`, `Steps`, `Step`, `Accordion`, `Accordions`, `Files`, `File`, `Folder`, `TypeTable`, `ImageZoom`, `Mermaid`

To add new MDX components, put them in `docs/components/` and register in `docs/mdx-components.tsx`.

## Code

- Components go in `docs/components/`.
- Styles use Tailwind CSS v4 utility classes. Global CSS in `docs/app/global.css`.
- Base path is set dynamically via `REPO_NAME` env var for GitHub Pages deployment.

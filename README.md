<img src="docs/public/logo-dark.png" width="25%">

# Docs Template

A minimal documentation site template built with [Fumadocs](https://fumadocs.dev/) and [Next.js](https://nextjs.org/), ready to deploy to GitHub Pages.

## Quick Start

1. **Create a repo from this template** — click "Use this template" on GitHub
2. **Install dependencies:**
   ```sh
   cd docs
   pnpm install
   ```
3. **Start developing:**
   ```sh
   pnpm dev
   ```
4. **Push to `main`** — GitHub Actions will automatically build and deploy to GitHub Pages

## Customization

- **Site title & nav** — edit `docs/lib/layout.shared.tsx`
- **Content** — add/edit `.mdx` files in `docs/content/docs/`
- **Sidebar order** — edit `docs/content/docs/meta.json`
- **Logo** — replace files in `docs/public/`
- **Base path** — automatically set from your repository name during deployment

## Project Structure

```
docs/
├── app/             # Next.js app routes
├── content/docs/    # MDX documentation pages
├── components/      # React components
├── lib/             # Shared utilities
├── public/          # Static assets (logos, favicon)
├── package.json
└── source.config.ts # Fumadocs content configuration
```

## Development

```sh
cd docs
pnpm dev       # Start dev server
pnpm build     # Build for production
pnpm lint      # Lint with Biome
pnpm format    # Format with Biome
```

## Deployment

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) handles deployment automatically:

- Builds on every push to `main` and on pull requests
- Deploys to GitHub Pages on push to `main`
- Base path is set dynamically from the repository name

To enable: go to **Settings → Pages → Source → GitHub Actions**.

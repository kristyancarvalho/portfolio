# Portfolio

Personal portfolio of Kristyan Carvalho — a bilingual, single-page site built around a non-divergent blue visual system, scroll-based navigation, dark and light themes, declarative project data, live blog posts from RSS and a contact form.

## Stack

- Vite
- React + TypeScript
- Tailwind CSS with a CSS-variable design token system
- react-i18next for Portuguese (pt-BR) and English (en)
- Motion for performance-conscious animations
- Vercel serverless function for the blog RSS feed
- Docker Compose for the full local workflow

## Features

- Single-page scroll navigation with active section detection
- Light, dark and system themes with persistence
- Portuguese and English content with persisted language preference
- Resume download by selected language
- Projects rendered from declarative JSON data
- Latest blog posts loaded from RSS with loading, empty and error states
- Contact form with validation and a provider-agnostic delivery abstraction
- Strong SEO, Open Graph metadata, web manifest and robots file
- Accessible, responsive layout with reduced-motion support

## Development (Docker only)

All commands run through Docker Compose. No host-based Node or npm setup is required.

Start the development server:

```bash
docker compose up --build
```

The app is served at `http://localhost:5173`.

Run validation and tooling:

```bash
docker compose run --rm app npm run lint
docker compose run --rm app npm run typecheck
docker compose run --rm app npm test
docker compose run --rm app npm run build
docker compose run --rm app npm run preview
```

The production preview is served at `http://localhost:4173`.

## Environment variables

Copy `.env.example` to `.env` and fill in the values for the contact form provider.

| Variable | Scope | Description |
| --- | --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | Client | EmailJS service id (publishable) |
| `VITE_EMAILJS_TEMPLATE_ID` | Client | EmailJS template id (publishable) |
| `VITE_EMAILJS_PUBLIC_KEY` | Client | EmailJS public key (publishable) |

The blog feed is fetched server-side through `/api/blog-feed` and requires no secrets. Server-only secrets must never use the `VITE_` prefix.

## Build and preview

```bash
docker compose run --rm app npm run build
docker compose run --rm app npm run preview
```

The build output is written to `dist`.

## Deployment

The site deploys to Vercel.

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- The `api` directory is deployed as serverless functions, including the blog RSS route.
- Configure the contact form environment variables in the Vercel project settings.

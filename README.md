# Portfolio V2

A React + TypeScript portfolio built with Vite, focused on interactive UI, responsive layout, and a mobile-optimized project carousel.

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Iconify
- Custom CSS (`src/index.css`)
- Vitest + Testing Library

## Quick Start

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - type-check + production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint
- `npm run test` - run tests once
- `npm run test:watch` - run tests in watch mode

## Project Structure

```text
src/
  assets/
  data/
    projects.ts
  hooks/
    usePortfolioInteractions.ts
  pages/
    PortfolioPage.tsx
  sections/
    HeroSection.tsx
    TechStackSection.tsx
    ProjectsSection.tsx
    ContactProcessSection.tsx
  App.tsx
  index.css
  main.tsx
```

## Current App Flow

- `main.tsx` mounts `App`
- `App.tsx` handles loader shell and renders `PortfolioPage`
- `PortfolioPage` renders:
  - `HeroSection`
  - `TechStackSection`
  - `ProjectsSection`
  - `ContactProcessSection`

Global page interactions are handled in `usePortfolioInteractions.ts`.

## Projects Carousel Notes

`ProjectsSection` includes custom drag/swipe logic with autoplay.

Current behavior includes:

- smoother swipe transitions
- shorter swipe threshold for easier card navigation
- autoplay pause on user interaction
- debounced autoplay resume to prevent conflict with manual swipe
- longer autoplay interval (`8000ms`)

Project card data comes from `src/data/projects.ts`.

## Editing Content

- Update project cards in `src/data/projects.ts`
- Update hero nav items in `src/sections/HeroSection.tsx`
- Update tech items in `src/sections/TechStackSection.tsx`
- Update process/contact copy in `src/sections/ContactProcessSection.tsx`

## Notes on Testing in Restricted Environments

In some restricted Windows environments, Vite/Vitest may fail loading native Tailwind binaries (for example `@tailwindcss/oxide` with `EPERM`).

If that happens, TypeScript validation is still useful:

```bash
npx tsc -p tsconfig.app.json --noEmit
```

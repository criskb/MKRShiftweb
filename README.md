# MKR Shift Web Experience

A SvelteKit + Tailwind CSS + daisyUI implementation of the MKR Shift marketing site. The single-page experience mirrors the
provided concept with glassmorphism surfaces, neon gradients, and modular sections for services, team, social content, and a
conversion-focused contact form.

## Prerequisites

- Node.js 20+
- npm 10+

## Getting Started

```bash
npm install
npm run dev -- --open
```

The site is served at <http://localhost:5173>. Update copy, imagery, or sections from `src/routes/+page.svelte`.

## Building for Production

```bash
npm run build
```

Static assets are output to `build/` and can be deployed on any Node-compatible hosting or adapted to a static hosting target
with an alternate SvelteKit adapter.

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) for routing and hydration
- [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/) for theming and component primitives
- [TypeScript](https://www.typescriptlang.org/) with strict compiler options enabled

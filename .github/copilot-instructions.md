# Copilot Instructions — hello-worlds

## Project Overview

This is a collection of independent "Hello World" demo apps, each in its own folder. There is **no monorepo workspace, no root `package.json`, and no shared `node_modules`**. Each app is fully self-contained.

## General Conventions

- Every app must render **"Hello World"** as its main (and only) output
- Apps must be **minimal** — one component, no routing, no styling, no state management, no extras
- Each folder is named after its framework in lowercase with hyphens (e.g., `svelte`, `lit-element`, `ionic-react`)
- Use the framework's idiomatic file structure and conventions
- Code formatting: follow `.prettier.js` in the repo root — single quotes, semicolons, trailing commas, 2-space indent, 100-char print width

## Per-Framework Conventions

### Angular / Angular Universal / Ionic Angular / Scully

- Use Angular CLI defaults (`ng new`)
- TypeScript strict mode
- Single `AppComponent` with inline template when possible
- Build: `npm run build -- --prod`

### React / Ionic React / Gatsby / Next.js

- Functional components only (no class components)
- Use `react-scripts` or the framework's own CLI
- JSX/TSX with default Create React App or framework conventions
- Build: `npm run build`

### Vue / Nuxt.js / Gridsome / VuePress

- Single-file components (`.vue`) with `<template>`, `<script>`, `<style>` sections
- Vue CLI or framework CLI defaults
- Build: `npm run build` (Nuxt uses `npm run generate` for static)

### Svelte

- Single `.svelte` component
- Rollup-based build (default Svelte template)
- Build: `npm run build`

### Ember / Glimmer

- Ember CLI defaults
- Handlebars templates
- Build: `npm run build`

### TypeScript

- Pure TypeScript with `tsc` compilation
- No framework — just TypeScript → JavaScript
- Build: `npm run build`

### Static / CDN Apps (Alpine, AngularJS, Backbone, Babylon.js, HTML, Hyperapp, jQuery, Three.js, Web Components)

- Single `index.html` file, possibly with a companion `.js` file
- Use CDN links for libraries — no build step required
- Must be servable with `npx http-server .`

### Blazor

- .NET / C# project
- Build: `dotnet build`

### Flutter

- Dart project targeting web
- Build: `flutter build web`

## Working in This Repo

### Before making changes

1. Identify which app folder you're working in
2. `cd` into that folder before running any commands
3. Run `npm install` (or the framework's equivalent) in that folder

### Build & verify

```bash
cd <framework-folder>
npm install
npm run build
npx http-server <serve-folder>
```

### Never do

- Run `npm install` from the repo root
- Add a root-level `package.json`
- Add shared dependencies across apps
- Add routing, styling, state management, or any complexity beyond "Hello World"
- Modify one app when working on another

## Maintenance Matrix

| When this changes... | Also update... |
|---|---|
| New app folder added | `README.md` (add row to project table, keep alphabetical), `AGENTS.md` (app catalog) |
| App folder renamed or removed | `README.md` (update/remove table row), `AGENTS.md` (app catalog) |
| Build command changed for an app | `README.md` (build steps column), `AGENTS.md` (app catalog) |
| Serve folder changed for an app | `README.md` (serve folder column), `AGENTS.md` (app catalog) |
| `.prettier.js` config changed | Verify all apps with JS/TS source follow the new rules |
| `CONTRIBUTING.md` updated | Verify consistency with `PULL_REQUEST_TEMPLATE.md` and `AGENTS.md` |

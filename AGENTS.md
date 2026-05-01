# AI Agent Guide — hello-worlds

This repository is a **collection of independent "Hello World" demo applications**, each showcasing a different web framework or library. Every app lives in its own folder with its own dependencies — there is no monorepo workspace, no shared `node_modules`, and no root-level build.

## Repository Structure

```
hello-worlds/
├── .github/
│   ├── copilot-instructions.md     # AI coding conventions
│   ├── ISSUE_TEMPLATE/             # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md    # PR checklist
├── <framework>/                    # One folder per framework demo
│   ├── package.json                # (npm-based apps) Independent dependencies
│   └── ...                         # Framework-specific source files
├── .prettier.js                    # Shared Prettier config
├── CONTRIBUTING.md                 # Contribution guidelines
├── AGENTS.md                       # This file
└── README.md                       # Project overview with build/serve table
```

## App Catalog

Each app is fully self-contained. Install and run from within its own folder.

### npm-based Apps

| Folder | Framework | Install | Build | Start | Serve Folder |
|---|---|---|---|---|---|
| `angular` | Angular | `npm install` | `npm run build -- --prod` | `npm start` | `dist/hello` |
| `angular-universal` | Angular Universal | `npm install` | `npm run prerender` | `npm start` | `dist/hello/browser` |
| `aurelia` | Aurelia | `npm install` | `npm run build` | `npm start` | `dist` |
| `eleventy` | Eleventy | `npm install` | `npm run build` | — | `_site` |
| `elm` | Elm | `npm install` | `npm run build` | `npm start` | `public` |
| `ember` | Ember | `npm install` | `npm run build` | `npm start` | `dist` |
| `gatsby` | Gatsby | `npm install` | `npm run build` | `npm start` | `public` |
| `glimmer` | Glimmer | `npm install` | `npm run build` | `npm start` | `dist` |
| `gridsome` | Gridsome | `npm install` | `npm run build` | — | `dist` |
| `hugo` | Hugo | `npm install` | `npm run build` | — | `public` |
| `ionic-angular` | Ionic Angular | `npm install` | `npm run build -- --prod` | `npm start` | `www` |
| `ionic-react` | Ionic React | `npm install` | `npm run build` | `npm start` | `build` |
| `knockoutjs` | Knockout.js | `npm install` | `npm run build` | `npm start` | `dist` |
| `lit-element` | LitElement | `npm install` | `npm run build` | `npm start` | `dist` |
| `marko` | Marko | `npm install` | `npm run build` | `npm start` | `public` |
| `meteor` | Meteor | `npm install` | `npm run build` | `npm start` | `bundle` |
| `mithril` | Mithril | `npm install` | `npm run build` | `npm start` | `dist` |
| `nextjs` | Next.js | `npm install` | `npm run build` | `npm start` | `out` |
| `nuxtjs` | Nuxt.js | `npm install` | `npm run generate` | `npm start` | `dist` |
| `polymer` | Polymer | `npm install` | `npm run build` | — | `build/default` |
| `preact` | Preact | `npm install` | `npm run build` | `npm start` | `build` |
| `react` | React | `npm install` | `npm run build` | `npm start` | `build` |
| `riot` | Riot | `npm install` | `npm run build` | `npm start` | `dist` |
| `scully` | Scully | `npm install` | `npm run build -- --prod` | `npm start` | `dist/hello` |
| `stencil` | Stencil | `npm install` | `npm run build` | `npm start` | `www` |
| `svelte` | Svelte | `npm install` | `npm run build` | `npm start` | `public` |
| `typescript` | TypeScript | `npm install` | `npm run build` | `npm start` | `dist` |
| `vue` | Vue | `npm install` | `npm run build` | — | `dist` |
| `vuepress` | VuePress | `npm install` | `npm run build` | `npm start` | `dist` |

### Non-npm Apps

| Folder | Framework | How to Run |
|---|---|---|
| `alpine` | Alpine.js | Open `index.html` directly or `npx http-server .` |
| `angularjs` | AngularJS | Open `index.html` directly or `npx http-server .` |
| `babylonjs` | Babylon.js | Open `index.html` directly or `npx http-server .` |
| `backbone` | Backbone.js | Open `index.html` directly or `npx http-server .` |
| `blazor` | Blazor (.NET) | `dotnet build && dotnet run` |
| `flutter` | Flutter (Dart) | `flutter build web` then serve `build/web` |
| `html` | Plain HTML | Open `index.html` directly or `npx http-server .` |
| `hyperapp` | Hyperapp | Open `index.html` directly or `npx http-server .` |
| `javascript` | Vanilla JS | Open `index.html` directly or `npx http-server .` |
| `jquery` | jQuery | Open `index.html` directly or `npx http-server .` |
| `threejs` | Three.js | Open `index.html` directly or `npx http-server .` |
| `web-component` | Web Components | Open `index.html` directly or `npx http-server .` |

## Build & Test

There is **no root-level build or test command**. Each app is independent:

```bash
cd <framework-folder>
npm install
npm run build
npm start          # dev server (if available)
```

To verify a built app can be served statically:

```bash
npx http-server <serve-folder>
```

There is no automated test suite for the collection — most apps have tests removed per the project's design philosophy of minimal hello-world apps.

## Key Conventions

- Each app must display **"Hello World"** on the main component
- Apps must be **minimal** — one component, no routing, no styling, no extras
- Each app is **fully self-contained** — independent `package.json`, no shared dependencies
- The folder name must match the technology name (lowercase, hyphenated)
- Built apps must be servable with `npx http-server <serve-folder>`
- Code formatting follows the root `.prettier.js` config: single quotes, semicolons, 2-space indent, 100-char line width

## Adding a New Framework Demo

1. **Create the folder** — use the framework name in lowercase with hyphens (e.g., `solid-js`)
2. **Scaffold the app** — use the framework's official CLI or starter template
3. **Simplify** — strip it down to a single component that renders "Hello World". Remove all tests, routing, styling, and extras
4. **Verify the build** — ensure `npm install && npm run build` works, then confirm the built output can be served with `npx http-server <output-folder>`
5. **Update the README** — add a row to the project table in `README.md` with the framework name, build steps, serve folder, and folder name (keep alphabetical order)
6. **Submit a PR** — follow the checklist in `.github/PULL_REQUEST_TEMPLATE.md`

### Non-npm Framework Checklist

For frameworks that don't use npm (e.g., Blazor, Flutter, plain HTML):

1. Create the folder with a working app
2. Include any necessary config files for the framework's own toolchain
3. Document the build/run steps in the README table
4. Ensure the result is servable as static files

## Common Pitfalls

- **Don't install from the repo root** — there is no root `package.json`. Always `cd` into the specific app folder first
- **Don't add shared dependencies** — each app must remain independent
- **Don't add complexity** — no routing, no state management, no API calls. Just "Hello World"
- **Check the serve folder** — each framework outputs to a different directory. Refer to the table above

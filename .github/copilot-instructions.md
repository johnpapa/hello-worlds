# Copilot Instructions — hello-worlds

## Project Type

This is a **multi-app collection** of 41+ minimal "Hello World" demos across JavaScript/TypeScript frameworks. Each subfolder is an independent project.

**There is no centralized build, test, or lint system.** Each project stands alone.

## Writing Conventions

### General

- Each demo must display "Hello World" on the main component
- Keep demos minimal — no routing, no styling, no extras
- Remove all tests, test dependencies, and test scripts
- Each project must work with `npm install && npm start` (or documented equivalent)

### Folder Structure

- One folder per framework, named in lowercase with hyphens (e.g., `lit-element`, `ionic-react`)
- Each folder contains its own `package.json`, source files, and any framework-specific config

### JavaScript / TypeScript

- Use the framework's default/recommended coding style
- Prefer the simplest possible component structure
- No unnecessary dependencies beyond the framework itself

### HTML

- Use semantic HTML5 elements
- Include a proper `<!DOCTYPE html>` declaration
- Reference CDN scripts where applicable (jQuery, Hyperapp, etc.)

## Project-Specific Build Commands

Each project may have different build steps. Always check the project's `package.json` for available scripts. Common patterns:

| Framework Type | Start Command | Build Command |
|---|---|---|
| CLI-based (Angular, React, Vue, etc.) | `npm start` | `npm run build` |
| Static (HTML, jQuery, Alpine, etc.) | `npx http-server .` | N/A |
| Blazor | `dotnet run` | `dotnet build` |
| Flutter | `flutter run` | `flutter build web` |

## Maintenance Matrix

| When this changes... | Also update... |
|---|---|
| New project folder added | `README.md` (build matrix table), `AGENTS.md` (structure section) |
| Project removed | `README.md` (build matrix table), `AGENTS.md` (structure section) |
| Build steps for a project change | `README.md` (build matrix table) |
| `README.md` table format changes | Verify all projects are still listed |
| Contributing guidelines change | `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md` |
| New issue template added | `.github/ISSUE_TEMPLATE/` directory |
| CI workflow modified | `.github/workflows/ci.yml`, `AGENTS.md` (if build steps affected) |
| `AGENTS.md` structure section | Verify consistency with actual directory listing |

## Do NOT

- Add centralized build/test tooling at the root level
- Modify multiple projects in a single PR (unless it's a cross-cutting concern like LICENSE)
- Add complex features, routing, state management, or styling to demos
- Use `latest` for dependency versions — pin specific versions

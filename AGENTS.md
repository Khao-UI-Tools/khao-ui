# Repository Guidelines

## Project Structure & Module Organization

This repository is an npm workspace monorepo with two packages under `packages/`:

- `packages/khao-ui`: Svelte 5 web components, Storybook stories, Jest tests, and release artifacts.
- `packages/khao-malet`: CSS design system consumed by `khao-ui`.

In `packages/khao-ui`, source code lives in `src/`, stories in `stories/`, and tests in `src/**/*.test.(ts|js)`. Storybook config is in `packages/khao-ui/.storybook/`. Release notes are managed through `.changeset/`.

## Build, Test, and Development Commands

Run commands from the repository root unless the package path is specified.

- `npm run dev`: starts the `@der-reiskoch/khao-ui` Vite dev server.
- `npm run build`: builds `khao-malet` first, then `khao-ui`.
- `npm run jest`: runs Jest for `khao-ui`.
- `npm run storybook:dev`: builds prerequisites and starts Storybook for `khao-ui`.
- `npm run storybook:build`: builds the static Storybook site.
- `cd packages/khao-ui && npm run check`: runs `svelte-check` and TypeScript validation.
- `npm run changeset:add`: creates a new changeset for package versioning.

## Coding Style & Naming Conventions

Use TypeScript and Svelte components with 2-space indentation and double quotes, matching the existing codebase. Keep component directories and files in PascalCase by feature, for example `src/components/speakers/thaiSpeaker/ThaiSpeaker.svelte`. Story files follow `ComponentName.stories.ts`. Prefer descriptive prop names and small wrapper components over duplicated logic.

There is no dedicated ESLint or Prettier setup in this repo; match the surrounding file style and verify with `npm run check`.

## Testing Guidelines

Jest with `ts-jest` and `jsdom` is configured in `packages/khao-ui/jest.config.cjs`. Add tests beside the relevant source using `*.test.ts` or `*.test.js`. Coverage collection is enabled, so new logic should include meaningful assertions, especially for utilities and component behavior that can be tested without a browser-only speech API.

## Commit & Pull Request Guidelines

All commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/).
Use the format `<type>(<scope>): <description>`, for example `feat(khao-ui): add Lao and Khmer speaker components`.
Common types used here include `feat`, `fix`, `docs`, `style`, `refactor`, and `test`.

Pull requests should include:

- a brief summary of the change and affected package(s)
- linked issue or rationale
- screenshots or Storybook notes for UI changes
- a changeset for user-facing package changes

Before opening or updating a pull request, rebase your branch onto the target branch; do not merge the target branch into your feature branch. Keep history linear with commands such as `git fetch origin` followed by `git rebase origin/master`.

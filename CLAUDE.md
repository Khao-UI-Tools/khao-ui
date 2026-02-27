# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Output Style

**Dense, professional, action-oriented responses:**

- Start with essential information immediately
- No AI fluff ("I'll help you...", "Let me...", "Here's what I found...")
- Professional tone: helpful but not cheerful
- Every word must serve a purpose

**ANTI-CHEERFUL GUARDRAILS:**

- No exclamation points or emojis
- No "Perfect!", "Great!", "Awesome!" responses
- No celebratory language after task completion
- No "Much better!" or enthusiasm markers
- Report facts, not feelings about outcomes
- State what was done, not how "good" it is

**When you catch yourself being cheerful:** Stop. Rewrite with factual tone.

## Basic Rules

- Ask questions if anything is uncertain, do not make any assumptions!
- Ask those questions in a numbered List, so that the user can address them easily
- plan before you implement!
- do not commit anything without permission by the user
- update your internal documentation after you finished a task
- add a changeset explainig the implemented feature after you finished a task

## Project Overview

This is a monorepo for the Khao UI component library and Khao Malet design system. "Khao" (ข้าว) means rice in Thai, representing the foundational nature of these tools for foodie/cooking websites.

- **khao-ui**: Svelte-based web components library that compiles to custom elements
- **khao-malet**: CSS design system providing custom properties for styling

## Architecture

### Monorepo Structure

```markdown
packages/
├── khao-ui/ # Main UI component library
│ ├── src/
│ │ ├── components/ # Organized by category (buttons, forms, cards, etc.)
│ │ ├── icons/ # Icon components
│ │ └── common/ # Shared utilities
│ └── dist/ # Built components and CSS
└── khao-malet/ # Design system (CSS custom properties)
├── css/ # Source CSS files
└── dist/ # Built design system
```

### NPM Workspaces

**CRITICAL**: This is an npm workspaces monorepo. Understanding how workspaces work is essential:

- Root `package.json` defines `"workspaces": ["packages/*"]`
- Dependencies are **hoisted** to the root `node_modules` by default
- Each workspace package can also have its own `node_modules` folder for non-hoisted dependencies
- When installing dependencies, npm manages ALL workspace packages together
- **IMPORTANT**: The root `package-lock.json` controls the entire dependency tree for all workspaces

**Clean Install in Workspaces:**

When you need to do a fresh install (e.g., after lockfile corruption), you MUST clean ALL node_modules folders:

```bash
# Clean ALL node_modules folders (root + all workspace packages)
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
rm -f package-lock.json

# Or explicitly:
rm -rf node_modules packages/*/node_modules package-lock.json

# Then install
npm install
```

**Common Mistakes:**

- ❌ Only deleting root `node_modules` - leaves stale dependencies in workspace packages
- ❌ Only deleting root `package-lock.json` - npm might use cached lockfile from workspace packages
- ✅ Delete ALL node_modules folders AND root package-lock.json before reinstalling

**Running Scripts in Workspaces:**

```bash
# From root - runs script in specific workspace
npm run jest -w @der-reiskoch/khao-ui

# From root - install dependency in specific workspace
npm install <package> -w @der-reiskoch/khao-ui

# From workspace directory - runs local script
cd packages/khao-ui && npm run jest
```

### Component Categories

Components in `packages/khao-ui/src/components/` are organized by purpose:

- `buttons/` - Button variants, icon buttons, donation buttons
- `forms/` - Text fields, select fields, switch buttons
- `cards/` - Card layouts
- `misc/` - Badges, chips, infinite scroll, remote control
- `media/` - Image and video components
- `widgets/` - Share buttons, social buttons, wake lock
- `tabs/` - Tab bar components
- `pagination/` - Pagination controls

### Build System

- **Vite** for building with custom element compilation
- **Svelte 5** components compiled to web components via `customElement: true`
- Individual component entry points defined in `vite.build.config.ts`
- Outputs versioned JS and CSS files to `dist/`

## Commands

### Root Level (Monorepo)

```bash
npm run dev              # Start khao-ui development
npm run build            # Build both khao-malet and khao-ui
npm run jest             # Run Jest tests in khao-ui
npm run storybook:dev    # Start Storybook development server
npm run storybook:build  # Build static Storybook

# Changesets for versioning
npm run changeset:add     # Add new changeset
npm run changeset:version # Version packages
npm run changeset:publish # Publish and push tags
```

### Package-Specific Commands

```bash
# In packages/khao-ui/
npm run check            # Run svelte-check and tsc
npm run jest:dev         # Jest in watch mode
npm run prepare-storybook # Build and copy CSS for Storybook

# In packages/khao-malet/
npm run build            # Build CSS design system
npm run storybook:dev    # Storybook for design system
```

## Development Workflow

1. **khao-malet** must be built first (CSS design system)
2. **khao-ui** depends on khao-malet and includes it via build process
3. Components are built as individual entry points for selective importing
4. Storybook requires CSS to be built and copied to `storybook-assets/`

## Testing

- Jest with jsdom environment for unit tests
- Tests located alongside components: `**/*.test.(ts|js)`
- TypeScript with ts-jest transform
- Coverage collection enabled

## Key Technologies

- **Svelte 5** with custom elements compilation
- **TypeScript** throughout
- **Vite** for building and development
- **Jest** for testing
- **Storybook** for documentation
- **Changesets** for versioning and publishing

## Styling Architecture

Components use CSS custom properties from khao-malet design system. The design system provides:

- Typography scales (`--khao-sys-typescale-*`)
- Color tokens
- Spacing and layout tokens
- Component-specific styling hooks

Override styling by setting CSS custom properties at a higher level in your application.

## Storybook Architecture

Uses `@storybook/web-components-vite` (Storybook 9) to document Svelte 5 components compiled to custom elements.

### Key Configuration

- Do NOT manually add the Svelte plugin in `viteFinal` — Storybook inherits it from `vite.config.ts`
- `viteFinal` only sets `config.base` and `config.assetsInclude = [/\.mdx$/]`
- `storybook:dev` triggers `prepare-storybook` first, which builds khao-malet and copies CSS

### Story Pattern

```typescript
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Button from "../../src/components/buttons/button/Button.svelte";

const meta = {
  component: "khao-button", // String tag name, not component reference
  tags: ["autodocs"],
  argTypes: { /* ... */ },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;
```

- Import types from `@storybook/web-components-vite` (not `@storybook/svelte-vite`)
- `component` must be a string matching the custom element tag
- Import the Svelte component only for type inference

### Known Limitation

Autodocs/MDX inline component previews do not render — causes `i.renderer is not a function`. Canvas stories are the primary interface and work correctly.

### Debugging

1. Verify `vite.config.ts` has `svelte({ compilerOptions: { customElement: true } })`
2. Confirm `component` field is a string, not a component reference
3. Clear cache: `rm -rf node_modules/.cache && npm install`

## Git Workflow

**IMPORTANT**: Always work on the `development` branch. Do NOT create new branches or pull requests without explicit user consent.

- Commit and push changes directly to `development` unless instructed otherwise
- Only create feature branches when the user specifically asks for them
- Only open pull requests when the user explicitly requests it

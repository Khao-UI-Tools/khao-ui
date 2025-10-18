# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for the Khao UI component library and Khao Malet design system. "Khao" (ข้าว) means rice in Thai, representing the foundational nature of these tools for foodie/cooking websites.

- **khao-ui**: Svelte-based web components library that compiles to custom elements
- **khao-malet**: CSS design system providing custom properties for styling

## Architecture

### Monorepo Structure

```markdown
packages/
├── khao-ui/          # Main UI component library
│   ├── src/
│   │   ├── components/   # Organized by category (buttons, forms, cards, etc.)
│   │   ├── icons/        # Icon components
│   │   └── common/       # Shared utilities
│   └── dist/         # Built components and CSS
└── khao-malet/       # Design system (CSS custom properties)
    ├── css/          # Source CSS files
    └── dist/         # Built design system
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

### Overview

This project uses Storybook with the `@storybook/web-components-vite` framework to document Svelte 5 components that are compiled to custom elements (web components).

### Component Structure

**Svelte Components with Custom Elements:**
- Each component uses `<svelte:options customElement="khao-button" />` at the top
- Components are written in Svelte 5 with the new runes syntax (`$props()`, `$state()`, etc.)
- The `customElement` option tells Svelte to compile to a web component instead of a Svelte component
- Example: `Button.svelte` becomes `<khao-button>` custom element

### Vite Configuration

**Two Vite configs exist:**

1. **`vite.config.ts`** - For general development
   ```typescript
   plugins: [
     svelte({
       compilerOptions: {
         customElement: true,  // Compile to web components
       },
     }),
   ],
   ```

2. **`vite.build.config.ts`** - For production builds
   - Same Svelte plugin configuration
   - Defines individual entry points for each component
   - Outputs versioned JS files to `dist/`

### Storybook Configuration

**`.storybook/main.ts`:**
```typescript
const config: StorybookConfig = {
  framework: {
    name: "@storybook/web-components-vite",  // Web components framework
    options: {},
  },
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|ts|svelte)"],
  viteFinal(config, { configType }) {
    config.base = process.env.BASE_PATH || config.base;
    // IMPORTANT: In v8, NO manual Svelte plugin configuration here
    // Storybook's Vite instance inherits from project's vite.config.ts
    return config;
  },
};
```

**Key Insight:** The `viteFinal` hook in v8 does NOT manually configure the Svelte plugin. Storybook's Vite instance automatically inherits the Svelte plugin configuration from the project's `vite.config.ts`. This is how .svelte files get compiled to custom elements within Storybook.

### Story Files

**Standard pattern for all stories:**

```typescript
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Button from "../../src/components/buttons/button/Button.svelte";

const meta = {
  component: "khao-button",  // String (custom element tag), not component reference
  tags: ["autodocs"],
  argTypes: {
    // Control definitions...
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    priority: "primary",
  },
};
```

**Key Points:**
- **Always** import types from `@storybook/web-components-vite` (never `@storybook/svelte-vite`)
- Import the Svelte component for type information only
- The `component` field must be a **string** matching the custom element tag name (e.g., `"khao-button"`)
- Use `satisfies Meta<ComponentName>` to get type checking for args and controls
- All stories follow this consistent pattern throughout the codebase

### Autodocs and MDX

**`.storybook/preview.ts`:**
```typescript
const preview = {
  tags: ["autodocs", "autodocs"],  // Enable autodocs globally
  parameters: {
    docs: {
      theme: themes.light,
    },
  },
};
```

**MDX Files:**
- MDX files import from `@storybook/blocks` for components like `<Meta>`, `<Markdown>`
- They render markdown content and can include live component examples
- Located in `stories/` directory alongside `.stories.ts` files

### How Svelte Web Components Work in Storybook

1. **Build Process:**
   - `npm run storybook` triggers `npm run prepare-storybook`
   - This runs `npm run build` which compiles all Svelte components to dist/
   - CSS is copied to `storybook-assets/khao-ui.css`
   - Storybook dev server starts

2. **Runtime Compilation:**
   - Storybook's Vite dev server compiles `.svelte` files on-the-fly
   - Inherits Svelte plugin from project's `vite.config.ts`
   - Components are compiled with `customElement: true`
   - Custom elements are registered in the browser as `<khao-button>`, etc.

3. **Canvas Stories:**
   - Work perfectly because they render the web components directly
   - Storybook's web-components framework knows how to handle custom elements
   - Controls panel works because it sets attributes/properties on the custom elements

4. **Autodocs/MDX Limitation:**
   - The `@storybook/web-components-vite` framework doesn't provide a renderer for inline component previews in docs pages
   - This causes "i.renderer is not a function" error in autodocs and MDX
   - This is a known limitation of web components support in Storybook
   - Canvas stories are the primary interface and work perfectly

### Storybook 9 Migration Notes

When migrating from Storybook 8 to 9:

1. **Import path changes:** `@storybook/*` → `storybook/*`
   - `@storybook/test` → `storybook/test`
   - `@storybook/blocks` → `storybook/blocks`
   - `@storybook/theming` → `storybook/theming`
   - `@storybook/manager-api` → `storybook/manager-api`

2. **Package consolidation:** Many packages are now built into core:
   - `@storybook/addon-essentials` (now in core)
   - `@storybook/addon-interactions` (now in core)
   - `@storybook/blocks` (import from `storybook/blocks`)
   - `@storybook/test` (import from `storybook/test`)

3. **MDX handling:** Add to `.storybook/main.ts`:
   ```typescript
   viteFinal(config) {
     config.assetsInclude = [/\.mdx$/];  // Required for v9
     return config;
   }
   ```

4. **DO NOT add manual Svelte plugin:** The web-components-vite framework handles Svelte compilation internally by inheriting from vite.config.ts. Adding a manual Svelte plugin in viteFinal causes conflicts.

5. **Autodocs limitation persists:** The renderer issue with autodocs/MDX is a limitation of the web-components framework, not specific to v8 or v9. Canvas stories are the primary development interface.

### Debugging Storybook Issues

If stories aren't rendering:

1. **Check Vite configuration:** Ensure `vite.config.ts` has the Svelte plugin with `customElement: true`
2. **Verify imports:** Make sure story files import from correct packages
3. **Check component field:** Should be a string (custom element name), not component reference
4. **Test Canvas vs Docs:** Canvas stories work, but autodocs/MDX may not render component previews
5. **Clear cache:** `rm -rf node_modules .storybook-cache && npm install`

## Git Workflow

**IMPORTANT**: Always work on the `development` branch. Do NOT create new branches or pull requests without explicit user consent.

- Commit and push changes directly to `development` unless instructed otherwise
- Only create feature branches when the user specifically asks for them
- Only open pull requests when the user explicitly requests it
- to memorize
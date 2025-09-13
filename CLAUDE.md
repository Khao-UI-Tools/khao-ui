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

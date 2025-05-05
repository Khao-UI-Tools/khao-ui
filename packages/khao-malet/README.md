# Khao Malet Design System

![Khao Malet](https://bilder.koch-reis.de/logo/khao-malet.jpg "Khao Malet")

## About the Name

"Malet Khao" (เมล็ดข้าว) is Thai and means "grain(s) of rice". As this design system is the base of my component library [Khao UI](https://github.com/Der-Reiskoch/khao-ui) i used the thai name in reverse order.

## System

Visually, the Khao Malet system follows the current design of [Der Reiskoch](https://www.der-reiskoch.de/).  
The design system is based on [Material 3](https://m3.material.io/).

### Design tokens

Token naming is based on [Material Web](https://material-web.dev/).
All tokens are prefixed with `--khao-` to prevent naming clashes.

### Types of tokens

- Reference tokens
  - prefixed with `--khao-ref-`
  - only assigned to system tokens, never used in components directly
- System tokens
  - prefixed with `--khao-sys-`
- Component tokens
  - prefixed with `--khao-<component-name>-`, e.g. `--khao-button-`

Read more about [types of tokens](https://m3.material.io/foundations/design-tokens/how-to-read-tokens).

## Commands/Scripts

| Script                      | Description                                                 |
| --------------------------- | ----------------------------------------------------------- |
| `npm run storybook`         | Runs Storybook in Dev Mode                                  |
| `npm run storybook:build`   | Builds the storybook                                        |
| `npm run changeset:add`     | Adds a new changeset for tracking changes in the monorepo.  |
| `npm run changeset:version` | Creates a new version based on the current changesets.      |
| `npm run changeset:publish` | Publishes the versioned changesets to the package registry. |

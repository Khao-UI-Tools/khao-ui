# Khao UI & Khao Malet Monorepo

This is an UI Component Library based on lightweight Svelte Components which are provided as web-components.

![Khao UI](packages/khao-ui/logo.jpg "Khao UI")

## About the names

"Khao" (ข้าว) is the Thai name for rice. Just as rice is the basis of many Asian dishes, this component library will be the new basis for my blogs [Der Reiskoch](https://www.der-reiskoch.de/), [ahaan-thai.de](https://www.ahaan-thai.de/) and other upcoming projects.

"Malet Khao" (เมล็ดข้าว) is Thai and means "grain(s) of rice". As this design system is the base of my component library [Khao UI](https://github.com/Der-Reiskoch/khao-ui) i used the thai name in reverse order.

## Styling

The UI Components are styled with css-custom-properties that are provided by the [Khao Malet](https://khao-ui-tools.github.io/khao-malet/) design system.
You can easyily style them by overwritng the css-custom-properties.

## Commands/Scripts

The following scripts are available at the root of the monorepo:

| Script                      | Description                                                 |
| --------------------------- | ----------------------------------------------------------- |
| `npm run jest`              | Runs Jest Test                                              |
| `npm run storybook:dev`     | Runs Storybook in Dev Mode                                  |
| `npm run storybook:build`   | Builds the Storybook for static hosting.                    |
| `npm run changeset:add`     | Adds a new changeset for tracking changes in the monorepo.  |
| `npm run changeset:version` | Creates a new version based on the current changesets.      |
| `npm run changeset:publish` | Publishes the versioned changesets to the package registry. |

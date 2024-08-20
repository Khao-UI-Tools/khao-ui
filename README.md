# Khao UI

An UI Component Library based on Svelte Components that are provided as web-components.

![Khao UI](https://bilder.koch-reis.de/logo/khao-ui.jpg "Khao UI")

## About the Name

"Khao" (ข้าว) is the Thai name for rice. Just as rice is the basis of many Asian dishes, this component library will be the new basis for my blogs [Der Reiskoch](https://www.der-reiskoch.de/), [ahaan-thai.de](https://www.ahaan-thai.de/) and other projects.

## Styling

The UI Components are styled with css-custom-properties that are provided by the [Khao Malet](https://www.npmjs.com/package/@der-reiskoch/khao-malet) design system.
You can easyily style them by overwritng the css-custom-properties.

## Build

The Build creates a single JavaScript File, a CSS file and needed Font Files.

```bash
npm run build
```

## Include the components

To use the Khao UI components in your project, you have to include the JavaScript and Css file from the `/dist/components` folder

Perhaps you have to configure your bundler/build tool to be able to use resources from the `node_modules` folder.
Or you can copy the files into another folder which is managed by your build tool.

```html
<link
  rel="stylesheet"
  href="node_modules/@der-reiskoch/khao-ui/dist/css/khao-ui-vx.x.x.css"
/>
<script
  type="module"
  src="node_modules/@der-reiskoch/khao-ui/dist/js/khao-ui-vx.x.x.js"
></script>
```

## Usage

After you included the components into your project you can use them easily.

```html
<khao-button
  label="Secondary Button"
  priority="secondary"
  href="/go-somewhere"
></khao-button>
```

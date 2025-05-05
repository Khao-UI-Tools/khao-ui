# Khao UI

This is an UI Component Library based on lightweight Svelte Components which are provided as web-components.

![Khao UI](https://bilder.koch-reis.de/logo/khao-ui.jpg "Khao UI")

## About the Name

"Khao" (ข้าว) is the Thai name for rice. Just as rice is the basis of many Asian dishes, this component library will be the new basis for my blogs [Der Reiskoch](https://www.der-reiskoch.de/), [ahaan-thai.de](https://www.ahaan-thai.de/) and other upcoming projects.

## Styling

The UI Components are styled with css-custom-properties that are provided by the "Khao Malet" design system.
You can easyily style them by overwriting the css-custom-properties.

## Build

The Build creates a single JavaScript File for every component, a CSS file and needed Font Files.

```bash
npm run build
```

## Include the components

Install the library in your project

```bash
npm install @der-reiskoch/khao-ui
```

### Include into your document

To use a Khao UI component directly in yout HTML document, you have to include the style and icon component before the spefic JavaScript file from the `/dist/components` folder

```html
<link
  rel="stylesheet"
  href="node_modules/@der-reiskoch/khao-ui/dist/css/khao-ui.css"
/>
<script
  type="module"
  src="node_modules/@der-reiskoch/khao-ui/dist/js/khao-ui-icon.js"
></script>
<script
  type="module"
  src="node_modules/@der-reiskoch/khao-ui/dist/js/khao-ui-button.js"
></script>
```

### Using a bundler or build tool

If you use a bundler like `vite`, `parcel` or `webpack` or another build tool you can also concatenate multiple components into one JavaScript file.
Perhaps you have to configure your bundler to be able to use resources from the `node_modules` folder.
Or you can copy the files into another folder which is managed by your build tool.

## Usage

After you included the components into your project you can use them easily.

```html
<khao-button
  label="Secondary Button"
  priority="secondary"
  href="/go-somewhere"
></khao-button>
```

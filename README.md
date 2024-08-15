# Khao UI

An UI Component Library based on Svelte Components that are provided as web-components.

![Khao UI](https://bilder.koch-reis.de/logo/khao-ui.jpg "Khao UI")

## About the Name

"Khao" (ข้าว) is the Thai name for rice. Just as rice is the basis of many Asian dishes, this component library will be the new basis for my blogs [Der Reiskoch](https://www.der-reiskoch.de/), [ahaan-thai.de](https://www.ahaan-thai.de/) and other projects.

## Styling

The UI Components are styled with css-custom-properties that are provided by the [Khao Malet](https://www.npmjs.com/package/@der-reiskoch/khao-malet) design system.
You can easyily style them by overwritng the css-custom-properties.

## Build

There are two types of builds available for the Components.

### Library

To create a library that includes all components **and** the css with fonts from [Khao Malet](https://www.npmjs.com/package/@der-reiskoch/khao-malet) project perform

```bash
npm run build:lib
```

### Splitted Code

If you only need a subset of the components you can use the splitted code build.
To create a single JS File for every component and and index.js file (without any CSS and fonts!) perform

```bash
npm run build:split
```

## Include the components

Both artefacts resulting from the build process above are part of the published npm package.
Perhaps you have to configure your bundler/build tool to be able to use resources from the `node_modules` folder.
Or you can copy the files into another folder which is managed by your build tool.

### Include the library

To use the library in your project, you have to include the css and js artefacts from the `/dist/lib` folder.

```html
<link
  rel="stylesheet"
  href="node_modules/@der-reiskoch/khao-ui/dist/lib/stlye.css"
/>
<script
  type="module"
  src="node_modules/@der-reiskoch/khao-ui/dist/lib/khao-ui.js"
></script>
```

### Include single components

To use single components in your project, you have to include the desired components and the index-vx.x.x.js file from the `/dist/split/components` folder

```html
<script
  type="module"
  src="node_modules/@der-reiskoch/khao-ui/dist/split/components/index.js"
></script>
<script
  type="module"
  src="node_modules/@der-reiskoch/khao-ui/dist/split/components/Button.js"
></script>
<script
  type="module"
  src="node_modules/@der-reiskoch/khao-ui/dist/split/components/MarkerPin.js"
></script>
```

#### Providing Styles

Futhermore you have to include css that is provided by the [Khao Malet](https://www.npmjs.com/package/@der-reiskoch/khao-malet) package.
That package is a peer dependency of this project and is also available in your project if you installed Khao UI.

```html
<link
  rel="stylesheet"
  href="node_modules/@der-reiskoch/khao-malet/css/index.css"
/>
```

Or you set all the needed css-custom-properties for the components in your own css.

## Usage

After you included the components into your project you can use them easily.

```html
<khao-button
  label="Secondary Button"
  priority="secondary"
  href="/go-somewhere"
></khao-button>
```

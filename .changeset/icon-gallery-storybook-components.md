---
"@der-reiskoch/khao-ui": patch
---

Refactor icon library documentation to use Storybook's IconGallery components

Replaced custom HTML/CSS grid with Storybook's built-in `IconGallery` and `IconItem` components in the icon library documentation page. This provides:

- More maintainable and standardized icon documentation
- Consistent styling with Storybook's design system
- Better responsive grid layout

The icons are displayed using the native IconGallery grid with optimized sizing (sizeFactor="8") for better visibility.

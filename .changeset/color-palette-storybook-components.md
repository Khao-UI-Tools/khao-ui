---
"@der-reiskoch/khao-ui": patch
---

Refactor color palette documentation to use Storybook's ColorPalette components

Replaced custom HTML/CSS color display  with Storybook's built-in `ColorPalette` and `ColorItem` components in the color palette documentation page. This provides:

- More maintainable and standardized color documentation
- Consistent styling with Storybook's design system
- Better accessibility and responsive design
- Clearer organization with descriptive titles and subtitles for each color group

The colors are displayed using CSS variables, allowing dynamic computation of color values including those using `color-mix()` functions.

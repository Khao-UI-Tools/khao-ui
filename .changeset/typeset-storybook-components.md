---
"@der-reiskoch/khao-ui": patch
---

Refactor font documentation to use Storybook's Typeset components

Replaced custom HTML/CSS typography display with Storybook's built-in `Typeset` components in the Fonts & Font Sizes documentation page. This provides:

- More maintainable and standardized typography documentation
- Consistent styling with Storybook's design system
- Better visual presentation of font scales
- Reduced code from ~327 lines to ~60 lines by removing all custom CSS
- Clearer organization by font families (Title/Montserrat and Body/Ubuntu)

The typography is displayed using Storybook's native Typeset component with proper font families, weights, and size scales.

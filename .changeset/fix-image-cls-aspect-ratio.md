---
"@der-reiskoch/khao-ui": patch
---

Add aspect-ratio to khao-image to prevent Cumulative Layout Shift (CLS)

The khao-image component now uses CSS aspect-ratio to reserve space before images load, eliminating layout shift. The aspect-ratio is calculated dynamically from the width and height props via a CSS custom property, with a fallback of 4/3.

Changes:
- Added aspect-ratio CSS property to the picture element
- Picture element now uses display: block for proper layout
- Image element now uses display: block for consistency
- Aspect ratio calculated from width/height attributes: --khao-image-aspect-ratio: {width}/{height}

This fix significantly improves Core Web Vitals scores by preventing content from shifting when images load.

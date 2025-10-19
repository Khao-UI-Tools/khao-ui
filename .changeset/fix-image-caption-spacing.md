---
"@der-reiskoch/khao-ui": patch
---

Fix khao-image caption spacing

Fixed the caption spacing in khao-image component which was previously set to 0, causing captions to appear directly against the image with no gap.

Changes:
- Changed --khao-image-caption-spacing from var(--khao-sys-size-regular-0) to var(--khao-sys-size-regular-2)
- Captions now have proper visual separation from images
- Spacing is based on the design system's regular spacing scale

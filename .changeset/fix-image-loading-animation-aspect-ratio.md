---
"@der-reiskoch/khao-ui": patch
---

Enhance khao-image loading animation and add smooth fade-in transition

The loading animation in khao-image now properly works with the aspect-ratio container, and images smoothly fade in when loaded for a polished user experience.

Changes:
- Loading shimmer effect properly displays within the aspect-ratio container
- Added smooth 0.3s fade-in transition when images finish loading
- Images start with opacity 0 and transition to opacity 1 when loaded
- "loaded" class is applied dynamically when image load completes

This enhancement works in conjunction with the aspect-ratio fix (#131) to ensure a completely stable layout with a smooth, professional loading experience.

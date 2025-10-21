---
"@der-reiskoch/khao-ui": patch
---

Fix khao-image shimmer animation to travel across full width

Fixed the loading shimmer animation in khao-image component to properly travel across the entire width of the image instead of just moving 40px.

Changes:
- Shimmer pseudo-element now starts at left: -150% (off-screen)
- Width increased to 150% to cover the entire image
- Animation uses transform: translateX(300%) to move across full width
- Uses only transform (not background-position) to avoid CLS issues per #137
- Animation duration set to 1.5s with ease-in-out timing
- Explicit 0% and 100% keyframes ensure proper looping

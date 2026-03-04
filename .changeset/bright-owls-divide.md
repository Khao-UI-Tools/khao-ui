---
"@der-reiskoch/khao-ui": patch
---

Fix Storybook/Svelte warnings caused by non-reactive prop default references in multiple components.

The update replaces cross-prop defaults with derived values and adjusts image loading state initialization to avoid Svelte `state_referenced_locally` warnings during check/build.

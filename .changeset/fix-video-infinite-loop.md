---
"@der-reiskoch/khao-ui": patch
---

Fix critical infinite loop bug in Video component causing browser crashes

The Video component had an infinite reactivity loop from the Svelte 5 migration. The issue was caused by calling setEmbeddedUrl() at the top level (which re-runs on every prop change) and also inside a $effect(), creating an endless cycle of updates.

Fixed by replacing the imperative approach with Svelte 5's declarative $derived.by() for computing the embeddedUrl from reactive props. This eliminates the infinite loop and ensures the component works correctly in both Storybook and production applications.

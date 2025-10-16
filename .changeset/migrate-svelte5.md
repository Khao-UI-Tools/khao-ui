---
"@der-reiskoch/khao-ui": minor
---

Migrate all components to Svelte 5 syntax

All 22 components have been migrated from Svelte 4 to Svelte 5 syntax:
- Props now use $props() rune with TypeScript types
- Event handlers updated from on:event to onevent attributes
- Reactive statements converted to $derived() and $effect() runes
- Added $state() for reactive local state management
- Used $bindable() for two-way binding props

This migration enables the component library to leverage Svelte 5's improved reactivity system and performance optimizations.

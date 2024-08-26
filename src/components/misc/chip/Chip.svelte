<svelte:options customElement="khao-chip" />

<script lang="ts">
  import { type ChipFilling, chipFillingDefault } from "./types/ChipFilling";
  import { type ChipType, chipTypeDefault } from "./types/ChipType";

  export let href: string = "";

  export let filling: ChipFilling = chipFillingDefault;
  export let type: ChipType = chipTypeDefault;

  export let title: string = "";
  export let ariaLabel: string = "";
</script>

<a
  class="chip chip-{filling} chip-type-{type}"
  {href}
  {title}
  aria-label={ariaLabel}
>
  <slot>Curry</slot>
</a>

<style>
  :host {
    --khao-chip-min-width: var(--khao-sys-size-regular-4);
    --khao-chip-height: var(--khao-sys-size-regular-3);
    --khao-chip-top-space: var(--khao-sys-size-regular-2);
    --khao-chip-trailing-space: var(--khao-sys-size-regular-3);
    --khao-chip-container-shape: var(--khao-sys-shape-corner-full);

    --khao-chip-outline: none;

    --khao-chip-font-size: var(--khao-sys-size-typography-6);
  }

  .chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--khao-chip-top-space) var(--khao-chip-trailing-space);
    margin: 0;
    min-width: var(--khao-chip-width);
    height: var(--khao-chip-height);

    font-size: var(--khao-chip-font-size);
    font-family: inherit;
    text-decoration: none;

    border-radius: var(--khao-chip-container-shape);
    outline: var(--khao-chip-outline);

    background-color: var(--khao-chip-container-color);
    color: var(--khao-chip-text-color);
  }

  .chip-surface {
    --khao-chip-container-color: var(--khao-sys-color-surface);
    --khao-chip-text-color: var(--khao-sys-color-on-surface);
  }

  .chip-surface-dark {
    --khao-chip-container-color: var(--khao-sys-color-surface-variantd30);
    --khao-chip-text-color: var(--khao-sys-color-on-surface-variantd30);
  }

  .chip-primary {
    --khao-chip-container-color: var(--khao-sys-color-primary);
    --khao-chip-text-color: var(--khao-sys-color-on-primary);
  }

  .chip-secondary {
    --khao-chip-container-color: var(--khao-sys-color-secondary);
    --khao-chip-text-color: var(--khao-sys-color-on-secondary);
  }

  .chip-tertiary {
    --khao-chip-container-color: var(--khao-sys-color-tertiary);
    --khao-chip-text-color: var(--khao-sys-color-on-tertiary);
  }

  .chip-success {
    --khao-chip-container-color: var(--khao-sys-static-color-green);
    --khao-chip-text-color: var(--khao-sys-static-color-on-green);
  }

  .chip-error {
    --khao-chip-container-color: var(--khao-sys-static-color-red);
    --khao-chip-text-color: var(--khao-sys-static-color-on-red);
  }

  .chip-type-filled {
    --khao-chip-outline: none;
  }

  .chip-type-outlined {
    --khao-chip-outline: 1px solid var(--khao-sys-color-neutral30);
  }
</style>

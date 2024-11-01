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
  <slot></slot>
</a>

<style>
  :host {
    --khao-chip-min-width: var(--khao-sys-size-regular-4);
    --khao-chip-height: var(--khao-sys-size-regular-3);
    --khao-chip-top-space: var(--khao-sys-size-regular-2);
    --khao-chip-trailing-space: var(--khao-sys-size-regular-3);
    --khao-chip-container-shape: var(--khao-sys-shape-corner-full);

    --khao-chip-outline: none;

    --khao-chip-font-size: var(--khao-sys-size-typography-2);

    --khao-chip-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );

    --khao-chip-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );

    --khao-chip-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );
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

    transition:
      background-color 0.1s,
      color 0.2s;

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-chip-container-color),
        var(--khao-chip-state-layer-color)
          var(--khao-chip-hover-state-layer-opacity)
      );
    }

    &:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-chip-container-color),
        var(--khao-chip-state-layer-color)
          var(--khao-chip-focus-state-layer-opacity)
      );
      outline-offset: 2px;
      outline: 2px solid
        color-mix(
          in srgb,
          var(--khao-chip-container-color),
          var(--khao-chip-state-layer-color)
            var(--khao-chip-focus-state-layer-opacity)
        );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--khao-chip-container-color),
        var(--khao-chip-state-layer-color)
          var(--khao-chip-pressed-state-layer-opacity)
      );
    }
  }

  .chip-primary {
    --khao-chip-container-color: var(--khao-sys-color-primary);
    --khao-chip-outline: 1px solid var(--khao-sys-color-primary);
    --khao-chip-text-color: var(--khao-sys-color-on-primary);
    --khao-chip-state-layer-color: var(--khao-sys-color-on-primary);
  }

  .chip-secondary {
    --khao-chip-container-color: var(--khao-sys-color-secondary);
    --khao-chip-outline: 1px solid var(--khao-sys-color-secondary);
    --khao-chip-text-color: var(--khao-sys-color-on-secondary);
    --khao-chip-state-layer-color: var(--khao-sys-color-on-secondary);
  }

  .chip-tertiary {
    --khao-chip-container-color: var(--khao-sys-color-tertiary);
    --khao-chip-outline: 1px solid var(--khao-sys-color-tertiary);
    --khao-chip-text-color: var(--khao-sys-color-on-tertiary);
    --khao-chip-state-layer-color: var(--khao-sys-color-on-tertiary);
  }

  .chip-success {
    --khao-chip-container-color: var(--khao-sys-static-color-success);
    --khao-chip-outline: 1px solid var(--khao-sys-static-color-success);
    --khao-chip-text-color: var(--khao-sys-static-color-on-success);
    --khao-chip-state-layer-color: var(--khao-sys-static-color-on-success);
  }

  .chip-error {
    --khao-chip-container-color: var(--khao-sys-static-color-error);
    --khao-chip-outline: 1px solid var(--khao-sys-static-color-error);
    --khao-chip-text-color: var(--khao-sys-static-color-on-error);
    --khao-chip-state-layer-color: var(--khao-sys-static-color-on-error);
  }

  .chip-type-filled {
    --khao-chip-outline: none;
  }

  .chip-type-outlined {
    --khao-chip-container-color: var(--khao-sys-color-surface);
    --khao-chip-text-color: var(--khao-sys-color-on-surface);
    --khao-chip-outline: 1px solid var(--khao-sys-color-outline);

    &:hover {
      --khao-chip-container-color: var(--khao-sys-color-primary);
      --khao-chip-text-color: var(--khao-sys-color-on-primary);
      --khao-chip-state-layer-color: var(--khao-sys-color-surface);
    }

    &:focus-visible {
      --khao-chip-container-color: var(--khao-sys-color-primary);
      --khao-chip-text-color: var(--khao-sys-color-on-primary);
      --khao-chip-state-layer-color: var(--khao-sys-color-surface);
      --khao-chip-outline: 2px solid var(--khao-sys-color-outline);
    }

    &:active {
      --khao-chip-container-color: var(--khao-sys-color-primary);
      --khao-chip-text-color: var(--khao-sys-color-on-primary);
      --khao-chip-state-layer-color: var(--khao-sys-color-surface);
    }
  }
</style>

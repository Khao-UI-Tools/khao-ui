<svelte:options customElement="khao-button" />

<script lang="ts">
  type ButtonPriority = "primary" | "secondary" | "tertiary";

  export let label: string;
  export let title: string;
  export let href: string;
  export let prioritry: ButtonPriority = "primary";
  export let icon: string = "";
</script>

<a class="button button-{prioritry}" {title} {href}>
  {label}
  {#if icon !== ""}
  
  
  {/if}
</a>

<style>
  @import "reset.css";

  :host {
    --khao-button-container-color: var(--khao-sys-color-container);
    --khao-button-label-text-color: var(--khao-sys-color-on-container);
    --khao-button-state-layer-color: var(--khao-sys-color-on-container);

    --khao-button-label-font-weight: var(
      --khao-sys-typescale-label-medium-weight-prominent
    );

    --khao-button-height: var(--khao-sys-size-regular-10);
    --khao-button-container-shape: var(--khao-sys-shape-corner-medium);

    --khao-button-leading-space: var(--khao-sys-size-regular-5);
    --khao-button-trailing-space: var(--khao-sys-size-regular-5);

    --khao-button-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );

    --khao-button-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );

    --khao-button-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );
  }

  a.button {
    text-decoration: none;
  }

  .button {
    display: inline-flex;
    color: var(--khao-button-label-text-color);
    background-color: var(--khao-button-container-color);
    min-width: 150px;
    height: var(--khao-button-height, 40px);
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    border-radius: var(--khao-button-container-shape);
    font-weight: var(--khao-button-label-font-weight);
    cursor: pointer;
    padding: 0.2rem;
    padding-inline-start: var(--khao-button-leading-space);
    padding-inline-end: var(--khao-button-trailing-space);
    transition:
      background-color 0.1s,
      color 0.2s;

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-hover-state-layer-opacity)
      );
    }

    &:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-focus-state-layer-opacity)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-pressed-state-layer-opacity)
      );
    }
  }

  .button-primary {
    --khao-button-container-color: var(--khao-sys-color-primary);
    --khao-button-label-text-color: var(--khao-sys-color-on-primary);
    --khao-button-state-layer-color: var(--khao-sys-color-on-primary);
  }

  .button-secondary {
    --khao-button-container-color: var(--khao-sys-color-secondary);
    --khao-button-label-text-color: var(--khao-sys-color-on-secondary);
    --khao-button-state-layer-color: var(--khao-sys-color-on-secondary);
  }

  .button-tertiary {
    --khao-button-container-color: var(--khao-sys-color-tertiary);
    --khao-button-label-text-color: var(--khao-sys-color-on-tertiary);
    --khao-button-state-layer-color: var(--khao-sys-color-on-tertiary);
  }
</style>

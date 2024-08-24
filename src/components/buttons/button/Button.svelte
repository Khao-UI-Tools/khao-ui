<svelte:options customElement="khao-button" />

<script lang="ts">
  import {
    type ButtonPriority,
    buttonPriorityDefault,
  } from "../types/ButtonPriority";
  import { type ButtonSize, buttonSizeDefault } from "../types/ButtonSize";
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";

  function setCustomStyles(customBGColor: string, customColor: string): string {
    var customStyles =
      customBGColor !== "" && customColor !== ""
        ? `--khao-button-container-color:${customBGColor}; --khao-button-label-text-color:${customColor}; --khao-button-icon-color: ${customColor}; --khao-button-state-layer-color: ${customColor}`
        : "";

    return customStyles;
  }

  function setRole(href: string | null, onClick: (() => void) | null): string {
    return href === null && onClick !== null ? "button" : "";
  }

  export let label: string;
  export let title: string = label;

  export let href: string | null = null;
  export let rel: string | null = null;
  export let target: string | null = null;

  export let priority: ButtonPriority = buttonPriorityDefault;
  export let size: ButtonSize = buttonSizeDefault;

  export let customBGColor: string = "";
  export let customColor: string = "";

  export let iconName: IconName | "" = "";

  export let onClick: (() => void) | null = null;
</script>

<a
  class="button button-{priority} button-size-{size}"
  {title}
  {href}
  {target}
  {rel}
  style={setCustomStyles(customBGColor, customColor)}
  role={setRole(href, onClick)}
  on:click={onClick}
>
  {label}
  {#if iconName !== ""}
    <Icon {iconName} sizeFactor="5" />
  {/if}
</a>

<style>
  @import "../reset.css";

  :host {
    --khao-button-container-color: var(--khao-sys-color-container);
    --khao-button-label-text-color: var(--khao-sys-color-on-container);
    --khao-button-state-layer-color: var(--khao-sys-color-on-container);

    --khao-button-label-font-weight: var(
      --khao-sys-typescale-label-medium-weight-prominent
    );

    --khao-button-container-shape: var(--khao-sys-shape-corner-medium);

    --khao-button-leading-space: var(--khao-sys-size-regular-5);
    --khao-button-trailing-space: var(--khao-sys-size-regular-5);

    --khao-button-icon-leading-space: var(--khao-sys-size-regular-2);

    --khao-button-height-compact: var(--khao-sys-size-regular-8);
    --khao-button-width-compact: 80px;

    --khao-button-height-medium: var(--khao-sys-size-regular-10);
    --khao-button-width-medium: 150px;

    --khao-button-height-large: var(--khao-sys-size-regular-12);
    --khao-button-width-large: 180px;

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
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    border-radius: var(--khao-button-container-shape);
    font-weight: var(--khao-button-label-font-weight);
    cursor: pointer;
    padding-inline-start: var(--khao-button-leading-space);
    padding-inline-end: var(--khao-button-trailing-space);
    gap: var(--khao-button-icon-leading-space);
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

  .button-size-compact {
    min-width: var(--khao-button-width-compact);
    height: var(--khao-button-height-compact);
  }

  .button-size-medium {
    min-width: var(--khao-button-width-medium);
    height: var(--khao-button-height-medium);
  }

  .button-size-large {
    min-width: var(--khao-button-width-large);
    height: var(--khao-button-height-large);
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

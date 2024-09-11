<svelte:options customElement="khao-icon-button" />

<script lang="ts">
  import { type ButtonPriority } from "../types/ButtonPriority";
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";
  import {
    isTrue,
    type StringBoolean,
  } from "../../../common/types/StringBoolean";
  import { buttonSizeDefault, type ButtonSize } from "../types/ButtonSize";

  function setCustomStyles(
    customBGColor: string,
    customColor: string,
    customHoverColor: string
  ): string {
    var customStyles =
      customBGColor !== "" && customColor !== ""
        ? `--khao-icon-button-container-color:${customBGColor}; --khao-icon-button-label-text-color:${customColor}; --khao-icon-button-icon-color: ${customColor}; --khao-icon-button-state-layer-color: ${customColor}`
        : "";

    if (customHoverColor) {
      customStyles += `; --khao-icon-button-container-custom-hover-color: ${customHoverColor}`;
    }

    return customStyles;
  }

  function setRole(href: string | null, onClick: (() => void) | null): string {
    return href === null && onClick !== null ? "button" : "";
  }

  export let title: string = "";

  export let href: string | null = null;
  export let rel: string | null = null;
  export let target: string | null = null;

  export let priority: ButtonPriority = "primary";
  export let size: ButtonSize = buttonSizeDefault;

  export let customBGColor: string = "";
  export let customColor: string = "";
  export let customHoverColor: string = "";

  export let iconName: IconName | "" = "";

  export let circle: StringBoolean = "false";

  export let onClick: (() => void) | null = null;
</script>

<a
  class="button button-{priority} button-size-{size} {isTrue(circle)
    ? 'button-circle'
    : ''} {customHoverColor ? 'button-custom-hover' : ''}"
  {title}
  {href}
  {target}
  {rel}
  style={setCustomStyles(customBGColor, customColor, customHoverColor)}
  role={setRole(href, onClick)}
  on:click={onClick}
>
  {#if iconName !== ""}
    <Icon {iconName} sizeFactor="9" />
  {/if}
</a>

<style>
  @import "../reset.css";

  :host {
    --khao-icon-button-container-color: var(--khao-sys-color-container);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-container);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-container);

    --khao-icon-button-size-compact: var(--khao-sys-size-regular-10);
    --khao-icon-button-size-medium: var(--khao-sys-size-regular-12);
    --khao-icon-button-size-large: var(--khao-sys-size-regular-14);

    --khao-icon-button-spacing: var(--khao-sys-size-regular-1);

    --khao-icon-button-container-shape: var(--khao-sys-shape-corner-small);

    --khao-icon-button-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );

    --khao-icon-button-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );

    --khao-icon-button-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );
  }

  a.button {
    text-decoration: none;
  }

  .button {
    display: inline-flex;
    color: var(--khao-icon-button-label-text-color);
    background-color: var(--khao-icon-button-container-color);
    align-items: center;
    justify-content: center;
    padding: var(--khao-icon-button-spacing);
    border-radius: var(--khao-icon-button-container-shape);
    cursor: pointer;

    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-icon-button-container-color),
        var(--khao-icon-button-state-layer-color)
          var(--khao-icon-button-hover-state-layer-opacity)
      );
    }

    &:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-icon-button-container-color),
        var(--khao-icon-button-state-layer-color)
          var(--khao-icon-button-focus-state-layer-opacity)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--khao-icon-button-container-color),
        var(--khao-icon-button-state-layer-color)
          var(--khao-icon-button-pressed-state-layer-opacity)
      );
    }
  }

  .button-primary {
    --khao-icon-button-container-color: var(--khao-sys-color-primary);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-primary);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-primary);
  }

  .button-secondary {
    --khao-icon-button-container-color: var(--khao-sys-color-secondary);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-secondary);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-secondary);
  }

  .button-tertiary {
    --khao-icon-button-container-color: var(--khao-sys-color-tertiary);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-tertiary);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-tertiary);
  }

  .button-size-compact {
    width: var(--khao-icon-button-size-compact);
    height: var(--khao-icon-button-size-compact);
  }

  .button-size-medium {
    width: var(--khao-icon-button-size-medium);
    height: var(--khao-icon-button-size-medium);
  }

  .button-size-large {
    width: var(--khao-icon-button-size-large);
    height: var(--khao-icon-button-size-large);
  }

  .button-circle {
    --khao-icon-button-container-shape: var(--khao-sys-shape-corner-full);
  }

  .button-custom-hover {
    &:hover {
      background-color: var(--khao-icon-button-container-custom-hover-color);
    }
  }
</style>

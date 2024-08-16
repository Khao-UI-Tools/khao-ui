<svelte:options customElement="khao-icon-button" />

<script lang="ts">
    import { type ButtonPriority } from "./types/ButtonPriority";
    import Icon from "../icons/Icon.svelte";
    import { type IconName } from "../icons/IconName";
  
    function setCustomStyles(customBGColor: string, customColor: string): string {
    var customStyles =
      customBGColor !== "" && customColor !== ""
        ? `--khao-icon-button-container-color:${customBGColor}; --khao-icon-button-label-text-color:${customColor}; --khao-icon-button-icon-color: ${customColor}; --khao-icon-button-state-layer-color: ${customColor}`
        : "";

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

    export let customBGColor: string = "";
    export let customColor: string = "";
  
    export let iconName: IconName | "" = "";
  
    export let onClick: (() => void) | null = null;
</script>


<a
  class="button button-{priority}"
  {title}
  {href}
  {target}
  {rel}
  style={setCustomStyles(customBGColor, customColor)}
  role={setRole(href, onClick)}
  on:click={onClick}
>
  {#if iconName !== ""}
    <div class="icon">
      <Icon {iconName} />
    </div>
  {/if}
</a>


<style>
  @import "reset.css";

  :host {
    --khao-icon-button-container-color: var(--khao-sys-color-container);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-container);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-container);

    --khao-icon-button-size: var(--khao-sys-size-regular-14);
    --khao-icon-button-container-shape: var(--khao-sys-shape-corner-none);

    --khao-icon-button-icon-size: var(--khao-sys-size-regular-9);
    --khao-icon-button-icon-color: var(--khao-sys-color-on-container);
    --khao-icon-button-icon-leading-space: var(--khao-sys-size-regular-2);

    --khao-icon-button-width: 150px;

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
    width: var(--khao-icon-button-size);
    height: var(--khao-icon-button-size);
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    border-radius: var(--khao-icon-button-container-shape);
    font-weight: var(--khao-icon-button-label-font-weight);
    cursor: pointer;
    padding: 0.2rem;

    gap: var(--khao-icon-button-icon-leading-space);
    transition:
      background-color 0.1s,
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
    --khao-icon-button-icon-color: var(--khao-sys-color-on-primary);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-primary);
  }

  .button-secondary {
    --khao-icon-button-container-color: var(--khao-sys-color-secondary);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-secondary);
    --khao-icon-button-icon-color: var(--khao-sys-color-on-secondary);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-secondary);
  }

  .button-tertiary {
    --khao-icon-button-container-color: var(--khao-sys-color-tertiary);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-tertiary);
    --khao-icon-button-icon-color: var(--khao-sys-color-on-tertiary);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-tertiary);
  }

  .icon {
    stroke: var(--khao-icon-button-icon-color);
    fill: var(--khao-icon-button-icon-color);
    width: var(--khao-icon-button-icon-size);
    height: var(--khao-icon-button-icon-size);
  }
</style>
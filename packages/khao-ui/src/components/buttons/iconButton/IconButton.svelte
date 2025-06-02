<svelte:options customElement="khao-icon-button" />

<script lang="ts">
  import { type ButtonPriority } from "../types/ButtonPriority";
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";
  import { type StringBoolean } from "../../../common/types/StringBoolean";
  import { type ButtonSize } from "../types/ButtonSize";

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

  function setRole(
    href: string | null,
    onClick: ((event: MouseEvent) => void) | null
  ): string {
    return href === null && onClick !== null ? "button" : "";
  }

  interface Props {
    title?: string;
    href?: string | null;
    rel?: string | null;
    target?: string | null;
    priority?: ButtonPriority | "none";
    size?: ButtonSize | "tiny";
    customBGColor?: string;
    customColor?: string;
    customHoverColor?: string;
    iconName?: IconName | "";
    circle?: StringBoolean;
    onClick?: ((event: MouseEvent) => void) | null;
  }

  let {
    title = "",
    href = null,
    rel = null,
    target = null,
    priority = "primary",
    size = "medium",
    customBGColor = "",
    customColor = "",
    customHoverColor = "",
    iconName = "",
    circle = "false",
    onClick = null,
  }: Props = $props();
</script>

<a
  class="button button-{priority} button-size-{size} {circle === 'true'
    ? 'button-circle'
    : ''} {customHoverColor ? 'button-custom-hover' : ''}"
  {title}
  href={onClick === null ? href : "javascript:void();"}
  {target}
  {rel}
  style={setCustomStyles(customBGColor, customColor, customHoverColor)}
  role={setRole(href, onClick)}
  onclick={onClick}
>
  {#if iconName !== ""}
    <Icon {iconName} sizeFactor="9" />
  {/if}
</a>

<style>
  @import "../reset.css";

  :host {
    --khao-icon-button-container-color: var(--khao-sys-color-primary);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-primary);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-primary);

    --khao-icon-button-size-tiny: var(--khao-sys-size-regular-6);
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

      outline-offset: 2px;
      outline: 2px solid
        color-mix(
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

  .button-secondary {
    --khao-icon-button-container-color: var(--khao-sys-color-secondary);
    --khao-icon-button-label-text-color: var(--khao-sys-color-static-white);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-secondary);
  }

  .button-tertiary {
    --khao-icon-button-container-color: var(--khao-sys-color-tertiary);
    --khao-icon-button-label-text-color: var(--khao-sys-color-on-tertiary);
    --khao-icon-button-state-layer-color: var(--khao-sys-color-on-tertiary);
  }

  .button-none {
    --khao-icon-button-container-color: transparent;
    --khao-icon-button-label-text-color: var(
      --khao-sys-color-on-surface-container
    );
    --khao-icon-button-state-layer-color: var(
      --khao-sys-color-on-surface-container
    );
  }

  .button-size-tiny {
    width: var(--khao-icon-button-size-tiny);
    height: var(--khao-icon-button-size-tiny);
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

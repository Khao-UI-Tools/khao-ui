<svelte:options customElement="khao-link" />

<script lang="ts">
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";
  import {
    type IconLocation,
    iconLocationDefault,
  } from "./types/LinkIconLocation";
  import { linkPriorityDefault, type LinkPriority } from "./types/LinkPriority";
  import type { IconOpacity } from "../../../icons/types/IconOpacity";
  import type { IconSizeFactor } from "../../../icons/types/IconSizeFactor";
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  const openInNewWindow = (
    url: string,
    width: number = 700,
    height: number = 650
  ) => {
    const windowFeatures = `left=100,top=100,width=${width},height=${height}}`;
    window.open(url, "new", windowFeatures);
  };

  let {
    label = "",
    title = "",
    href = "",
    rel = null,
    target = null,
    iconName = "" as IconName | "",
    iconLocation = iconLocationDefault,
    iconOpacity = "80%" as IconOpacity,
    iconEnlarged = "false" as StringBoolean,
    opensNewWindow = "false",
    priority = linkPriorityDefault
  }: {
    label?: string;
    title?: string;
    href?: string;
    rel?: string | null;
    target?: string | null;
    iconName?: IconName | "";
    iconLocation?: IconLocation;
    iconOpacity?: IconOpacity;
    iconEnlarged?: StringBoolean;
    opensNewWindow?: string;
    priority?: LinkPriority
  } = $props();

  const onClick = (event: MouseEvent) => {
    if (href !== "" && opensNewWindow === "true") {
      event.preventDefault();
      event.stopPropagation();
      openInNewWindow(href);
    }
  };

  let iconSizeFactor = $derived<IconSizeFactor>(iconEnlarged === "true" ? "5" : "4");

  let additonalClasses = $derived(() => {
    let classes = "";
    if (priority === "primary") {
      classes += " link-primary";
    } else if (priority === "secondary") {
      classes += " link-secondary";
    } else if (priority === "secondary-emphasized") {
      classes += " link-secondary-emphasized";
    }

    if (iconName !== "" && iconLocation === "after") {
      classes += " link-with-icon-after";
    } else if (iconName !== "" && iconLocation === "before") {
      classes += " link-with-icon-before";
    }
    return classes;
  });
</script>

<a
  class="link {additonalClasses}"
  {href}
  {title}
  {rel}
  {target}
  onclick={onClick}
>
  {#if iconName !== ""}
    <div
      class="icon"
      aria-hidden="true"
      style="--khao-link-icon-size: var(--khao-sys-size-regular-{iconSizeFactor +
        2});"
    >
      <Icon {iconName} sizeFactor={iconSizeFactor} opacity={iconOpacity} />
    </div>
  {/if}

  {#if label !== ""}
    {label}
  {:else}
    <slot>Link</slot>
  {/if}
</a>

<style>
  :host {
    --khao-link-icon-size: var(--khao-sys-size-regular-6);
    --khao-link-icon-space: var(--khao-sys-size-regular-1);
    --khao-link-space-to-next-char: 0;
  }

  .link {
    display: inline-flex;
    align-items: center;
    color: currentColor;
    word-wrap: break-word;
    cursor: pointer;
    vertical-align: baseline;
    text-underline-offset: var(--khao-sys-size-regular-1);

    &:focus-visible {
      outline: 2px solid color-mix(in srgb, currentColor, transparent 50%);
      outline-offset: 0;
      text-decoration: none;
      padding: var(--khao-sys-size-regular-1);
      height: var(--khao-sys-size-regular-4);
      border-radius: var(--khao-sys-shape-corner-small);
      backdrop-filter: saturate(80%);
    }
  }

  .link-primary {
    text-decoration: underline;
  }

  .link-secondary,
  .link-secondary-emphasized {
    text-decoration: none;
  }

  .link-with-icon-after {
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: var(--khao-link-icon-space);
    margin-right: var(--khao-link-space-to-next-char);
  }

  .link-with-icon-before {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: var(--khao-link-icon-space);
    margin-right: 0;
    margin-left: var(--khao-link-space-to-next-char);
  }

  .link-primary:hover {
    text-decoration-thickness: 2px;
  }

  .link-primary:not(:is(:hover, :focus)) {
    text-decoration-color: color-mix(in srgb, currentColor, transparent 50%);
  }

  .link-secondary:hover,
  .link-secondary-emphasized:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  .link-secondary:focus-visible {
    text-decoration: none;
  }

  .link-secondary-emphasized {
    font-weight: 600;
  }

  .icon {
    display: inline-flex;
    margin-right: calc(var(--khao-link-icon-space) * 0.5);
    color: color-mix(in srgb, currentColor, transparent 10%);
    width: var(--khao-link-icon-size);
    height: var(--khao-link-icon-size);
  }
</style>

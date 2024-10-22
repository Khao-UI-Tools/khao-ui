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

  const openInNewWindow = (
    url: string,
    width: number = 700,
    height: number = 650
  ) => {
    const windowFeatures = `left=100,top=100,width=${width},height=${height}}`;
    window.open(url, "new", windowFeatures);
  };

  const onClick = (event: MouseEvent) => {
    if (href !== "" && opensNewWindow === "true") {
      event.preventDefault();
      event.stopPropagation();
      openInNewWindow(href);
    }
  };

  export let title: string = "";
  export let href: string = "";
  export let rel: string | null = null;
  export let target: string | null = null;
  export let iconName: IconName | "" = "";
  export let iconLocation: IconLocation = iconLocationDefault;
  export let iconOpacity: IconOpacity = "80%";
  export let opensNewWindow: string = "false";
  export let priority: LinkPriority = linkPriorityDefault;
</script>

<a
  class="link {priority === 'primary'
    ? 'link-primary'
    : 'link-secondary'} {iconName !== ''
    ? iconLocation === 'after'
      ? 'link-with-icon-after'
      : 'link-with-icon-before'
    : ''} "
  {href}
  {title}
  {rel}
  {target}
  on:click={onClick}
>
  <slot>Empty Link</slot>
  {#if iconName !== ""}
    <span class="icon" aria-hidden="true">
      <Icon {iconName} sizeFactor="4" opacity={iconOpacity} />
    </span>
  {/if}
</a>

<style>
  :host {
    --khao-link-icon-size: var(--khao-sys-size-regular-4);
    --khao-link-icon-space: var(--khao-sys-size-regular-1);
  }

  .link {
    color: currentColor;
    word-wrap: break-word;
    cursor: pointer;
    vertical-align: baseline;
    text-underline-offset: var(--khao-sys-size-regular-1);
  }

  .link-primary {
    text-decoration: underline;
  }

  .link-secondary {
    text-decoration: none;
  }

  .link-with-icon-after {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: var(--khao-link-icon-space);
  }

  .link-with-icon-before {
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: var(--khao-link-icon-space);
    margin-right: 0;
    margin-left: var(--khao-link-space-to-next-char);
  }

  .link-primary:hover,
  .link-primary:focus {
    text-decoration-thickness: 2px;
  }

  .link-secondary:hover,
  .link-secondary:focus {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  .icon {
    margin-bottom: var(--khao-link-icon-space);
    margin-right: calc(var(--khao-link-icon-space) * 0.5);
  }
</style>

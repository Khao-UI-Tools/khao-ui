<svelte:options customElement="khao-tab" />

<script lang="ts">
  import {
    isTrue,
    type StringBoolean,
  } from "../../../common/types/StringBoolean";
  import { tabSizeDefault, type TabSize } from "./types/TabSize";

  export let href: string = "";
  export let title: string = "";
  export let active: StringBoolean = "false";
  export let size: TabSize = tabSizeDefault;
</script>

<li
  class="tab {isTrue(active) ? 'tab-active' : ''} tab-size-{size}"
  role="tab"
  aria-selected={isTrue(active) ? "true" : "false"}
>
  <a {href} {title} class="link {isTrue(active) ? 'link-active' : ''}">
    <slot>Tab</slot>
  </a>
</li>

<style>
  :host {
    --khao-tab-text-size: var(--khao-sys-size-typography-7);

    --khao-tab-leading-space: var(--khao-sys-size-regular-4);
    --khao-tab-trailing-space: var(--khao-sys-size-regular-4);

    --khao-tab-height: var(--khao-sys-size-regular-6);

    --khao-tab-width: var(--khao-sys-size-regular10);
    --khao-tab-container-shape: var(--khao-sys-shape-corner-small);

    --khao-tab-active-height: var(--khao-sys-size-regular-7);

    --khao-tab-text-color: var(--khao-sys-color-neutral30);
    --khao-tab-state-layer-color: var(--khao-sys-color-neutral50);
    --khao-tab-border-color: var(--khao-sys-color-secondary);

    --khao-tab-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );

    --khao-tab-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );

    --khao-tab-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );
  }

  .tab {
    list-style-type: none;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
    padding-inline-start: var(--khao-tab-leading-space);
    padding-inline-end: var(--khao-tab-trailing-space);
    min-width: var(--khao-tab-width);
    height: var(--khao-tab-height);
    font-size: var(--khao-tab-text-size);
    border: 1px solid var(--khao-tab-border-color);
    border-bottom: none;
    border-top-left-radius: var(--khao-tab-container-shape);
    border-top-right-radius: var(--khao-tab-container-shape);

    &:hover {
      text-decoration: none !important;
      color: color-mix(
        in srgb,
        var(--khao-tab-text-color),
        var(--khao-tab-layer-color) var(--khao-tab-hover-state-layer-opacity)
      );
    }
  }

  .tab-active {
    border-bottom: 3px solid var(--khao-tab-border-color);
    margin-bottom: -3px;
    height: var(--khao-tab-active-height);
  }

  .tab-size-compact {
    --khao-tab-leading-space: var(--khao-sys-size-regular-4);
    --khao-tab-trailing-space: var(--khao-sys-size-regular-4);
  }

  .tab-size-medium {
    --khao-tab-leading-space: var(--khao-sys-size-regular-6);
    --khao-tab-trailing-space: var(--khao-sys-size-regular-6);
  }

  .tab-size-large {
    --khao-tab-leading-space: var(--khao-sys-size-regular-8);
    --khao-tab-trailing-space: var(--khao-sys-size-regular-8);
  }

  .link {
    font-weight: 400;
    color: var(--khao-tab-text-color);
    white-space: nowrap;
    text-decoration: none;
    width: 100%;

    &:hover {
      text-decoration: none !important;
      color: color-mix(
        in srgb,
        var(--khao-tab-text-color),
        var(--khao-tab-layer-color) var(--khao-tab-hover-state-layer-opacity)
      );
    }

    &:focus {
      color: color-mix(
        in srgb,
        var(--khao-tab-text-color),
        var(--khao-tab-layer-color) var(--khao-tab-focus-state-layer-opacity)
      );
      background-color: color-mix(
        in srgb,
        var(--khao-tab-text-color),
        var(--khao-tab-layer-color) var(--khao-tab-focus-state-layer-opacity)
      );
      font-weight: 800;
    }
  }

  .link-active {
    font-weight: 700;

    &:hover {
      color: inherit;
      font-weight: 700;
    }
  }
</style>

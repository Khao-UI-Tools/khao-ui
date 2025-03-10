<svelte:options customElement="khao-tab" />

<script lang="ts">
  import Breakpoint from "../../../common/utils/Breakpoint";

  import { type StringBoolean } from "../../../common/types/StringBoolean";
  import { type TabSize } from "../types/TabSize";

  export let label: string = "";
  export let href: string = "";
  export let title: string = "";
  export let active: StringBoolean = "false";
  export let size: TabSize = Breakpoint.isPhone() ? "compact" : "medium";
  export let key: string = "";
</script>

<li
  class="tab {active === 'true' ? 'tab-active' : ''} tab-size-{size}"
  role="tab"
  data-key={key}
  aria-selected={active === "true" ? "true" : "false"}
>
  <a {href} {title} class="link {active === 'true' ? 'link-active' : ''}">
    {label}
  </a>
</li>

<style>
  :host {
    --khao-tab-text-size: var(--khao-sys-size-typography-3);

    --khao-tab-leading-space: var(--khao-sys-size-regular-2);
    --khao-tab-trailing-space: var(--khao-sys-size-regular-2);

    --khao-tab-height: var(--khao-sys-size-regular-6);

    --khao-tab-width: var(--khao-sys-size-regular-8);
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
    align-items: center;
    background-color: var(--khao-sys-color-surface-variantd10);
    border-bottom-width: 2px;
    border-top-left-radius: var(--khao-tab-container-shape);
    border-top-right-radius: var(--khao-tab-container-shape);
    border: 1px solid var(--khao-tab-border-color);
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 0 0 auto;
    font-size: var(--khao-tab-text-size);
    height: var(--khao-tab-height);
    justify-content: center;
    list-style-type: none;
    padding: 0.1rem var(--khao-tab-leading-space) 0.1rem
      var(--khao-tab-trailing-space);
    text-align: center;
    width: var(--khao-tab-width);

    &:hover {
      text-decoration: none !important;
      background-color: var(--khao-sys-color-outline);
    }

    &:focus-within {
      text-decoration: none !important;
      background-color: var(--khao-sys-color-outline);
    }
  }

  .tab-active {
    border-bottom: none;
    height: var(--khao-tab-active-height);
    background-color: transparent;
  }

  .tab-size-flex {
    --khao-tab-width: 100%;
  }

  .tab-size-compact {
    --khao-tab-width: 32px;
  }

  .tab-size-medium {
    --khao-tab-width: 64px;
  }

  .tab-size-large {
    --khao-tab-width: 96px;
  }

  .link {
    font-weight: 400;
    color: var(--khao-tab-text-color);
    white-space: nowrap;
    text-decoration: none;
    min-width: 3rem;
    overflow-x: hidden;
    text-overflow: ellipsis;
    margin: 0 0.4rem;

    &:hover {
      text-decoration: none !important;

      color: color-mix(
        in srgb,
        var(--khao-tab-text-color),
        var(--khao-tab-layer-color) var(--khao-tab-hover-state-layer-opacity)
      );
    }

    &:focus-visible {
      outline: none;
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

<svelte:options customElement="khao-pagination-item" />

<script lang="ts">
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  export let label: string = "";
  export let href: string = "";
  export let title: string = "";
  export let active: StringBoolean = "false";
  export let disabled: StringBoolean = "false";

  let displayLabel: string = label;
  if (label.length > 0 && label.length < 4) {
    displayLabel = label;
  } else {
    displayLabel = "#val";
  }
</script>

{#if disabled === "false"}
  <li class="pagination-item pagination-item-enabled" aria-current={active}>
    <a {href} {title} class="link">
      {displayLabel}
    </a>
  </li>
{:else}
  <li class="pagination-item">
    <span class="link link-disabled">
      {displayLabel}
    </span>
  </li>{/if}

<style>
  :host {
    --khao-pagination-item-text-size: var(--khao-sys-size-typography-4);

    --khao-pagination-item-witdth: var(--khao-sys-size-regular-9);
    --khao-pagination-item-height: var(--khao-sys-size-regular-7);

    --khao-pagination-item-container-shape: var(--khao-sys-shape-corner-small);
    --khao-pagination-item-border-color: var(--khao-sys-color-secondary);

    --khao-pagination-item-text-color: var(--khao-sys-color-neutral30);

    --khao-pagination-item-avtive-bg-color: var(--khao-sys-color-secondary);

    --khao-pagination-item-state-layer-color: var(
      --khao-sys-color-secondary-container
    );

    --khao-pagination-item-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );

    --khao-pagination-item-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );

    --khao-pagination-item-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );
  }

  .pagination-item {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    flex: 0 0 auto;
    align-items: center;
    font-size: var(--khao-pagination-item-text-size);

    height: var(--khao-pagination-item-height);
    width: var(--khao-pagination-item-witdth);
    border: 1px solid var(--khao-pagination-item-border-color);
    border-radius: var(--khao-pagination-item-container-shape);
    user-select: none;
    cursor: pointer;
  }

  .pagination-item-enabled {
    &:hover {
      text-decoration: none !important;
      background-color: color-mix(
        in srgb,
        var(--khao-pagination-item-state-layer-color),
        var(--khao-pagination-item-state-layer-color)
          var(--khao-pagination-item-hover-state-layer-opacity)
      );
    }

    &:focus-within {
      text-decoration: none !important;
      background-color: color-mix(
        in srgb,
        var(--khao-pagination-item-state-layer-color),
        var(--khao-pagination-item-state-layer-color)
          var(--khao-pagination-item-focus-state-layer-opacity)
      );
      outline: 2px solid var(--khao-pagination-item-state-layer-color);
      outline-offset: 2px;
    }
  }

  .pagination-item[aria-current="true"] {
    background-color: var(--khao-pagination-item-avtive-bg-color);
    border: 1px solid var(--khao-pagination-item-avtive-bg-color);

    &:hover {
      text-decoration: none !important;
      background-color: color-mix( 
        in srgb,
        var(--khao-pagination-item-state-layer-color),
        var(--khao-pagination-item-avtive-bg-color)
          var(--khao-pagination-item-hover-state-layer-opacity)
      );
    }
  }

  .link {
    font-weight: 400;
    color: var(--khao-pagination-item-text-color);
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;

    &:hover {
      text-decoration: none !important;
    }

    &:focus-visible {
      outline: none;
    }
  }

  .pagination-item[aria-current="true"] .link {
    font-weight: 800;
  }

  .link-disabled {
    color: var(--khao-sys-color-neutral10);
    cursor: not-allowed;
  }
</style>

<svelte:options customElement="khao-timeline-item" />

<script lang="ts">
  import {
    isTrue,
    type StringBoolean,
  } from "../../../common/types/StringBoolean";
  import {
    timelineItemSizeDefault,
    type TimelineItemSize,
  } from "../types/timelineItemSize";

  export let href: string = "";
  export let title: string = "";
  export let active: StringBoolean = "false";
  export let size: TimelineItemSize = timelineItemSizeDefault;
</script>

<li class="item item-{size}">
  <a {href} {title} class="link {isTrue(active) ? 'link-active' : ''}">
    <slot>Item</slot>
  </a>
</li>

<style>
  :host {
    --khao-timeline-item-text-size: var(--khao-sys-size-typography-7);

    --khao-timeline-item-text-color: var(--khao-sys-color-neutral30);
    --khao-timeline-item-state-layer-color: var(--khao-sys-color-neutral50);

    --khao-timeline-element-color: var(--khao-sys-color-secondary);

    --khao-timeline-item-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );

    --khao-timeline-item-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );

    --khao-timeline-item-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );
  }

  .item {
    list-style-type: none;
    margin: 2px 2px 10px 5px;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    font-size: var(--khao-timeline-item-text-size);
    border: 1px solid gold;
  }

  .item::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    border-right: 1px solid var(--khao-timeline-element-color);
    width: 15px;
    height: 8px;
    transform: translate(-110%, -250%);
  }

  .item-medium {
    max-width: 20px;
    height: 15px;
  }

  .item-large {
    max-width: 120px;
    height: 15px;
  }

  .link {
    font-weight: 400;
    color: var(--khao-timeline-item-text-color);
    white-space: nowrap;
    text-decoration: none;

    &:hover {
      text-decoration: none !important;
      color: color-mix(
        in srgb,
        var(--khao-timeline-item-text-color),
        var(--khao-timeline-item-layer-color)
          var(--khao-timeline-item-hover-state-layer-opacity)
      );
    }

    &:focus {
      color: color-mix(
        in srgb,
        var(--khao-timeline-item-text-color),
        var(--khao-timeline-item-layer-color)
          var(--khao-timeline-item-focus-state-layer-opacity)
      );
      background-color: color-mix(
        in srgb,
        var(--khao-timeline-item-text-color),
        var(--khao-timeline-item-layer-color)
          var(--khao-timeline-item-focus-state-layer-opacity)
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

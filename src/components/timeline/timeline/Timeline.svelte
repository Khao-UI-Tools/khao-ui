<svelte:options customElement="khao-timeline" />

<script lang="ts">
  import {
    timelineSizeDefault,
    type TimelineSize,
  } from "../types/timelineSize";

  export let size: TimelineSize = timelineSizeDefault;
</script>

<div class="wrapper" role="navigation">
  <ul class="timeline timeline-{size}" role="tablist">
    <slot></slot>
  </ul>
</div>

<style>
  :host {
    --khao-timeline-element-color: var(--khao-sys-color-secondary);
  }

  .wrapper {
    display: block;
    width: 100%;
    max-width: 830px;
    border-top: 1px solid var(--khao-timeline-element-color);
  }

  /*@container (max-width: 1100px) {
    .wrapper {
      overflow-x: auto;
      scrollbar-width: none;
    }

    .wrapper::-webkit-scrollbar {
      display: none;
    }
  }

  @container (max-width: 1024) {
    .wrapper {
      margin-left: auto;
      margin-right: auto;
      overflow-x: auto;
    }
  }*/

  .timeline {
    margin: 10px 0 0 0 !important;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
    flex-wrap: nowrap;
    width: 100%;
  }

  .timeline-medium {
    justify-content: start;
  }

  .timeline-large {
    justify-content: space-between;
  }
</style>

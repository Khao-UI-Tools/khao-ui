<svelte:options customElement="khao-badge" />

<script lang="ts">
  import type { BagdePriority } from "./types/BadgePriority";

  let {
    mainLabel = "",
    secondaryLabel = "",
    priority = "primary" as BagdePriority
  }: {
    mainLabel?: string;
    secondaryLabel?: string;
    priority?: BagdePriority
  } = $props();
</script>

<div class="container container-{priority}">
  <div class="badge">
    <span class="main-label">{mainLabel}</span>
    <span>{secondaryLabel}</span>
  </div>
</div>

<style>
  :host {
    --khao-badge-container-color: var(--khao-sys-color-surface-container);
    --khao-badge-text-color: var(--khao-sys-color-on-surface-container);
    --khao-bagde-rotation: -45deg;
  }

  .container,
  .container:before,
  .container:after,
  .container .badge {
    height: 5em;
    width: 5em;
    background-color: var(--khao-badge-container-color) !important;
    color: var(--khao-badge-text-color) !important;
  }

  .container:before,
  .container:after {
    content: "";
    position: absolute;
  }

  .container {
    user-select: none;
    position: relative;
    left: 0x;
    top: 0px;
    box-shadow:
      0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transform-origin: center;
    transition: 0.3s all ease-out;
  }

  .container:before {
    top: 0;
    left: 0;
    transform: rotate(22.5deg);
    z-index: 1;
  }

  .container:after {
    top: 0;
    left: 0;
    transform: rotate(-45deg);
    box-shadow:
      0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .container .badge {
    padding: 1em 0em;
    height: 3em;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(-22.5deg);
    z-index: 1;
  }

  .container .badge span {
    position: relative;
    z-index: 100;
    display: block;
    text-align: center;
    font-size: 1.2rem;
  }

  .container .badge span.main-label {
    font-weight: bold;
    font-size: 1.625em;
    line-height: 0.9em;
  }

  .container-primary {
    --khao-badge-container-color: var(--khao-sys-color-primary);
    --khao-badge-text-color: var(--khao-sys-color-on-primary);
  }

  .container-secondary {
    --khao-badge-container-color: var(--khao-sys-color-secondary);
    --khao-badge-text-color: var(--khao-sys-color-on-secondary);
  }

  .container-tertiary {
    --khao-badge-container-color: var(--khao-sys-color-tertiary);
    --khao-badge-text-color: var(--khao-sys-color-on-tertiary);
  }
</style>

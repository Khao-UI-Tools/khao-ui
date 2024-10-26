<svelte:options customElement="khao-card" />

<script lang="ts">
  import { type CardFilling, cardFillingDefault } from "../types/CardFilling";
  import { type CardType, cardTypeDefault } from "../types/CardType";
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";
  export let filling: CardFilling = cardFillingDefault;
  export let type: CardType = cardTypeDefault;
  export let title: string = "";
  export let iconName: IconName | "" = "";

  export let ariaLabel: string = "";
</script>

<div class="card card-{filling} card-type-{type}" aria-label={ariaLabel}>
  {#if title !== ""}
    <div class="title">{title}</div>
  {/if}

  <div class="content">
    {#if iconName !== ""}
      <div class="icon-wrapper">
        <Icon {iconName} sizeFactor="7" />
      </div>
    {/if}
    <slot></slot>
  </div>
</div>

<style>
  :host {
    --khao-card-width: 600px;
    --khao-card-min-height: 100px;
    --khao-card-top-space: var(--khao-sys-size-regular-4);
    --khao-card-trailing-space: var(--khao-sys-size-regular-6);
    --khao-card-container-shape: var(--khao-sys-shape-corner-small);

    --khao-card-elevation-level: 1;
    --khao-card-elevation-level-shadow: none;
    --khao-card-outline: none;

    --khao-card-title-size: var(--khao-sys-size-typography-5);
    --khao-card-title-font: var(--khao-sys-typescale-body-font);
    --khao-card-title-space: var(--khao-sys-size-regular-2);

    --khao-card-icon-size: var(--khao-sys-size-regular-7);
    --khao-card-icon-space: var(--khao-sys-size-regular-2);
  }

  .card {
    box-sizing: border-box;
    display: block;
    padding: var(--khao-card-top-space) var(--khao-card-trailing-space);
    margin: 0 auto 0 auto;
    width: 100%;
    max-width: var(--khao-card-width);
    min-height: var(--khao-card-min-height);
    line-height: 1.5rem;

    font-family: inherit;

    border-radius: var(--khao-card-container-shape);
    box-shadow: var(--khao-card-elevation-level-shadow);
    z-index: var(--khao-card-elevation-level);
    outline: var(--khao-card-outline);

    background-color: var(--khao-card-container-color);
    color: var(--khao-card-text-color);
  }

  .title {
    font-family: var(--khao-card-title-font);
    font-size: var(--khao-card-title-size);
    font-weight: 800;
    margin-bottom: var(--khao-card-title-space);
  }

  .content {
    line-height: var(--khao-card-icon-size);
  }

  .icon-wrapper {
    float: left;
    margin-right: var(--khao-card-icon-space);
    width: var(--khao-card-icon-size);
    height: var(--khao-card-icon-size);
  }

  .card-surface {
    --khao-card-container-color: var(--khao-sys-color-surface);
    --khao-card-text-color: var(--khao-sys-color-on-surface);
  }

  .card-surface-dark {
    --khao-card-container-color: var(--khao-sys-color-surface-variantd30);
    --khao-card-text-color: var(--khao-sys-color-on-surface-variantd30);
  }

  .card-primary {
    --khao-card-container-color: var(--khao-sys-color-primary);
    --khao-card-text-color: var(--khao-sys-color-on-primary);
  }

  .card-secondary {
    --khao-card-container-color: var(--khao-sys-color-secondary);
    --khao-card-text-color: var(--khao-sys-color-on-secondary);
  }

  .card-tertiary {
    --khao-card-container-color: var(--khao-sys-color-tertiary);
    --khao-card-text-color: var(--khao-sys-color-on-tertiary);
  }

  .card-success {
    --khao-card-container-color: var(--khao-sys-static-color-green);
    --khao-card-text-color: var(--khao-sys-static-color-on-green);
  }

  .card-error {
    --khao-card-container-color: var(--khao-sys-static-color-red);
    --khao-card-text-color: var(--khao-sys-static-color-on-red);
  }

  .card-type-elevated {
    --khao-card-elevation-level: var(--khao-sys-elevation-level1-distance);
    --khao-card-elevation-level-shadow: var(--khao-sys-elevation-level1-shadow);
    --khao-card-outline: none;
  }

  .card-type-filled {
    --khao-card-elevation-level: none;
    --khao-card-elevation-level-shadow: none;
    --khao-card-outline: none;
  }

  .card-type-outlined {
    --khao-card-elevation-level: none;
    --khao-card-elevation-level-shadow: none;
    --khao-card-outline: 1px solid var(--khao-sys-color-neutral30);
  }
</style>

<svelte:options customElement="khao-content-with-icon" />

<script lang="ts">
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";
  import {
    type IconSizeFactor,
    iconSizeFactorDefault,
  } from "../../../icons/types/IconSizeFactor";
  import {
    type IconOpacity,
    iconOpacityDefault,
  } from "../../../icons/types/IconOpacity";

  let {
    iconName,
    iconSizeFactor = iconSizeFactorDefault,
    iconOpacity = iconOpacityDefault
  }: {
    iconName: IconName;
    iconSizeFactor?: IconSizeFactor;
    iconOpacity?: IconOpacity
  } = $props();
</script>

<div class="content-with-icon">
  <span class="icon"
    ><Icon {iconName} sizeFactor={iconSizeFactor} opacity={iconOpacity}
    ></Icon></span
  >
  <slot></slot>
</div>

<style>
  :host {
    --khao-content-with-icon-space: var(--khao-sys-size-regular-1);
  }

  .icon {
    margin-bottom: calc(var(--khao-sys-size-regular-1) * 0.5);
  }

  .content-with-icon {
    display: flex;
    align-items: center;
    gap: var(--khao-content-with-icon-space);
  }
</style>

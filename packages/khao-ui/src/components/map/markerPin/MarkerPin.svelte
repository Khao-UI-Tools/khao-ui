<svelte:options customElement="khao-map-marker-pin" />

<script lang="ts">
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";

  let { color, iconName }: { color: string; iconName: IconName } = $props();
</script>

<!--icons from https://fonts.google.com/icons -->
<div style="background-color: {color}" class="pin">
  <span class="icon">
    <Icon {iconName} sizeFactor="5" />
  </span>
</div>

<style>
  :host {
    display: block;
    --khao-marker-pin-icon-color: var(--khao-sys-static-color-black);
    --khao-marker-pin-icon-bgcolor: var(--khao-sys-static-color-white);
    --khao-marker-pin-icon-offset-y: 0.3rem;
    --khao-marker-pin-icon-offset-x: 0.4rem;
  }

  .pin {
    width: 32px;
    height: 32px;
    border-radius: 50% 50% 50% 0;
    position: relative;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
  }

  .pin::before {
    content: "";
    width: 26px;
    height: 26px;
    margin: 3px 0 0 3px;
    position: absolute;
    background: var(--khao-marker-pin-icon-bgcolor);
    color: var(--khao-marker-pin-icon-color);
    border-radius: 50%;
  }

  .icon {
    position: absolute;
    top: var(--khao-marker-pin-icon-offset-y);
    left: var(--khao-marker-pin-icon-offset-x);
    transform: rotate(45deg);
    text-align: center;
  }
</style>

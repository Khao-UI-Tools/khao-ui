<svelte:options customElement="khao-map-marker-pin" />

<script lang="ts">
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";

  export let color: string;
  export let iconName: IconName;
</script>

<!--icons from https://fonts.google.com/icons -->
<div style="background-color: {color}" class="pin">
  <span class="icon">
    <Icon iconName={iconName} sizeFactor="5"/>
  </span>
</div>

<style>
  :host {
    display: block;
    --khao-marker-pin-icon-color: var(--khao-sys-static-color-black);
    --khao-marker-pin-icon-bgcolor: var(--khao-sys-static-color-white);
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
    top: 0.3rem;
    left: 0.4rem;
    transform: rotate(45deg);
    text-align: center;
  }
</style>

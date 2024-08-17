<svelte:options customElement="khao-map-marker-pin" />

<script lang="ts">
  import Icon from "../../icons/Icon.svelte";
  import { type IconName } from "../../icons/IconName";

  export let color: string;
  export let iconName: IconName;
</script>

<!--icons from https://fonts.google.com/icons -->
<div style="background-color: {color}" class="pin">
  <span class="icon">
    <Icon iconName={iconName}></Icon>
  </span>
</div>

<style>
  :host {
    display: block;
    --khao-marker-pin-icon-color: var(--khao-sys-static-color-black);
    --khao-marker-pin-icon-bgcolor: var(--khao-sys-static-color-white);
  }

  .pin {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    position: relative;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
  }

  .pin::before {
    content: "";
    width: 24px;
    height: 24px;
    margin: 3px 0 0 3px;
    position: absolute;
    background: var(--khao-marker-pin-icon-bgcolor);
    border-radius: 50%;
  }

  .icon {
    position: absolute;
    width: 18px;
    height: 18px;
    stroke: var(--khao-marker-pin-icon-color);
    fill: var(--khao-marker-pin-icon-colo);
    top: 0.4rem;
    left: 0.4rem;
    transform: rotate(45deg);
    text-align: center;
  }
</style>

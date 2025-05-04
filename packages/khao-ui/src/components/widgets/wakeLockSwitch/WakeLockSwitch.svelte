<svelte:options customElement="khao-wake-lock-switch" />

<script lang="ts">
  import { type StringBoolean } from "../../../common/types/StringBoolean";
  import Card from "../../cards/card/Card.svelte";
  import SwitchButton from "../../forms/switchbutton/SwitchButton.svelte";

  import {
    requestWakeLock,
    releaseWakeLock,
    isWakeLockSupported,
  } from "./utils/requestWakeLock";

  interface Props {
    label: string;
    description: string;
  }

  let { label, description }: Props = $props();

  function onChange(value: StringBoolean) {
    if (value === "true") {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }
  }
</script>

<div class="container">
  {#if isWakeLockSupported()}
    <Card filling="surface-low">
      <SwitchButton {label} {onChange}></SwitchButton>
      <p>{description}</p>
    </Card>
  {/if}
</div>

<style>
  .container {
    margin: 0 auto;
  }
</style>

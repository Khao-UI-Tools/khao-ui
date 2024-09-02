<svelte:options customElement="khao-tabs-bar" />

<script lang="ts">
  import { onMount } from "svelte";
  import scrollActiveTabIntoView from "./utils/scrollActiveTabIntoView";
  import Tab from "../tab/Tab.svelte";

  let wrapper: HTMLElement;
  let bar: HTMLElement;

  onMount(() => {
    scrollActiveTabIntoView(wrapper);
  });
</script>

<div class="wrapper" bind:this={wrapper}>
  <ul class="tabs-bar" role="tablist" bind:this={bar}>
    <slot>bar</slot>
  </ul>
</div>

<template>
  <Tab>Preload Tab</Tab>
</template>

<style>
  :host {
    --khao-tabs-bar-border-color: var(--khao-sys-color-secondary);
    --khao-tabs-bar-height: var(--khao-sys-size-regular-9);
  }

  .wrapper {
    display: inline-flex;
    width: 100%;

    height: var(--khao-tabs-bar-height);
    overflow-x: scroll;
    scrollbar-width: none;
  }

  .wrapper::-webkit-scrollbar {
    display: none;
  }

  .tabs-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: end;
    margin: 0 0 3px 0;
    padding: 0;
    border-bottom: 1px solid var(--khao-tabs-bar-border-color);
  }
</style>

<svelte:options customElement="khao-tab-bar" />

<script lang="ts">
  import { onMount } from "svelte";
  import Tab from "../tab/Tab.svelte";
  import scrollActiveTabIntoView from "./scrollActiveTabIntoView";

  let wrapper: HTMLElement;

  onMount(() => {
    scrollActiveTabIntoView(wrapper);
  });

  export let tabs: string = "";
  export let activeTabKey: string = "";

  $: () => {
    console.log("33", activeTabKey);
  };
</script>

<div class="wrapper" bind:this={wrapper}>
  <ul class="tab-bar" role="tablist">
    {#if tabs}
      {#each JSON.parse(tabs) as { label, key, href, title, size }}
        <Tab
          {key}
          {href}
          {title}
          active={activeTabKey === key ? "true" : "false"}
          {size}>{label}</Tab
        >
      {/each}
    {/if}
  </ul>
</div>

<style>
  :host {
    --khao-tab-bar-height: var(--khao-sys-size-regular-9);
  }

  .wrapper {
    display: inline-flex;
    width: 100%;
    height: var(--khao-tab-bar-height);
    overflow-x: scroll;
    scrollbar-width: none;
  }

  .wrapper::-webkit-scrollbar {
    display: none;
  }

  .tab-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: end;
    margin: 0 0 3px 0;
    padding: 0;
  }
</style>

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
  export let maxWidth: string = "860px";

  $: () => {
    console.log("33", activeTabKey);
  };
</script>

<div class="wrapper" bind:this={wrapper} style="max-width: {maxWidth}">
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
    width: 100%;
    height: var(--khao-tab-bar-height);
    border: 1px solid green;
  }

  @media screen and (max-width: 1100px) {
    .wrapper {
      overflow-x: auto;
      scrollbar-width: none;
    }

    .wrapper::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    .wrapper {
      margin-left: auto;
      margin-right: auto;
      overflow-x: auto;
    }
  }

  .tab-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: end;
    margin: 0;
    padding: 0;
  }
</style>

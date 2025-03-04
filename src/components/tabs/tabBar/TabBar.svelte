<svelte:options customElement="khao-tab-bar" />

<script lang="ts">
  import { onMount } from "svelte";
  import Tab from "../tab/Tab.svelte";
  import scrollActiveTabIntoView from "./utils/scrollActiveTabIntoView";
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  let tabBar: HTMLElement;

  onMount(() => {
    scrollActiveTabIntoView(tabBar);
  });

  export let tabs: string = "";
  export let activeTabKey: string = "";
  export let maxWidth: string = "860px";
  export let centered: StringBoolean = "false";
  export let scrollShadow: StringBoolean = "false";
</script>

<ul
  class="tab-bar {centered === 'true'
    ? 'tab-bar-centered'
    : ''} {scrollShadow === 'true' ? 'container-scroll-shadow' : ''}"
  role="tablist"
  bind:this={tabBar}
  style="max-width: {maxWidth}"
>
  {#if tabs}
    {#each JSON.parse(tabs) as { label, key, href, title, size }}
      <Tab
        {key}
        {label}
        {href}
        {title}
        active={activeTabKey === key ? "true" : "false"}
        {size}
      ></Tab>
    {/each}
  {/if}
</ul>

<style>
  :host {
    --khao-tab-bar-height: var(--khao-sys-size-regular-9);
  }

  .tab-bar {
    height: var(--khao-tab-bar-height);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: end;
    gap: 0;
    margin: 0;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 0 1px;
  }

  .tab-bar::-webkit-scrollbar {
    display: none;
  }

  .tab-bar-centered {
    margin-left: auto;
    margin-right: auto;
  }
</style>

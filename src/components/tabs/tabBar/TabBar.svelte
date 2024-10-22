<svelte:options customElement="khao-tab-bar" />

<script lang="ts">
  import { onMount } from "svelte";
  import Tab from "../tab/Tab.svelte";
  import scrollActiveTabIntoView from "./scrollActiveTabIntoView";
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  let wrapper: HTMLElement;

  onMount(() => {
    scrollActiveTabIntoView(wrapper);
  });

  export let tabs: string = "";
  export let activeTabKey: string = "";
  export let maxWidth: string = "860px";
  export let centered: StringBoolean = "false";
</script>

<div class="container">
  <div
    class="wrapper {centered === 'true' ? 'wrapper-centered' : ''}"
    bind:this={wrapper}
    style="max-width: {maxWidth}"
  >
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
</div>

<style>
  :host {
    --khao-tab-bar-height: var(--khao-sys-size-regular-9);
  }

  .container {
    width: 100%;
  }

  .wrapper {
    width: 100%;
    height: var(--khao-tab-bar-height);
    overflow-x: auto;
    scrollbar-width: none;
    padding: 0 1px;
  }

  .wrapper::-webkit-scrollbar {
    display: none;
  }

  .wrapper-centered {
    margin-left: auto;
    margin-right: auto;
  }

  .tab-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: end;
    margin: 0;
    padding: 0;
  }
</style>

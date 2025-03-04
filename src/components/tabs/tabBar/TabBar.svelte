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
    : ''} {scrollShadow === 'true' ? 'tab-bar-scroll-shadow' : ''}"
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

    --khao-tab-bar-bg-color: var(--khao-sys-color-background);
    --khao-tab-bar-scroll-shadow-color: rgba(98, 94, 94, 0.5);
    --khao-tab-bar-scroll-shadow-size: 1.5rem;
    --khao-tab-bar-scroll-shadow-transparent: rgba(255, 255, 255, 0);
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

  .tab-bar-scroll-shadow {
    overflow-x: scroll;

    background:
      linear-gradient(
        to right,
        var(--khao-tab-bar-bg-color),
        var(--khao-tab-bar-bg-color),
        var(--khao-tab-bar-scroll-shadow-transparent)
          calc(var(--khao-tab-bar-scroll-shadow-size) * 2)
      ),
      radial-gradient(
        farthest-side at left bottom,
        var(--khao-tab-bar-scroll-shadow-color),
        var(--khao-tab-bar-scroll-shadow-transparent)
      ),
      linear-gradient(
        to left,
        var(--khao-tab-bar-bg-color),
        var(--khao-tab-bar-bg-color),
        var(--khao-tab-bar-scroll-shadow-transparent)
          calc(var(--khao-tab-bar-scroll-shadow-size) * 2)
      ),
      radial-gradient(
        farthest-side at right bottom,
          var(--khao-tab-bar-scroll-shadow-color),
          var(--khao-tab-bar-scroll-shadow-transparent)
        )
        100%;
    background-color: var(--khao-tab-bar-bg-color);
    background-repeat: no-repeat;
    background-attachment: local, scroll, local, scroll;
    background-size:
      100% 100%,
      var(--khao-tab-bar-scroll-shadow-size) 100%,
      100% 100%,
      var(--khao-tab-bar-scroll-shadow-size) 100%;
    height: calc(var(--khao-tab-bar-height)-20px);
  }
</style>

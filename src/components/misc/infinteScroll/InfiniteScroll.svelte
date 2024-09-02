<svelte:options
  customElement={{
    tag: "khao-infinite-scroll",
    shadow: "none",
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  import initInfiniteSroll from "./utils/initInfiniteSroll";

  const loadedMoreEvent = new CustomEvent("khao-infinite-scroll-loaded-more", {
    bubbles: true,
  });

  const dispatchEvent = () => {
    window.dispatchEvent(loadedMoreEvent);
  };

  let scroller: HTMLElement;

  onMount(() => {
    initInfiniteSroll(scroller, querySelector, paginationSlug, dispatchEvent);
  });

  export let querySelector: string;
  export let paginationSlug: string;
</script>

<div bind:this={scroller} class="infinite-scroll"></div>

<style>
  .infinite-scroll {
    width: 100%;
    display: block;
    height: 2ren;
  }
</style>

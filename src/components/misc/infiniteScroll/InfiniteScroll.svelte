<svelte:options
  customElement={{
    tag: "khao-infinite-scroll",
    shadow: "open",
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  import { observeSrolledToBottom, loadMore } from "./utils/initInfiniteSroll";
  import Button from "../../buttons/button/Button.svelte";

  let showButton = false;

  const loadedMoreEvent = new CustomEvent("khao-infinite-scroll-loaded-more", {
    bubbles: true,
  });

  const handleScolledToBottom = () => {
    showButton = true;
  };

  const handleButtonClick = () => {
    loadMore(querySelector, paginationSlug, handleLoadedContent);
    showButton = false;
  };

  const handleLoadedContent = () => {
    showButton = false;
    window.dispatchEvent(loadedMoreEvent);
  };

  let scroller: HTMLElement;

  onMount(() => {
    observeSrolledToBottom(scroller, handleScolledToBottom);
  });

  export let querySelector: string;
  export let paginationSlug: string;
  export let buttonLabel: string;
</script>

<div bind:this={scroller} class="infinite-scroll">
  {#if showButton}
    <Button label={buttonLabel} onClick={handleButtonClick}></Button>
  {/if}
</div>

<style>
  .infinite-scroll {
    width: 100%;
    display: block;
    height: 2ren;
  }
</style>

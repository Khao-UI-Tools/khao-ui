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
  import Spinner from "../spinner/Spinner.svelte";
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  let {
    querySelector,
    paginationSlug,
    buttonLabel,
    numberOfPages = "1",
    showButtonOnFirstLoad = "true" as StringBoolean
  }: {
    querySelector: string;
    paginationSlug: string;
    buttonLabel: string;
    numberOfPages?: string;
    showButtonOnFirstLoad?: StringBoolean
  } = $props();

  let showButton = $state(false);
  let showSpinner = $state(false);
  let countPages = $state(1);

  const loadedMoreEvent = new CustomEvent("khao-infinite-scroll-loaded-more", {
    bubbles: true,
  });

  const handleScolledToBottom = () => {
    if (countPages < parseInt(numberOfPages, 10)) {
      showButton = true;
    }
  };

  const handleButtonClick = () => {
    loadMore(querySelector, paginationSlug, handleLoadedContent);
    showButton = false;
    showSpinner = true;

    countPages++;
  };

  const handleLoadedContent = () => {
    showButton = false;
    showSpinner = false;
    window.dispatchEvent(loadedMoreEvent);
  };

  let scroller: HTMLElement;

  onMount(() => {
    if (showButtonOnFirstLoad === "true") {
      showButton = true;
    }

    observeSrolledToBottom(scroller, handleScolledToBottom);
  });
</script>

<div bind:this={scroller} class="infinite-scroll">
  {#if showButton}
    <Button label={buttonLabel} onClick={handleButtonClick}></Button>
  {/if}
  {#if showSpinner}
    <Spinner />
  {/if}
</div>

<style>
  .infinite-scroll {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 2rem;
  }
</style>

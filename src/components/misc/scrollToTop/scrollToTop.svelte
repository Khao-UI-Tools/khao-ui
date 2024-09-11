<svelte:options
  customElement={{
    tag: "khao-scroll-to-top",
    shadow: "none",
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  import IconButton from "../../buttons/iconButton/IconButton.svelte";
  import scrollToTop from "./utils/scrollToTop";
  import {
    isTrue,
    type StringBoolean,
  } from "../../../common/types/StringBoolean";

  let wrapper: HTMLElement;

  const visibilityChangeEvent = new CustomEvent(
    "khao-scroll-to-top-visibility-change",
    {
      bubbles: true,
    }
  );

  onMount(() => {
    const threshold = parseInt(scrollThreshold, 10);

    document.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > threshold ||
        document.documentElement.scrollTop > threshold
      ) {
        if (!wrapper.classList.contains("scroll-to-top-visible")) {
          wrapper.classList.add("scroll-to-top-visible");
          window.dispatchEvent(visibilityChangeEvent);
        }
      } else {
        if (wrapper.classList.contains("scroll-to-top-visible")) {
          wrapper.classList.remove("scroll-to-top-visible");
          window.dispatchEvent(visibilityChangeEvent);
        }
      }
    });
  });

  export let title: string = "";
  export let scrollThreshold: string = "155";
  export let forceVisible: StringBoolean = "false";
</script>

<div
  bind:this={wrapper}
  class="scroll-to-top {isTrue(forceVisible) ? 'scroll-to-top-visible' : ''}"
>
  <khao-icon-button
    onClick={scrollToTop}
    {title}
    iconName="arrow-up"
    circle="true"
    size="medium"
  ></khao-icon-button>
</div>

<style>
  .scroll-to-top {
    position: fixed;
    bottom: 1.5rem;
    right: 1rem;
    height: var(--khao-sys-size-regular-14);
    width: var(--khao-sys-size-regular-14);
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s,
      opacity 0.5s linear;
    -webkit-tap-highlight-color: transparent;
    z-index: 10000;
  }

  .scroll-to-top-visible {
    visibility: visible;
    opacity: 0.8;
  }
</style>

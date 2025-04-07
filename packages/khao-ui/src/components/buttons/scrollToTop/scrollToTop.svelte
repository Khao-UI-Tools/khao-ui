<svelte:options customElement="khao-scroll-to-top" />

<script lang="ts">
  import { onMount } from "svelte";
  import IconButton from "../iconButton/IconButton.svelte";
  import scrollToTop from "./utils/scrollToTop";
  import { type StringBoolean } from "../../../common/types/StringBoolean";
  import { type ButtonSize } from "../types/ButtonSize";

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
        if (!wrapper.classList.contains("wrapper-visible")) {
          wrapper.classList.add("wrapper-visible");
          window.dispatchEvent(visibilityChangeEvent);
        }
      } else {
        if (wrapper.classList.contains("wrapper-visible")) {
          wrapper.classList.remove("wrapper-visible");
          window.dispatchEvent(visibilityChangeEvent);
        }
      }
    });
  });

  export let title: string = "";
  export let scrollThreshold: string = "155";
  export let forceVisible: StringBoolean = "false";
  export let size: ButtonSize = "medium";
</script>

<div
  bind:this={wrapper}
  class="wrapper wrapper-size-{size} {forceVisible === 'true'
    ? 'wrapper-visible'
    : ''}"
>
  <IconButton
    priority="primary"
    {title}
    iconName="arrow-up"
    circle="true"
    customColor="var(--khao-sys-static-color-white)"
    customBGColor="var(--khao-sys-color-primary)"
    {size}
    onClick={scrollToTop}
  />
</div>

<style>
  .wrapper {
    position: fixed;
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s,
      opacity 0.5s linear;
    -webkit-tap-highlight-color: transparent;
    z-index: 10000;
  }

  .wrapper-size-compact {
    bottom: 1.5rem;
    right: 0.7rem;
    height: var(--khao-sys-size-regular-10);
    width: var(--khao-sys-size-regular-10);
  }

  .wrapper-size-medium {
    bottom: 1.5rem;
    right: 1rem;
    height: var(--khao-sys-size-regular-12);
    width: var(--khao-sys-size-regular-12);
  }

  .wrapper-size-large {
    bottom: 1.5rem;
    right: 1.3rem;
    height: var(--khao-sys-size-regular-14);
    width: var(--khao-sys-size-regular-14);
  }

  .wrapper-visible {
    visibility: visible;
    opacity: 0.8;
  }
</style>

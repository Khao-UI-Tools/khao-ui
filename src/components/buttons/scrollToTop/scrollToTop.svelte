<svelte:options customElement="khao-scroll-to-top" />

<script lang="ts">
  import { onMount } from "svelte";
  import IconButton from "../iconButton/IconButton.svelte";
  import scrollToTop from "./utils/scrollToTop";
  import {
    isTrue,
    type StringBoolean,
  } from "../../../common/types/StringBoolean";
  import { type ButtonSize, buttonSizeDefault } from "../types/ButtonSize";

  let wrapper: HTMLElement;
  let button: IconButton;

  const visibilityChangeEvent = new CustomEvent(
    "khao-scroll-to-top-visibility-change",
    {
      bubbles: true,
    }
  );

  onMount(() => {
    const threshold = parseInt(scrollThreshold, 10);

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isTouch) {
      button.href = "";
      button.onClick = (event: MouseEvent) => {
        event.preventDefault();
        scrollToTop();
      };
    }

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

  export let anchorName: string = "";
  export let title: string = "";
  export let scrollThreshold: string = "155";
  export let forceVisible: StringBoolean = "false";
  export let size: ButtonSize = buttonSizeDefault;
</script>

<div
  bind:this={wrapper}
  class="wrapper wrapper-size-{size} {isTrue(forceVisible)
    ? 'wrapper-visible'
    : ''}"
>
  <IconButton
    priority="primary"
    href="#{anchorName}"
    {title}
    iconName="arrow-up"
    circle="true"
    {size}
    bind:this={button}
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

<svelte:options customElement="khao-image" />

<script lang="ts">
  import { onMount } from "svelte";
  import initLazyLoad from "./utils/initLazyLoad";
  import { type ImageType, imageTypeDefault } from "./types/ImageType";
  import {
    isTrue,
    type StringBoolean,
  } from "../../../common/types/StringBoolean";

  let webpSrc: string = "";
  let imageType: "image/jpeg" | "image/png" = "image/jpeg";
  let pictureElement: HTMLPictureElement;

  onMount(() => {
    if (src !== "") {
      let extension = src.split(".").pop();

      if (extension) {
        webpSrc = src.replace(extension, "webp");
        imageType = ["jpg", "jpeg"].includes(extension.toLowerCase())
          ? "image/jpeg"
          : "image/png";
      }
    }

    if (lazyloadSrc !== "") {
      initLazyLoad(pictureElement, lazyloadThreshold);
    }
  });

  export let src: string = "";
  export let lazyloadSrc: string = "";
  export let lazyloadThreshold: string = "440px";

  export let webp: StringBoolean = "false";

  export let title: string = "";
  export let caption: string = "";
  export let type: ImageType = imageTypeDefault;

  export let width: string = "600";
  export let height: string = "450";
</script>

<figure class="figure">
  <picture bind:this={pictureElement}>
    {#if isTrue(webp)}
      <source
        srcset={lazyloadSrc !== "" ? lazyloadSrc : webpSrc}
        data-srcset={lazyloadSrc !== "" ? webpSrc : ""}
        type="image/webp"
      />
    {/if}

    <source
      srcset={lazyloadSrc !== "" ? lazyloadSrc : src}
      data-srcset={lazyloadSrc !== "" ? src : ""}
      type={imageType}
    />
    <img
      src={lazyloadSrc !== "" ? lazyloadSrc : src}
      data-src={lazyloadSrc !== "" ? src : ""}
      alt={title}
      {title}
      {width}
      {height}
      class="image image-{type}"
    />
  </picture>

  {#if caption !== ""}
    <figcaption class="caption">
      {caption}
    </figcaption>
  {/if}
</figure>

<style>
  :host {
    --khao-image-elevation-level: 1;
    --khao-image-elevation-level-shadow: none;

    --khao-image-caption-color: var(--khao-sys-color-neutral30);
    --khao-image-caption-font-size: var(--khao-sys-size-typography-6);
    --khao-image-caption-line-height: var(--khao-sys-size-typography-6);
    --khao-image-caption-font-style: italic;
    --khao-image-caption-spacing: var(--khao-sys-size-regular-1);
  }

  .figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }

  .image {
    max-width: 100%;
    height: auto;
    box-shadow: var(--khao-image-elevation-level-shadow);
    z-index: var(--khao-image-elevation-level);
  }

  .image-elevated {
    --khao-image-elevation-level: var(--khao-sys-elevation-level1-distance);
    --khao-image-elevation-level-shadow: var(
      --khao-sys-elevation-level1-shadow
    );
  }

  .caption {
    padding-top: var(--khao-image-caption-spacing);
    text-align: center;
    font-size: var(--khao-image-caption-font-size);
    line-height: var(--khao-image-caption-line-height);
    font-style: var(--khao-image-caption-font-style);
    color: var(--khao-image-caption-color);
  }
</style>

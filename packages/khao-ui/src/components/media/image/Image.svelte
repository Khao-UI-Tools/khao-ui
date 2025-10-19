<svelte:options customElement="khao-image" />

<script lang="ts">
  import { onMount } from "svelte";
  import { type ImageType } from "./types/ImageType";
  import { type StringBoolean } from "../../../common/types/StringBoolean";
  import getFallbackImage from "./getFallbackImage";

  let {
    src = "",
    lazyLoading = "false" as StringBoolean,
    loadingAnimation = "true" as StringBoolean,
    webp = "false" as StringBoolean,
    title = "",
    caption = "",
    type = "default" as ImageType,
    width = "600",
    height = "450"
  }: {
    src?: string;
    lazyLoading?: StringBoolean;
    loadingAnimation?: StringBoolean;
    webp?: StringBoolean;
    title?: string;
    caption?: string;
    type?: ImageType;
    width?: string;
    height?: string
  } = $props();

  let webpSrc: string = $state("");
  let imageType: "image/jpeg" | "image/png" | "image/svg+xml" = $state("image/jpeg");

  let isLoading = $state(loadingAnimation !== "false");

  onMount(() => {
    if (src !== "") {
      let extension = src.split(".").pop();

      if (extension) {
        webpSrc = src.replace(extension, "webp");
        imageType = "image/jpeg";
        if ("png" === extension.toLowerCase()) {
          imageType = "image/png";
        }
        if ("svg" === extension.toLowerCase()) {
          imageType = "image/svg+xml";
        }
      }
    }
  });

  function handleError() {
    src = getFallbackImage();
    type = "fallback";
  }

  function handleLoaded() {
    isLoading = false;
  }
</script>

<figure class="figure">
  <picture class={isLoading ? "picture-loading" : ""} style="--khao-image-aspect-ratio: {width}/{height}">
    {#if webp === "true"}
      <source srcset={webpSrc} type="image/webp" />
    {/if}

    <source srcset={src} type={imageType} />

    <img
      {src}
      loading={lazyLoading === "true" ? "lazy" : "eager"}
      alt={title}
      {title}
      {width}
      {height}
      class="image image-{type} {!isLoading ? 'loaded' : ''}"
      onerror={handleError}
      onload={handleLoaded}
    />
  </picture>
  {#if caption !== ""}
    <figcaption class="caption">
      {caption}
    </figcaption>
  {/if}
</figure>

<style>
  :host,
  :root {
    --khao-image-elevation-level: 1;
    --khao-image-elevation-level-shadow: none;
    --khao-image-position: center;

    --khao-image-border-radius: var(--khao-sys-shape-corner-none);
    --khao-image-filter: none;

    --khao-image-caption-spacing: var(--khao-sys-size-regular-2);
    --khao-image-caption-color: var(--khao-sys-color-neutral30);
    --khao-image-caption-font-size: var(--khao-sys-size-typography-2);
    --khao-image-caption-line-height: var(--khao-sys-size-typography-3);
    --khao-image-caption-font-style: italic;

    --khao-image-fallback-background: var(--khao-sys-color-neutral80);
  }

  .figure {
    display: flex;
    flex-direction: column;
    align-items: var(--khao-image-position);
    margin: 0;
    gap: var(--khao-image-caption-spacing);
  }

  .figure picture {
    display: block;
    aspect-ratio: var(--khao-image-aspect-ratio, 4/3);
  }

  .picture-loading {
    background-color: var(--khao-image-fallback-background);

    background-image: linear-gradient(
      90deg,
      rgba(204, 204, 204, 1) 0%,
      rgba(221, 221, 221, 1) 50%
    );
    background-size: 40px 100%;

    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: shine 1.2s ease infinite;
  }

  @keyframes shine {
    to {
      background-position: right -40px top 0;
    }
  }

  .image {
    max-width: 100%;
    height: auto;
    display: block;
    box-shadow: var(--khao-image-elevation-level-shadow);
    z-index: var(--khao-image-elevation-level);
    border-radius: var(--khao-image-border-radius);
    filter: var(--khao-image-filter);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .image.loaded {
    opacity: 1;
  }

  .image-elevated {
    --khao-image-elevation-level: var(--khao-sys-elevation-level1-distance);
    --khao-image-elevation-level-shadow: var(
      --khao-sys-elevation-level1-shadow
    );
  }

  .caption {
    text-align: center;
    font-size: var(--khao-image-caption-font-size);
    line-height: var(--khao-image-caption-line-height);
    font-style: var(--khao-image-caption-font-style);
    color: var(--khao-image-caption-color);
  }
</style>

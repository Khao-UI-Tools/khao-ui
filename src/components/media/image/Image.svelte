<svelte:options customElement="khao-image" />

<script lang="ts">
  import { onMount } from "svelte";
  import { type ImageType, imageTypeDefault } from "./types/ImageType";
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  let webpSrc: string = "";
  let imageType: "image/jpeg" | "image/png" | "image/svg+xml" = "image/jpeg";

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

  export let src: string = "";

  export let lazyLoading: StringBoolean = "false";
  export let webp: StringBoolean = "false";

  export let title: string = "";
  export let caption: string = "";
  export let type: ImageType = imageTypeDefault;

  export let width: string = "600";
  export let height: string = "450";
</script>

<figure class="figure">
  <picture>
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
    --khao-image-position: center;

    --khao-image-border-radius: var(--khao-sys-shape-corner-none);

    --khao-image-caption-color: var(--khao-sys-color-neutral30);
    --khao-image-caption-font-size: var(--khao-sys-size-typography-6);
    --khao-image-caption-line-height: var(--khao-sys-size-typography-6);
    --khao-image-caption-font-style: italic;
    --khao-image-caption-spacing: var(--khao-sys-size-regular-1);
  }

  .figure {
    display: flex;
    flex-direction: column;
    align-items: var(--khao-image-position);
    margin: 0;
  }

  .image {
    max-width: 100%;
    height: auto;
    box-shadow: var(--khao-image-elevation-level-shadow);
    z-index: var(--khao-image-elevation-level);
    border-radius: var(--khao-image-border-radius);
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

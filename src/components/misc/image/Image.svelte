<svelte:options customElement="khao-image" />

<script lang="ts">

  import { onMount } from "svelte";
  import { type ImageType, imageTypeDefault } from "./types/ImageType";
  import {
    isTrue,
    type StringBoolean,
  } from "../../../common/types/StringBoolean";


  let webpSrc: string = "";
  let imageType: "image/jpeg" | "image/png" = "image/jpeg";

  let pictureElement: HTMLElement;



  onMount(() => {
   
    if (src !== "") {
      let extension  = src.split('.').pop();

      if (extension) {
        webpSrc = src.replace(extension,'webp');
      }
    }

  });


  export let src: string = ""
  export let lazyloadPlaceholderSrc: string = "";
  export let webp: StringBoolean = "false";

  export let title: string = "";
  export let caption: string = "";
  export let type: ImageType = imageTypeDefault

  export let width: string = "600"
  export let height: string = "450"

</script>


<figure class="figure">
    <picture bind:this(pictureElement)>

      {#if isTrue(webp)}
          <source srcset="{webpSrc}" type="image/webp">
      {/if}

      <source srcset="{src}" data-srcset="" type="{imageType}">
      <img 
        src={src} 
        data-src={lazyloadPlaceholderSrc}
        alt={title}
        title={title}
        width={width}
        height={height}
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
    --khao-image-caption-font-style: italic;
    --khao-image-caption-spacing: var(--khao-sys-size-regular-1);
  }


  .figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--khao-image-caption-spacing);
  }

  .image {
    box-shadow: var(--khao-image-elevation-level-shadow);
    z-index: var(--khao-image-elevation-level);
  }

  .image-elevated {
    --khao-image-elevation-level: var(--khao-sys-elevation-level1-distance);
    --khao-image-elevation-level-shadow: var(--khao-sys-elevation-level1-shadow);
  }

  .caption {
    text-align: center;
    font-size: var(--khao-image-caption-font-size);
    font-style: var(--khao-image-caption-font-style);
    color: var(--khao-image-caption-color);
  }

  



</style>








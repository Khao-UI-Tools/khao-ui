<svelte:options customElement="khao-video" />

<script lang="ts">
  import { onMount } from "svelte";
  import Image from "../image/Image.svelte";
  import Icon from "../../../icons/Icon.svelte";
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  type VideoType = "youtube";

  let shwoPreview = false;
  let showVideo = false;

  let captionElement: HTMLDivElement;

  onMount(() => {
    if (awaitsConsent === "true") {
      shwoPreview = true;
    } else {
      showVideo = true;
    }
  });

  export let type: VideoType = "youtube";
  export let videoId: string = "";

  export let autoplay: StringBoolean = "false";
  export let start: String = "";

  export let title: string = "";
  export let caption: string = "";

  export let awaitsConsent: StringBoolean = "false";
  export let consentText: string = "";
  export let previewSrc = "";

  export let width: string = "600";
  export let height: string = "450";

  let embeddedUrl =
    type === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1`
      : "";

  if (type === "youtube" && autoplay === "true") {
    embeddedUrl += "&autoplay=1";
  }

  if (type === "youtube" && start !== "") {
    embeddedUrl += `&start=${start}`;
  }

  function giveConsent(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    shwoPreview = false;
    showVideo = true;
  }
</script>

<div
  class="video-wrapper"
  style="--khao-video-width: {width}px; --khao-video-height: {height}px;"
>
  {#if shwoPreview}
    <a
      class="preview-wrapper"
      href={type === "youtube" ? `https://youtu.be/${videoId}` : ""}
      target="_blank"
      on:click={giveConsent}
    >
      <Image
        src={previewSrc}
        {title}
        {width}
        {height}
        webp="true"
        lazyLoading="true"
      ></Image>

      <div class="consent-text">
        {consentText}
      </div>

      <div class="preview-icon">
        <Icon iconName="youtube" sizeFactor="20"></Icon>
      </div>
    </a>
  {/if}
  {#if showVideo}
    <iframe
      class="video-frame"
      style="max-width: {width}px;"
      {title}
      src={embeddedUrl}
      frameborder="0"
      allow="accelerometer; autoplay; 
encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  {/if}
  <div class="caption" bind:this={captionElement}>{caption}</div>
</div>

<style>
  :host {
    --khao-video-consent-color: var(--khao-sys-color-neutral80);
    --khao-video-consent-background: var(--khao-sys-static-color-black);
    --khao-video-consent-font-size: var(--khao-sys-size-typography-6);
    --khao-video-caption-line-height: var(--khao-sys-size-typography-8);

    --khao-video-caption-color: var(--khao-sys-color-neutral30);
    --khao-video-caption-font-size: var(--khao-sys-size-typography-6);
    --khao-video-caption-line-height: var(--khao-sys-size-typography-7);
    --khao-video-caption-font-style: italic;
    --khao-video-caption-spacing: var(--khao-sys-size-regular-1);
  }

  .video-wrapper {
    max-width: var(--khao-video-width);
    max-height: var(--khao-video-height);
  }

  .preview-wrapper {
    position: relative;
    display: block;
    background-color: var(--khao-sys-static-color-black);
  }

  .preview-wrapper:focus-visible {
    outline: var(--khao-sys-size-regular-1) solid var(--khao-sys-color-tertiary);
    outline-offset: var(--khao-sys-size-regular-5);
    border-radius: var(--khao-sys-shape-corner-medium);
  }

  .preview-icon {
    position: absolute;
    color: var(--khao-sys-static-color-white);
    top: 50%;
    left: 50%;
    opacity: 0.9;
    margin: calc(var(--khao-sys-size-regular-10) * -1) 0 0
      calc(var(--khao-sys-size-regular-10) * -1);
    width: var(--khao-sys-size-regular-18);
    height: var(--khao-sys-size-regular-18);
  }

  .consent-text {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: var(--khao-sys-size-regular-4);
    background: var(--khao-video-consent-background);
    color: var(--khao-video-consent-color);
    font-size: var(--khao-video-consent-font-size);
    line-height: var(--khao-video-caption-line-height);
    text-align: center;
  }

  .video-wrapper {
    display: block;
    margin: 0 auto;
  }

  .video-frame {
    margin: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
  }

  .caption {
    padding-top: var(--khao-video-caption-spacing);
    text-align: center;
    font-size: var(--khao-video-caption-font-size);
    line-height: var(--khao-video-caption-line-height);
    font-style: var(--khao-video-caption-font-style);
    color: var(--khao-video-caption-color);
  }
</style>

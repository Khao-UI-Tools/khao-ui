<svelte:options
  customElement={{
    tag: "khao-video",
    props: {
      videoId: { reflect: true, type: "String", attribute: "videoId" },
    },
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";
  import Image from "../image/Image.svelte";
  import Icon from "../../../icons/Icon.svelte";
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  type VideoType = "youtube";

  let {
    type = "youtube" as VideoType,
    videoId = "",
    autoplay = "false" as StringBoolean,
    start = "",
    title = "",
    caption = "",
    awaitsConsent = "false" as StringBoolean,
    consentText = "",
    previewSrc = "",
    width = "600",
    height = "450"
  }: {
    type?: VideoType;
    videoId?: string;
    autoplay?: StringBoolean;
    start?: string;
    title?: string;
    caption?: string;
    awaitsConsent?: StringBoolean;
    consentText?: string;
    previewSrc?: string;
    width?: string;
    height?: string
  } = $props();

  let shwoPreview = $state(false);
  let showVideo = $state(false);

  let captionElement: HTMLDivElement;

  // Use $derived instead of $state + $effect to avoid infinite loops
  let embeddedUrl = $derived.by(() => {
    if (videoId === "") {
      return "";
    }

    let url = type === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1`
      : "";

    if (type === "youtube" && autoplay === "true") {
      url += "&autoplay=1";
    }

    if (type === "youtube" && start !== "") {
      url += `&start=${start}`;
    }

    return url;
  });

  onMount(() => {
    if (awaitsConsent === "true") {
      shwoPreview = true;
    } else {
      showVideo = true;
    }
  });

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
  {#if shwoPreview || embeddedUrl === ""}
    <a
      class="preview-wrapper"
      href={type === "youtube" ? `https://youtu.be/${videoId}` : ""}
      target="_blank"
      onclick={giveConsent}
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
  {#if showVideo && embeddedUrl !== ""}
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
    --khao-video-consent-font-size: var(--khao-sys-size-typography-2);
    --khao-video-caption-line-height: var(--khao-sys-size-typography-3);

    --khao-video-caption-color: var(--khao-sys-color-neutral30);
    --khao-video-caption-font-size: var(--khao-sys-size-typography-2);
    --khao-video-caption-line-height: var(--khao-sys-size-typography-3);
    --khao-video-caption-font-style: italic;
    --khao-video-caption-spacing: var(--khao-sys-size-regular-1);
  }

  .video-wrapper {
    max-width: var(--khao-video-width);
    max-height: var(--khao-video-height);

    --khao-image-filter: opacity(50%);
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

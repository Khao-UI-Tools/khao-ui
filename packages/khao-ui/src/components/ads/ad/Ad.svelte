<svelte:options customElement="khao-ad" />

<script lang="ts">
  import type { StringBoolean } from "../../../common/types/StringBoolean";

  export let title: string = "";
  export let url: string = "";
  export let imageUrl: string;
  export let imageWidth: string;
  export let imageTitle: string;
  export let imageCaption: string = "";
  export let onError: () => void;
  export let hasWebP: StringBoolean = "false";
</script>

<div class="container">
  <figure>
    <div class="title">{title}</div>
    <a
      class="link"
      href={url}
      target={url.includes("mailto:") ? "_self" : "_blank"}
    >
      <picture>
        {#if hasWebP === "true"}
          <source
            srcset={imageUrl.replace(".jpg", ".webp")}
            type="image/webp"
          />
        {/if}

        <source srcset={imageUrl} type="image/jpeg" />
        <img
          src={imageUrl}
          width={imageWidth || "300px"}
          alt={imageTitle || title}
          title={imageTitle || title}
          class="image"
          on:error={onError}
        />
      </picture>
    </a>

    {#if imageCaption !== ""}
      <figcaption class="caption">
        {imageCaption}
      </figcaption>
    {/if}
  </figure>
</div>

<style>
  :host {
    --khao-ads-margin-top: var(--khao-sys-size-regular-6);
    --khao-ads-title-margin: var(--khao-sys-size-regular-1);
    --khao-add-caption-margin: var(--khao-sys-size-regular-2);
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: var(--khao-ads-margin-top, 3rem);
  }

  .title {
    font-size: 70%;
    margin-bottom: var(--khao-ads-title-margin);
    text-align: center;
  }

  .caption {
    font-size: 70%;
    margin-bottom: var(--khao-add-caption-margin);
    text-align: center;
  }

  .link {
    color: inherit;
    text-decoration: inherit;

    &:focus {
      outline: none !important;
    }
  }
</style>

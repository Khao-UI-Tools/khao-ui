<svelte:options customElement="khao-ad" />

<script lang="ts">
  export let title: string;
  export let url: string;
  export let imageUrl: string;
  export let imageWidth: string;
  export let imageTitle: string;
  export let onError: () => void;
</script>

<div class="container">
  <div class="title">{title}</div>
  <a
    class="link"
    href={url}
    target={url.includes("mailto:") ? "_self" : "_blank"}
  >
    <picture>
      <source srcset={imageUrl.replace(".jpg", ".webp")} type="image/webp" />
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
</div>

<style>
  :host {
    --khao-ads-margin-top: var(--khao-sys-size-regular-6);
    --khao-ads-title-margin-bottom: var(--khao-sys-size-regular-1);
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
    margin-bottom: var(--khao-ads-title-margin-bottom);
  }

  .link {
    color: inherit;
    text-decoration: inherit;

    &:focus {
      outline: none !important;
    }
  }
</style>

<svelte:options customElement="khao-ads" />

<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { Ad } from "./Ad.ts";
  import advertisements from "./advertisments.json";

  let ad: Ad | null = null;
  const ads: { [key: string]: Ad } = advertisements;

  onMount(() => {
    const adKeys = Object.keys(ads);
    const numberOfAds = adKeys ? adKeys.length : 0;

    if (numberOfAds > 0) {
      const randomKeyIndex = Math.floor(Math.random() * numberOfAds);
      const adKey = adKeys[randomKeyIndex];
      ad = ads[adKey];
    }
  });

  onDestroy(() => {});
  export let title: string;
</script>

<div class="container">
  <div class="title">{title}</div>
  {#if ad}
    <a href={ad.url} target={ad.url.includes("mailto:") ? "_self" : "_blank"}>
      <picture>
        <source
          srcset={ad.imageUrl.replace(".jpg", ".webp")}
          type="image/webp"
        />
        <source srcset={ad.imageUrl} type="image/jpeg" />
        <img
          src={ad.imageUrl}
          width={ad.imageWidth || 300}
          alt={ad.title || title}
          title={title ? title : ""}
        />
      </picture>
    </a>
  {:else}
    <span>Hier könnte ihre Werbung stehen!</span>
  {/if}
</div>

<style>
  :host {
    --khao-ads-margin-top: var(--khao-sys-size-regular-6);
    --khao-ads-margin-bottom: var(--khao-sys-size-regular-6);
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: var(
      --khao-ads-margin-top,
      3rem
    );

    &:focus {
      outline: none !important;
    }
  }

  .title {
    font-size: 70%;
    margin-bottom: var(
      --khao-ads-margin-bottom,
      0.5rem
    );
  }
</style>

<svelte:options customElement="khao-share-buttons" />

<script lang="ts">
  import Button from "../buttons/button/Button.svelte";
  import openInNewWindow from "../buttons/utils/openInNewWindow";

  function isAbleToPrint(): boolean {
    return window.print !== undefined;
  }

  function print() {
    window.print();
  }

  function buildFacebookShareUrl(sharedUrl: string): string {
    const baseUrl = "https://www.facebook.com/share.php?u=";
    const urlToShare = sharedUrl || window.location.href;
    const url = `${baseUrl}${urlToShare}`;
    console.log("buildFacebookShareUrl", url);
    return url;
  }

  function buildPinterestShareUrl(
    sharedUrl: string,
    sharedMediaUrl: string,
    sharedTitle: string,
    sharedDescription: string
  ): string {
    const baseUrl = "https://www.pinterest.de/pin-builder/";
    const urlToShare = sharedUrl || window.location.href;
    const saveMediaUrl = sharedMediaUrl.replace("ß", "ss");
    const url = `${baseUrl}?description=${sharedDescription}&media=${encodeURIComponent(saveMediaUrl)}&method=button&title=${sharedTitle}&url=${encodeURIComponent(urlToShare)}`;
    console.log("buildPinterestShareUrl", url);
    return url;
  }

  export let printButtonLabel: string | null = "No Label";
  export let printButtonTitle: string | null = printButtonLabel;

  export let sharedUrl: string = "";
  export let sharedMediaUrl: string = "";
  export let sharedTitle: string = "";
  export let sharedDescription: string = "";

  export let showFacebookButton: string = "true";
  export let facebookButtonLabel: string | null = "No Label";
  export let facebookButtonTitle: string | null = facebookButtonLabel;

  export let showPinterestButton: string = "true";
  export let pinterestButtonLabel: string | null = "No Label";
  export let pinterestButtonTitle: string | null = pinterestButtonLabel;
</script>

<div class="share-buttons">
  {#if isAbleToPrint()}
    <Button
      label={printButtonLabel || "No Label"}
      title={printButtonTitle || ""}
      iconName="printer"
      onClick={print}
    ></Button>
  {/if}
  {#if showFacebookButton === "true"}
    <Button
      label={facebookButtonLabel || "No Label"}
      title={facebookButtonTitle || ""}
      iconName="facebook"
      customBGColor="#3b5998"
      customColor="#ffffff"
      onClick={() => {
        openInNewWindow(buildFacebookShareUrl(sharedUrl));
      }}
    ></Button>
  {/if}

  {#if showPinterestButton === "true"}
    <Button
      label={pinterestButtonLabel || "No Label"}
      title={pinterestButtonTitle || ""}
      iconName="pinterest"
      customBGColor="#bd081c"
      customColor="#ffffff"
      onClick={() => {
        openInNewWindow(
          buildPinterestShareUrl(
            sharedUrl,
            sharedMediaUrl,
            sharedTitle,
            sharedDescription
          )
        );
      }}
    ></Button>
  {/if}
</div>

<style>
  :host {
    --khao-share-buttons-margin: var(--khao-sys-size-regular-6);
    --khao-share-buttons-gap: var(--khao-sys-size-regular-3);
  }

  .share-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: center;
    margin: var(--khao-share-buttons-margin) auto
      var(--khao-share-buttons-margin) auto;
    padding: 0;
    width: 100%;
    gap: var(--khao-share-buttons-gap);

    --khao-button-width: 100px;
  }
</style>

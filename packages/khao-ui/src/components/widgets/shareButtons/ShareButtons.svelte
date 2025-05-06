<svelte:options customElement="khao-share-buttons" />

<script lang="ts">
  import type { StringBoolean } from "../../../common/types/StringBoolean";
  import Button from "../../buttons/button/Button.svelte";

  function openInNewWindow(
    url: string,
    width: number = 700,
    height: number = 650
  ) {
    const windowFeatures = `left=100,top=100,width=${width},height=${height}}`;
    window.open(url, "new", windowFeatures);
  }

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

  interface Props {
    showPrintButton: StringBoolean;
    printButtonLabel: string | null;
    printButtonTitle: string | null;

    sharedUrl?: string;
    sharedMediaUrl?: string;
    sharedTitle?: string;
    sharedDescription?: string;

    showFacebookButton?: StringBoolean;
    facebookButtonLabel?: string | null;
    facebookButtonTitle?: string | null;

    showPinterestButton?: StringBoolean;
    pinterestButtonLabel?: string | null;
    pinterestButtonTitle?: string | null;
  }

  let {
    showPrintButton = "true",
    printButtonLabel = "No Label",
    printButtonTitle = printButtonLabel,
    sharedUrl = "",
    sharedMediaUrl = "",
    sharedTitle = "",
    sharedDescription = "",
    showFacebookButton = "true",
    facebookButtonLabel = "No Label",
    facebookButtonTitle = facebookButtonLabel,
    showPinterestButton = "true",
    pinterestButtonLabel = "No Label",
    pinterestButtonTitle = pinterestButtonLabel,
  }: Props = $props();
</script>

<div class="share-buttons">
  {#if showPrintButton === "true" && isAbleToPrint()}
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

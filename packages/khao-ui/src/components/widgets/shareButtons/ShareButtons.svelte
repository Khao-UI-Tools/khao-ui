<svelte:options customElement="khao-share-buttons" />

<script lang="ts">
  import type { StringBoolean } from "../../../common/types/StringBoolean";
  import Button from "../../buttons/button/Button.svelte";
  import buildFacebookShareUrl from "./utils/buildFacebookShareUrl";
  import buildPinterestShareUrl from "./utils/buildPinterestShareUrl";
  import openInNewWindow from "./utils/openInNewWindow";
  import shareNativly from "./utils/shareNativly";

  const NO_LABEL = "No Label";

  function isAbleToPrint(): boolean {
    return window.print !== undefined;
  }

  function isAbleToShareNativly(): boolean {
    return navigator.share !== undefined;
  }

  function print() {
    window.print();
  }

  interface Props {
    shareButtonLabel: string | null;
    shareButtonTitle: string | null;

    sharedUrl?: string;
    sharedMediaUrl?: string;
    sharedTitle?: string;
    sharedDescription?: string;

    showPrintButton: StringBoolean;
    printButtonLabel: string | null;
    printButtonTitle: string | null;

    showFacebookButton?: StringBoolean;
    facebookButtonLabel?: string | null;
    facebookButtonTitle?: string | null;

    showPinterestButton?: StringBoolean;
    pinterestButtonLabel?: string | null;
    pinterestButtonTitle?: string | null;
  }

  let {
    shareButtonLabel = NO_LABEL,
    shareButtonTitle = "",
    sharedUrl = "",
    sharedMediaUrl = "",
    sharedTitle = "",
    showPrintButton = "true",
    printButtonLabel = NO_LABEL,
    printButtonTitle = "",
    sharedDescription = "",
    showFacebookButton = "true",
    facebookButtonLabel = NO_LABEL,
    facebookButtonTitle = "",
    showPinterestButton = "true",
    pinterestButtonLabel = NO_LABEL,
    pinterestButtonTitle = "",
  }: Props = $props();

  let computedShareButtonTitle = $derived(shareButtonTitle || shareButtonLabel);
  let computedPrintButtonTitle = $derived(printButtonTitle || printButtonLabel);
  let computedFacebookButtonTitle = $derived(
    facebookButtonTitle || facebookButtonLabel
  );
  let computedPinterestButtonTitle = $derived(
    pinterestButtonTitle || pinterestButtonLabel
  );
</script>

<div class="share-buttons">
  {#if showPrintButton === "true" && isAbleToPrint()}
    <Button
      label={printButtonLabel || NO_LABEL}
      title={computedPrintButtonTitle || ""}
      iconName="printer"
      onClick={() => {
        print();
      }}
    ></Button>
  {/if}

  {#if isAbleToShareNativly()}
    <Button
      label={shareButtonLabel || NO_LABEL}
      title={computedShareButtonTitle || ""}
      iconName="copy"
      priority="tertiary"
      onClick={() => {
        shareNativly(sharedUrl, sharedTitle, sharedDescription);
      }}
    ></Button>
  {/if}

  {#if !isAbleToShareNativly() && showFacebookButton === "true"}
    <Button
      label={facebookButtonLabel || NO_LABEL}
      title={computedFacebookButtonTitle || ""}
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
      label={pinterestButtonLabel || NO_LABEL}
      title={computedPinterestButtonTitle || ""}
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

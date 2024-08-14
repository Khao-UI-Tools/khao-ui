<svelte:options customElement="khao-share-buttons" />

<script lang="ts">
  import Button from "./Button.svelte";
  import openInNewWindow from "./utils/openInNewWindow";

  function isAbleToPrint(): boolean {
    return window.print !== undefined;
  }

  function print() {
    window.print();
  }

  export let printButtonLabel: string | null = "No Label";
  export let printButtonTitle: string | null = printButtonLabel;

  export let facebookButtonLabel: string | null = "No Label";
  export let facebookButtonTitle: string | null = facebookButtonLabel;
  export let facebookButtonUrl: string | null = null;

  export let pinterestButtonLabel: string | null = "No Label";
  export let pinterestButtonTitle: string | null = pinterestButtonLabel;
  export let pinterestButtonUrl: string | null = null;
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
  {#if facebookButtonUrl !== null}
    <Button
      label={facebookButtonLabel || "No Label"}
      title={facebookButtonTitle || ""}
      iconName="facebook"
      customBGColor="#3b5998"
      customColor="#ffffff"
      onClick={() => {
        openInNewWindow(facebookButtonUrl || "");
      }}
    ></Button>
  {/if}

  {#if pinterestButtonUrl !== null}
    <Button
      label={pinterestButtonLabel || "No Label"}
      title={pinterestButtonTitle || ""}
      iconName="pinterest"
      customBGColor="rgb(189, 8, 28)"
      customColor="#ffffff"
      onClick={() => {
        openInNewWindow(pinterestButtonUrl || "");
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

<svelte:options customElement="khao-spinner" />

<div class="spinner"></div>

<style>
  :host {
    --khao-spinner-color: var(--khao-sys-color-neutral30);
    --khao-spinner-size: var(--khao-sys-size-regular-10);
  }

  .spinner {
    width: var(--khao-spinner-size);
    height: var(--khao-spinner-size);
    border: 5px solid var(--khao-spinner-color);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

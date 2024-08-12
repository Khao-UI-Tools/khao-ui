<svelte:options customElement="khao-button-pay-pal-donate" />

<script lang="ts">
  export let hostedButtonId: string;
  export let label: string;
  export let title: string;
</script>

<a
  href="https://www.paypal.com/donate/?hosted_button_id={hostedButtonId}&lang=de"
  {title}
  target="_blank"
  class="button"
>
  <div class="text">{label || "PayPal"}</div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    class="icon"
  >
    <path
      fill="#001C64"
      d="M37.972 13.82c.107-5.565-4.485-9.837-10.799-9.837H14.115a1.278 1.278 0 0 0-1.262 1.079L7.62 37.758a1.038 1.038 0 0 0 1.025 1.2h7.737l-1.21 7.572a1.038 1.038 0 0 0 1.026 1.2H22.5c.305 0 .576-.11.807-.307.231-.198.269-.471.316-.772l1.85-10.885c.047-.3.2-.69.432-.888.231-.198.433-.306.737-.307H30.5c6.183 0 11.43-4.394 12.389-10.507.678-4.34-1.182-8.287-4.916-10.244Z"
    />
    <path
      fill="#0070E0"
      d="m18.056 26.9-1.927 12.22-1.21 7.664a1.038 1.038 0 0 0 1.026 1.2h6.67a1.278 1.278 0 0 0 1.261-1.079l1.758-11.14a1.277 1.277 0 0 1 1.261-1.078h3.927c6.183 0 11.429-4.51 12.388-10.623.68-4.339-1.504-8.286-5.238-10.244-.01.462-.05.923-.121 1.38-.959 6.112-6.206 10.623-12.389 10.623h-6.145a1.277 1.277 0 0 0-1.261 1.077Z"
    />
    <path
      fill="#003087"
      d="M16.128 39.12h-7.76a1.037 1.037 0 0 1-1.025-1.2l5.232-33.182a1.277 1.277 0 0 1 1.262-1.078h13.337c6.313 0 10.905 4.595 10.798 10.16-1.571-.824-3.417-1.295-5.44-1.295H21.413a1.278 1.278 0 0 0-1.261 1.078L18.057 26.9l-1.93 12.22Z"
    />
  </svg>
</a>

<style>
  @import "reset.css";

  :host {
    --khao-button-paypal-height: var(--khao-sys-size-regular-10);
    --khao-button-paypal-container-shape: var(--khao-sys-shape-corner-medium);

    --khao-button-paypal-container-color: rgb(255, 209, 64);
    --khao-button-paypal-state-layer-color: rgb(0, 0, 0);

    --khao-button-paypal-hover-state-layer-opacity: var(
      --khao-sys-state-hover-state-layer-opacity
    );

    --khao-button-paypal-focus-state-layer-opacity: var(
      --khao-sys-state-focus-state-layer-opacity
    );

    --khao-button-paypal-pressed-state-layer-opacity: var(
      --khao-sys-state-pressed-state-layer-opacity
    );
  }

  .button {
    min-width: 150px;
    height: var(--khao-button-paypal-height);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    border-radius: var(--khao-button-paypal-container-shape);
    background: var(--khao-button-paypal-container-color);
    text-decoration: none;
    gap: 0.4rem;

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-button-paypal-container-color),
        var(--khao-button-paypal-state-layer-color)
          var(--khao-button-paypal-hover-state-layer-opacity)
      );
    }

    &:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-button-paypal-container-color),
        var(--khao-button-paypal-state-layer-color)
          var(--khao-button-paypal-focus-state-layer-opacity)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--khao-button-paypal-container-color),
        var(--khao-button-paypal-state-layer-color)
          var(--khao-button-paypal-pressed-state-layer-opacity)
      );
    }
  }

  .text {
    color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to left, #0079c1 50%, #00457c 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 20px;
  }

  .icon {
    height: 25px;
    width: 25px;
    margin: 0;
  }
</style>

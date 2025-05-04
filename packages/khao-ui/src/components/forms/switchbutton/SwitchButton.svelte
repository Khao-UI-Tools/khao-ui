<svelte:options customElement="khao-switch-button" />

<script lang="ts">
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  interface Props {
    label: string;
    activated?: StringBoolean;
    htmlId?: string;
    onChange?: (value: string) => void;
  }

  let {
    label,
    activated = "false",
    htmlId = `khao-switch-button-${label}`,
    onChange,
  }: Props = $props();

  let checked = $derived(activated === "true");

  function handleButtonClick() {
    checked = !checked;

    const CHANGE_EVENT_NAME = "khao-switch-button-change";

    const changeEvent = new CustomEvent(CHANGE_EVENT_NAME, {
      detail: {
        value: checked,
        htmlId: htmlId,
      },
      bubbles: true,
      composed: true,
    });

    window.dispatchEvent(changeEvent);

    if (onChange) {
      onChange(checked.toString());
    }
  }
</script>

<div class="container">
  <button
    class="button button-disabled"
    onclick={handleButtonClick}
    aria-labelledby="label-{htmlId}"
  >
    <input
      type="checkbox"
      bind:checked
      id={htmlId}
      role="switch"
      aria-checked={checked}
    /><span class="slider"></span>
  </button>
  <label class="label" id="label-{htmlId}" for={htmlId}>
    {label}
  </label>
</div>

<style>
  :host,
  :root {
    --khao-switch-buton-slider-color: var(--khao-sys-static-color-white);
    --khao-switch-buton-inactive-bg-color: var(
      --khao-sys-color-surface-container-high
    );
    --khao-switch-buton-active-bg-color: var(--khao-sys-static-color-success);
  }

  .container {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
  }

  .button {
    border: none;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    background-color: transparent;
  }

  .button input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--khao-switch-buton-inactive-bg-color);
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: var(--khao-switch-buton-slider-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--khao-switch-buton-active-bg-color);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--khao-switch-buton-active-bg-color);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .label {
    cursor: pointer;
    line-height: 24px;
  }
</style>

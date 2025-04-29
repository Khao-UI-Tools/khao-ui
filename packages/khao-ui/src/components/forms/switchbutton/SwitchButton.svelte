<svelte:options customElement="khao-switch-button" />

<script lang="ts">
  import { type StringBoolean } from "../../../common/types/StringBoolean";

  interface Props {
    label: string;
    activated: StringBoolean;
    htmlId: string;
    onChange: (value: string) => {};
  }

  let {
    label,
    activated,
    htmlId = `khao-switch-button-${label}`,
    onChange,
  }: Props = $props();

  let checked = $derived(activated === "true");

  function handleButtonClick() {
    checked = !checked;
  }

  function handleCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    if (onChange) {
      onChange(checkbox.value);
    }

    const CHANGE_EVENT_NAME = "khao-switch-button-change";

    const changeEvent = new CustomEvent(CHANGE_EVENT_NAME, {
      detail: {
        value: checkbox.value,
        htmlId: htmlId,
      },
      bubbles: true,
      composed: true,
    });

    checkbox.dispatchEvent(changeEvent);
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
      onchange={handleCheckboxChange}
    /><span class="slider"></span>
  </button>
  <label class="label" id="label-{htmlId}" for={htmlId}>
    {label}
  </label>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 0.5rem;
  }

  .button {
    border: none;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
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
    background-color: var(--khao-sys-color-surface-container-high);
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
    background-color: var(--khao-sys-static-color-white);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--khao-sys-static-color-success);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--khao-sys-static-color-success);
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

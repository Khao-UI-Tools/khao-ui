<svelte:options customElement="khao-textfield" />

<script lang="ts">
  import {
    type TextFieldType,
    textFieldTypeDefault,
  } from "../types/TextFieldType";

  export let label: string;
  export let value: string;
  export let type: TextFieldType = textFieldTypeDefault;
</script>

<div class="formfield">
  <label class="label" for={label}>{label}</label>

  {#if type === "output"}
    <output class="input" id={label}>{value}</output>
  {:else}
    <input class="input" id={label} {type} {value} />
  {/if}
</div>

<style>
  @import "../reset.css";

  :host {
    --khao-textfield-height: var(--khao-spacing-15);
    --khao-textfield-bg-color: var(--khao-sys-static-color-white);
    --khao-textfield-border-color: var(--khao-sys-color-neutral80);
    --khao-textfield-gap: 10px;
    --khao-textfield-padding: 10px;
    --khao-textfield-label-font-size: 14px;
    --khao-textfield-label-font-color: var(--khao-sys-color-neutral50);
    --khao-textfield-input-font-size: 16px;
    --khao-textfield-input-font-color: var(--khao-sys-static-color-black);
  }

  .formfield {
    border: 2px solid var(--khao-textfield-border-color);
    border-radius: var(--khao-sys-shape-corner-small);
    background-color: var(--khao-textfield-bg-color);
    display: flex;
    flex-direction: column;
    height: var(--khao-textfield-height);
    gap: var(--khao-textfield-gap);
    padding: var(--khao-textfield-padding);
  }

  .label {
    font-size: var(--khao-textfield-label-font-size);
  }

  .input {
    color: var(--khao-textfield-input-font-color);
    font-weight: 700;
    font-size: var(--khao-textfield-field-font-size);
  }
</style>

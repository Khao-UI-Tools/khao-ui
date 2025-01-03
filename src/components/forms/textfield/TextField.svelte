<svelte:options
  customElement={{
    tag: "khao-text-field",
    shadow: "none",
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          attachedInternals = this.attachInternals();
        }

        get form() {
          return attachedInternals.form;
        }
      };
    },
  }}
/>

<script lang="ts">
  import {
    type TextFieldType,
    textFieldTypeDefault,
  } from "../types/TextFieldType";

  let attachedInternals: ElementInternals;

  export let label: string;
  export let value: string;
  export let placeholder: string;
  export let id: string = `khao-ui-texfield-${label}`;
  export let type: TextFieldType = textFieldTypeDefault;
</script>

<div class="formfield">
  <label class="label" for={id}>{label}</label>

  {#if type === "output"}
    <output class="field" {id}>{value}</output>
  {:else}
    <input class="field" {placeholder} {id} {type} {value} />
  {/if}
</div>

<style>
  @import "../reset.css";
  @import "../formfield.css";
</style>

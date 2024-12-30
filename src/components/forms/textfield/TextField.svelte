<svelte:options customElement="khao-ui-textfield" />

<script lang="ts">
  import {
    type TextFieldType,
    textFieldTypeDefault,
  } from "../types/TextFieldType";

  export let label: string;
  export let value: string;
  export let id: string = `khao-ui-texfield-${label}`;
  export let type: TextFieldType = textFieldTypeDefault;
</script>

<div class="formfield">
  <label class="label" for={id}>{label}</label>

  {#if type === "output"}
    <output class="input" {id}>{value}</output>
  {:else}
    <input class="input" {id} {type} {value} />
  {/if}
</div>

<style>
  @import "../reset.css";
  @import "../formfield.css";

</style>

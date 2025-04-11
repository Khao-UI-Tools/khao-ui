<svelte:options customElement="khao-text-field" />

<script lang="ts">
  import {
    type TextFieldType,
    textFieldTypeDefault,
  } from "../types/TextFieldType";
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";

  export let label: string;
  export let value: string;
  export let placeholder: string;
  export let id: string = `khao-ui-texfield-${label}`;
  export let type: TextFieldType = textFieldTypeDefault;
  export let iconName: IconName | "" = "";

  if (type === "search" && iconName === "") {
    iconName = "search";
  }
</script>

<div class="formfield">
  <label class="label" for={id}
    >{#if iconName !== ""}
      <Icon {iconName} sizeFactor="4" />
    {/if}{label}</label
  >

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

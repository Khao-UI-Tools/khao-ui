<svelte:options customElement="khao-text-field" />

<script lang="ts">
  import {
    type TextFieldType,
    textFieldTypeDefault,
  } from "../types/TextFieldType";
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";
  import type { StringBoolean } from "../../../common/types/StringBoolean";

  export let label: string;
  export let value: string;
  export let placeholder: string;
  export let id: string = `khao-ui-texfield-${label}`;
  export let type: TextFieldType = textFieldTypeDefault;
  export let iconName: IconName | "" = "";
  export let autofocus: StringBoolean = "false";
  export let disabled: StringBoolean = "false";

  if (type === "search" && iconName === "") {
    iconName = "search";
  }

  function handleChange(event: Event) {
    const input = event.target as HTMLInputElement;

    const CHANGE_EVENT_NAME = "khao-text-field-change";

    const changeEvent = new CustomEvent(CHANGE_EVENT_NAME, {
      detail: {
        value: input.value,
      },
      bubbles: true,
      composed: true,
    });

    input.dispatchEvent(changeEvent);
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
    <!-- svelte-ignore a11y-autofocus -->
    <input
      class="field"
      {placeholder}
      {id}
      {type}
      {value}
      autofocus={autofocus === "true" ? true : false}
      disabled={disabled === "true" ? true : false}
      on:keydown={handleChange}
    />
  {/if}
</div>

<style>
  @import "../reset.css";
  @import "../formfield.css";
</style>

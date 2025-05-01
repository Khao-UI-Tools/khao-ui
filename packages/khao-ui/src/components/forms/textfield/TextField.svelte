<svelte:options customElement="khao-text-field" />

<script lang="ts">
  import {
    type TextFieldType,
    textFieldTypeDefault,
  } from "../types/TextFieldType";
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";
  import type { StringBoolean } from "../../../common/types/StringBoolean";

  interface Props {
    label: string;
    value: string;
    placeholder: string;
    id: string;
    type: TextFieldType;
    iconName: IconName | "";
    autofocus: StringBoolean;
    disabled: StringBoolean;
  }

  let {
    label,
    value,
    placeholder,
    id = `khao-ui-texfield-${label}`,
    type = textFieldTypeDefault,
    iconName = "",
    autofocus = "false",
    disabled = "false",
  }: Props = $props();

  if (type === "search" && iconName === "") {
    iconName = "search";
  }

  function handleChange(event: Event) {
    const input = event.target as HTMLInputElement;

    const EVENT_NAME = `khao-text-field-${event.type}`;

    const customEvent = new CustomEvent(EVENT_NAME, {
      detail: {
        value: input.value,
      },
      bubbles: true,
      composed: true,
    });

    input.dispatchEvent(customEvent);
  }
</script>

<div class="formfield">
  <label class="label" for={id}
    >{#if iconName !== ""}
      <span class="icon">
        <Icon {iconName} sizeFactor="4" />
      </span>
    {/if}{label}</label
  >

  {#if type === "output"}
    <output class="field" {id}>{value}</output>
  {:else}
    <!-- svelte-ignore a11y_autofocus -->
    <input
      class="field"
      {placeholder}
      {id}
      {type}
      {value}
      autofocus={autofocus === "true" ? true : false}
      disabled={disabled === "true" ? true : false}
      onkeydown={handleChange}
      onkeyup={handleChange}
      onkeypress={handleChange}
      onchange={handleChange}
    />
  {/if}
</div>

<style>
  @import "../reset.css";
  @import "../formfield.css";

  :host,
  :root {
    --khao-text-field-icon-space: var(--khao-sys-size-regular-1);
  }

  .icon {
    margin-right: var(--khao-text-field-icon-space);
  }
</style>

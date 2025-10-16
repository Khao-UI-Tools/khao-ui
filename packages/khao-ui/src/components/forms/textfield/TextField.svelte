<svelte:options
  customElement={{
    tag: "khao-text-field",
    shadow: "open",
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;
      };
    },
  }}
/>

<script lang="ts">
  import {
    type TextFieldType,
    textFieldTypeDefault,
  } from "../types/TextFieldType";
  import Icon from "../../../icons/Icon.svelte";
  import { type IconName } from "../../../icons/types/IconName";
  import type { StringBoolean } from "../../../common/types/StringBoolean";
  import { onMount } from "svelte";

  interface Props {
    label: string;
    value: string;
    placeholder: string;
    id: string;
    type: TextFieldType;
    iconName: IconName | "";
    autofocus: StringBoolean;
    disabled: StringBoolean;
    name?: string;
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
    name = "",
  }: Props = $props();

  if (type === "search" && iconName === "") {
    iconName = "search";
  }

  let internals: ElementInternals | null = null;
  let inputElement = $state<HTMLInputElement | null>(null);

  onMount(() => {
    // Get the host element and attach internals
    const host = (inputElement?.getRootNode() as ShadowRoot)?.host as HTMLElement;
    if (host && 'attachInternals' in host && !internals) {
      internals = (host as any).attachInternals();
      // Set initial form value
      if (internals && value) {
        internals.setFormValue(value);
      }
    }
  });

  function handleChange(event: Event) {
    const input = event.target as HTMLInputElement;

    // Update form value via ElementInternals
    if (internals) {
      internals.setFormValue(input.value);
    }

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
      bind:this={inputElement}
      class="field"
      {placeholder}
      {id}
      name={name || id}
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

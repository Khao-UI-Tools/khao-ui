<svelte:options
  customElement={{
    tag: "khao-select-field",
    shadow: "open",
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;
      };
    },
  }}
/>

<script lang="ts">
  import { onMount } from "svelte";

  let {
    label,
    selectedValue = "",
    options,
    id = `khao-select-field-${label}`,
    allowEmpty = false,
    name = ""
  }: {
    label: string;
    selectedValue?: string;
    options: string;
    id?: string;
    allowEmpty?: boolean;
    name?: string
  } = $props();

  let internals: ElementInternals | null = null;
  let selectElement = $state<HTMLSelectElement | null>(null);

  onMount(() => {
    // Get the host element and attach internals
    const host = (selectElement?.getRootNode() as ShadowRoot)?.host as HTMLElement;
    if (host && 'attachInternals' in host && !internals) {
      internals = (host as any).attachInternals();
      // Set initial form value
      if (internals && selectedValue) {
        internals.setFormValue(selectedValue);
      }
    }
  });

  function handleChange(event: Event) {
    const select = event.target as HTMLSelectElement;

    // Update form value via ElementInternals
    if (internals) {
      internals.setFormValue(select.value);
    }

    const CHANGE_EVENT_NAME = "khao-select-field-change";

    const changeEvent = new CustomEvent(CHANGE_EVENT_NAME, {
      detail: {
        value: select.value,
      },
      bubbles: true,
      composed: true,
    });

    select.dispatchEvent(changeEvent);
  }
</script>

<div class="formfield">
  <label class="label" for={id}>{label}</label>

  <select bind:this={selectElement} class="field" {id} name={name || id} onchange={handleChange}>
    {#if allowEmpty}
      <option value=""></option>
    {/if}

    {#if options}
      {#each JSON.parse(options) as { label, value }}
        {#if selectedValue === value}
          <option {value} selected>{label}</option>
        {:else}
          <option {value}>{label}</option>
        {/if}
      {/each}
    {/if}
  </select>
</div>

<style>
  @import "../reset.css";
  @import "../formfield.css";

  .formfield {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10"><path fill="black" stroke="black" stroke-width=".2" d="M2 0L0 2h4zM2 5L0 3h4z"/></svg>');
    background-repeat: no-repeat;
    background-size: var(--khao-sys-size-regular-6);
    background-position: right 2px bottom 0;
  }

  select.field {
    padding-right: var(--khao-sys-size-regular-6);
  }
</style>

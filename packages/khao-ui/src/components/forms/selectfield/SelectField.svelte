<svelte:options customElement="khao-select-field" />

<script lang="ts">
  export let label: string;
  export let selectedValue: string = "";
  export let options: string;
  export let id: string = `khao-select-field-${label}`;
  export let allowEmpty: boolean = false;

  function handleChange(event: Event) {
    const select = event.target as HTMLSelectElement;

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

  <select class="field" {id} on:change={handleChange}>
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

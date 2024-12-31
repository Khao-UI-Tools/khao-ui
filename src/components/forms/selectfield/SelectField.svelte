<svelte:options customElement="khao-ui-selectfield" />

<script lang="ts">
  import type { Option } from "../types/Option";

  export let label: string;
  export let value: string;
  export let options: Option[] = [];
  export let id: string = `khao-ui-selectfield-${label}`;
  export let allowEmpty: boolean = false;
</script>

<div class="formfield">
  <label class="label" for={id}>{label}</label>

  <select class="field" {id}>
    {#if allowEmpty}
      <option value=""></option>
    {/if}

    {#each options as option}
      {#if value === option.value}
        <option value={option.value} selected>{option.label}</option>
      {:else}
        <option value={option.value}>{option.label}</option>
      {/if}
    {/each}
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

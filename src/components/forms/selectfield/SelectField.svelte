<svelte:options customElement="khao-ui-selectfield" />

<script lang="ts">
  export let label: string;
  export let options: string;
  export let id: string = `khao-ui-selectfield-${label}`;
</script>

<div class="formfield">
  <label class="label" for={id}>{label}</label>

  <select class="input" {id}>
    <option value="1">{label}</option>
    <option value="2">{label}</option>
    <option value="3">{label}</option>
    <option value="4">{label}</option>
  </select>
</div>

<style>
  @import "../reset.css";
  @import "../formfield.css";
</style>

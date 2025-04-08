<svelte:options customElement="khao-pagination" />

<script lang="ts">
  export let urlPrefix: string = "";
  export let currentPage: number = 1;
  export let totalPages: number = 1;
</script>

<div class="pagination"></div>

<style>
  :host {
    --khao-spinner-color: var(--khao-sys-color-neutral30);
    --khao-spinner-size: var(--khao-sys-size-regular-10);
  }
</style>

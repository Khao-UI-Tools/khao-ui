<svelte:options customElement="khao-pagination" />

<script lang="ts">
  import PaginationItem from "../paginationItem/PaginationItem.svelte";

  import {
    createPaginationItems,
    type PaginationItemConfig,
  } from "./createPaginationItems";

  export let urlPrefix: string = "";
  export let titlePrefix: string = "";
  export let currentPage: string = "1";
  export let totalPages: string = "1";

  let currentPageNumber = parseInt(currentPage, 10);
  let totalPagesNumber = parseInt(totalPages, 10);

  const adjacentLinks = 3;
  let paginationItems: PaginationItemConfig[] = [];

  if (currentPageNumber > 0 && totalPagesNumber > 1) {
    paginationItems = createPaginationItems(
      urlPrefix,
      titlePrefix,
      currentPageNumber,
      totalPagesNumber,
      adjacentLinks
    );
  }
</script>

{#if paginationItems.length > 1}
  <div class="wrapper">
    <ul class="pagination">
      {#each paginationItems as { label, href, title, active, disabled }}
        <PaginationItem {label} {href} {title} {active} {disabled}
        ></PaginationItem>
      {/each}
    </ul>
  </div>
{/if}

<style>
  :host {
    --khao-pagination-gap: var(--khao-sys-size-regular-1);
  }

  .wrapper {
    width: 100%;
    display: block;
  }

  .pagination {
    list-style: none;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: var(--khao-pagination-gap);
  }
</style>

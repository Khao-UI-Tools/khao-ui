<svelte:options customElement="khao-pagination" />

<script lang="ts">
  import PaginationItem from "../paginationItem/PaginationItem.svelte";

  import {
    createPaginationItems,
    type PaginationItemConfig,
  } from "./createPaginationItems";

  let {
    urlPrefix = "",
    titlePrefix = "",
    currentPage = "1",
    totalPages = "1"
  }: {
    urlPrefix?: string;
    titlePrefix?: string;
    currentPage?: string;
    totalPages?: string
  } = $props();

  let currentPageNumber = $derived(currentPage != "" ? parseInt(currentPage, 10) : 1);
  let totalPagesNumber = $derived(totalPages != "" ? parseInt(totalPages, 10) : 1);

  const adjacentLinks = 3;

  let paginationItems = $derived(
    currentPageNumber > 0 &&
    totalPagesNumber > 1 &&
    totalPagesNumber >= currentPageNumber
      ? createPaginationItems(
          urlPrefix,
          titlePrefix,
          currentPageNumber,
          totalPagesNumber,
          adjacentLinks
        )
      : []
  );
</script>

{#if paginationItems.length > 1}
  <nav class="wrapper" aria-label="Pagination">
    <ul class="pagination">
      {#each paginationItems as { label, href, title, active, disabled }}
        <PaginationItem {label} {href} {title} {active} {disabled}
        ></PaginationItem>
      {/each}
    </ul>
  </nav>
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
    padding-left: 0;
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

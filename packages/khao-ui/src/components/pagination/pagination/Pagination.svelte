<svelte:options customElement="khao-pagination" />

<script lang="ts">
  import { type StringBoolean } from "../../../common/types/StringBoolean";
  import PaginationItem from "../paginationItem/PaginationItem.svelte";

  interface PaginationItemConfig {
    label: string;
    href: string;
    title: string;
    active?: StringBoolean;
    disabled?: StringBoolean;
  }

  export let urlPrefix: string = "";
  export let titlePrefix: string = "";
  export let currentPage: number = 1;
  export let totalPages: number = 1;

  const adjacentLinks = 3;

  const maxNumberOfLinks = 3 * adjacentLinks;

  const paginationItems: PaginationItemConfig[] = [];

  if (currentPage > 0 && totalPages > 1) {
    if (totalPages <= maxNumberOfLinks) {
      for (let ii = 1; ii <= totalPages; ii++) {
        paginationItems.push({
          label: `${ii}`,
          href: `${urlPrefix}${ii}`,
          title: `${titlePrefix} ${ii}`,
          active: currentPage === ii ? "true" : "false",
          disabled: "false",
        });
      }
    } else {
      if (currentPage < totalPages + 1) {
        let lowerLimit = 1;
        let upperLimit = maxNumberOfLinks;

        if (currentPage < totalPages - adjacentLinks) {
          lowerLimit =
            currentPage > adjacentLinks ? currentPage - adjacentLinks : 1;
          upperLimit = lowerLimit + adjacentLinks * 2;
        } else {
          if (currentPage > totalPages + 1 - adjacentLinks) {
            console.log("special case");

            lowerLimit = totalPages + 1 - maxNumberOfLinks;
            upperLimit = totalPages + 1;
          } else {
            lowerLimit = totalPages + 1 - maxNumberOfLinks;
            upperLimit = totalPages + 1;
          }
        }

        for (let ii = lowerLimit; ii < upperLimit; ii++) {
          paginationItems.push({
            label: `${ii}`,
            href: `${urlPrefix}${ii}`,
            title: `${titlePrefix} ${ii}`,
            active: currentPage === ii ? "true" : "false",
            disabled: "false",
          });
        }

        if (paginationItems.length < maxNumberOfLinks) {
          paginationItems.push({
            label: `...`,
            href: ``,
            title: `...`,
            active: "false",
            disabled: "true",
          });

          paginationItems.push({
            label: `${totalPages}`,
            href: `${urlPrefix}${totalPages}`,
            title: `${titlePrefix} ${totalPages}`,
            active: "false",
            disabled: "false",
          });

          paginationItems.push({
            label: `>>`,
            href: `${urlPrefix}${currentPage + 1}`,
            title: `${titlePrefix} ${currentPage + 1}`,
            active: "false",
            disabled: "false",
          });
        }
      }
    }
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

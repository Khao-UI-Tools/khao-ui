import { type StringBoolean } from "../../../common/types/StringBoolean";

export interface PaginationItemConfig {
  label: string;
  href: string;
  title: string;
  active?: StringBoolean;
  disabled?: StringBoolean;
}

export const createPaginationItems = (
  urlPrefix: string,
  titlePrefix: string,
  currentPage: number,
  totalPages: number,
  adjacentLinks: number
): PaginationItemConfig[] => {
  const paginationItems: PaginationItemConfig[] = [];

  const maxNumberOfLinks = 3 * adjacentLinks;

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

  return paginationItems;
};

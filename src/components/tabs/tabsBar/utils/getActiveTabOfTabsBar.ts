import getElementsOfUnamedSlot from "../../../../common/utils/getElementsOfUnamedSlot";

const getActiveTabOfTabsBar = (
  tabsBar: HTMLElement
): HTMLElement | undefined => {
  let activeTab: HTMLElement | undefined;

  const tabs = getElementsOfUnamedSlot(tabsBar);

  tabs?.forEach((tab) => {
    const tabElement = <HTMLElement>tab.shadowRoot?.childNodes[1];

    if (tabElement.ariaSelected === "true") {
      activeTab = tabElement;
    }
  });

  return activeTab;
};

export default getActiveTabOfTabsBar;

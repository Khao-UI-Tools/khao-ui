import getActiveTabOfTabsBar from "./getActiveTabOfTabsBar";

const scrollActiveTabIntoView = (tabsBar: HTMLElement) => {
  if (!!window.IntersectionObserver) {
    const callback: IntersectionObserverCallback = function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          performScrolling(tabsBar);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px 420px 0px",
    });

    observer.observe(tabsBar);
  }
};

const performScrolling = (tabsBar: HTMLElement) => {
  const wrapperWidth = tabsBar.clientWidth;
  const activeTab = getActiveTabOfTabsBar(tabsBar);

  if (activeTab) {
    if (activeTab.offsetLeft > wrapperWidth) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }
};

export default scrollActiveTabIntoView;

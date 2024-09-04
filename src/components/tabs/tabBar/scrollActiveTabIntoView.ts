const scrollActiveTabIntoView = (tabBar: HTMLElement) => {
  if (!!window.IntersectionObserver) {
    const callback: IntersectionObserverCallback = function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          performScrolling(tabBar);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 1.0,
    });

    observer.observe(tabBar);
  }
};

const performScrolling = (tabBar: HTMLElement) => {
  const wrapperWidth = tabBar.clientWidth;

  const activeTab = tabBar.querySelector(
    ".tab-bar > li.tab[aria-selected='true']"
  ) as HTMLElement;

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

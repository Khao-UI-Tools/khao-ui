const initInfiniteSroll = (
  scroller: HTMLElement,
  querySelector: string,
  paginationSlug: string,
  callback?: () => void
) => {
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMore(querySelector, paginationSlug, callback);
      }
    });
  };

  const options = {
    root: document,
    rootMargin: "0px 0px 100px 0px",
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(observerCallback, options);

  observer.observe(scroller);
};

const alreadyAddedPages = ["1"];

const loadMore = (
  querySelector: string,
  paginationSlug: string,
  callback?: () => void
) => {
  const currentUrl = document.location.href;

  console.log("loadMore", querySelector, paginationSlug);

  let currentPage = "1";
  let nextPage = "2";
  let nextUrl = `${currentUrl}${paginationSlug}${nextPage}`;

  if (currentUrl.includes(paginationSlug)) {
    const splitters = currentUrl.split(paginationSlug);

    if (splitters.length === 2) {
      currentPage = splitters[1].replace("/", "");
      nextPage = `${parseInt(currentPage, 10) + 1}`;
      nextUrl = currentUrl.replace(`/${currentPage}`, `/${nextPage}`);
    }
  }

  console.log("try to load ", nextUrl);

  if (alreadyAddedPages.indexOf(nextPage) === -1) {
    console.log("try to load ", nextUrl);

    fetch(nextUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "error loading next page, perhaps we reached the end!"
          );
        }
        return response.text();
      })
      .then((body) => {
        const lastArticle = document.querySelector(
          `${querySelector}:last-of-type`
        );

        var template = document.createElement("template");
        template.innerHTML = body;

        const newItems = template.content.querySelectorAll(querySelector);

        newItems.forEach((item) => {
          lastArticle?.parentElement?.appendChild(item);
        });

        if (callback !== undefined) {
          callback();
        }

        history.pushState({}, "", nextUrl);
      })
      .catch((error) => {
        console.log(error);
      });

    alreadyAddedPages.push(nextPage);
  } else {
    console.log("already added", nextPage);
  }

  console.log("load more", currentUrl, currentPage, nextUrl);
};

export default initInfiniteSroll;

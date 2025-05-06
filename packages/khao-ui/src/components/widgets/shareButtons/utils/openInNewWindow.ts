function openInNewWindow(
  url: string,
  width: number = 700,
  height: number = 650
) {
  const windowFeatures = `left=100,top=100,width=${width},height=${height}}`;
  window.open(url, "new", windowFeatures);
}

export default openInNewWindow;

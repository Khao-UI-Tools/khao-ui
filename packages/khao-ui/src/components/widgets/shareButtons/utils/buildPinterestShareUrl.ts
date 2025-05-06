function buildPinterestShareUrl(
  sharedUrl: string,
  sharedMediaUrl: string,
  sharedTitle: string,
  sharedDescription: string
): string {
  const baseUrl = "https://www.pinterest.de/pin-builder/";
  const urlToShare = sharedUrl || window.location.href;
  const saveMediaUrl = sharedMediaUrl.replace("ß", "ss");
  const url = `${baseUrl}?description=${sharedDescription}&media=${encodeURIComponent(
    saveMediaUrl
  )}&method=button&title=${sharedTitle}&url=${encodeURIComponent(urlToShare)}`;
  console.log("buildPinterestShareUrl", url);
  return url;
}

export default buildPinterestShareUrl;

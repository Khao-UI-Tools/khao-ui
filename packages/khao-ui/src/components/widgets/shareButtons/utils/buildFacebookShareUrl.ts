function buildFacebookShareUrl(sharedUrl: string): string {
  const baseUrl = "https://www.facebook.com/share.php?u=";
  const urlToShare = sharedUrl || window.location.href;
  const url = `${baseUrl}${urlToShare}`;
  console.log("buildFacebookShareUrl", url);
  return url;
}

export default buildFacebookShareUrl;

async function shareNativly(url: string, title: string, text: string) {
  const shareData = {
    title,
    text,
    url,
  };

  try {
    await navigator.share(shareData);
    console.log(`${title} shared successfully`);
  } catch (err) {
    console.error(`Error while sharing: ${err}`);
  }
}

export default shareNativly;

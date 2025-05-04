let wakeLock: WakeLockSentinel | null = null;

export function isWakeLockSupported() {
  return "wakeLock" in navigator;
}

export async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");

    console.log("Screen Wake Lock requested");

    wakeLock.addEventListener("release", () => {
      console.log("Screen Wake Lock released:", wakeLock?.released);
    });
  } catch (err) {
    console.error("Screen Wake Lock failed");
  }
  return wakeLock;
}

export async function releaseWakeLock() {
  return await wakeLock?.release();
}

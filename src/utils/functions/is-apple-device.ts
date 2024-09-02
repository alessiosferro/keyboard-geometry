export default function isAppleDevice() {
  return /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
}

import INTERVAL_DURATION from "../constants/interval-duration";

export default function waitForDOMLoading(callback: () => void) {
  const intervalId = window.setInterval(() => {
    const applet = document.querySelector("#ggbApplet");
    const app = applet?.querySelector(".toolsPanel");

    if (applet?.ariaLabel === 'Geometry' && !!app) {
      window.clearInterval(intervalId);
      callback();
    }
  }, INTERVAL_DURATION);
}
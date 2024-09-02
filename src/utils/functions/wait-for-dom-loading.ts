import INTERVAL_DURATION from "../constants/interval-duration";

export default function waitForDOMLoading(callback: () => void) {
  const intervalId = window.setInterval(() => {
    const app = document.querySelector("#ggbApplet .toolsPanel");

    if (app) {
      window.clearInterval(intervalId);
      callback();
    }
  }, INTERVAL_DURATION);
}
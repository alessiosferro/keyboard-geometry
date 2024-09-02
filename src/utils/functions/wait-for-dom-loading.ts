export default function waitForDOMLoading(callback: () => void) {
  const intervalId = window.setInterval(() => {
    const app = document.querySelector("#ggbApplet .toolsPanel");

    if (app) {
      window.clearInterval(intervalId);
      callback();
    }
  }, 100);
}
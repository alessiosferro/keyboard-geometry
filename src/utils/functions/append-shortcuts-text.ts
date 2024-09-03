import getShortcuts from "./get-shortcuts";
import INTERVAL_DURATION from "../constants/interval-duration";
import getUpdatedShortcuts from "./get-updated-shortcuts";
import getToolMap from "./get-tool-map";

export default function appendShortcutsText(params?: { reset: boolean }) {
  const {
    reset = false
  } = params || {};

  const intervalId = window.setInterval(() => {
    Object.entries(getUpdatedShortcuts(getShortcuts())).forEach(([shortcut, {toolName}]) => {
      if (!getToolMap()[toolName]) return;

      const toolLabels = document.querySelectorAll<HTMLElement>(`#${getToolMap()[toolName].value} .gwt-Label`);

      toolLabels.forEach((toolElement) => {
        if (intervalId && toolElement.innerHTML.includes(shortcut)) {
          return clearInterval(intervalId);
        }

        let currentTextContent = toolElement.innerHTML;

        if (reset && !!currentTextContent) {
          currentTextContent = currentTextContent.split('<br>')[0];
        }

        toolElement.innerHTML = `${currentTextContent}<br>(${shortcut})`
      });
    });
  }, INTERVAL_DURATION);
}
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
      const tool = getToolMap()[toolName];

      if (!tool) return;

      const toolLabels = document.querySelectorAll<HTMLElement>(`#${tool.value} .gwt-Label`);

      toolLabels.forEach((toolElement) => {
        if (!!shortcut && intervalId && toolElement.innerHTML.includes(shortcut)) {
          return clearInterval(intervalId);
        }

        let currentTextContent = toolElement.innerHTML;

        if (reset && !!currentTextContent) {
          currentTextContent = currentTextContent.split('<br>')[0];
        }

        toolElement.innerHTML = `${currentTextContent}${shortcut ? `<br>(${shortcut})` : ""}`
      });
    });
  }, INTERVAL_DURATION);
}
import shortcuts from "../constants/shortcuts";
import TOOL_MAP from "../constants/tool-map";

export default function appendShortcutsText() {
  let isFirstInterval = true;

  const intervalId = window.setInterval(() => {
    Object.entries(shortcuts).forEach(([shortcut, {toolName}]) => {
      const toolLabels = document.querySelectorAll<HTMLElement>(`#${TOOL_MAP[toolName].value} .gwt-Label`);

      toolLabels.forEach((toolElement) => {
        if (intervalId && toolElement.innerHTML.includes(shortcut)) {
          return clearInterval(intervalId);
        }

        const currentTextContent = toolElement.innerHTML;
        toolElement.innerHTML = `${currentTextContent}<br>(${shortcut})`
      });
    });

    isFirstInterval = false;

    if (!isFirstInterval && Array.from(getAllToolLabels()).every(label => label.textContent?.includes("<br>"))) {
      clearInterval(intervalId);
    }
  }, 100);
}

function getAllToolLabels() {
  return document.querySelectorAll<HTMLElement>(`.gwt-Label`);
}
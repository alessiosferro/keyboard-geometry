import shortcuts from "../utils/shortcuts";
import TOOL_MAP from "../utils/tool-map";

export default function appendShortcutsText() {
  const intervalId = setInterval(() => {
    Object.entries(shortcuts).forEach(([shortcut, {toolName}]) => {
      const toolElements = document.querySelectorAll<HTMLElement>(`#${TOOL_MAP[toolName].value} .gwt-Label`);

      toolElements.forEach((toolElement) => {
        if (toolElement.innerHTML.includes(shortcut)) {
          window.clearInterval(intervalId);
          return;
        }

        const currentTextContent = toolElement.innerHTML;
        toolElement.innerHTML = `${currentTextContent}<br>(${shortcut})`
      });
    });
  }, 100);
}
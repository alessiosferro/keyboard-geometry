import shortcuts from "../utils/shortcuts";
import TOOL_MAP from "../utils/tool-map";

export default function appendShortcutsText() {
  Object.entries(shortcuts).forEach(([shortcut, {toolName}]) => {
    const toolElements = document.querySelectorAll<HTMLElement>(`#${TOOL_MAP[toolName].value} .gwt-Label`);

    toolElements.forEach((toolElement) => {
      toolElement.style.height = 'unset';
      toolElement.style.width = 'unset';
      toolElement.style.wordBreak = 'break-word';
      toolElement.style.maxWidth = '80px';
      const currentTextContent = toolElement.innerHTML;
      toolElement.innerHTML = `${currentTextContent}<br>(${shortcut})`
    });
  });
}
import shortcuts, {Shortcuts} from "../utils/shortcuts";
import TOOL_MAP from "../utils/tool-map";
import {skip} from "rxjs";

export default function appendShortcutsText() {
  const intervalId = window.setInterval(() => {
    updateShortcutText(shortcuts.getValue(), intervalId);
  }, 200);

  shortcuts.pipe(skip(1)).subscribe((shortcuts) => updateShortcutText(shortcuts));
}

const updateShortcutText = (shortcuts: Shortcuts, intervalId?: number) => {
  Object.entries(shortcuts).forEach(([shortcut, {toolName}]) => {
    const toolElements = document.querySelectorAll<HTMLElement>(`#${TOOL_MAP[toolName].value} .gwt-Label`);

    toolElements.forEach((toolElement) => {
      if (intervalId && toolElement.innerHTML.includes(shortcut)) {
        return clearInterval(intervalId);
      }

      const currentTextContent = toolElement.innerHTML;
      toolElement.innerHTML = `${currentTextContent}<br>(${shortcut})`
    });
  });
}
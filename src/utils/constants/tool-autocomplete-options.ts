import TOOL_MAP, {Tool} from "./tool-map";
import defaultToolShortcuts from "./default-tool-shortcuts";
import {SHORTCUTS} from "../../popup";

const getLabelWithShortcut = (toolName: Tool) => {
  const savedShortcuts = localStorage.getItem(SHORTCUTS);
  const shortcuts = savedShortcuts ? JSON.parse(savedShortcuts) : defaultToolShortcuts;
  const storedShortcutPair = Object.entries(shortcuts).find(([name]) => toolName === name);
  const [, shortcut] = storedShortcutPair || [];
  return shortcut ? `${toolName} (${shortcut})` : toolName;
}

const toolAutocompleteOptions = Object.entries(TOOL_MAP).map(([key, {value}]) => ({
  value,
  label: getLabelWithShortcut(key as Tool)
}));

export default toolAutocompleteOptions;

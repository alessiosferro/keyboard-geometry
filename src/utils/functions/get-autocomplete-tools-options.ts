import getToolMap, {Tool} from "./get-tool-map";
import getDefaultToolShortcuts from "./get-default-tool-shortcuts";
import getStoredShortcuts from "./get-stored-shortcuts";

const getLabelWithShortcut = (toolName: Tool) => {
  const savedShortcuts = getStoredShortcuts();
  const shortcuts = savedShortcuts ? JSON.parse(savedShortcuts) : getDefaultToolShortcuts();
  const storedShortcutPair = Object.entries(shortcuts).find(([name]) => toolName === name);
  const [, shortcut] = storedShortcutPair || [];
  return shortcut ? `${toolName} (${shortcut})` : toolName;
}

const getAutocompleteToolsOptions = () => {
  return Object.entries(getToolMap()).map(([key, {value}]) => ({
    value,
    label: getLabelWithShortcut(key as Tool)
  }));
}

export default getAutocompleteToolsOptions;

import TOOL_MAP, {Tool} from "./tool-map";
import actions from "./actions";
import defaultToolShortcuts from "./default-tool-shortcuts";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./local-storage-shortcuts-key";

export function getUpdatedShortcuts(shortcuts: Record<Tool, string>): Shortcuts {
  const tools = (Object.keys(TOOL_MAP) as Tool[]);

  return tools.reduce((acc, toolName) => ({
    ...acc,
    [shortcuts[toolName]]: {
      callback: actions[toolName],
      toolName
    }
  }), {});
}

export type Shortcuts = Record<string, {
  callback: () => void,
  toolName: Tool
}>

const storedShortcuts = localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY)

const shortcuts = getUpdatedShortcuts(storedShortcuts ? JSON.parse(storedShortcuts) : defaultToolShortcuts);

export default shortcuts;
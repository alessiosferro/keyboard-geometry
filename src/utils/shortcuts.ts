import LOCAL_STORAGE_SHORTCUTS_KEY from "./local-storage-shortcuts-key";
import TOOL_MAP, {Tool} from "./tool-map";
import actions from "./actions";
import {BehaviorSubject} from "rxjs";
import defaultToolShortcuts from "./default-tool-shortcuts";

export function getUpdatedShortcuts() {
  const storedItems = localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY);
  const storedShortcuts = storedItems ? JSON.parse(storedItems) : defaultToolShortcuts as Record<Tool, string>;

  const tools = (Object.keys(TOOL_MAP) as Tool[]);

  return tools.reduce((acc, toolName) => ({
    ...acc,
    [storedShortcuts[toolName]]: {
      callback: actions[toolName],
      toolName
    }
  }), {});
}

const shortcuts: BehaviorSubject<Shortcuts> = new BehaviorSubject(getUpdatedShortcuts());

export type Shortcuts = Record<string, {
  callback: () => void,
  toolName: Tool
}>

export default shortcuts;
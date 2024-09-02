import {Tool} from "./tool-map";
import defaultToolShortcuts from "./default-tool-shortcuts";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./local-storage-shortcuts-key";
import getUpdatedShortcuts from "../functions/get-updated-shortcuts";

const storedShortcuts = localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY)

const shortcuts = getUpdatedShortcuts(storedShortcuts ? JSON.parse(storedShortcuts) : defaultToolShortcuts);

export default shortcuts;


export type Shortcuts = Record<string, {
  callback: () => void,
  toolName: Tool
}>
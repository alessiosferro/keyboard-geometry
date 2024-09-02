import defaultToolShortcuts from "./default-tool-shortcuts";

import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_SHORTCUTS_KEY_EN,
  LOCAL_STORAGE_SHORTCUTS_KEY_IT
} from "./local-storage-shortcuts-key";

const storedShortcuts = {
  it: localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY_IT),
  en: localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY_EN),
}

const languageKey = (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as "it" | "en") || "en";

const shortcuts = storedShortcuts[languageKey] ?
  JSON.parse(storedShortcuts[languageKey]) :
  defaultToolShortcuts;

export default shortcuts as Record<string, string>;
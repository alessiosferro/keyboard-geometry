import getDefaultToolShortcuts from "../constants/get-default-tool-shortcuts";

import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_SHORTCUTS_KEY_EN,
  LOCAL_STORAGE_SHORTCUTS_KEY_IT
} from "../constants/local-storage-shortcuts-key";


const getShortcuts = (): Record<string, string> => {
  const storedShortcuts = {
    it: localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY_IT),
    en: localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY_EN),
  }

  const languageKey = (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as "it" | "en") || "en";

  return storedShortcuts[languageKey] ?
    JSON.parse(storedShortcuts[languageKey]) :
    getDefaultToolShortcuts();
}

export default getShortcuts;
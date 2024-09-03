import getDefaultToolShortcuts from "./get-default-tool-shortcuts";

import {LOCAL_STORAGE_SHORTCUTS_KEY_EN, LOCAL_STORAGE_SHORTCUTS_KEY_IT} from "../constants/local-storage-shortcuts-key";
import getCurrentLanguage from "./get-current-language";

const getShortcuts = (): Record<string, string> => {
  const storedShortcuts = {
    it: localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY_IT),
    en: localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY_EN),
  }

  const languageKey = getCurrentLanguage();

  return storedShortcuts[languageKey] ?
    JSON.parse(storedShortcuts[languageKey]) :
    getDefaultToolShortcuts();
}

export default getShortcuts;
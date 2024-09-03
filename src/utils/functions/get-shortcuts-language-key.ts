import {LOCAL_STORAGE_SHORTCUTS_KEY_EN, LOCAL_STORAGE_SHORTCUTS_KEY_IT} from "../constants/local-storage-shortcuts-key";
import getCurrentLanguage from "./get-current-language";

export default function getShortcutsLanguageKey() {
  const languageKey = getCurrentLanguage();

  return {
    it: LOCAL_STORAGE_SHORTCUTS_KEY_IT,
    en: LOCAL_STORAGE_SHORTCUTS_KEY_EN,
  }[languageKey];
}
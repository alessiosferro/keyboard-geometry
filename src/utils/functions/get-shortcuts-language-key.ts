import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_SHORTCUTS_KEY_EN,
  LOCAL_STORAGE_SHORTCUTS_KEY_IT
} from "../constants/local-storage-shortcuts-key";

export default function getShortcutsLanguageKey() {
  const languageKey = (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as "it" | "en") || "en";

  return {
    it: LOCAL_STORAGE_SHORTCUTS_KEY_IT,
    en: LOCAL_STORAGE_SHORTCUTS_KEY_EN,
  }[languageKey];
}
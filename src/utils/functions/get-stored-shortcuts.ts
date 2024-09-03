import getShortcutsLanguageKey from "./get-shortcuts-language-key";


export default function getStoredShortcuts() {
  return localStorage.getItem(getShortcutsLanguageKey());
}

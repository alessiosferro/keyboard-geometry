import shortcuts from "../constants/shortcuts";
import getShortcutString from "./get-shortcut-string";

export default function listenKeydownEvents() {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    const shortcut = getShortcutString(event);

    if (shortcut === '⌘ Command + K') {
      const input = document.querySelector('#search-filter-extension input') as HTMLInputElement;
      if (!input) return;
      return input.focus();
    }

    if (shortcuts[shortcut]) {
      event.preventDefault();
      shortcuts[shortcut].callback();
    }
  });
}
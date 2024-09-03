import getShortcuts from "./get-shortcuts";
import getShortcutString from "./get-shortcut-string";
import getUpdatedShortcuts from "./get-updated-shortcuts";

export default function listenKeydownEvents() {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    const shortcut = getShortcutString(event);

    if (shortcut === '⌘ Command + K') {
      const input = document.querySelector('#search-filter-extension input') as HTMLInputElement;
      if (!input) return;
      return input.focus();
    }

    const updatedShortcuts = getUpdatedShortcuts(getShortcuts());

    if (updatedShortcuts[shortcut]) {
      event.preventDefault();
      updatedShortcuts[shortcut].callback();
    }
  });
}
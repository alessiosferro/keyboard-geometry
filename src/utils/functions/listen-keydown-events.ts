import getShortcuts from "./get-shortcuts";
import getShortcutString from "./get-shortcut-string";
import getUpdatedShortcuts from "./get-updated-shortcuts";
import isAppleDevice from "./is-apple-device";

const listener = (event: KeyboardEvent) => {
  const shortcut = getShortcutString(event);

  const shortcutToCheck = isAppleDevice() ? '⌘ Command + K' : 'Alt + ⇧ Shift + K';

  if (shortcut === shortcutToCheck) {
    const input = document.querySelector('#search-filter-extension input') as HTMLInputElement;
    if (!input) return;
    return input.focus();
  }

  const updatedShortcuts = getUpdatedShortcuts(getShortcuts());

  if (updatedShortcuts[shortcut]) {
    event.preventDefault();
    updatedShortcuts[shortcut].callback();
  }
}

export default function listenKeydownEvents() {
  document.addEventListener('keydown', listener);

  return () => {
    document.removeEventListener('keydown', listener);
  }
}
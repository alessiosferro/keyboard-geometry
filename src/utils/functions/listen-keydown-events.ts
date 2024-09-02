import shortcuts from "../constants/shortcuts";
import getShortcutString from "./get-shortcut-string";

export default function listenKeydownEvents() {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    const shortcut = getShortcutString(event);

    if (shortcuts[shortcut]) {
      event.preventDefault();
      shortcuts[shortcut].callback();
    }
  });
}
import shortcuts from "../utils/shortcuts";
import {Subscription} from "rxjs";

export default function listenKeydownEvents() {
  let subscription: Subscription;

  document.addEventListener('keydown', (event) => {
    if (subscription) {
      subscription.unsubscribe();
    }

    const key: string[] = [];

    if (event.metaKey) {
      key.push('Meta');
    }

    if (event.ctrlKey) {
      key.push('Control');
    }

    if (event.altKey) {
      key.push('Alt');
    }

    if (event.shiftKey) {
      key.push('Shift');
    }

    if (!['Meta', 'Control', 'Alt', 'Shift'].includes(event.key)) {
      key.push(event.code.toLowerCase().slice(-1));
    }

    const shortcut = key.join('+') as keyof typeof shortcuts;

    subscription = shortcuts.subscribe(shortcuts => {
      event.preventDefault();
      shortcuts[shortcut].callback();
    });
  });
}
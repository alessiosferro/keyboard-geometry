import shortcuts from "../utils/shortcuts";

export default function listenKeydownEvents() {
  document.addEventListener('keydown', (event) => {
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

    if (shortcuts[shortcut]) {
      event.preventDefault();
      shortcuts[shortcut].callback();
    }
  });
}
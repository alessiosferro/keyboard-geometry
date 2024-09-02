import shortcuts from "../constants/shortcuts";
import isAppleDevice from "./is-apple-device";

export default function getShortcutString(event: KeyboardEvent | React.KeyboardEvent<HTMLInputElement>) {
  const key: string[] = [];

  const isApple = isAppleDevice();

  if (event.metaKey) {
    key.push('⌘ Command');
  }

  if (event.ctrlKey) {
    key.push(isApple ? '⌃ Control' : 'Ctrl');
  }

  if (event.altKey) {
    key.push(isApple ? '⌥ Option' : 'Alt');
  }

  if (event.shiftKey) {
    key.push('⇧ Shift');
  }

  if (!['Meta', 'Control', 'Alt', 'Shift'].includes(event.key)) {
    key.push(event.key.toUpperCase());
  }

  return key.join(' + ') as keyof typeof shortcuts;
}
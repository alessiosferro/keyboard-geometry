import isAppleDevice from "./is-apple-device";

export function getAltKeyStr() {
  const isApple = isAppleDevice();
  return isApple ? '⌥ Option' : 'Alt'
}

export function getCtrlKeyStr() {
  const isApple = isAppleDevice();
  return isApple ? '⌃ Control' : 'Ctrl'
}

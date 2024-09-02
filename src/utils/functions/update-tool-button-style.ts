import INTERVAL_DURATION from "../constants/interval-duration";

export default function updateToolButtonStyle() {
  let isFirstInterval = true;

  const intervalId = setInterval(() => {
    const toolButtons = document.querySelectorAll<HTMLElement>('.toolButton');

    const toolButtonsArray = Array.from(toolButtons);

    toolButtonsArray.forEach((toolButton) => {
      toolButton.style.height = 'unset';
      toolButton.style.margin = '0';

      const label = toolButton.querySelector<HTMLDivElement>('.gwt-Label')!
      label.style.height = 'unset';
      label.style.width = 'unset';
      label.style.wordBreak = 'break-word';
      label.style.maxWidth = '80px';
    });

    if (!isFirstInterval && toolButtonsArray.every(item => item.style.height === 'unset')) {
      clearInterval(intervalId);
    }

    isFirstInterval = false;
  }, INTERVAL_DURATION);
}
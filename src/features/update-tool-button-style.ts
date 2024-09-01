export default function updateToolButtonStyle() {
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

    if (toolButtonsArray.every(item => item.style.height === 'unset')) {
      clearInterval(intervalId);
    }
  }, 100);
}
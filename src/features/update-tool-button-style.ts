export default function updateToolButtonStyle() {
  const intervalId = setInterval(() => {
    const toolButtons = document.querySelectorAll<HTMLElement>('.toolButton');
    const toolButtonLabels = document.querySelectorAll<HTMLElement>('.toolButton .gwt-Label');

    const toolButtonsArray = Array.from(toolButtons);
    const toolButtonLabelsArray = Array.from(toolButtonLabels);

    const [firstToolButton] = toolButtonsArray;
    const [firstToolButtonLabel] = toolButtonLabelsArray;

    toolButtonsArray.forEach((toolButton) => {
      toolButton.style.height = 'unset';
      toolButton.style.margin = '0';
    });

    toolButtonLabelsArray.forEach((toolLabel) => {
      toolLabel.style.height = 'unset';
      toolLabel.style.width = 'unset';
      toolLabel.style.wordBreak = 'break-word';
      toolLabel.style.maxWidth = '80px';
    });

    if (firstToolButton.style.height === 'unset' && firstToolButtonLabel.style.height === 'unset') {
      window.clearInterval(intervalId);
    }
  }, 100);
}
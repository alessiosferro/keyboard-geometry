export default function waitForDOMLoading(callback: () => void, unmountFilterComponent: null | (() => void)) {
  const pickerButton = document.querySelector("#suiteAppPicker");

  if (!pickerButton) {
    return;
  }

  const observer = new MutationObserver((mutationsList) => {
    const [mutation] = mutationsList;

    const targetButton = (mutation.target as HTMLButtonElement);

    if (!targetButton) return;

    const label = targetButton.querySelector('.gwt-Label') as HTMLDivElement;

    if (!label) return;

    if (label.dataset.transKey === 'Geometry') {
      const intervalId = setInterval(() => {
        const toolsPanel = document.querySelector("#ggbApplet .toolsPanel");

        if (toolsPanel) {
          clearInterval(intervalId);
          callback();
        }
      }, 100);

      return;
    }

    unmountFilterComponent?.();
  });

  observer.observe(pickerButton!, {childList: true, attributeFilter: ['data-trans-key'], subtree: true});
}
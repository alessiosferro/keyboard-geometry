export default function waitForDOMLoading(callback: () => void, unmountFilterComponent: null | (() => void)) {
  let elementToObserve = document.querySelector("#suiteAppPicker");

  let intervalId: number;

  const isGeometryPage = window.location.pathname.includes("geometry");

  if (isGeometryPage) {
    elementToObserve = document.body;
  }

  if (!elementToObserve) {
    return;
  }

  const observer = new MutationObserver((mutationsList) => {
    if (isGeometryPage) {
      clearInterval(intervalId);

      intervalId = window.setInterval(() => {
        onToolsPanelMount(intervalId, callback, observer);
      }, 100);

      return;
    }

    const [mutation] = mutationsList;

    const targetButton = (mutation.target as HTMLButtonElement);

    if (!targetButton) return;

    const label = targetButton.querySelector('.gwt-Label') as HTMLDivElement;

    if (!label) return;

    if (label.dataset.transKey === 'Geometry') {
      clearInterval(intervalId);

      intervalId = setInterval(() => {
        onToolsPanelMount(intervalId, callback, observer);
      }, 100);

      return;
    }

    unmountFilterComponent?.();
  });

  observer.observe(elementToObserve!, {childList: true, attributeFilter: ['data-trans-key'], subtree: true});
}

function onToolsPanelMount(intervalId: number, callback: () => void, observer: MutationObserver) {
  const toolsPanel = document.querySelector("#ggbApplet .toolsPanel");

  if (toolsPanel) {
    observer.disconnect();
    clearInterval(intervalId);
    callback();
  }
}
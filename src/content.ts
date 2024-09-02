import waitForDOMLoading from "./utils/functions/wait-for-dom-loading";
import expandTools from "./utils/functions/expand-tools";
import listenKeydownEvents from "./utils/functions/listen-keydown-events";
import updateCategoryPanelStyle from "./utils/functions/update-category-panel-style";
import updateToolButtonStyle from "./utils/functions/update-tool-button-style";
import appendShortcutsText from "./utils/functions/append-shortcuts-text";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./utils/constants/local-storage-shortcuts-key";
import shortcuts from "./utils/constants/shortcuts";
import drawSearchFilter from "./utils/functions/draw-search-filter";

if (!localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY)) {
  localStorage.setItem(LOCAL_STORAGE_SHORTCUTS_KEY, JSON.stringify(shortcuts));
}

console.log("Geogebra Shortcuts System v1.0");

waitForDOMLoading(() => {
  expandTools();
  listenKeydownEvents();
  updateCategoryPanelStyle();
  updateToolButtonStyle();
  appendShortcutsText();
  drawSearchFilter();
});

chrome.runtime.onMessage.addListener(function (request: { action: string, value: string }) {
  switch (request.action) {
    case "updateLocalStorage": {
      localStorage.setItem(LOCAL_STORAGE_SHORTCUTS_KEY, request.value);
      location.reload();
      break;
    }
  }
});
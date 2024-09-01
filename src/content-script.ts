import waitForDOMLoading from "../src/utils/wait-for-dom-loading";
import expandTools from "../src/features/expand-tools";
import listenKeydownEvents from "../src/features/listen-keydown-events";
import flexCategoryPanel from "../src/features/flex-category-panel";
import updateToolButtonStyle from "../src/features/update-tool-button-style";
import appendShortcutsText from "../src/features/append-shortcuts-text";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./utils/local-storage-shortcuts-key";
import shortcuts from "./utils/shortcuts";

if (!localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY)) {
  localStorage.setItem(LOCAL_STORAGE_SHORTCUTS_KEY, JSON.stringify(shortcuts));
}

waitForDOMLoading(() => {
  expandTools();
  listenKeydownEvents();
  flexCategoryPanel();
  updateToolButtonStyle();
  appendShortcutsText();
});

chrome.runtime.onMessage.addListener(function (request) {
  switch (request.action) {
    case "updateLocalStorage":
      localStorage.setItem(LOCAL_STORAGE_SHORTCUTS_KEY, request.value);
      location.reload();
      break;
  }
});
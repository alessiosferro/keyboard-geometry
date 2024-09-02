import waitForDOMLoading from "../src/utils/wait-for-dom-loading";
import expandTools from "./utils/expand-tools";
import listenKeydownEvents from "./utils/listen-keydown-events";
import flexCategoryPanel from "./utils/flex-category-panel";
import updateToolButtonStyle from "./utils/update-tool-button-style";
import appendShortcutsText from "./utils/append-shortcuts-text";
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
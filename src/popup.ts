import waitForDOMLoading from "./utils/functions/wait-for-dom-loading";
import expandTools from "./utils/functions/expand-tools";
import {LOCAL_STORAGE_LANGUAGE_KEY} from "./utils/constants/local-storage-shortcuts-key";
import listenKeydownEvents from "./utils/functions/listen-keydown-events";
import updateCategoryPanelStyle from "./utils/functions/update-category-panel-style";
import updateToolButtonStyle from "./utils/functions/update-tool-button-style";
import appendShortcutsText from "./utils/functions/append-shortcuts-text";
import drawSearchFilter from "./utils/functions/draw-search-filter";
import getShortcutsLanguageKey from "./utils/functions/get-shortcuts-language-key";
import getShortcuts from "./utils/functions/get-shortcuts";


waitForDOMLoading(() => {
  console.log("Geogebra Shortcuts System v1.0");

  if (!localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)) {
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, "en");
  }

  const shortcutsStorageKey = getShortcutsLanguageKey();

  if (!localStorage.getItem(shortcutsStorageKey)) {
    localStorage.setItem(shortcutsStorageKey, JSON.stringify(getShortcuts()));
  }

  expandTools();
  listenKeydownEvents();
  updateCategoryPanelStyle();
  updateToolButtonStyle();
  appendShortcutsText();
  drawSearchFilter();

  chrome.runtime.onMessage.addListener(function (request: { action: string, value: string }, response, sendResponse) {
    switch (request.action) {
      case "updateLocalStorage": {
        localStorage.setItem(getShortcutsLanguageKey(), request.value);
        appendShortcutsText({reset: true});
        break;
      }

      case "changeLanguage": {
        localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, request.value);
        appendShortcutsText({reset: true});
        drawSearchFilter();
        break;
      }
    }

    sendResponse({success: true});
  });
});
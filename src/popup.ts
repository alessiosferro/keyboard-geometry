import waitForDOMLoading from "./utils/functions/wait-for-dom-loading";
import expandTools from "./utils/functions/expand-tools";
import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_SHORTCUTS_KEY_EN,
  LOCAL_STORAGE_SHORTCUTS_KEY_IT
} from "./utils/constants/local-storage-shortcuts-key";
import listenKeydownEvents from "./utils/functions/listen-keydown-events";
import updateCategoryPanelStyle from "./utils/functions/update-category-panel-style";
import updateToolButtonStyle from "./utils/functions/update-tool-button-style";
import appendShortcutsText from "./utils/functions/append-shortcuts-text";
import drawSearchFilter from "./utils/functions/draw-search-filter";
import shortcuts from "./utils/constants/shortcuts";

if (!localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)) {
  localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, "en");
}

const languageKey = (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as "it" | "en") || "en";

export const SHORTCUTS = {
  it: LOCAL_STORAGE_SHORTCUTS_KEY_IT,
  en: LOCAL_STORAGE_SHORTCUTS_KEY_EN,
}[languageKey];

if (!localStorage.getItem(SHORTCUTS)) {
  localStorage.setItem(SHORTCUTS, JSON.stringify(shortcuts));
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
      localStorage.setItem(SHORTCUTS, request.value);
      location.reload();
      break;
    }

    case "changeLanguage": {
      localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, request.value);
      location.reload();
      break;
    }
  }
});
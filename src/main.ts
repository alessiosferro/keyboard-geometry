import waitForDOMLoading from "./utils/wait-for-dom-loading";
import expandTools from "./features/expand-tools";
import listenKeydownEvents from "./features/listen-keydown-events";
import appendShortcutsText from "./features/append-shortcuts-text";
import updateCategoryPanelStyle from "./features/flex-category-panel";
import updateToolButtonStyle from "./features/update-tool-button-style";

waitForDOMLoading(() => {
  console.log("Geogebra Shurtcuts Extension v0.1");
  expandTools();
  listenKeydownEvents();

  updateCategoryPanelStyle();
  updateToolButtonStyle();
  appendShortcutsText();
});



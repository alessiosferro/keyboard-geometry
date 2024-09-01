import App from "./App";
import {createRoot} from 'react-dom/client';
import React from 'react';
import waitForDOMLoading from "./utils/wait-for-dom-loading";
import expandTools from "./features/expand-tools";
import listenKeydownEvents from "./features/listen-keydown-events";
import updateCategoryPanelStyle from "./features/flex-category-panel";
import updateToolButtonStyle from "./features/update-tool-button-style";
import appendShortcutsText from "./features/append-shortcuts-text";

waitForDOMLoading(() => {
  console.log("Geogebra Shurtcuts Extension v0.1");
  expandTools();
  listenKeydownEvents();
  updateCategoryPanelStyle();
  updateToolButtonStyle();
  appendShortcutsText();
});

const root = createRoot(document.getElementById('root')!);
root.render(<App/>);
import waitForDOMLoading from "./utils/wait-for-dom-loading";
import appendShortcutsText from "./features/append-shortcuts-text";
import expandTools from "./features/expand-tools";
import listenKeydownEvents from "./features/listen-keydown-events";
import flexCategoryPanel from "./features/flex-category-panel";
import updateToolButtonStyle from "./features/update-tool-button-style";
import {createRoot} from "react-dom/client";
import App from "./App";
import React from 'react';

console.log("Geogebra Shortcuts Extension v1.0");

waitForDOMLoading(() => {
  expandTools();
  listenKeydownEvents();
  flexCategoryPanel();
  updateToolButtonStyle();
  appendShortcutsText();
});

const root = createRoot(document.getElementById('root')!);
root.render(<App/>);
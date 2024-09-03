import {createRoot} from "react-dom/client";
import SearchFilter from "../../components/SearchFilter";
import React from 'react';
import INTERVAL_DURATION from "../constants/interval-duration";

export default function drawSearchFilter() {
  let isFirstInterval = true;

  const rootDiv = document.createElement("div");
  rootDiv.id = "search-filter-extension";

  const root = createRoot(rootDiv);

  let panel: HTMLDivElement | null = null;

  const intervalId = setInterval(() => {
    panel = document.querySelector<HTMLDivElement>("#ggbApplet .undoRedoPanel");

    if (!isFirstInterval && !!panel) {
      clearInterval(intervalId);

      panel?.appendChild(rootDiv);

      root.render(<SearchFilter/>);
    }

    isFirstInterval = false;
  }, INTERVAL_DURATION);

  return () => {
    root.unmount();
    panel?.querySelector('#search-filter-extension')?.remove();
  }
}


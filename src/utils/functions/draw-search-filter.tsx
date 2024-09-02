import {createRoot} from "react-dom/client";
import SearchFilter from "../../components/SearchFilter";
import React from 'react';
import INTERVAL_DURATION from "../constants/interval-duration";

export default function drawSearchFilter() {
  let isFirstInterval = true;

  const intervalId = setInterval(() => {
    const panel = document.querySelector<HTMLDivElement>("#ggbApplet .undoRedoPanel");

    if (!isFirstInterval && !!panel) {
      clearInterval(intervalId);

      const rootDiv = document.createElement("div");
      rootDiv.id = "geogebra-extension-root";
      panel?.appendChild(rootDiv);

      const root = createRoot(rootDiv);
      root.render(<SearchFilter/>);
    }

    isFirstInterval = false;
  }, INTERVAL_DURATION);
}


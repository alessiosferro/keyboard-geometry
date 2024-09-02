import {createRoot} from "react-dom/client";
import App from "./App";
import React from 'react';
import {LOCAL_STORAGE_LANGUAGE_KEY} from "./utils/constants/local-storage-shortcuts-key";

if (!localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)) {
  localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, "en");
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App/>);
}

import waitForDOMLoading from "./utils/wait-for-dom-loading";
import expandTools from "./features/expand-tools";

waitForDOMLoading(() => {
  expandTools();
});



import getShowMoreItemsButton from "./get-show-more-items-button";

export default function expandTools() {
  let showMoreItemsButton = getShowMoreItemsButton();

  while (showMoreItemsButton) {
    showMoreItemsButton.click();
    showMoreItemsButton = getShowMoreItemsButton();
  }
}

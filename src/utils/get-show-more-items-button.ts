const translations = ['more', 'altri'];

export default function getShowMoreItemsButton() {
  const allToolsPanelButtons = document.querySelectorAll<HTMLButtonElement>("div.toolsPanel button.materialTextButton");

  return allToolsPanelButtons.length > 0 ? Array.from(allToolsPanelButtons)
    .find(item => translations.includes(item.textContent.toLowerCase())) : null;

}
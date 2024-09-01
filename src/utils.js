export function expandTools() {
    let showMoreItemsButton = getShowMoreItemsButton();

    while (showMoreItemsButton) {
        showMoreItemsButton.click();
        showMoreItemsButton = getShowMoreItemsButton();
    }
}

export function getShowMoreItemsButton() {
    const allToolsPanelButtons = document.querySelectorAll("div.toolsPanel button.materialTextButton");

    return allToolsPanelButtons.length > 0 ? Array.from(allToolsPanelButtons)
        .find(item => ['more', 'altri'].includes(item.textContent.toLowerCase())) : null;

}

export function waitForDOMLoading(callback) {
    const intervalId = window.setInterval(() => {
        const app = document.querySelector("#ggbApplet .toolsPanel");

        if (app) {
            window.clearInterval(intervalId);
            callback();
        }
    }, 50);
}
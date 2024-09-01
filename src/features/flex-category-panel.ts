export default function flexCategoryPanel() {
  const intervalId = setInterval(() => {
    const categoryPanels = document.querySelectorAll<HTMLElement>('.categoryPanel');

    categoryPanels.forEach(panel => {
      if (panel.style.display === 'flex') {
        return clearInterval(intervalId);
      }

      panel.style.display = 'flex';
      panel.style.gap = '15px 10px';
      panel.style.flexWrap = 'wrap';
      panel.style.padding = '10px 0 15px';
    });
  }, 100);

}
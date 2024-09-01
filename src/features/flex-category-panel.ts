export default function flexCategoryPanel() {
  const intervalId = setInterval(() => {
    const categoryPanels = Array.from(document.querySelectorAll<HTMLElement>('.categoryPanel'));

    categoryPanels.forEach(panel => {
      panel.style.display = 'flex';
      panel.style.gap = '15px 10px';
      panel.style.flexWrap = 'wrap';
      panel.style.padding = '10px 0 15px';
    });

    if (categoryPanels.every(panel => panel.style.display === 'flex')) {
      clearInterval(intervalId);
    }
  }, 100);

}
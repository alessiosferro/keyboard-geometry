// const shortcuts = {
//   'Control+s': () => {
//     console.log('Salvataggio...');
//     // Evita il comportamento predefinito (come l'apertura della finestra di salvataggio del browser)
//     event.preventDefault();
//   },
//   'Alt+Shift+A': () => {
//     console.log('Shortcut Alt+Shift+A premuto');
//   },
//   // Aggiungi altre shortcut qui...
// };
//
// document.addEventListener('keydown', (event) => {
//   // Costruisci la chiave della combinazione, es: 'Control+s'
//   let key = [];
//   if (event.ctrlKey) key.push('Control');
//   if (event.altKey) key.push('Alt');
//   if (event.shiftKey) key.push('Shift');
//   key.push(event.key.toLowerCase()); // Usa il tasto premuto in minuscolo per uniformità
//
//   const shortcut = key.join('+');
//
//   // Verifica se esiste una shortcut corrispondente
//   if (shortcuts[shortcut]) {
//     shortcuts[shortcut]();
//   }
// });
import isAppleDevice from "../functions/is-apple-device";

export default {
  it: {
    button: {
      abort: "Annulla",
      confirm: "Conferma"
    },
    copy: {
      title: "Geometria da Tastiera",
      welcome: "Benvenuto in Geometria da Tastiera!",
      description: `Cambiare una scorciatoia è molto semplice: seleziona un campo di input e premi
la combinazione di tasti che preferisci! Puoi anche utilizzare tasti speciali come
“⇧ Shift”, “${isAppleDevice() ? "⌃" : ""}Control” e ${isAppleDevice() ? "⌘ Command" : "Alt"}.
Dopo aver digitato la combinazione che hai scelto, basta cliccare fuori dal campo di
input e la scorciatoia verrà salvata automaticamente!`,
      searchBarDescription: `Puoi utilizzare la combinazione ${isAppleDevice() ? "⌘ Command + K" : "Alt + ⇧ Shift + K"}
per selezionare la barra di ricerca, inoltre puoi navigare tra le opzioni della barra di ricerca
semplicemente premendo i pulsanti freccia su e giù. Puoi premere invio mentre stai scrivendo sulla barra di ricerca
per selezionare il primo strumento nella lista oppure puoi scorrere tra gli strumenti e premere invio su quello che preferisci.`
    },
    label: {
      selectLanguage: "Seleziona lingua",
      search: "Ricerca",
      searchTool: "Cerca strumento...",
      searchByShortcut: "Cerca per scorciatoia",
      selectTool: () => `Seleziona strumento (${isAppleDevice() ? "⌘ Command + K" : "Alt + ⇧ Shift + K"})`
    },
    language: {
      italian: "Italiano (it)",
      english: "Inglese (en)"
    },
    duplicateShortcutTitle: "Scorciatoia duplicata",
    noResultsFound: "Nessun risultato trovato",
    duplicateShortcut: (duplicateName: string) => duplicateName ? `La scorciatoia inserita è già assegnata a "${duplicateName}". Sei sicuro di voler reimpostare la scorciatoia per "${duplicateName}"?` : ""
  },
  en: {
    button: {
      abort: "Abort",
      confirm: "Confirm"
    },
    copy: {
      title: "Keyboard Geometry",
      welcome: "Welcome to the Keyboard Geometry extension",
      description: `Changing a shortcut is very simple: select an input and press the
combination of keys that you like! You can use also use special keys such as
⇧ Shift, ${isAppleDevice() ? "⌃" : ""} Control e ${isAppleDevice() ? "⌘ Command" : "Alt"}.
After you type the combination of your choice, simply click away from the input and the shortcut
will be saved automagically! Also the website will reflect your changes by reloading automatically.`,
      searchBarDescription: `You can use the combination ${isAppleDevice() ? "⌘ Command + K" : "Alt + ⇧ Shift + K"}
to select the search bar, and you can also navigate through the options in the search bar
by simply pressing the up and down arrow keys. You can press enter while typing in the search bar
to select the first tool in the list, or you can scroll through the tools and press enter on the one you prefer.`
    },
    label: {
      selectLanguage: "Select language",
      search: "Search",
      searchTool: "Search tool...",
      searchByShortcut: "Search by shortcut",
      selectTool: () => `Select tool (${isAppleDevice() ? "⌘ Command + K" : "Alt + ⇧ Shift + K"})`
    },
    language: {
      italian: "Italian (it)",
      english: "English (en)"
    },
    duplicateShortcutTitle: "Duplicate shortcut found",
    noResultsFound: "No results found",
    duplicateShortcut: (duplicateName: string) => `The shortcut entered is already assigned to "${duplicateName}". Are you sure you want to reset
          the "${duplicateName}" shortcut?`
  }
}
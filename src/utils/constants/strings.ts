import isAppleDevice from "../functions/is-apple-device";

export default {
  it: {
    button: {
      abort: "Annulla",
      confirm: "Conferma"
    },
    copy: {
      title: "Scorciatoie Geogebra (Edizione Geometria)",
      welcome: "Benvenuto nell'estensione Scorciatoie di Geogebra (Edizione Geometria)!",
      description: "Cambiare una scorciatoia è molto semplice: seleziona un campo di input e premi la combinazione di tasti che preferisci! Puoi anche utilizzare tasti speciali come “Shift”, “Control”, “Meta” (il tasto “Command” su Mac) e “Alt” (o “Option” su Mac). Dopo aver digitato la combinazione che hai scelto, basta cliccare fuori dal campo di input e la scorciatoia verrà salvata automaticamente!"
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
      title: "Geogebra Shortcuts (Geometry Edition)",
      welcome: "Welcome to the Geogebra Shortcuts extension (Geometry Edition)!",
      description: "Changing a shortcut is very simple: select an input and press the combination of keys that you like! You can use also use special keys such as \"Shift\", \"Control\", \"Meta\" (the \"Command\" key on Mac) and \"Alt\" (or \"Option\" on Mac). After you type the combination of your choice, simply click away from the input and the shortcut will be saved automagically! Also the website will reflect your changes by reloading automatically."
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
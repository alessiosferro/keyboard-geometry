import {Tool} from "./tool-map";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./local-storage-shortcuts-key";

const storedShortcuts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY)!);

const getLabelWithShortcut = (toolName: Tool) => {
  const storedShortcutPair = Object.entries(storedShortcuts).find(([name]) => toolName === name);
  const [, shortcut] = storedShortcutPair || [];
  return shortcut ? `${toolName} (${shortcut})` : toolName;
}

const toolAutocompleteOptions = [
  {
    "value": "mode0",
    "label": getLabelWithShortcut("Muovi")
  },
  {
    "value": "mode1",
    "label": getLabelWithShortcut("Punto")
  },
  {
    "value": "mode15",
    "label": getLabelWithShortcut("Segmento")
  },
  {
    "value": "mode2",
    "label": getLabelWithShortcut("Retta")
  },
  {
    "value": "mode16",
    "label": getLabelWithShortcut("Poligono")
  },
  {
    "value": "mode10",
    "label": getLabelWithShortcut("Circonferenza - centro e punto")
  },
  {
    "value": "mode77",
    "label": getLabelWithShortcut("Seleziona oggetti")
  },
  {
    "value": "mode28",
    "label": getLabelWithShortcut("Mostra / Nascondi etichetta")
  },
  {
    "value": "mode27",
    "label": getLabelWithShortcut("Mostra / Nascondi oggetto")
  },
  {
    "value": "mode6",
    "label": getLabelWithShortcut("Elimina")
  },
  {
    "value": "mode40",
    "label": getLabelWithShortcut("Muovi la vista Grafici")
  },
  {
    "value": "mode35",
    "label": getLabelWithShortcut("Copia stile visuale")
  },
  {
    "value": "mode19",
    "label": getLabelWithShortcut("Punto medio o centro")
  },
  {
    "value": "mode4",
    "label": getLabelWithShortcut("Retta perpendicolare")
  },
  {
    "value": "mode8",
    "label": getLabelWithShortcut("Asse di un segmento")
  },
  {
    "value": "mode3",
    "label": getLabelWithShortcut("Retta parallela")
  },
  {
    "value": "mode9",
    "label": getLabelWithShortcut("Bisettrice")
  },
  {
    "value": "mode13",
    "label": getLabelWithShortcut("Tangenti")
  },
  {
    "value": "mode47",
    "label": getLabelWithShortcut("Luogo")
  },
  {
    "value": "mode36",
    "label": getLabelWithShortcut("Angolo")
  },
  {
    "value": "mode46",
    "label": getLabelWithShortcut("Angolo di data misura")
  },
  {
    "value": "mode38",
    "label": getLabelWithShortcut("Distanza o lunghezza")
  },
  {
    "value": "mode49",
    "label": getLabelWithShortcut("Area")
  },
  {
    "value": "mode25",
    "label": getLabelWithShortcut("Slider")
  },
  {
    "value": "mode50",
    "label": getLabelWithShortcut("Pendenza")
  },
  {
    "value": "mode5",
    "label": getLabelWithShortcut("Intersezione")
  },
  {
    "value": "mode501",
    "label": getLabelWithShortcut("Punto su oggetto")
  },
  {
    "value": "mode67",
    "label": getLabelWithShortcut("Vincola / Svincola punto")
  },
  {
    "value": "mode75",
    "label": getLabelWithShortcut("Estremo")
  },
  {
    "value": "mode76",
    "label": getLabelWithShortcut("Radici")
  },
  {
    "value": "mode45",
    "label": getLabelWithShortcut("Segmento - lunghezza fissa")
  },
  {
    "value": "mode18",
    "label": getLabelWithShortcut("Semiretta")
  },
  {
    "value": "mode7",
    "label": getLabelWithShortcut("Vettore")
  },
  {
    "value": "mode37",
    "label": getLabelWithShortcut("Vettore - dati un punto e la direzione")
  },
  {
    "value": "mode44",
    "label": getLabelWithShortcut("Polare o diametro")
  },
  {
    "value": "mode65",
    "label": getLabelWithShortcut("Spezzata aperta")
  },
  {
    "value": "mode58",
    "label": getLabelWithShortcut("Retta di regressione")
  },
  {
    "value": "mode34",
    "label": getLabelWithShortcut("Circonferenza - centro e raggio")
  },
  {
    "value": "mode53",
    "label": getLabelWithShortcut("Compasso")
  },
  {
    "value": "mode24",
    "label": getLabelWithShortcut("Semicirconferenza")
  },
  {
    "value": "mode21",
    "label": getLabelWithShortcut("Settore circolare")
  },
  {
    "value": "mode20",
    "label": getLabelWithShortcut("Arco di circonferenza")
  },
  {
    "value": "mode11",
    "label": getLabelWithShortcut("Circonferenza - tre punti")
  },
  {
    "value": "mode23",
    "label": getLabelWithShortcut("Settore circolare - tre punti")
  },
  {
    "value": "mode22",
    "label": getLabelWithShortcut("Arco di circonferenza - tre punti")
  },
  {
    "value": "mode51",
    "label": getLabelWithShortcut("Poligono regolare")
  },
  {
    "value": "mode70",
    "label": getLabelWithShortcut("Poligono vettore")
  },
  {
    "value": "mode64",
    "label": getLabelWithShortcut("Poligono rigido")
  },
  {
    "value": "mode55",
    "label": getLabelWithShortcut("Ellisse")
  },
  {
    "value": "mode12",
    "label": getLabelWithShortcut("Conica - cinque punti")
  },
  {
    "value": "mode57",
    "label": getLabelWithShortcut("Parabola")
  },
  {
    "value": "mode56",
    "label": getLabelWithShortcut("Iperbole")
  },
  {
    "value": "mode31",
    "label": getLabelWithShortcut("Traslazione")
  },
  {
    "value": "mode32",
    "label": getLabelWithShortcut("Rotazione")
  },
  {
    "value": "mode30",
    "label": getLabelWithShortcut("Simmetria assiale")
  },
  {
    "value": "mode29",
    "label": getLabelWithShortcut("Simmetria centrale")
  },
  {
    "value": "mode33",
    "label": getLabelWithShortcut("Omotetia")
  },
  {
    "value": "mode54",
    "label": getLabelWithShortcut("Inversione circolare")
  },
  {
    "value": "mode26",
    "label": getLabelWithShortcut("Immagine")
  },
  {
    "value": "mode17",
    "label": getLabelWithShortcut("Testo")
  },
  {
    "value": "mode62",
    "label": getLabelWithShortcut("Penna")
  },
  {
    "value": "mode73",
    "label": getLabelWithShortcut("Grafico a mano libera")
  },
  {
    "value": "mode14",
    "label": getLabelWithShortcut("Relazione")
  },
  {
    "value": "mode60",
    "label": getLabelWithShortcut("Pulsante")
  },
  {
    "value": "mode52",
    "label": getLabelWithShortcut("Casella di controllo")
  },
  {
    "value": "mode61",
    "label": getLabelWithShortcut("Campo di inserimento")
  }
]

export default toolAutocompleteOptions;

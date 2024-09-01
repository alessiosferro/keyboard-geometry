import selectTool from "../features/select-tool";
import {Tool} from "./tool-map";

const actionNames: Tool[] = [
  "Muovi",
  "Punto",
  "Segmento",
  "Retta",
  "Poligono",
  "Circonferenza - centro e punto",
  "Seleziona oggetti",
  "Mostra / Nascondi etichetta",
  "Mostra / Nascondi oggetto",
  "Elimina",
  "Muovi la vista Grafici",
  "Copia stile visuale",
  "Punto medio o centro",
  "Retta perpendicolare",
  "Asse di un segmento",
  "Retta parallela",
  "Bisettrice",
  "Tangenti",
  "Luogo",
  "Angolo",
  "Angolo di data misura",
  "Distanza o lunghezza",
  "Area",
  "Slider",
  "Pendenza",
  "Intersezione",
  "Punto su oggetto",
  "Vincola / Svincola punto",
  "Estremo",
  "Radici",
  "Segmento - lunghezza fissa",
  "Semiretta",
  "Vettore",
  "Vettore - dati un punto e la direzione",
  "Polare o diametro",
  "Spezzata aperta",
  "Retta di regressione",
  "Circonferenza - centro e raggio",
  "Compasso",
  "Semicirconferenza",
  "Settore circolare",
  "Arco di circonferenza",
  "Circonferenza - tre punti",
  "Settore circolare - tre punti",
  "Arco di circonferenza - tre punti",
  "Poligono regolare",
  "Poligono vettore",
  "Poligono rigido",
  "Ellisse",
  "Conica - cinque punti",
  "Parabola",
  "Iperbole",
  "Traslazione",
  "Rotazione",
  "Simmetria assiale",
  "Simmetria centrale",
  "Omotetia",
  "Inversione circolare",
  "Immagine",
  "Testo",
  "Penna",
  "Grafico a mano libera",
  "Relazione",
  "Pulsante",
  "Casella di controllo",
  "Campo di inserimento"
];

const actions = actionNames.reduce((acc, action) => ({
  ...acc,
  [action]: () => selectTool(action)
}), {} as Record<Tool, () => void>);

export default actions;
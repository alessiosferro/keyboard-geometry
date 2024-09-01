import selectTool from "../features/select-tool";
import {Tool} from "./tool-map";

const shortcuts: Record<string, { toolName: Tool, callback: () => void }> = {
  'Shift+m': {
    toolName: "Muovi",
    callback: () => selectTool("Muovi")
  },
  'Shift+p': {
    toolName: "Punto",
    callback: () => selectTool("Punto")
  },
  'Shift+s': {
    toolName: "Segmento",
    callback: () => selectTool("Segmento")
  },
  'Shift+r': {
    toolName: "Retta",
    callback: () => selectTool("Retta")
  },
  'Shift+o': {
    toolName: "Poligono",
    callback: () => selectTool("Poligono")
  },
  'Shift+c': {
    toolName: "Circonferenza - centro e punto",
    callback: () => selectTool("Circonferenza - centro e punto")
  },
  'Shift+e': {
    toolName: "Seleziona oggetti",
    callback: () => selectTool("Seleziona oggetti")
  },
  'Shift+f': {
    toolName: "Mostra / Nascondi etichetta",
    callback: () => selectTool("Mostra / Nascondi etichetta")
  },
  'Shift+g': {
    toolName: "Mostra / Nascondi oggetto",
    callback: () => selectTool("Mostra / Nascondi oggetto")
  },
  'Shift+h': {
    toolName: "Elimina",
    callback: () => selectTool("Elimina")
  },
  'Shift+i': {
    toolName: "Muovi la vista Grafici",
    callback: () => selectTool("Muovi la vista Grafici")
  },
  'Shift+j': {
    toolName: "Copia stile visuale",
    callback: () => selectTool("Copia stile visuale")
  },
  'Shift+k': {
    toolName: "Punto medio o centro",
    callback: () => selectTool("Punto medio o centro")
  },
  'Shift+l': {
    toolName: "Retta perpendicolare",
    callback: () => selectTool("Retta perpendicolare")
  },
  'Shift+z': {
    toolName: "Asse di un segmento",
    callback: () => selectTool("Asse di un segmento")
  },
  'Shift+x': {
    toolName: "Retta parallela",
    callback: () => selectTool("Retta parallela")
  },
  'Shift+y': {
    toolName: "Bisettrice",
    callback: () => selectTool("Bisettrice")
  },
  'Shift+u': {
    toolName: "Tangenti",
    callback: () => selectTool("Tangenti")
  },
  'Shift+v': {
    toolName: "Luogo",
    callback: () => selectTool("Luogo")
  },
  'Shift+w': {
    toolName: "Angolo",
    callback: () => selectTool("Angolo")
  },
  'Shift+q': {
    toolName: "Angolo di data misura",
    callback: () => selectTool("Angolo di data misura")
  },
  'Shift+1': {
    toolName: "Distanza o lunghezza",
    callback: () => selectTool("Distanza o lunghezza")
  },
  'Shift+2': {
    toolName: "Area",
    callback: () => selectTool("Area")
  },
  'Shift+3': {
    toolName: "Slider",
    callback: () => selectTool("Slider")
  },
  'Shift+4': {
    toolName: "Pendenza",
    callback: () => selectTool("Pendenza")
  },
  'Shift+5': {
    toolName: "Intersezione",
    callback: () => selectTool("Intersezione")
  },
  'Shift+6': {
    toolName: "Punto su oggetto",
    callback: () => selectTool("Punto su oggetto")
  },
  'Shift+7': {
    toolName: "Vincola / Svincola punto",
    callback: () => selectTool("Vincola / Svincola punto")
  },
  'Shift+8': {
    toolName: "Estremo",
    callback: () => selectTool("Estremo")
  },
  'Shift+9': {
    toolName: "Radici",
    callback: () => selectTool("Radici")
  },
  'Shift+0': {
    toolName: "Segmento - lunghezza fissa",
    callback: () => selectTool("Segmento - lunghezza fissa")
  },
  'Alt+m': {
    toolName: "Semiretta",
    callback: () => selectTool("Semiretta")
  },
  'Alt+p': {
    toolName: "Vettore",
    callback: () => selectTool("Vettore")
  },
  'Alt+s': {
    toolName: "Vettore - dati un punto e la direzione",
    callback: () => selectTool("Vettore - dati un punto e la direzione")
  },
  'Alt+r': {
    toolName: "Polare o diametro",
    callback: () => selectTool("Polare o diametro")
  },
  'Alt+o': {
    toolName: "Spezzata aperta",
    callback: () => selectTool("Spezzata aperta")
  },
  'Alt+c': {
    toolName: "Retta di regressione",
    callback: () => selectTool("Retta di regressione")
  },
  'Alt+e': {
    toolName: "Circonferenza - centro e raggio",
    callback: () => selectTool("Circonferenza - centro e raggio")
  },
  'Alt+f': {
    toolName: "Compasso",
    callback: () => selectTool("Compasso")
  },
  'Alt+g': {
    toolName: "Semicirconferenza",
    callback: () => selectTool("Semicirconferenza")
  },
  'Alt+h': {
    toolName: "Settore circolare",
    callback: () => selectTool("Settore circolare")
  },
  'Alt+i': {
    toolName: "Arco di circonferenza",
    callback: () => selectTool("Arco di circonferenza")
  },
  'Alt+j': {
    toolName: "Circonferenza - tre punti",
    callback: () => selectTool("Circonferenza - tre punti")
  },
  'Alt+k': {
    toolName: "Settore circolare - tre punti",
    callback: () => selectTool("Settore circolare - tre punti")
  },
  'Alt+l': {
    toolName: "Arco di circonferenza - tre punti",
    callback: () => selectTool("Arco di circonferenza - tre punti")
  },
  'Alt+z': {
    toolName: "Poligono regolare",
    callback: () => selectTool("Poligono regolare")
  },
  'Alt+x': {
    toolName: "Poligono vettore",
    callback: () => selectTool("Poligono vettore")
  },
  'Alt+y': {
    toolName: "Poligono rigido",
    callback: () => selectTool("Poligono rigido")
  },
  'Alt+u': {
    toolName: "Ellisse",
    callback: () => selectTool("Ellisse")
  },
  'Alt+1': {
    toolName: "Conica - cinque punti",
    callback: () => selectTool("Conica - cinque punti")
  },
  'Alt+2': {
    toolName: "Parabola",
    callback: () => selectTool("Parabola")
  },
  'Alt+3': {
    toolName: "Iperbole",
    callback: () => selectTool("Iperbole")
  },
  'Alt+4': {
    toolName: "Traslazione",
    callback: () => selectTool("Traslazione")
  },
  'Alt+5': {
    toolName: "Rotazione",
    callback: () => selectTool("Rotazione")
  },
  'Alt+6': {
    toolName: "Simmetria assiale",
    callback: () => selectTool("Simmetria assiale")
  },
  'Alt+7': {
    toolName: "Simmetria centrale",
    callback: () => selectTool("Simmetria centrale")
  },
  'Alt+8': {
    toolName: "Omotetia",
    callback: () => selectTool("Omotetia")
  },
  'Alt+9': {
    toolName: "Inversione circolare",
    callback: () => selectTool("Inversione circolare")
  },
  'Alt+0': {
    toolName: "Immagine",
    callback: () => selectTool("Immagine")
  },
  'Alt+Shift+m': {
    toolName: "Testo",
    callback: () => selectTool("Testo")
  },
  'Alt+Shift+p': {
    toolName: "Penna",
    callback: () => selectTool("Penna")
  },
  'Alt+Shift+s': {
    toolName: "Grafico a mano libera",
    callback: () => selectTool("Grafico a mano libera")
  },
  'Alt+Shift+r': {
    toolName: "Relazione",
    callback: () => selectTool("Relazione")
  },
  'Alt+Shift+b': {
    toolName: "Pulsante",
    callback: () => selectTool("Pulsante")
  },
  'Alt+Shift+c': {
    toolName: "Casella di controllo",
    callback: () => selectTool("Casella di controllo")
  },
  'Alt+Shift+f': {
    toolName: "Campo di inserimento",
    callback: () => selectTool("Campo di inserimento")
  }
};

export default shortcuts;